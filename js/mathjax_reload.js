/* Make MathJax re-layout a given element (and all its children) tcs27@cam.ac.uk*/
function reprocessMathJax(element) {
  if (typeof(MathJax) !== 'undefined' && element != undefined) {
    MathJax.Hub.Queue(["Reprocess",MathJax.Hub,element]);
  }
}

