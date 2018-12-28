(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    "./src/components/Nav/index.mdx": function(e, n, o) {
      "use strict";
      o.r(n);
      var t = o("./node_modules/react/index.js"),
        a = o.n(t),
        r = o("./node_modules/@mdx-js/tag/dist/index.js");
      function l(e, n) {
        if (null == e) return {};
        var o,
          t,
          a = (function(e, n) {
            if (null == e) return {};
            var o,
              t,
              a = {},
              r = Object.keys(e);
            for (t = 0; t < r.length; t++)
              (o = r[t]), n.indexOf(o) >= 0 || (a[o] = e[o]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (t = 0; t < r.length; t++)
            (o = r[t]),
              n.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, o) &&
                  (a[o] = e[o]));
        }
        return a;
      }
      n.default = function(e) {
        var n = e.components;
        l(e, ["components"]);
        return a.a.createElement(
          r.MDXTag,
          { name: "wrapper", components: n },
          a.a.createElement(
            r.MDXTag,
            { name: "h1", components: n, props: { id: "hello-world" } },
            a.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#hello-world" }
              },
              a.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Hello world"
          ),
          a.a.createElement(
            r.MDXTag,
            { name: "p", components: n },
            "Hello, I'm a mdx file!"
          )
        );
      };
    }
  }
]);
