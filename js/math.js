MathJax.Hub.Config({
            tex2jax: {
                inlineMath: [ ["$","$"], ["\\(","\\)"] ],
                skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
                processEscapes: true
            }
        });
MathJax.Hub.Queue(function() {
    var all = MathJax.Hub.getAllJax();
    for (var i = 0; i < all.length; ++i)
        all[i].SourceElement().parentNode.className += ' has-jax';
});