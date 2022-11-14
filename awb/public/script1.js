function section1(){
    document.querySelector("#stylebot").innerHTML="";
}
function section2(){
    document.querySelector("#stylebot").innerHTML="";
}
function section3(){
    document.querySelector("#stylebot").innerHTML=
 `
<style>
#stylebot div{
}
#stylebot div div{
    width: 20%;
    text-align: center;
    display: inline;
    font-size: 20px;
    padding:20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin:30px;
}
</style>
<h1></h1>
            
<div>
    <div>align-content</div>
    <div>align-items</div>
    <div>align-self</div>
    <div>all</div>
    <div>animation</div>
    <br>
    <div>backface-visibility</div>
    <div>background</div>
    <div>border</div>
    <div>bottom</div>
    <div>box-decoration-break</div>
    <div>box-shadow</div>
    <div>box-sizing</div>
</div>
 `;
}




//css propetties
// var x = document.querySelector('h1');
/*
var css = {

    alignContent:function(value){
        x.style.alignContent=value;
    },
    alignItems:function(){
        x.style.alignItems=value;
    },
    alignSelf:function(){
        x.style.alignSelf=value;
    },
    all:function(){
        x.style.all=value;
    },
    animation:function(){
        x.style.animation=value;
    },
    backfaceVisibility:function(){
        x.style.backfaceVisibility=value;
    },
    background:function(){
        x.style.background=value;
    },
    border:function(){
        x.style.border=value;
    },
    bottom:function(){
        x.style.bottom=value;
    },
    boxDecorationBreak:function(){
        x.style.boxDecorationBreak=value;
    },
    boxShadow:function(){
        x.style.boxShadow=value;
    },
    boxSizing:function(){
        x.style.boxSizing=value;
    },
    captionSide:function(){
        x.style.captionSide=value;
    },
    caretColor:function(){
        x.style.caretColor=value;
    },
    clear:function(){
        x.style.clear=value;
    },
    clip:function(){
        x.style.clip=value;
    },
    clipPath:function(){
        x.style.clipPath=value;
    },
    color:function(){
        x.style.color=value;
    },
    columnCount:function(){
        x.style.columnCount=value;
    },
    columnFill:function(){
        x.style.columnFill=value;
    },
    columnGap:function(){
        x.style.columnGap=value;
    },
    columnRule:function(){
        x.style.columnRule=value;
    },
    columnSpan:function(){
        x.style.columnSpan=value;
    },
    columnWidth:function(){
        x.style.columnWidth=value;
    },
    columns:function(){
        x.style.columns=value;
    },
    content:function(){
        x.style.content=value;
    },
    counterIncrement:function(){
        x.style.counterIncrement=value;
    },
    counterReset:function(){},
    cursor:function(){
        x.style.counterReset=value;
    },
    direction:function(){
        x.style.direction=value;
    },
    display:function(){
        x.style.display=value;
    },
    emptyCells:function(){
        x.style.emptyCells=value;
    },
    filter:function(){
        x.style.filter=value;
    },
    flex:function(){
        x.style.flex=value;
    },
    float:function(){
        x.style.float=value;
    },
    font:function(){
        x.style.font=value;
    },
    gap:function(){
        x.style.gap=value;
    },
    grid:function(){
        x.style.grid=value;
    },
    hangingPunctuation:function(){
        x.style.background=value;
    },
    height:function(){
        x.style.background=value;
    },
    hyphens:function(){
        x.style.background=value;
    },
    isolation:function(){
        x.style.background=value;
    },
    justifyContent:function(){
        x.style.background=value;
    },
    left:function(){
        x.style.background=value;
    },
    letterSpacing:function(){
        x.style.background=value;
    },
    lineHeight:function(){
        x.style.background=value;
    },
    listStyle:function(){
        x.style.background=value;
    },
    listStyleImage:function(){
        x.style.background=value;
    },
    listStylePosition:function(){
        x.style.background=value;
    },
    listStyleType:function(){
        x.style.background=value;
    },
    margin:function(){
        x.style.background=value;
    },
    maxHeight:function(){
        x.style.background=value;
    },
    minWidth:function(){
        x.style.background=value;
    },
    mixBlendMode:function(){
        x.style.background=value;
    },
    objectFit:function(){
        x.style.background=value;
    },
    objectPosition:function(){
        x.style.background=value;
    },
    opacity:function(){
        x.style.background=value;
    },
    order:function(){
        x.style.background=value;
    },
    outline:function(){
        x.style.background=value;
    },
    overflow:function(){
        x.style.background=value;
    },
    padding:function(){
        x.style.background=value;
    },
    pageBreakAfter:function(){
        x.style.background=value;
    },
    pageBreakBefore:function(){
        x.style.background=value;
    },
    pageBreakInside:function(){
        x.style.background=value;
    },
    perspectiveOrigin:function(){
        x.style.background=value;
    },
    pointerEvents:function(){
        x.style.background=value;
    },
    position:function(){
        x.style.background=value;
    },
    quotes:function(){
        x.style.background=value;
    },
    resize:function(){
        x.style.background=value;
    },
    right:function(){
        x.style.background=value;
    },
    rowGap:function(){
        x.style.background=value;
    },
    scrollBehavior:function(){
        x.style.background=value;
    },
    tabSide:function(){
        x.style.background=value;
    },
    tableLayout:function(){
        x.style.background=value;
    },
    textAlign:function(){
        x.style.background=value;
    },
    textAlignLast:function(){
        x.style.background=value;
    },
    textDecoration:function(){
        x.style.background=value;
    },
    textDecorationColor:function(){
        x.style.background=value;
    },
    textDecorationLine:function(){
        x.style.background=value;
    },
    textDecorationStyle:function(){
        x.style.background=value;
    },
    textIndent:function(){
        x.style.background=value;
    },
    textJustify:function(){
        x.style.background=value;
    },
    textOverflow:function(){
        x.style.background=value;
    },
    textShadow:function(){
        x.style.background=value;
    },
    textTransform:function(){
        x.style.background=value;
    },
    top:function(){
        x.style.background=value;
    },
    transform:function(){
        x.style.background=value;
    },
    transformOrigin:function(){
        x.style.background=value;
    },
    transition:function(){
        x.style.background=value;
    },
    unicodeBidi:function(){
        x.style.background=value;
    },
    userSelect:function(){
        x.style.background=value;
    },
    verticalAlign:function(){
        x.style.background=value;
    },
    visibility:function(){
        x.style.background=value;
    },
    whiteSpace:function(){
        x.style.background=value;
    },
    width:function(){
        x.style.background=value;
    },
    wordBreak:function(){
        x.style.background=value;
    },
    wordSpacing:function(){
        x.style.background=value;
    },
    wordWrap:function(){
        x.style.background=value;
    },
    waitingMode:function(){
        x.style.background=value;
    },
    zIndex:function(){
        x.style.background=value;
    },
    alignContent:function(){}
}*/