(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    5286: function(e, t, s) {
        Promise.resolve().then(s.bind(s, 8836))
    },
    8836: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return l
            }
        });
        var r = s(3827)
          , n = s(4090);
        function l() {
            let[e,t] = (0,
            n.useState)(0)
              , [s,l] = (0,
            n.useState)(!1);
            return (0,
            r.jsx)("div", {
                className: "flex flex-col items-center justify-center h-screen -mt-16",
                children: s ? (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)("img", {
                        src: "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                    }), (0,
                    r.jsx)("div", {
                        className: "text-4xl font-bold my-4 text-center",
                        children: "Ok yay!!!"
                    })]
                }) : (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)("img", {
                        className: "h-[200px]",
                        src: "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                    }), (0,
                    r.jsx)("h1", {
                        className: "text-4xl my-4 text-center",
                        children: "Will you be my Valentine?"
                    }), (0,
                    r.jsxs)("div", {
                        className: "flex flex-wrap flex-col md:flex-row gap-4 items-center justify-center",
                        children: [(0,
                        r.jsx)("button", {
                            className: "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
                            style: {
                                fontSize: 20 * e + 16
                            },
                            onClick: ()=>l(!0),
                            children: "Yes"
                        }), (0,
                        r.jsx)("button", {
                            onClick: ()=>{
                                t(e + 1)
                            }
                            ,
                            className: " bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
                            children: 0 === e ? "No" : (()=>{
                                let t = ["No", "Are you sure?", "Really sure?", "Are you positive???", "Pookie please", "Just think about it", "If you say no, I'll be very sad", "I'll be very very sad", "I'll be very very very sad", "I'll be very very very very sad", "Ok fine, I'll stop asking...", "Just kidding, PLEASE SAY YES", "I'll be very very very very very sad", "You're breaking my heart ;("];
                                return t[e % t.length]
                            }
                            )()
                        })]
                    })]
                })
            })
        }
    }
}, function(e) {
    e.O(0, [971, 69, 744], function() {
        return e(e.s = 5286)
    }),
    _N_E = e.O()
}
]);
