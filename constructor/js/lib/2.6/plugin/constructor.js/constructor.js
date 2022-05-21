/*

Criado por Tiago Rodrigo dos Reis Bernardo

Begin-Date: 7:00PM 7/3/2021
End-Date: 

*/


function build() {

    this.audio = audio;
    this.video = video;
    this.p = p;
    this.small = small;
    this.center = center;
    this.img = img;
    this.input = input;
    this.textarea = textarea;
    this.br = br;
    this.hr = hr;
    this.a = a;
    this.b = b;
    this.h = h;
    this.progress = progress;
    this.link = link;
    this.iframe = iframe;
    
    function audio(src, visi, clas)
    {
        this.build = document.createElement("audio");
        this.build.src = src;
        if (visi == "None") {
            this.build.setAttribute("autoplay", "");
        }
        else{
            this.build.setAttribute("controls", "");
        }
        this.build.setAttribute("class", "constructor audio " + clas);
        this.build.setAttribute("id", "constructor audio");
        document.body.appendChild(this.build);
        
    }


    function video(src, clas)
    {
        this.build = document.createElement("video");
        this.build.src = src;      
        this.build.setAttribute("controls", "");
        this.build.setAttribute("class", "constructor video " + clas);
        this.build.setAttribute("id", "constructor video");
        document.body.appendChild(this.build);
    }


    function p(text, clas)
    {
        this.build = document.createElement("p");
        this.build.innerHTML = text;
        this.build.setAttribute("class", "constructor p " + clas);
        this.build.setAttribute("id", "constructor p");
        document.body.appendChild(this.build);
    }

    
    function small(text, clas)
    {
        this.build = document.createElement("small");
        this.build.innerHTML = text;
        this.build.setAttribute("class", "constructor small " + clas);
        this.build.setAttribute("id", "constructor small");
        document.body.appendChild(this.build);
    }

    
    function center(text, clas)
    {
        this.build = document.createElement("center");
        this.build.innerHTML = text;
        this.build.setAttribute("class", "constructor center " + clas);
        this.build.setAttribute("id", "constructor center");
        document.body.appendChild(this.build);
    }


    function img(src, alt, clas)
    {
        this.build = document.createElement("img");
        this.build.src = src;
        this.build.setAttribute("alt", alt);
        this.build.setAttribute("class", "constructor img " + clas);
        this.build.setAttribute("id", "constructor img");
        document.body.appendChild(this.build);
    }

    
    function input(type, value, name, clas)
    {
        this.build = document.createElement("input");
        this.build.setAttribute("type", type);
        this.build.setAttribute("value", value);
        this.build.setAttribute("name", name);
        this.build.setAttribute("class", "constructor input-" + type + " " + clas);
        this.build.setAttribute("id", "constructor input-" + type);
        document.body.appendChild(this.build);
    }
  
      
    function textarea(text, clas)
    {
        this.build = document.createElement("textarea");
        this.build.innerHTML = text;
        this.build.setAttribute("class", "constructor textarea " + clas);
        this.build.setAttribute("id", "constructor textarea");
        document.body.appendChild(this.build);
    }
    
    function br()
    {
        this.build = document.createElement("br");
        document.body.appendChild(this.build);
    }
    
    
    function hr()
    {
        this.build = document.createElement("hr");
        document.body.appendChild(this.build);
    }
    
    
    function a(href, text, clas, atri, otatri)
    {
        this.build = document.createElement("a");
        this.build.href = href;
        this.build.innerHTML = text;
        if (atri != "") {
            this.build.setAttribute(atri, otatri);
        }
  
        this.build.setAttribute("class", "constructor a " + clas);
        this.build.setAttribute("id", "constructor a");
        document.body.appendChild(this.build);
    }
    
    function b(text, clas)
    {
        this.build = document.createElement("b");
        this.build.innerHTML = text;
        this.build.setAttribute("class", "constructor b " + clas);
        this.build.setAttribute("id", "constructor b");
        document.body.appendChild(this.build);
    }
    
    
    function h(type, text, clas)
    {
        this.build = document.createElement("h" + type);
        this.build.innerHTML = text;
        this.build.setAttribute("class", "constructor h " + clas);
        this.build.setAttribute("id", "constructor h " + type);
        document.body.appendChild(this.build);
    }
    
    
    function progress(value, max, clas)
    {
        this.build = document.createElement("progress");
        this.build.setAttribute("value", value);
        this.build.setAttribute("max", max);
        this.build.setAttribute("class", "constructor progress " + clas);
        this.build.setAttribute("id", "constructor progress");
        document.body.appendChild(this.build);
    }
    
    
    
    function link(href, rel, type)
    {
        this.build = document.createElement("link");
        this.build.setAttribute("rel", rel);
        this.build.setAttribute("type", type);
        this.build.setAttribute("href", href);
        document.head.appendChild(this.build);
    }
    
    
    function iframe(src, wid, hei, frame, clas)
    {
        this.build = document.createElement("iframe");
        this.build.src = src;
        this.build.setAttribute("width", wid);
        this.build.setAttribute("height", hei);
        this.build.setAttribute("frameborder", frame);
        this.build.setAttribute("class", "constructor iframe " + clas);
        this.build.setAttribute("id", "constructor iframe");
        document.body.appendChild(this.build);
    }
    
}

function char() {
    this.space = space;
    function space()
    {
        this.build = document.createElement("i");
        this.build.innerHTML = "&#32;";
        
        document.body.appendChild(this.build);
    }
}