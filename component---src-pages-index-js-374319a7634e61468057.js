(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(t,e,n){"use strict";n.r(e);var r=n(7),a=n.n(r),i=n(0),o=n.n(i),c=n(144),l=n(163),s=n.n(l),u=n(156),A=n(148),p=n(160),d=n(145),m=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){return o.a.createElement("footer",{style:{marginTop:Object(d.a)(2.5),paddingTop:Object(d.a)(1)}},o.a.createElement("div",{style:{float:"right"}},o.a.createElement("a",{href:"/rss.xml",target:"_blank",rel:"noopener noreferrer"},"rss")),o.a.createElement("a",{href:"https://mobile.twitter.com/talaviss",target:"_blank",rel:"noopener noreferrer"},"twitter")," •"," ",o.a.createElement("a",{href:"https://github.com/talaviss",target:"_blank",rel:"noopener noreferrer"},"github")," •"," ",o.a.createElement("a",{href:"https://stackoverflow.com/users/",target:"_blank",rel:"noopener noreferrer"},"stack overflow"))},e}(o.a.Component),f=n(162);n.d(e,"pageQuery",function(){return g});var y=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=s()(this,"props.data.site.siteMetadata.title"),e=(s()(this,"props.data.site.siteMetadata.description"),s()(this,"props.data.allMarkdownRemark.edges"));return o.a.createElement(A.a,{location:this.props.location,title:t},o.a.createElement(p.a,null),o.a.createElement(u.a,null),e.map(function(t){var e=t.node,n=s()(e,"frontmatter.title")||e.fields.slug;return o.a.createElement("div",{key:e.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},o.a.createElement(c.Link,{style:{boxShadow:"none"},to:e.fields.slug},n)),o.a.createElement("small",null,e.frontmatter.date," • "+Object(f.a)(e.timeToRead)),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.spoiler}}))}),o.a.createElement(m,null))},e}(o.a.Component),g=(e.default=y,"796900122")},144:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return m}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return d});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(143),l=n.n(c);n.d(e,"Link",function(){return l.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var s=n(146),u=n.n(s);n.d(e,"PageRenderer",function(){return u.a});var A=n(33);n.d(e,"parsePath",function(){return A.a});var p=a.a.createContext({}),d=function(t){return a.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return s});var r=n(158),a=n.n(r),i=n(159),o=n.n(i);o.a.overrideThemeStyles=function(){return{a:{color:"#d23669"},"a.gatsby-resp-image-link":{boxShadow:"none"},"p code":{fontSize:"1.1rem"}}},delete o.a.googleFonts;var c=new a.a(o.a);var l=c.rhythm,s=c.scale},146:function(t,e,n){var r;t.exports=(r=n(147))&&r.default||r},147:function(t,e,n){"use strict";n.r(e);n(32);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(51),l=n(2),s=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},148:function(t,e,n){"use strict";n(32);var r=n(7),a=n.n(r),i=n(0),o=n.n(i),c=n(144),l=n(145),s=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,r=e.title,a=e.children;return t="/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(-1)}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"#ffa7c4"},to:"/"},r)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},t,a)},e}(o.a.Component);e.a=s},156:function(t,e,n){"use strict";var r=n(7),a=n.n(r),i=n(0),o=n.n(i),c=(n(167),n(168),n(157)),l=n.n(c),s=n(145),u=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},o.a.createElement("img",{src:l.a,alt:"Tal Avissar",style:{marginRight:Object(s.a)(.5),marginBottom:0,width:Object(s.a)(2),height:Object(s.a)(2)}}),o.a.createElement("p",{style:{maxWidth:310}},"Personal blog by ",o.a.createElement("a",{href:"https://mobile.twitter.com/talaviss"},"Tal Avissar"),"."," ","I explain with words and code."))},e}(o.a.Component);e.a=u},157:function(t,e){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExMVFhUVFxUVFxcXFRUVFRcZFxUWFxUXFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQFS0dFR0rKy0rKy0rKy0tLSstLSstLS0tLTcrNy0rKy0tLS0tNy0rKzcrKystLSsrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABCEAACAQIEAgYHBAcIAwEAAAAAAQIDEQQSITEFQQYiUWFxgQcTMpGhsfBCssHRFCMzUnLh8TRDU2JzgpKzFoPCFf/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACERAQEAAwACAgMBAQAAAAAAAAABAgMRITESQQQiMiMT/9oADAMBAAIRAxEAPwD2kQGBJAEAWAFBCNggIoANm7Jvs1YGWUrHG9JPSDh8NN04p1Jx0dtk+8wenvSnExzU6aUIST1us1k7N912eY1G28093e/e3rfxEqYu2r9PsRUqud1GK2hy0vv27mSumWKjOpN1G8ztbla3L3nL1Kjdu/8AMjnLS4cVx6Dw3pROH6zO3tmjyaf4nR0enigpTySyNXXZe+q+J5HhsU8uXkncuSxrdNU+V23+AcHHS47pvi553nUYyeyve3JL3Gj0a9J04OMK8bxStmWr20ucDe90tSJqz+Gm+oFx9JUuMUpUvWxkmsufvszQpTUoprZpNeep86cP4jKNOpCMms8cq152t5HtHQnj0MRRhBe1TpU81+3WP/yxlY6UAAEgLgAAAAAAAMAAAAAwAgAQYBcLgAACXAFAQG7dy3+mMiykkrt6LW55X0o6aVZzlCDy0otXtZufbFt93Z2i9POnedOhh31G8rqX9u26XZHv52OFnWTtGSu93+JNq5FriWO9deWW3YuyK+mYGKndtLmX69Xe+nJcvIpzhfSxLWTql7x9y7Dhr3t5bblmjwu7QfLiprtZ9OKWvPn5j5U35HQYXgxdjwmKVmiLtjSaK5BVnBWXPcYq/LmdXW4TBmJi+GZXdDmcpZacooU67XzOw6J9Jp4ablFJqdsy7bJWXxbOTq0bavsH8Km1LwNJWNj6P4HxSGJoxqw2e/c+aL9jzL0WcVyynQlpGXXj2J6Jr4npaY2VOAQUCAgoiAAUQUAAEAALgKAAlxLgAEAC4MAVHH+knGzVGlQptqWJqKk2tOrZtq/LNax17ZwvTLiKqUq7VorDTjlf2pVYpNZe5Z1dgHnXTbh8KNSmoWsqaTt7OdPVJrxV2Y86n2r3bvoavGKsKuRLWVNdZ3vmf73nuVsFgvWSSXsrfvZOV42xnUeCwjm7tb79i+rG9RwUUkkkyxh8Io6JFylT5dhzZ7HdrwkU6eCXMtU8GuSLNKBYUDG51vyK1Kj2izoFq3IGhdVGZUw9yrVwhsuKK1VfXIctFc5jcDdPT67zCqYfLunc7eqk7+4q4nBRktkb683Lt1d8sPhmKlGLabTvZNPVW5ntHQbiLr4WE5O71+HLy0+J4liFKnJK3V+md/0Fq+qjT9XNvKv1kW9HnqW0XbdpHRjXDnHp9xRAKZAAAABRAABCiAAFxRLgAAggowAEAARni/Sqvmq1k246u6tZae0r85X+Wx7NXk1GTSu0m0u2y0R839IsdVq1Os9JOTUf45OTv5t6COF4fRTu773XmdTwvDKEO97nP8CoO13y2/odLSqK1jLZ6dWmeUyY+lLkMjqTUaZyX27Z4T0+0kTClAnp0xWNOo4pj5MflsEIhwIHHRFGrHka8o6FOrS1Dg6zpIYy3WplapHQfU1n8Qwqk9ef0jJwPE6mHqXT9jK+5tPq+418RL6+RhY2CTu+f4I6td7Hn7p5fQHBMcq9GnVX243LxxPos4g6mFlTf91JJeDV/wAztUjZy0oAAAMABIAEAAAACgANuIwYgwBWICAiSlZHzv0jkp4upKMcqlN5VtbXs8T6GrO0W+xHz9xaefFVal9M8tdrO7tYSomwMbRstf5Gjg9TOwrahftuX+H7fEwzdeppweiJI4uC3ZiY7G625GfONWesdviZTF0/J2FPH07b/XgWKWNi9jz/ANRVX17zV4biWtGGWJ45ddeqifzHesSfkUcFUvoSYhNIiNOkr8VjHcyMR0hWxT4jPWxm0sHmZc4zyyv001xtvkXKWMUla2pnRwsY6pfiFNWe47IJlVjGqyb7DPxcFKOn1oacnmjZ77GZHqtovW592LsfRRiXGrUp8pRzW74tL8T088Y6FYuVHFQb2k8r/wB7Vvkj2dHRHFl7OEFuIhpKgEFuBlbEuAWEBcBLAANC4XEGQC4iFAGVVo13Hh3STCKGKqQt9r56rTzPc5HkPTeC/TKvdkb73lQqrFhYjS0V3L3vUvrqw8FYzIvNVV+e/kaNR6O5hm69bOut5bbi/wD6ai0tk3ouZBjYttJBHh8ZKz33v2kSdaW36OWMU3pmd7ta320f4hJPRp7MsYChGk7p3aTS7r76EtVJuTtrKytsh5cGHftrcGxPyLmLrKxjcOVvrtLeLmY10yeGNiW3Jvl8uZWnXcIqVnZ6X2NGpC101dMjm00otXS5GuPPtjlL9M+nxbNplepNSxKumv6kioR3UUhn6FZppDvPpOPy+2lSqXKvEaT0kvMmo30JMXHqeDFhfIz9HcDqpVaTeynBv3pnt1N6I8FpTs7rtue58PqZqUH2xi/gjpxcGftZAQUpAFAQAAQMEAKAlwEEdwYCDBRRoiYF0654508hlx1Xskov/lGN/kexNnkvpGlH9KcoPM2kn3NK35CqsYwMDTfrfBF6rC+hRwMv1l+1f1+JpPkc2ft2654V6eGV9RZ4de8txjce8P8AX4mXybzFm08O+RJUp6qxoOloVMRJR8WHtXEuFp7E2IpaBhV+ZcnDTUVbY+mTlv8AiJUwya0J6yyu/vJKELq68R+kXFRjhEidUrLa5adLSw71fwD5J+PFDIPnG8bdqJKlNkafwKxRlPDHhBuSSvpue2dHeI061GKg75UovySR5JhcPu+9r+Z3Ho6w+WVZ8rR+LevwN8cvMc2zT+lydwAgtzZwgUQAMoAAGAEAQQSmkRVK3YQSdxo+hN60FVIbgIJVUep4ziKNSdWTm3u9e89hPM8fpWqK1rTl8zLZeOv8WS9lYuGoyjUUX2PXzNCT1QzNepbsTl8R1TcyyvW3PjVrDRLWUo4eZajPTvMK3xqTIZOJSztvZI0p1O4zcdTuuwvE7UmDx0L6WNR4uLTOThhLPMt9i9RoVO3QuwpknljYSk4X1+W+5bwu2hl0sNFN2Vm9W+ZoQlZJXFZ4XPMXoK/14EtRFanKxJKqZDqtiPErT8SapvqQPcuMsktGG6XjodT0Dxlq06f70U/OJy1By0tr1X47nU9BME3XnU5Rjbzly91zXC/tC28/5XrvLhcEB1PIKAgoAAIAKKAXAAyWxMwjfaJcQObC4xiNgSRs5LpZw9KXrordWl48n8DqrkGNoqpCUH9pNfkycp2NNWy4ZdeYUcPLOpPazXvJviXsWsiae8VbzRRWqTta+q87HM78r9lg7P6tuTOV0Vu8lhrz7zOxWNOlKyKlnL3kuLnZXRi4jjEoyyqMl32NMYO3ro8Jhu0sulyRy0eI1N0pfWxIuL1dnFlXGtZG/LCa+8gnSaMiXEJ2ulK5HDiVZvqxb8Q+JWcbcXyJIt2KmCU95K3cXaiskZZRMyQt6kM2SXWrGwi5NRW7dl4vRDkTlU3D56LuZ6P0Rw2Shm51JOflsvkZWN6HXlelJRTSTXekk2vcdTg6Cp04wW0Ulr8zo14cva5N+6ZYSROhRtwlI3cZzEbGqoNlIRnOY3OR3C4BJmAYAgzRGxGxrBRwCXACKDY1hcE9YmO6ORq1Mzk8rd5R7e65ndLMEoShKKsnHJ4ZbW+HyOtuUOM4T1tKUea6y8UtPxIyxnGuO29nXn8kSYSdnZkE5WduZHmasc1jtla06UbvuK1bCxk9V4MdQraEzV9Se2Ncb1XhgrbCKlyfaX4UweH1LmdbTJThg0yaFCMdkW40uwinAVyot6NLMqYir2EleaWvYUXK7+ImWSSWxqdE8P6zFU1yTzv/AGq6+NjFqVDrvRzhr1KlV/Ziorxk9fgvia655jn25cxrvguJcDrecUZOQ64yoxAy4DbioDKCEQCM64CWYCDMbEBjWwPpWLcZcLgRwCIAIqFuNuFwDz7pJgvV1pW2fWXnfQxlLk9jsOmcOtB9sWvc/wCZyFaOpzZzy7cL3GVPTr235l/DVlzOflNomoYtbE/Hq8cuOljU/AkbMPDY6+lzSWKVri46Mcurd2vxK+Ir2uV6vEF2mXicbfn9dpXCyyWsRWKzrK3iVXVcn3fMkpxDjLqWDzHoPo6fVrLvh8pHCUbI7f0cz/bL+B/eRev+me+fpXagJcGdTzyshmya5DV3ECXAamDEZ1wQgIDOuAZgFwMuQwcxJMDJzALgmBFYlxLgBFAS4JgVc70zh1Kb/wAzXvS/I4+ojsOmeKjGFODfXnJuK7oLrfNHION9jn2e3do/lUrIqSgaFWmVpUyetLFfrLZkkMTV7BfVsFmQFjSwc3v/AEJMiXeJBMljRuHVU6nZ/mSxVxsYE8ICOG6m30N4r6nEwi3aNW8HfttePxujHqIy+MVXFU5K7cakWrdtpWL1f1C3T/OvfRTn+h3HP0qgm7eshaNRJ8+T8zfOuvMBFVJRk9QCJANQojOuAlwuIHWATMAGzJCMGII6LiXBiARbgIAEW4jYDW/5+H1cCed9O8Y5Y2jFNWpxUZdt6ib+WUo06zv9dpk9IsUquKqVLuN6jcZbqUYu0X42jY08HVU4qa+1q7fEjdjzldn4+X0s2uN9TcdBd4PQ53UWGGfMljgbiwq2sWYVeY0VXeCtyHuhoSzrX5jXMVORC6QSgPT1/EEtBKkVaxg8YrSc8kWkorNJvvaSsbuLkoxc29ErnHVpJvNUd8yzKK3s3qn4aHRox89ZfkZ8x47b0ZcS9XjFCN3CqnCUnzlvH5NeZ7KfN9PEVKbjUbySi7whHdNNo7bo56TKkUo1459lde03fsOvLF51ettgzn+GdMMJX0VRRe1paG7TqJq6aa7tSOBFJCElVEdxAXFuIFxGdf61AS/eABmSC4jEZKgDYjY1iINhcrY/iFOis1SSiu/fyRxXG+nLd40I2to5NdZJ7SS/AuY9J2XEuJ0qEc1WaXdzfgtzgukfTepO1OjBxi24ye7cWtlZbtM5biGPnWtKUs8ruFldya11aRTp3vHr2bcssdeo8yTT7OfuNJgFh3cXltOL5fajqkrd96jtYt8Ex0YSy3spyl1X9iz6qv8ADyKWil1r05Xg1Jezzm2+/WnZDK94xeeKbShFTjsnJuo79smmGzH5TisMvjeu19UnqiOpCS1sUOEcSi+qpZstlmatfs8zchJM8/KWe3o42ZTsUU7kkHJci76uJYpKNthH8VFa8gcX8ew0LRQ2TS5ArinTpNksqaiu0lczO4jjFCLYQ+cjE6R4mU7whbROTvpojGppJtUlf7WdraLiozXk2GIeaUpTbTtmgv8AEvKzXwJKmqTl+rpLrRj9qUKk+sk+dj0NWHI87dn8skUtG1F56l2pSfsq0nqvKzIFKyTtlSvb95yVnr3d5PUfV2yU0km/tTtmcH5rmR08ynZLNVvZLeOVw+djRimhWcL5rrdwhv1mk1J/E2uFdJK+HatVksqu03mzOW0V2I59cknmlLJeb/u3e1m+zcWleLyxs3eN5vVReq3AcemcM9JFXWNemnlWaUk9lvbx12Oo4X0twte1ppN62loeHUJyacd1C83/AJ2tnd9hNGta/W361SS3Td8sYd2vIn4wn0RTqxlqmmu53JEzwTAcbxFFp0qko7NxbbjGKV3dvmztOBekhO0a8LO12/3Ve0b9tybiHo2YDB/8swf+L8GBPDW5iPYAIUSf17xr/MAAnnnTLev/AKcvnE4+l+1f8D+4gA21lUUP7Z/x+7Eza3t1f4p/OQoGgjSxP7Jfxy/6qJJw72Y/66/6pAAiV+Ge2vH8ztsL+QAcO7+nofj/AMpyWlsgAxdB75CPb3gAjhtXY57pH7HmAFY+xk59ftcP4Q+8w4l/c/wS/wCxgB6WHp5OftJxb2KP+nS+7Ir8O/tEfF/cABpJg/2OI8IfekOwv7DEf+v77AACZf2deEvmirDZ/wC0AA09bat4QHYn2n40fkgAKTpAADMP/9k="},160:function(t,e,n){"use strict";n(32);var r=n(161),a=n(0),i=n.n(a),o=n(169),c=n.n(o),l=n(4),s=n.n(l),u=n(144),A="3236765318";function p(t){var e=t.meta,n=t.image,a=t.title,o=t.description,l=t.slug;return i.a.createElement(u.StaticQuery,{query:A,render:function(t){var r=t.site.siteMetadata,s=o||r.description,u=n?r.siteUrl+"/"+n:null,A=""+r.siteUrl+l;return i.a.createElement(c.a,Object.assign({htmlAttributes:{lang:"en"}},a?{titleTemplate:"%s - "+r.title,title:a}:{title:r.title},{meta:[{name:"description",content:s},{property:"og:url",content:A},{property:"og:title",content:a||r.title},{name:"og:description",content:s},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.social.twitter},{name:"twitter:title",content:a||r.title},{name:"twitter:description",content:s}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(e)}))},data:r})}p.defaultProps={meta:[],title:"",slug:""},p.propTypes={description:s.a.string,image:s.a.string,meta:s.a.array,slug:s.a.string,title:s.a.string.isRequired},e.a=p},161:function(t){t.exports={data:{site:{siteMetadata:{title:"Reactified",author:"Tal Avissar",description:"Personal blog by Dan Abramov. I explain with words and code.",siteUrl:"https://talavissar.com",social:{twitter:"@talaviss"}}}}}},162:function(t,e,n){"use strict";n.d(e,"a",function(){return r});n(171);function r(t){var e=Math.round(t/5);return new Array(e||1).fill("☕️").join("")+" "+t+" min read"}}}]);
//# sourceMappingURL=component---src-pages-index-js-374319a7634e61468057.js.map