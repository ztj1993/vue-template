var Zoom = (function () {
    function Zoom() {
        this.doc_el = document.documentElement;
    }

    Zoom.prototype.init = function (design_width, design_height, html_default_font_size = 16) {
        this.html_default_font_size = html_default_font_size;
        this.design_width = design_width;
        this.design_height = design_height;
        this.design_scale = design_width / design_height;
    };

    Zoom.prototype.get_html_font_size = function () {
        var html_font_size;
        var client_Width = this.doc_el.clientWidth;
        var client_height = this.doc_el.clientHeight;
        var client_scale = client_Width / client_height;
        if (this.design_scale > client_scale) {
            html_font_size = client_Width / this.design_width * this.html_default_font_size;
        } else {
            html_font_size = client_height / this.design_height * this.html_default_font_size;
        }
        return html_font_size;
    };

    Zoom.prototype.set_body_font_size = function () {
        document.body.style.fontSize = this.html_default_font_size + 'px';
    };

    Zoom.prototype.set_html_font_size = function () {
        this.doc_el.style.fontSize = this.get_html_font_size() + 'px';
    };

    return Zoom;
}());

module.exports = new Zoom();
