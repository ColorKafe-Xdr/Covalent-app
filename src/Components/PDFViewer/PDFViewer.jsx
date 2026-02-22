import { createPluginRegistration } from '@embedpdf/core';
import { EmbedPDF } from '@embedpdf/core/react';
import { usePdfiumEngine } from '@embedpdf/engines/react';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import style from "./PDFViewer.module.css"
import { Cookies, useCookies } from 'react-cookie';
//import Annotations from '../../assets/Annotations.json'
// Import the essential plugins
import { Viewport, ViewportPluginPackage } from '@embedpdf/plugin-viewport/react';
import { Scroller, ScrollPluginPackage } from '@embedpdf/plugin-scroll/react';
import {
  DocumentContent,
  DocumentManagerPluginPackage,
} from '@embedpdf/plugin-document-manager/react';
import { RenderLayer, RenderPluginPackage } from '@embedpdf/plugin-render/react';
import { ZoomMode, ZoomPlugin, ZoomPluginPackage } from '@embedpdf/plugin-zoom';
import { useZoom, useZoomGesture } from '@embedpdf/plugin-zoom/react'
import { useAnnotation } from '@embedpdf/plugin-annotation/react';
import { ZoomGestureWrapper } from '@embedpdf/plugin-zoom/react';
import { InteractionManagerPluginPackage } from '@embedpdf/plugin-interaction-manager/react'
import { SelectionPluginPackage, useSelectionCapability } from '@embedpdf/plugin-selection/react'
import { HistoryPluginPackage } from '@embedpdf/plugin-history/react'
import { AnnotationPluginPackage } from '@embedpdf/plugin-annotation/react'
import { PagePointerProvider } from '@embedpdf/plugin-interaction-manager/react';
import { AnnotationLayer } from '@embedpdf/plugin-annotation/react';
import { SelectionLayer } from '@embedpdf/plugin-selection/react';
import { Divide, Hand } from 'lucide-react';
import annot from '../../assets/Annotations.json'
import indexes from '../../assets/indexes.json'
import { FaPenFancy, FaRegSquare, FaCopy, FaHighlighter, FaICursor, FaMousePointer } from "react-icons/fa";
import { FaMagnifyingGlassMinus, FaMagnifyingGlassPlus, FaTrashCan} from "react-icons/fa6";
import { IconContext } from 'react-icons';

function HandleUrl() {
  const UrlParams = new URLSearchParams(window.location.search)
  const id = UrlParams.get('id')
  console.log(id)
  if (id == null) return `https://raw.githubusercontent.com/ColorKafe-Xdr/Ionica-Archives/refs/heads/main/${indexes.objects[0].path}`
  return `https://raw.githubusercontent.com/ColorKafe-Xdr/Ionica-Archives/refs/heads/main/${indexes.objects[id].path}`
}

console.log(HandleUrl(), 'isso zzq')



// 1. Register the plugins you need
const plugins = [
  createPluginRegistration(DocumentManagerPluginPackage, {
    initialDocuments: [{ url: HandleUrl() }],
  }),
  createPluginRegistration(ViewportPluginPackage, {
    viewportGap: 5,
  }),
  createPluginRegistration(ScrollPluginPackage),
  createPluginRegistration(RenderPluginPackage),
  createPluginRegistration(ZoomPluginPackage, {
    defaultZoomLevel: ZoomMode.FitPage,
    maxZoom: 2,
    minZoom: 0.43,
  }),
  createPluginRegistration(InteractionManagerPluginPackage),
  createPluginRegistration(SelectionPluginPackage),
  createPluginRegistration(HistoryPluginPackage),
  createPluginRegistration(AnnotationPluginPackage),
  
];

function IconButton({onClick, icone, corQuandoAtivo, keyid}) {

  return(
    <div key={keyid}>
      <button onClick={onClick} >
        <IconContext.Provider value={{color: {corQuandoAtivo}}}>
          {icone}
        </IconContext.Provider>
      </button>
    </div>
  )
}

function Toolbar({getdocumentid}) {
    const {provides: zoom,zoomstate} = useZoom(getdocumentid)
    const {provides: annotation,annotationstate} = useAnnotation(getdocumentid)
    //const [cookies, setcookies, removecookies] = useCookies()
    let [actool, setactoolind] = useState('nada')
    
    const tools= [
      {tool: "highlight" , toolname: 'marcatexto', toolid: 0, icon: <FaHighlighter />, cor: 'verde'},
      {tool: 'ink', toolname: 'tinta', toolid: 1, icon: <FaPenFancy />, cor: 'verde'},
      {tool: 'square', toolname: 'retangulo', toolid: 2, icon: <FaRegSquare />, cor: 'verde'},
      {tool: 'freeText', toolname: 'text0', toolid: 3, icon: <FaICursor />, cor: 'verde' },
      {tool: null, toolname: 'cursor', toolid: 4, icon: <FaMousePointer />, cor: 'verde' },
    ]

    function HandleDelete() {
  const selection = annotation.getSelectedAnnotations()
  console.log(selection)
  selection.map((x) => annotation.deleteAnnotation(x.object.pageIndex, x.object.id))
    }

function teclapressionada(event) {
  console.log(event.keyCode)
  switch (event.keyCode) {
    case 8:
      HandleDelete()
  }
}

function CreateAnnot() {
  let selection = annotation.getSelectedAnnotations()
  console.log(selection)
  annotation.createAnnotation(1,selection )
}

useEffect(() => {
  document.querySelector('body').addEventListener('keydown', teclapressionada)

}, [])

function ToggleTools(toolid) {
  console.log('deu certo')
}





    return (
      <div className={style.toolbar}>
        <div>
          <button><Link to='/'>home</Link></button>
          <button onClick={zoom.zoomOut}>zoom-</button>
          <button onClick={zoom.zoomIn}>zoom+</button>
          <button onClick={() => zoom.requestZoom(ZoomMode.FitPage)}>resetar</button>
        </div>
        <div>
        {tools.map((x) => 
          <IconButton onClick={
            () => {annotation.setActiveTool(x.tool); setactoolind(x.toolname); ToggleTools(x.toolid)}
          }
          corQuandoAtivo={x.cor}
          icone={x.icon}
          keyid={x.toolid}
            ></IconButton>
        )}
        <button onClick={CreateAnnot}>carregar nota</button>
        </div>
          <button onClick={HandleDelete}>pagar+</button>
          <span>Ferramenta Ativa:</span>
          <span>a{actool}</span>
      </div>
    )
}



function SelectionMenu({documentId, rect, menuWrapperProps,selected,context, type}) {
  const {provides: annotation,annotationstate} = useAnnotation(documentId)
  const {provides: selectionapi, selectionapistate} = useSelectionCapability()
  
  function HandleDelete() {

    const selection = annotation.getSelectedAnnotations()
    console.log(selection)
    selection.map((x) => annotation.deleteAnnotation(x.object.pageIndex, x.object.id))
  }

  function HandleCopy() {
    selectionapi.forDocument(documentId).copyToClipboard()
  }


  if (selected == false) return null
  if (type == 'annotation') return (
    <div {...menuWrapperProps}>
      <div className={style.selectionmenu}> 
      <button onClick={HandleDelete}>cringe</button>
      </div>
    </div>
  )
  if (type == 'text') return (
        <div {...menuWrapperProps}>
      <div className={style.selectionmenu}> 
      <button onClick={HandleCopy()}>asa</button>
      </div>
    </div>
  )
}


 
export default function Page() {
  // 2. Initialize the engine with the React hook
  const { engine, isLoading } = usePdfiumEngine();
 
  if (isLoading || !engine) {
    return <div>...Carregando PDF...</div>;
  }
 
  // 3. Wrap your UI with the <EmbedPDF> provider
  return (
    <div className={style.container}>
      <EmbedPDF engine={engine} plugins={plugins}>
        {({ activeDocumentId }) =>
          activeDocumentId && (
            <DocumentContent documentId={activeDocumentId}>
              {({ isLoaded }) =>
                isLoaded && (
                  <div className={style.wrapper} draggable='false '>
                  <Toolbar />
                  <Viewport documentId={activeDocumentId} style={{ backgroundColor: '#001a34', }}>
                    <ZoomGestureWrapper documentId={activeDocumentId}>
                  <Scroller documentId={activeDocumentId} renderPage={({ width, height, pageIndex }) => (
                    <PagePointerProvider documentId={activeDocumentId} pageIndex={pageIndex}>
                    <RenderLayer documentId={activeDocumentId} pageIndex={pageIndex} style={{width, height, pointerEvents: 'none'}}/> 
                    <SelectionLayer documentId={activeDocumentId} pageIndex={pageIndex} selectionMenu={(props) => <SelectionMenu {...props} documentId={activeDocumentId} type='text'/>}/>
                    <AnnotationLayer documentId={activeDocumentId} pageIndex={pageIndex} selectionMenu={(props) => <SelectionMenu {...props} documentId={activeDocumentId} type='annotation'/>}/>

                    </PagePointerProvider>

                    )} />
                    </ZoomGestureWrapper>
                  </Viewport>
                  </div>
                )
              }
            </DocumentContent>
          )
        }
      </EmbedPDF>
    </div>
  );
};
