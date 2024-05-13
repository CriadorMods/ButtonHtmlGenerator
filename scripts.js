document.getElementById('generate-btn').addEventListener('click', function() {
    var btnText = document.getElementById('btn-text').value;
    var btnColor = document.getElementById('btn-color').value;
    var btnHoverColor = document.getElementById('btn-hover-color').value;
    var btnSize = document.getElementById('btn-size').value;
    var borderWidth = document.getElementById('border-width').value + 'px';
    var borderStyle = document.getElementById('border-style').value;
    var borderColor = document.getElementById('border-color').value;
    var borderRadius = document.getElementById('border-radius').value + 'px';
    var fontFamily = document.getElementById('font-family').value;
    var fontWeight = document.getElementById('font-weight').value;
    var textColor = document.getElementById('text-color').value;
    var textAlign = document.getElementById('text-align').value;
    var textDecoration = document.getElementById('text-decoration').value;
    var textShadow = document.getElementById('text-shadow').value;
    var letterSpacing = document.getElementById('letter-spacing').value + 'px';
    var lineHeight = document.getElementById('line-height').value;
    var fontSize = document.getElementById('font-size').value + 'px';
    var textTransform = document.getElementById('text-transform').value;
    var cursor = document.getElementById('cursor').value;
    var boxShadow = document.getElementById('box-shadow').value;
    var padding = document.getElementById('padding').value + 'px';
    var margin = document.getElementById('margin').value + 'px';
    var opacity = document.getElementById('opacity').value;
    var transitionDuration = document.getElementById('transition-duration').value + 's';
    var position = document.getElementById('position').value;
    var top = document.getElementById('top').value + 'px';
    var href = document.getElementById('href').value; // New line to get href value

    var buttonPreview = document.getElementById('button-preview');
    buttonPreview.innerHTML = `
        <a href="${href}">
            <button id="preview-btn" style="
                background-color: ${btnColor};
                font-size: ${btnSize}px;
                border-width: ${borderWidth};
                border-style: ${borderStyle};
                border-color: ${borderColor};
                border-radius: ${borderRadius};
                font-family: ${fontFamily};
                font-weight: ${fontWeight};
                color: ${textColor};
                text-align: ${textAlign};
                text-decoration: ${textDecoration};
                text-shadow: ${textShadow};
                letter-spacing: ${letterSpacing};
                line-height: ${lineHeight};
                font-size: ${fontSize};
                text-transform: ${textTransform};
                cursor: ${cursor};
                box-shadow: ${boxShadow};
                padding: ${padding};
                margin: ${margin};
                opacity: ${opacity};
                transition: background-color ${transitionDuration}, color ${transitionDuration};
                position: ${position};
                top: ${top};
            ">
                ${btnText}
            </button>
        </a>
        <br>
        <br>
        <code>
            &lt;a href="${href}"&gt;&lt;button style="
                background-color: ${btnColor};
                font-size: ${btnSize}px;
                border-width: ${borderWidth};
                border-style: ${borderStyle};
                border-color: ${borderColor};
                border-radius: ${borderRadius};
                font-family: ${fontFamily};
                font-weight: ${fontWeight};
                color: ${textColor};
                text-align: ${textAlign};
                text-decoration: ${textDecoration};
                text-shadow: ${textShadow};
                letter-spacing: ${letterSpacing};
                line-height: ${lineHeight};
                font-size: ${fontSize};
                text-transform: ${textTransform};
                cursor: ${cursor};
                box-shadow: ${boxShadow};
                padding: ${padding};
                margin: ${margin};
                opacity: ${opacity};
                transition: background-color ${transitionDuration}, color ${transitionDuration};
                position: ${position};
                top: ${top};
            "&gt;<br>
            &nbsp;&nbsp;${btnText}<br>
            &lt;/button&gt;&lt;/a&gt;
        </code>
    `;

    var previewBtn = document.getElementById('preview-btn');
    previewBtn.addEventListener('mouseenter', function() {
        previewBtn.style.backgroundColor = btnHoverColor;
    });
    previewBtn.addEventListener('mouseleave', function() {
        previewBtn.style.backgroundColor = btnColor;
    });
});
