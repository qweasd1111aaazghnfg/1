webpackJsonp([141], {
    "/kga": function(e, t, o) {
        "use strict";
        var n = o("JkZY")
          , s = (n.a,
        Boolean,
        String,
        String,
        Number,
        String,
        String,
        Boolean,
        Object,
        Boolean,
        {
            mixins: [n.a],
            name: "x-dialog",
            model: {
                prop: "show",
                event: "change"
            },
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                maskTransition: {
                    type: String,
                    default: "vux-mask"
                },
                maskZIndex: [String, Number],
                dialogTransition: {
                    type: String,
                    default: "vux-dialog"
                },
                dialogClass: {
                    type: String,
                    default: "weui-dialog"
                },
                hideOnBlur: Boolean,
                dialogStyle: Object,
                scroll: {
                    type: Boolean,
                    default: !0,
                    validator: function(e) {
                        return !0
                    }
                }
            },
            computed: {
                maskStyle: function() {
                    if (void 0 !== this.maskZIndex)
                        return {
                            zIndex: this.maskZIndex
                        }
                }
            },
            mounted: function() {
                "undefined" != typeof window && window.VUX_CONFIG && "VIEW_BOX" === window.VUX_CONFIG.$layout && (this.layout = "VIEW_BOX")
            },
            watch: {
                show: function(e) {
                    this.$emit("update:show", e),
                    this.$emit(e ? "on-show" : "on-hide"),
                    e ? this.addModalClassName() : this.removeModalClassName()
                }
            },
            methods: {
                shouldPreventScroll: function() {
                    var e = /iPad|iPhone|iPod/i.test(window.navigator.userAgent)
                      , t = this.$el.querySelector("input") || this.$el.querySelector("textarea");
                    if (e && t)
                        return !0
                },
                hide: function() {
                    this.hideOnBlur && (this.$emit("update:show", !1),
                    this.$emit("change", !1),
                    this.$emit("on-click-mask"))
                }
            },
            data: function() {
                return {
                    layout: ""
                }
            }
        })
          , i = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , o = e._self._c || t;
                return o("div", {
                    staticClass: "vux-x-dialog",
                    class: {
                        "vux-x-dialog-absolute": "VIEW_BOX" === e.layout
                    }
                }, [o("transition", {
                    attrs: {
                        name: e.maskTransition
                    }
                }, [o("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.show,
                        expression: "show"
                    }],
                    staticClass: "weui-mask",
                    style: e.maskStyle,
                    on: {
                        click: e.hide
                    }
                })]), e._v(" "), o("transition", {
                    attrs: {
                        name: e.dialogTransition
                    }
                }, [o("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.show,
                        expression: "show"
                    }],
                    class: e.dialogClass,
                    style: e.dialogStyle
                }, [e._t("default")], 2)])], 1)
            },
            staticRenderFns: []
        };
        var a = o("VU/8")(s, i, !1, function(e) {
            o("dDGC")
        }, null, null);
        t.a = a.exports
    },
    "/o5o": function(e, t, o) {
        "use strict";
        Boolean;
        var n = {
            props: {
                show: {
                    type: Boolean,
                    default: !1,
                    twoWay: !0
                }
            }
        }
          , s = {
            render: function() {
                var e = this.$createElement
                  , t = this._self._c || e;
                return t("div", [t("div", {
                    staticClass: "mask"
                }), this._v(" "), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: this.show,
                        expression: "show"
                    }],
                    staticClass: "modal"
                }, [this._t("default")], 2)])
            },
            staticRenderFns: []
        };
        var i = o("VU/8")(n, s, !1, function(e) {
            o("ewSO")
        }, null, null);
        t.a = i.exports
    },
    "08AF": function(e, t) {},
    "2PtM": function(e, t) {},
    "62KO": function(e, t, o) {
        "use strict";
        var n = o("/kga")
          , s = (n.a,
        Boolean,
        Boolean,
        String,
        String,
        Boolean,
        String,
        String,
        String,
        String,
        Number,
        String,
        String,
        String,
        Boolean,
        Object,
        Boolean,
        String,
        {
            name: "confirm",
            components: {
                XDialog: n.a
            },
            props: {
                value: {
                    type: Boolean,
                    default: !1
                },
                showInput: {
                    type: Boolean,
                    default: !1
                },
                placeholder: {
                    type: String,
                    default: ""
                },
                theme: {
                    type: String,
                    default: "ios"
                },
                hideOnBlur: {
                    type: Boolean,
                    default: !1
                },
                title: String,
                confirmText: String,
                cancelText: String,
                maskTransition: {
                    type: String,
                    default: "vux-fade"
                },
                maskZIndex: [Number, String],
                dialogTransition: {
                    type: String,
                    default: "vux-dialog"
                },
                content: String,
                closeOnConfirm: {
                    type: Boolean,
                    default: !0
                },
                inputAttrs: Object,
                showContent: {
                    type: Boolean,
                    default: !0
                },
                confirmType: {
                    type: String,
                    default: "primary"
                }
            },
            created: function() {
                this.showValue = this.show,
                this.value && (this.showValue = this.value)
            },
            watch: {
                value: function(e) {
                    this.showValue = e
                },
                showValue: function(e) {
                    var t = this;
                    this.$emit("input", e),
                    e && (this.showInput && (this.msg = "",
                    setTimeout(function() {
                        t.$refs.input && t.setInputFocus()
                    }, 300)),
                    this.$emit("on-show"))
                }
            },
            data: function() {
                return {
                    msg: "",
                    showValue: !1
                }
            },
            methods: {
                setInputValue: function(e) {
                    this.msg = e
                },
                setInputFocus: function() {
                    this.$refs.input.focus()
                },
                _onConfirm: function() {
                    this.showValue && (this.closeOnConfirm && (this.showValue = !1),
                    this.$emit("on-confirm", this.msg))
                },
                _onCancel: function() {
                    this.showValue && (this.showValue = !1,
                    this.$emit("on-cancel"))
                }
            }
        })
          , i = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , o = e._self._c || t;
                return o("div", {
                    staticClass: "vux-confirm"
                }, [o("x-dialog", {
                    attrs: {
                        "dialog-class": "android" === e.theme ? "weui-dialog weui-skin_android" : "weui-dialog",
                        "mask-transition": e.maskTransition,
                        "dialog-transition": "android" === e.theme ? "vux-fade" : e.dialogTransition,
                        "hide-on-blur": e.hideOnBlur,
                        "mask-z-index": e.maskZIndex
                    },
                    on: {
                        "on-hide": function(t) {
                            return e.$emit("on-hide")
                        }
                    },
                    model: {
                        value: e.showValue,
                        callback: function(t) {
                            e.showValue = t
                        },
                        expression: "showValue"
                    }
                }, [e.title ? o("div", {
                    staticClass: "weui-dialog__hd",
                    class: {
                        "with-no-content": !e.showContent
                    }
                }, [o("strong", {
                    staticClass: "weui-dialog__title"
                }, [e._v(e._s(e.title))])]) : e._e(), e._v(" "), e.showContent ? [e.showInput ? o("div", {
                    staticClass: "vux-prompt",
                    on: {
                        touchstart: function(t) {
                            return t.preventDefault(),
                            e.setInputFocus.apply(null, arguments)
                        }
                    }
                }, ["checkbox" === e.inputAttrs.type ? o("input", e._b({
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.msg,
                        expression: "msg"
                    }],
                    ref: "input",
                    staticClass: "vux-prompt-msgbox",
                    attrs: {
                        placeholder: e.placeholder,
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(e.msg) ? e._i(e.msg, null) > -1 : e.msg
                    },
                    on: {
                        change: function(t) {
                            var o = e.msg
                              , n = t.target
                              , s = !!n.checked;
                            if (Array.isArray(o)) {
                                var i = e._i(o, null);
                                n.checked ? i < 0 && (e.msg = o.concat([null])) : i > -1 && (e.msg = o.slice(0, i).concat(o.slice(i + 1)))
                            } else
                                e.msg = s
                        }
                    }
                }, "input", e.inputAttrs, !1)) : "radio" === e.inputAttrs.type ? o("input", e._b({
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.msg,
                        expression: "msg"
                    }],
                    ref: "input",
                    staticClass: "vux-prompt-msgbox",
                    attrs: {
                        placeholder: e.placeholder,
                        type: "radio"
                    },
                    domProps: {
                        checked: e._q(e.msg, null)
                    },
                    on: {
                        change: function(t) {
                            e.msg = null
                        }
                    }
                }, "input", e.inputAttrs, !1)) : o("input", e._b({
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.msg,
                        expression: "msg"
                    }],
                    ref: "input",
                    staticClass: "vux-prompt-msgbox",
                    attrs: {
                        placeholder: e.placeholder,
                        type: e.inputAttrs.type
                    },
                    domProps: {
                        value: e.msg
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.msg = t.target.value)
                        }
                    }
                }, "input", e.inputAttrs, !1))]) : o("div", {
                    staticClass: "weui-dialog__bd"
                }, [e._t("default", function() {
                    return [o("div", {
                        domProps: {
                            innerHTML: e._s(e.content)
                        }
                    })]
                })], 2)] : e._e(), e._v(" "), o("div", {
                    staticClass: "weui-dialog__ft"
                }, [o("a", {
                    staticClass: "weui-dialog__btn weui-dialog__btn_default",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: e._onCancel
                    }
                }, [e._v(e._s(e.cancelText || "取消"))]), e._v(" "), o("a", {
                    staticClass: "weui-dialog__btn",
                    class: "weui-dialog__btn_" + e.confirmType,
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: e._onConfirm
                    }
                }, [e._v(e._s(e.confirmText || "确定"))])])], 2)], 1)
            },
            staticRenderFns: []
        };
        var a = o("VU/8")(s, i, !1, function(e) {
            o("08AF")
        }, null, null);
        t.a = a.exports
    },
    "6Trz": function(e, t, o) {
        "use strict";
        String,
        String,
        String,
        Array,
        Object;
        var n = {
            data: function() {
                return {}
            },
            props: {
                title: {
                    default: "信息",
                    type: String
                },
                content: {
                    default: "",
                    type: String
                },
                btnText: {
                    default: "确定",
                    type: String
                },
                contentList: Array,
                alertModal: Object
            },
            computed: {
                secretBox: function() {
                    return this.$store.state.secretBox
                },
                question: function() {
                    return this.$store.state.question
                },
                wholeExplores: function() {
                    return this.$store.state.wholeExplores
                },
                stateAnswer: function() {
                    return this.$store.state.answer
                },
                exploreDetail: function() {
                    return this.$store.state.exploreDetail
                }
            },
            methods: {
                close: function() {
                    this.$emit("close"),
                    "5631739515369" == this.secretBox.code ? self.location.href = "http://dt2022.scbaixin.cn/" : "5631769111314" == this.secretBox.code && (self.location.href = "http://snzx.tfxysc.com/614/")
                },
                goToQuestion: function(e) {
                    this.stateAnswer != this.wholeExplores[this.exploreDetail.checkPointSeq].answer && $.post("/service/explore2/updateExploreDetail", {
                        answer: this.stateAnswer,
                        exploreDetailId: this.exploreDetail.id,
                        exploreId: this.exploreDetail.exploreId,
                        visitorId: localStorage.sbox_userid || 0,
                        questionId: this.question.id,
                        secretBoxCode: this.secretBox.code
                    }, function(e, t, o) {}),
                    this.$store.dispatch("goTochoosedQuestion", e)
                },
                toLink: function(e) {
                    self.location.href = e
                }
            }
        }
          , s = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , o = e._self._c || t;
                return o("div", {
                    attrs: {
                        id: "Hint"
                    }
                }, [o("div", {
                    staticClass: "hint-modal"
                }, [o("div", {
                    staticClass: "hint-title",
                    domProps: {
                        innerHTML: e._s(e.title)
                    }
                }), e._v(" "), o("div", {
                    staticClass: "hint-content"
                }, [o("span", {
                    domProps: {
                        innerHTML: e._s(e.content)
                    }
                }), e._v(" "), e._l(e.contentList, function(t) {
                    return o("div", {
                        staticStyle: {
                            color: "#0ac414"
                        },
                        on: {
                            click: function(o) {
                                return e.goToQuestion(t)
                            }
                        }
                    }, [e._v("点击前往第" + e._s(t) + "题")])
                }), e._v(" "), e.alertModal && e.alertModal.toLink ? o("div", {
                    staticStyle: {
                        color: "#0ac414"
                    },
                    on: {
                        click: function(t) {
                            return e.toLink(e.alertModal.toLink)
                        }
                    }
                }, [e._v(e._s(e.alertModal.linkContent))]) : e._e()], 2), e._v(" "), o("div", {
                    staticClass: "hint-btn",
                    domProps: {
                        innerHTML: e._s(e.btnText)
                    },
                    on: {
                        click: e.close
                    }
                })])])
            },
            staticRenderFns: []
        };
        var i = o("VU/8")(n, s, !1, function(e) {
            o("HT03")
        }, null, null);
        t.a = i.exports
    },
    "96rN": function(e, t) {},
    BS5S: function(e, t) {},
    CGz8: function(e, t) {},
    CxqR: function(e, t) {},
    FnBT: function(e, t) {},
    GR3Y: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAV5SURBVHic7VvPSx1XGD3fncFnqCHTXWNTCl0WEoJts5BCS6sNxYAlpDSB4qYFERfOPNFumry+hBbBjqMLhXTXbEwlDZH+gEQ3hVaK+dVq6T+QaHftExsyPl/m68L7iprnzJ375jmC7+zeeH+cc7xz73fv/YaYGfsZIm0CaaNuQNoE0kbdgLQJpI19b4C52x329vY2NTY2NgdB0ExEzQDAzMtCiGXf95fHx8f/3U0+VOs4wHGcw0TUyczvAWgFcDCiyiqAOSK6wczTnuf9VUt+NTEgm80eYOZuAGcBnABAmk0xgHkAV4no8sjIyOOkOJaRqAH5fF4UCoUuAJcAHEms4Q0sAbiwtLT09dTU1JOkGk3MANu224nIBXA0kQZ3ABH9SUQDruv+mER7Va8CRESO43xGRDdRY/EAwMwvB0Hwg23bnxOR7qv1P6oaAQMDA8+USqUrAE5XS0QT08Vi8cNqVg5tA/r7+18IguB7AMd0O08Ii0KIDtd1H+hU1jJA/ufnkL74MhZM02wdHh5+FLdi7DmAiEgO+70iHgCOlUqlKzpzQmwDbNvOIb13PgynJbdYiPUKyKXuJvQDm1qDmfnk6OjojGoF5RGQz+eFXOfTEL8C4CsAP0WUIyJy8/m8si7lgjLCU1nnvxNCHAfwOoBbqu2HYD6TybzoeV6353lvAvgyovxRyVUJSgZks9kD2Ahvo/CEiHpc1/3d87xfLMvqAHBNlUwFzGcymXeGhoZWyg+CILiqUO+S5BwJJQPkxkYltn9sGEah/COXy5UsyzoHPRNubxcPAIZhnFSoe0RyjoTqK3BWsVzT+vr6R5sfaJpwG8BT4rPZ7Alm/kSxDSXOkauA4ziHsbETU538SgDOeZ63RXA+nzcLhcIkgDMR9e8AaPc8r7D5oRR/C8AhRR4M4Pmo84TIEUBEnYg385sAJh3H2SJUZSQQ0V1UEG/b9msxxcvmqDOqUKQB8iQnLmKbQER3fd+vKJ6I4ooHoMZdZQ5ojduxRBwT7vm+3z4xMfHP5rLZbPZVKd7S5BDJPXQO6O3tbWpoaFjV7LyMqDnhpbW1tbbt4vv6+l4RQsxCXzwAoFgsHgzbLoeOgMbGxuZqOpcIHQmZTOatSuINw5hBleKBaA2hBgRBkIQBQIgJ25c6x3FaDMOYYeZnk+g4SkOoAeVz+4RQ0YTNcBynhYhmkxIPRGvY7ZshE8BAyGalJ0nxKgg1gJmXk+yMme8T0bu5XC6o9HfLsnpQ3d6hUp+hGkINEEIkZgAz3xdCtI2MjPy9U5kq9w4VEaUh1ADf9xMxYCfxjuO0OI6z5XQpaROiNIQaINfPauOAe8Vi8e1K4oloFsA3OmGzIlajjsxVJsE53d7lO/9UhLdtttfeOyggkrvKZuiGTs9hw77CUlcTE1S4q2yGprGxtVRGTPFlJG0CS+6hiDRA7qfnY/SqI76MJE2YV8ktUA2EVM7hyujWFF/GjiZkMpmPAajeAypxVjKAiC4DeKhQdGVsbOzO5gea4W1FE+S+4VeF+g8l50goGSAzM84rFD3U19fXVv5RZWxvApi0bfv98oPBwcHnALyhUPe8ajaJ8s2QzP74DRF3A8zsE9G32MgF6gBgKHUQjp+Z+Q8hxAcKZi5alnV8p3B7O+pXY3Falw1fjE1r93AxjnhAIz+AiMi27WvYezfE10dHR89wTEGxzwOYmU3T7AKwELduDbFgmmZXXPGA5oHI8PDwIyHEKewNExaFEKd0skOAKk6EXNd9YJpmK4Drum0kgOlisdiqmx8EJJAnKOeEHIAL2MXVgZm/GBsb+1Rn2G/Gvk+UrKfK1pOl6+nyu/vd4L77YGKvY99/M1Q3IG0CaaNuQNoE0sa+N+A/kqr4z+PtIvUAAAAASUVORK5CYII="
    },
    H7a6: function(e, t, o) {
        "use strict";
        var n = {
            name: "barrage",
            data: function() {
                return {
                    barragetextarr: [],
                    barragecolorarr: ["#00FFFF", "#FFFF00", "#FFFFFF", "#00FF00"],
                    barragetoparr0: ["5vh", "8vh", "11vh"],
                    barragetoparr1: ["15vh", "17vh", "19vh"],
                    barragetoparr2: ["5px", "17px", "28px"],
                    barrageduarr: [8e3, 9e3, 1e4, 10500, 11e3, 11500],
                    barrageidx: 0,
                    barragedsq: "",
                    barragelist: [],
                    susendbarrageflag: !1,
                    barragecontent: ""
                }
            },
            props: {},
            computed: {
                secretBox: function() {
                    return this.$store.state.secretBox
                },
                sendBarrageFlag: function() {
                    return this.$store.state.sendBarrageFlag
                }
            },
            methods: {
                movebarrage: function(e) {
                    $("#singleba" + e).animate({
                        left: "-500px"
                    }, this.barrageduarr[Math.floor(6 * Math.random())])
                },
                createsinglebarrage: function(e) {
                    var t = "5vh";
                    return t = this.secretBox.config.coverMode ? this.barragetoparr1[Math.floor(3 * Math.random())] : this.barragetoparr0[Math.floor(3 * Math.random())],
                    $("<div id='singleba" + e + "' style='color:" + this.barragecolorarr[Math.floor(4 * Math.random())] + ";bottom:" + t + ";position:fixed;left:150vw;z-index:-100;width:300vw;font-size:13px;'><span style='background-color:rgba(0,0,0,0.5);padding:0.2rem 0.5rem;border-radius:15px;'>" + this.barragetextarr[e].content + "</span></div>")
                },
                barragemove: function() {
                    if (0 != this.barragetextarr.length) {
                        if (this.barrageidx == this.barragetextarr.length)
                            return this.barrageidx = 0,
                            this.barragetextarr = [],
                            void window.setTimeout(this.timeoutcontrol, 3e3);
                        var e = this.createsinglebarrage(this.barrageidx);
                        $("#barrageBoard").append(e),
                        this.movebarrage(this.barrageidx),
                        this.barrageidx++
                    }
                },
                timeoutcontrol: function() {
                    $("#barrageBoard").empty(),
                    this.loadallmsg()
                },
                loadallmsg: function() {
                    var e = this;
                    $.post("/service/message/loadallmsg", {
                        secretBoxCode: e.secretBox.code,
                        visitorid: localStorage.sbox_userid
                    }, function(t, o, n) {
                        e.barragetextarr = t.data,
                        e.controlmsgmove()
                    })
                },
                controlmsgmove: function() {
                    this.barragetextarr.length > 0 && (this.barragemove(),
                    window.clearInterval(this.barragedsq),
                    this.barragedsq = setInterval(this.barragemove, 3e3))
                },
                loadmymsg: function() {
                    var e = this;
                    $.post("service/message/loadmymsg", {
                        secretBoxCode: this.secretBox.code,
                        visitorid: localStorage.sbox_userid
                    }, function(t, o, n) {
                        e.barragelist = t.data
                    })
                },
                realsendbarrage: function() {
                    var e = this;
                    this.barragecontent.length > 0 && $.post("service/message/sendbarrage", {
                        secretBoxCode: this.secretBox.code,
                        userId: localStorage.sbox_userid,
                        content: this.barragecontent
                    }, function(t, o, n) {
                        e.barragelist.unshift({
                            content: e.barragecontent
                        }),
                        e.barragetextarr.unshift({
                            content: e.barragecontent
                        }),
                        e.controlmsgmove(),
                        e.barragecontent = "",
                        e.susendbarrageflag = !0,
                        setTimeout(function() {
                            e.susendbarrageflag = !1
                        }, 1e3)
                    })
                },
                closesendbarrage: function() {
                    this.$store.commit("set_sendBarrageFlag", !1)
                }
            },
            mounted: function() {
                localStorage.sbox_userid && (this.loadallmsg(),
                this.loadmymsg())
            }
        }
          , s = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , n = e._self._c || t;
                return n("div", {
                    attrs: {
                        id: "barrage"
                    }
                }, [e.sendBarrageFlag ? n("div", {
                    staticClass: "sendbarragecls"
                }, [n("img", {
                    staticStyle: {
                        position: "absolute",
                        right: ".6rem",
                        top: "0.2rem",
                        width: "10%"
                    },
                    attrs: {
                        src: o("GR3Y")
                    },
                    on: {
                        click: e.closesendbarrage
                    }
                }), e._v(" "), n("div", {
                    staticClass: "barragetitlecls",
                    domProps: {
                        innerHTML: e._s(e.secretBox.title)
                    }
                }), e._v(" "), n("div", {
                    staticStyle: {
                        margin: "0 auto",
                        width: "80vw"
                    }
                }, [n("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.barragecontent,
                        expression: "barragecontent"
                    }],
                    staticClass: "barragetextcls",
                    attrs: {
                        rows: "5",
                        placeholder: "请留言..."
                    },
                    domProps: {
                        value: e.barragecontent
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.barragecontent = t.target.value)
                        }
                    }
                }), e._v(" "), n("div", {
                    staticStyle: {
                        "font-size": "12px",
                        "text-align": "left"
                    }
                }, [e._v("目前仅支持文字输入，不支持表情等图形。")]), e._v(" "), n("button", {
                    staticClass: "barragebtn",
                    on: {
                        click: e.realsendbarrage
                    }
                }, [e._v("立即发送")])]), e._v(" "), e.barragelist.length > 0 ? n("div", {
                    staticClass: "barragelistcls"
                }, e._l(e.barragelist, function(t) {
                    return n("div", {
                        staticStyle: {
                            "margin-bottom": "0.5rem"
                        }
                    }, [n("div", {
                        staticStyle: {
                            color: "#aaa",
                            "font-size": "14px"
                        }
                    }, [e._v("我")]), e._v(" "), n("div", {
                        staticStyle: {
                            "font-size": "14px"
                        }
                    }, [e._v(e._s(t.content))])])
                }), 0) : e._e()]) : e._e(), e._v(" "), n("div", {
                    class: {
                        barrageBox: "554404860400" == e.secretBox.code || "554502830104" == e.secretBox.code
                    },
                    attrs: {
                        id: "barrageBoard"
                    }
                }), e._v(" "), e.susendbarrageflag ? n("div", {
                    staticClass: "successsendBarrage"
                }, [e._v("发送成功")]) : e._e()])
            },
            staticRenderFns: []
        };
        var i = o("VU/8")(n, s, !1, function(e) {
            o("FnBT")
        }, "data-v-9be19730", null);
        t.a = i.exports
    },
    HT03: function(e, t) {},
    Hqqj: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ")
          , __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__)
          , __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("Xxa5")
          , __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__)
          , __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp")
          , __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__)
          , __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__("//Fk")
          , __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__)
          , __WEBPACK_IMPORTED_MODULE_4__wechat__ = __webpack_require__("Xe5u")
          , __WEBPACK_IMPORTED_MODULE_5__games__ = __webpack_require__("wujj")
          , __WEBPACK_IMPORTED_MODULE_5__games___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__games__)
          , __WEBPACK_IMPORTED_MODULE_6__filters_parseFile__ = __webpack_require__("UtBj")
          , __WEBPACK_IMPORTED_MODULE_7__configs__ = __webpack_require__("pyzf")
          , __WEBPACK_IMPORTED_MODULE_8__store___ = __webpack_require__("IcnI")
          , __WEBPACK_IMPORTED_MODULE_9__filters_filter__ = __webpack_require__("ocbm");
        function getTemplate(e, t) {
            var o = __WEBPACK_IMPORTED_MODULE_5__games__.GameTypes[e]
              , n = o.type + (t || "");
            return __WEBPACK_IMPORTED_MODULE_5__games__.Games[n] ? n : o.type
        }
        function removeHTMLTag(e) {
            return e = (e = (e = (e = (e = e.replace(/<\/?[^>]*>/g, "")).replace(/[ | ]*\n/g, "\n")).replace(/\n[\s| | ]*\r/g, "\n")).replace(/&nbsp;/gi, " ")).replace(/\s+/g, " ")
        }
        function processData(e) {
            if (e.question && (e.question.content = processContent(e.question.content, e.exploreDetail.id % 10 + 1),
            2 == e.question.pattern))
                for (var t = 0; t < e.question.choiceList.length; t++)
                    e.question.choiceList[t].content = processChoice(e.question.choiceList[t].content, e.exploreDetail.id % 2);
            return e
        }
        function processQueston(e) {}
        function processContent(e, t) {
            if (e.startsWith("　") && e.endsWith("　")) {
                var o = e.slice(1, -1);
                o.length < 8 + 3 * t && (t = Math.floor(t / 2)),
                o = o.slice(t);
                for (var n = "", s = "", i = 0; i < o.length; i += 2)
                    s += o.substring(i, i + 1),
                    n += o.substring(i + 1, i + 2);
                return (s = s.substring(0, s.length - 2 * t)).endsWith("　") && (s = s.substring(0, s.length - 1)),
                n + s
            }
            return e
        }
        function processChoice(e, t) {
            if (e.startsWith("　") && e.endsWith("　")) {
                for (var o = e.slice(1, -1), n = "", s = "", i = 0; i < 10; i += 2)
                    n += o.substring(i, i + 1),
                    s += o.substring(i + 1, i + 2);
                return (e = 0 == t ? n : s) + o.substring(10)
            }
            return e
        }
        function sleep(e) {
            return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function(t, o) {
                setTimeout(function() {
                    t()
                }, e)
            }
            )
        }
        function tempSbc(e) {
            for (var t = e.substr(0, 1), o = e.substr(1, 1), n = t < o ? t : o, s = "", i = 2; i <= 2 * n; i += 2)
                s += e.substr(i, 1),
                e.substr(i + 1, 1);
            var a = e.substr(2 * (Number(n) + 1));
            return t > o ? s += a : a,
            s
        }
        function visibleChange(e) {
            if ("hidden" == e.target.visibilityState) {
                var t = localStorage.getItem("switchScreen") || 0;
                if (localStorage.setItem("switchScreen", Number(t) + 1),
                t >= __WEBPACK_IMPORTED_MODULE_8__store___.a.state.secretBox.config.switchScreen - 1)
                    return __WEBPACK_IMPORTED_MODULE_8__store___.a.dispatch("failureExplore"),
                    __WEBPACK_IMPORTED_MODULE_8__store___.a.dispatch("showSuccess"),
                    localStorage.removeItem("switchScreen"),
                    void document.removeEventListener("visibilitychange", visibleChange);
                __WEBPACK_IMPORTED_MODULE_8__store___.a.commit("set_AlertModal", {
                    alertTitle: "消息",
                    alertMsg: "系统检测到您进行了切屏操作，如果切屏超过" + (__WEBPACK_IMPORTED_MODULE_8__store___.a.state.secretBox.config.switchScreen - 1) + "次将自动交卷！",
                    showAlert: !0
                })
            }
        }
        __webpack_exports__.a = {
            getSecretBoxBaseConfig: function(e) {
                var t = e.commit
                  , o = e.state;
                e.dispatch;
                return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function(e) {
                    $.post("/service/explore2/getSecretBoxBaseConfig", {
                        secretBoxCode: o.secretBoxCode,
                        secretKey: o.secretKey
                    }, function(o, n, s) {
                        1 == o.status ? (o.config && t("set_secretBoxBaseConfig", o.config),
                        e()) : 1e4 == o.status ? alert("系统正在维护中，预计15分钟，请您稍后再试！") : alert("网络错误，请刷新重试！")
                    })
                }
                )
            },
            getSecretBoxFromWeChat: function(e) {
                var t = e.commit
                  , o = e.state
                  , n = e.dispatch;
                $.post("/service/explore2/getSecretBoxFromWeChat", {
                    secretBoxCode: o.secretBoxCode,
                    secretKey: o.secretKey,
                    uuid: localStorage.sbox_wxopenid,
                    preUserId: location.href.split("#")[1].split("?")[0].split("code")[0].split("followid")[0].split("_")[1] || 0,
                    degree: parseInt(location.href.split("#")[1].split("?")[0].split("code")[0].split("followid")[0].split("_")[2] || 0),
                    reason: localStorage.reason
                }, function(e, s, i) {
                    if ("5641478274715" == o.secretBoxCode && localStorage.removeItem("reason"),
                    t("set_eal", e.eal),
                    1 == e.status) {
                        if (!e.registerInfo || "5612301111002" != e.secretBox.code && "5612301111004" != e.secretBox.code || (201102 == e.registerInfo.boxId && "5612301111004" == e.secretBox.code && (location.href = "https://x201102.fengxueba.com/index.html#5612301111002-3DTogGW2RWeupZ389OpuPLZmYfh2pzY6"),
                        201104 == e.registerInfo.boxId && "5612301111002" == e.secretBox.code && (location.href = "https://x201104.fengxueba.com/index.html#5612301111004-3kH6r1XqYjkxAn9bx9jGCIyR5mOu6mk0")),
                        t("set_exploreData", e),
                        e.secretBox.config.exploreBattle && !e.secretBox.config.pkToBox) {
                            var a = window.location.href
                              , r = "https://battle.fengchuanba.com/index.html#";
                            location.href.indexOf("hairui") >= 0 && (r = "https://pk.hairuikeji.com/index.html#"),
                            location.href.indexOf("sosokx") >= 0 && (r = "https://pk.sosokx.com/index.html#");
                            var c = a.lastIndexOf("#");
                            r += a.substring(c + 1, a.length),
                            location.href = r
                        }
                        if (1 == e.secretBox.config.isFollow && e.secretBox.config.followAppid) {
                            var l = (new Date).getTime() + 1e4;
                            if (e.secretBox.bizConfig.followExpire && (l = e.secretBox.bizConfig.followExpire,
                            l = Date.parse(l.replace(/\-/g, "/"))),
                            l > (new Date).getTime()) {
                                var u = localStorage.getItem("follow_" + o.secretBoxCode);
                                u && 28 == u.length || n("getFollowOpenId")
                            }
                        }
                        if (e.secretBox.config.regStyle) {
                            var h = getTemplate(98, o.secretBox.config.regStyle);
                            t("set_registerTemplate", h)
                        }
                        !e.secretBox.config.continueExplore && e.secretBox.config.switchScreen && localStorage.removeItem("switchScreen")
                    } else if (140415 == e.status)
                        t("set_AlertModal", {
                            alertMsg: "请在【海报新闻】客户端中参加活动！",
                            alertTitle: "提示",
                            showAlert: 140415
                        });
                    else {
                        if (196935 == e.status)
                            return void alert("您未被授权参与此活动！");
                        170883 == e.status ? location.href = "https://zhzf.sipac.gov.cn/educationTraining/" : alert("网络错误，请刷新重试！")
                    }
                })
            },
            getSecretBoxFromPC: function(e) {
                var t = e.commit
                  , o = e.state;
                e.dispatch;
                $.post("/service/explore2/getSecretBoxFromPC", {
                    secretBoxCode: o.secretBoxCode,
                    secretKey: o.secretKey,
                    preUserId: location.href.split("#")[1].split("?")[0].split("code")[0].split("followid")[0].split("_")[1] || 0,
                    degree: parseInt(location.href.split("#")[1].split("?")[0].split("code")[0].split("followid")[0].split("_")[2] || 0)
                }, function(e, o, n) {
                    t("set_eal", e.eal),
                    1 == e.status ? t("set_exploreDataPC", e) : 2 == e.status ? location.href = "https://explore.fengchuanba.com/wxcj.html" : alert("网络错误，请刷新重试！")
                })
            },
            getFollowOpenId: function(e) {
                e.commit;
                var t = e.state
                  , o = (e.dispatch,
                t.secretBox.bizConfig.followDomain);
                t.secretBox.bizConfig.eDomain && (o = t.secretBox.bizConfig.eDomain);
                var n = location.href.split("#")[1].split("?")[0].split("code")[0].split("followid")[0].split("?")[0];
                if (t.secretBox.bizConfig.domain) {
                    var s;
                    return s = "@" + t.secretBox.bizConfig.domain.split(".")[0],
                    void (location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + t.secretBox.config.followAppid + "&redirect_uri=https%3A%2F%2Fwechat.fengchuanba.com%2Fwechat%2FsecretboxOpenidCallback20250312.html&response_type=code&scope=snsapi_base&state=" + n + "@" + o + s + "&component_appid=wxffbafd606db6e004#wechat_redirect")
                }
                location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + t.secretBox.config.followAppid + "&redirect_uri=https%3A%2F%2Fwechat.fengchuanba.com%2Fwechat%2FsecretboxOpenidCallback2.html&response_type=code&scope=snsapi_base&state=" + n + "@" + o + "&component_appid=wxffbafd606db6e004#wechat_redirect"
            },
            showWelcome: function showWelcome(_ref5) {
                var commit = _ref5.commit
                  , state = _ref5.state
                  , bgImg = state.secretBox.coverImage || state.secretBox.bgImage;
                document.title = removeHTMLTag(state.secretBox.title),
                state.secretBox.config.isCopy && document.querySelector("body").setAttribute("style", "-moz-user-select: text; -webkit-user-select: text; -ms-user-select: text;-khtml-user-select: text; -o-user-select:text; user-select: text;");
                var paramJson = {};
                (state.secretBox.config.getLocation || state.secretBox.config.getLotLocation) && (paramJson.getLocation = !0),
                state.secretBox.config.shareFriend && (paramJson.shareFriend = !0);
                var shareUrl = null;
                state.secretBox.config.shareUrl && (shareUrl = "https://" + location.host + "/share.html#" + state.secretBox.code,
                window.location.href.indexOf("fengchuanba") > -1 && state.secretBox.bizConfig.followDomain && state.secretBox.bizConfig.eDomain && (shareUrl = "https://" + state.secretBox.bizConfig.followDomain + ".fengchuanba.com/share.html#" + state.secretBox.code)),
                Object(__WEBPACK_IMPORTED_MODULE_4__wechat__.e)(state.secretBoxBaseConfig, removeHTMLTag(state.secretBox.title), state.secretBox.config.shareDesc || removeHTMLTag(state.secretBox.notes), state.secretBox.config.shareImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(state.secretBox.config.shareImg) : state.secretBox.logo ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(state.secretBox.logo) : __WEBPACK_IMPORTED_MODULE_7__configs__.d, shareUrl, 0, paramJson, function() {
                    state.secretBox.shareChance && state.secretBox.shareChance > 0 && 0 == state.shareCount && (commit("set_playChance", state.playChance + state.secretBox.shareChance),
                    commit("set_shareModal", {
                        showShare: !1
                    })),
                    commit("set_shareCount", state.shareCount + 1),
                    "551513049808" == state.secretBox.code && commit("set_shareCount", 1),
                    -1 == state.secretBox.config.exploreAfterShare && state.exploreAfterShareModal.showShare && (state.secretBox.config.exploreAfterShare = 0,
                    commit("set_exploreAfterShareModal", {
                        showShare: !1
                    }))
                });
                var tmp = "";
                tmp = "other" == state.dev ? getTemplate(0, "Pc") : 2 == state.secretBox.config.coverMode ? getTemplate(0, "Diy") : getTemplate(0, state.secretBox.style),
                "551203401184" != state.secretBox.code && "553315909237" != state.secretBox.code || (document.body.maxWidth = "1024px",
                document.getElementsByTagName("html")[0].style.maxWidth = "1024px",
                document.getElementById("app").style.maxWidth = "1024px",
                tmp = getTemplate(0, state.secretBox.style));
                var img = new Image;
                if (img.src = bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b,
                "5691465193919" == state.secretBox.code && (img.src = "https://e5691465193919.fengchuanba.com/imgs/bg.jpg",
                bgImg = "https://e5691465193919.fengchuanba.com/imgs/bg.jpg"),
                (state.secretBox.status > 2 || state.secretBox.endTime && (new Date).getTime() > new Date(state.secretBox.endTime.replace(/-/g, "/")).getTime()) && 5621028584688 != state.secretBox.code)
                    return document.body.style.backgroundImage = "url(" + (bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b) + ")",
                    commit("set_showSupport", !state.secretBox.bizConfig.advSlogan && !state.secretBox.bizConfig.funRemoveLogo && state.secretBox.bizConfig.bizLevel < 4),
                    commit("set_showAdvert", state.secretBox.bizConfig.advSlogan || state.secretBox.bizConfig.advName),
                    localStorage.setItem("sbox_userid", state.userId),
                    void (553332684343 == state.secretBox.code ? commit("set_currentView", "finish32833") : 5691076406697 == state.secretBox.code ? commit("set_currentView", "finish174697") : commit("set_currentView", "finish"));
                if (img.onload = function() {
                    if (state.secretBox.config.showScene && state.secretBox.config.sceneId && 1 != state.secretBox.config.sceneOrder)
                        555796614158 == state.secretBox.code ? (document.body.style.backgroundImage = "url(http://content.fengchuanba.com/file/company/59645/76118/bg.jpg)",
                        document.body.style.backgroundSize = "100% 100%") : state.scenePages.page0 && (document.body.style.backgroundImage = "url(" + Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(eval("(" + state.scenePages.page0 + ")").backimg) + ")");
                    else if (555796614158 == state.secretBox.code ? document.body.style.backgroundImage = "url(http://content.fengchuanba.com/file/user/59645/material20200519171819.jpg)" : document.body.style.backgroundImage = "url(" + (bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b) + ")",
                    state.secretBox.config.enableVideo && null != state.secretBox.config.videoMoment && 1 == state.secretBox.config.videoMoment) {
                        if (!state.secretBox.config.videoTimes || 1 != state.secretBox.config.videoTimes && 3 != state.secretBox.config.videoTimes)
                            return localStorage.setItem("sbox_userid", state.userId),
                            void commit("set_currentView", "boxVideo");
                        if (0 == state.videoChance)
                            return localStorage.setItem("sbox_userid", state.userId),
                            void commit("set_currentView", "boxVideo")
                    }
                    if (commit("set_isDemo", 1 == state.secretBox.status),
                    commit("set_showSupport", !state.secretBox.bizConfig.advSlogan && !state.secretBox.bizConfig.funRemoveLogo && state.secretBox.bizConfig.bizLevel < 4),
                    commit("set_showAdvert", state.secretBox.bizConfig.advSlogan || state.secretBox.bizConfig.advName),
                    localStorage.setItem("sbox_userid", state.userId),
                    0 == state.secretBox.checkPointCount && state.secretBox.lottery && 1 == state.secretBox.lottery.enable)
                        return state.secretBox.style ? commit("set_currentView", "lottery" + state.secretBox.style) : commit("set_currentView", "lottery"),
                        void ("551919059901" == state.secretBox.code && Object(__WEBPACK_IMPORTED_MODULE_4__wechat__.e)(state.secretBoxBaseConfig, "我是第" + (state.secretBox.player + 201) + "位倡导者，文化市场法制宣传，我们在行动！", state.secretBox.config.shareDesc || removeHTMLTag(state.secretBox.notes), state.secretBox.config.shareImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(state.secretBox.config.shareImg) : state.secretBox.logo ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(state.secretBox.logo) : __WEBPACK_IMPORTED_MODULE_7__configs__.d, shareUrl, 0, paramJson, function() {
                            state.secretBox.shareChance && state.secretBox.shareChance > 0 && 0 == state.shareCount && commit("set_playChance", state.playChance + state.secretBox.shareChance),
                            commit("set_shareCount", state.shareCount + 1),
                            commit("set_successShareCount", 1),
                            commit("set_shareModal", {
                                showShare: !1
                            })
                        }));
                    state.secretBox.config.exploreLive && 1 == state.secretBox.config.exploreLive ? commit("set_currentView", "liveError") : commit("set_currentView", tmp)
                }
                ,
                "553899589752" == state.secretBox.code) {
                    var bgmAudio = document.getElementById("bgm");
                    bgmAudio && bgmAudio.play()
                }
            },
            startGame: function startGame(_ref6) {
                var commit = _ref6.commit
                  , state = _ref6.state
                  , dispatch = _ref6.dispatch;
                if (!localStorage.sbox_userid)
                    return localStorage.clear(),
                    void location.reload();
                if (1 == state.submitType && (commit("set_wholeExplores", new Array(101)),
                commit("set_wholeQuestions", new Array(101))),
                commit("set_rightNum", 0),
                state.eal)
                    commit("set_AlertModal", {
                        alertTitle: "消息",
                        alertMsg: state.secretBox.config.ealDesc || "抱歉，您未被授权参加此活动！",
                        showAlert: !0
                    });
                else if (1 != state.secretBox.register || state.registerInfo) {
                    if ("5611100994031" == state.secretBoxCode && !state.showGate)
                        return commit("set_currentView", "gate"),
                        void commit("set_showGate", !0);
                    if (22993 != state.secretBox.style) {
                        if (null != state.totalPlayChance && state.totalPlayChance <= 0) {
                            var alertMsg = "抱歉，您的参与机会已经用完了，感谢参与活动！";
                            return state.secretBox.config.noChanceNotes && (alertMsg = state.secretBox.config.noChanceNotes),
                            void commit("set_AlertModal", {
                                alertTitle: "消息",
                                alertMsg: alertMsg,
                                showAlert: !0
                            })
                        }
                        $.post("/service/explore2/startExplore", {
                            secretBoxCode: state.secretBoxCode,
                            secretKey: state.secretKey,
                            uuid: localStorage.sbox_wxopenid,
                            userId: localStorage.sbox_userid,
                            preUserId: location.href.split("#")[1].split("?")[0].split("code")[0].split("followid")[0].split("_")[1] || 0,
                            degree: parseInt(location.href.split("#")[1].split("?")[0].split("_")[2] || 0),
                            isReged: null != state.registerInfo ? 1 : 0,
                            ll: localStorage.LL || "",
                            exploreId: localStorage.exploreId || 0,
                            type: localStorage.exploreType || ""
                        }, function(data, textStatus, xhr) {
                            if (data || localStorage.clear(),
                            -100 != data.status)
                                if (-98 != data.status)
                                    if (140415 == data.status && commit("set_AlertModal", {
                                        alertTitle: "消息",
                                        alertMsg: "请在【海报新闻】客户端中参加活动！",
                                        showAlert: !0
                                    }),
                                    84575 == data.status && commit("set_AlertModal", {
                                        alertTitle: "消息",
                                        alertMsg: "该比赛胜负已出！",
                                        showAlert: !0
                                    }),
                                    183625 != data.status)
                                        if (195230 != data.status)
                                            if (195231 != data.status)
                                                if (195232 != data.status)
                                                    if (186075 != data.status)
                                                        if (186076 != data.status)
                                                            if (135569 != data.status)
                                                                if (136475 != data.status && 180004 != data.status)
                                                                    if (180845 != data.status)
                                                                        if (3 != data.status && 5 != data.status)
                                                                            if (4 != data.status)
                                                                                if (-99 != data.status)
                                                                                    if (2 != data.status) {
                                                                                        if (null != data.playChance && data.playChance <= 0) {
                                                                                            var _alertMsg = ""
                                                                                              , shareChanceText = state.secretBox.shareChance > 99 ? "无限" : state.secretBox.shareChance;
                                                                                            if (state.secretBox.shareChance > 0 && 0 == data.shareCount) {
                                                                                                if (state.secretBox.config.dayCycle && 1 == state.secretBox.config.dayCycle ? (_alertMsg = "抱歉，您今天的参与机会用完啦，分享朋友圈后可以获得" + shareChanceText + "次参与机会哦~",
                                                                                                "5681359931534" == state.secretBox.code && (_alertMsg = "抱歉，您今天的参与机会用完啦，分享至朋友圈或者微信好友后可以获得" + shareChanceText + "次参与机会哦~"),
                                                                                                state.secretBox.config.shareFriend && (_alertMsg = "抱歉，您今天的参与机会用完啦，分享后可以获得" + shareChanceText + "次参与机会哦~")) : state.secretBox.config.dayCycle && 2 == state.secretBox.config.dayCycle ? (_alertMsg = "抱歉，您本周的参与机会用完啦，分享朋友圈后可以获得" + shareChanceText + "次参与机会哦~",
                                                                                                state.secretBox.config.shareFriend && (_alertMsg = "抱歉，您本周的参与机会用完啦，分享后可以获得" + shareChanceText + "次参与机会哦~")) : state.secretBox.config.dayCycle && 3 == state.secretBox.config.dayCycle ? (_alertMsg = "抱歉，您本月的参与机会用完啦，分享朋友圈后可以获得" + shareChanceText + "次参与机会哦~",
                                                                                                state.secretBox.config.shareFriend && (_alertMsg = "抱歉，您本月的参与机会用完啦，分享后可以获得" + shareChanceText + "次参与机会哦~")) : (_alertMsg = "抱歉，您的参与机会已经用完了，分享朋友圈后可以获得" + shareChanceText + "次参与机会哦~",
                                                                                                state.secretBox.config.shareFriend && (_alertMsg = "抱歉，您的参与机会已经用完了，分享后可以获得" + shareChanceText + "次参与机会哦~")),
                                                                                                "5691076406697" == state.secretBox.code && (_alertMsg = "抱歉，您今天的参与机会用完啦，分享好友或者好友群<br>可以获得" + shareChanceText + "次参与机会哦~",
                                                                                                setTimeout(function() {
                                                                                                    commit("set_shareModal", {
                                                                                                        content: _alertMsg,
                                                                                                        showShare: !1
                                                                                                    })
                                                                                                }, 5e3)),
                                                                                                commit("set_isStart", !1),
                                                                                                "66110838221191" == state.secretBox.code)
                                                                                                    return;
                                                                                                return void commit("set_shareModal", {
                                                                                                    content: _alertMsg,
                                                                                                    showShare: !0
                                                                                                })
                                                                                            }
                                                                                            return state.secretBox.config.dayCycle && 1 == state.secretBox.config.dayCycle ? (_alertMsg = "抱歉，您今天的参与机会用完了，请明天再来吧！",
                                                                                            "5611120594099" != state.secretBoxCode && "5611120594051" != state.secretBoxCode && "555996563448" != state.secretBoxCode || 1 != data.needRegister || (_alertMsg = "抱歉，您今天的参与机会已经用完了，分享朋友圈并注册鄂尔多斯手机台APP即可多两次参与机会，请使用您登记时所留的手机号注册！<br/><img style='width: 60%;margin-left: 20%;' src='https://content.fengchuanba.com/file/user/11090/material20220125143329.jpg'>"),
                                                                                            "5691374335306" == state.secretBox.code && (_alertMsg = "您本期答题机会已使用完毕，期待您的下次参与")) : _alertMsg = state.secretBox.config.dayCycle && 2 == state.secretBox.config.dayCycle ? "抱歉，您本周的参与机会用完了，请下周再来吧！" : state.secretBox.config.dayCycle && 3 == state.secretBox.config.dayCycle ? "抱歉，您本月的参与机会用完了，请下个月再来吧！" : "抱歉，您的参与机会已经用完了，感谢参与活动！",
                                                                                            state.secretBox.config.noChanceNotes && (_alertMsg = state.secretBox.config.noChanceNotes),
                                                                                            void commit("set_AlertModal", {
                                                                                                alertTitle: "消息",
                                                                                                alertMsg: _alertMsg,
                                                                                                showAlert: !0
                                                                                            })
                                                                                        }
                                                                                        state.secretBox.config.switchScreen && (state.continueExplore || localStorage.removeItem("switchScreen"),
                                                                                        document.addEventListener("visibilitychange", visibleChange)),
                                                                                        data = processData(data),
                                                                                        commit("set_playChance", data.playChance),
                                                                                        localStorage.exploreId = data.exploreDetail.exploreId;
                                                                                        var tmp = "";
                                                                                        if (state.secretBox.config.submitType && (2 == state.secretBox.config.submitType || 1 == state.secretBox.config.submitType)) {
                                                                                            for (var tempQArr = state.wholeQuestions, tempDArr = state.wholeExplores, idx = 0; idx < data.wholeExploreDetailList.length; idx++) {
                                                                                                var tempIdx = data.wholeExploreDetailList[idx].checkPointSeq;
                                                                                                if (data.wholeQuestionList[idx].content = processContent(data.wholeQuestionList[idx].content, data.wholeExploreDetailList[idx].id % 10 + 1),
                                                                                                2 == data.wholeQuestionList[idx].pattern)
                                                                                                    for (var i = 0; i < data.wholeQuestionList[idx].choiceList.length; i++)
                                                                                                        data.wholeQuestionList[idx].choiceList[i].content = processChoice(data.wholeQuestionList[idx].choiceList[i].content, data.wholeExploreDetailList[idx].id % 2);
                                                                                                tempQArr[tempIdx] = data.wholeQuestionList[idx],
                                                                                                tempDArr[tempIdx] = data.wholeExploreDetailList[idx]
                                                                                            }
                                                                                            commit("set_wholeQuestions", tempQArr),
                                                                                            commit("set_wholeExplores", tempDArr),
                                                                                            1 == state.secretBox.config.submitType && commit("set_answer", data.exploreDetail.answer)
                                                                                        }
                                                                                        state.secretBox.config.submitType && 2 == state.secretBox.config.submitType ? tmp = getTemplate(101, state.secretBox.config.cpStyle) : state.secretBox.config.enableAdCpStyle ? (commit("set_gameScore", data.gs || 0),
                                                                                        tmp = "specialStyle") : tmp = getTemplate(data.question.pattern, state.secretBox.config.cpStyle || data.question.style);
                                                                                        var bgImg = state.secretBox.bgImage || state.secretBox.coverImage;
                                                                                        if (document.body.style.backgroundImage = "url(" + (bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b) + ")",
                                                                                        37203 == state.secretBox.config.cpStyle && (document.body.style.backgroundImage = "url(http://content.fengchuanba.com/file/company/37741/37203/crjhDB.jpg)"),
                                                                                        555796614158 == state.secretBox.code && (document.body.style.backgroundImage = "url(http://content.fengchuanba.com/file/company/59645/76118/bg.jpg)"),
                                                                                        commit("set_isDemo", !1),
                                                                                        commit("set_exploreDetail", data.exploreDetail),
                                                                                        commit("set_qConfig", eval("(" + data.question.config + ")")),
                                                                                        state.secretBox.config.perLeastTime && commit("set_showTipMask", !0),
                                                                                        state.continueExplore && state.secretBox.config.switchScreen) {
                                                                                            var closeCount = localStorage.getItem("switchScreen") || 0;
                                                                                            if (localStorage.setItem("switchScreen", Number(closeCount) + 1),
                                                                                            closeCount >= state.secretBox.config.switchScreen - 1)
                                                                                                return state.question.id = 0,
                                                                                                dispatch("failureExplore"),
                                                                                                commit("set_AlertModal", {
                                                                                                    alertTitle: "消息",
                                                                                                    alertMsg: "您的切屏次数达到限制，已结束答题！",
                                                                                                    showAlert: !0
                                                                                                }),
                                                                                                localStorage.removeItem("switchScreen"),
                                                                                                void document.removeEventListener("visibilitychange", visibleChange)
                                                                                        }
                                                                                        if (commit("set_currentView", tmp),
                                                                                        state.secretBox.config.submitType && commit("set_submitType", state.secretBox.config.submitType),
                                                                                        0 == state.submitType && commit("set_life", state.secretBox.wrongTime),
                                                                                        state.secretBox.config.totalTimeLimit && commit("set_totalTime", state.secretBox.config.totalTimeLimit),
                                                                                        "5641107497637" == state.secretBoxCode && (data.question.correct = data.correct,
                                                                                        data.question.wrong = data.wrong),
                                                                                        commit("set_question", data.question),
                                                                                        commit("set_startTotalTime", Date.now()),
                                                                                        state.secretBox.config.continueExplore && 1 == state.secretBox.config.continueExplore)
                                                                                            if (1 == data.continueExplore)
                                                                                                0 == state.submitType && data.wrongNum > 0 && commit("set_life", state.secretBox.wrongTime - data.wrongNum),
                                                                                                state.secretBox.config.totalTimeLimit && (commit("set_totalTime", data.restTotalTime),
                                                                                                commit("set_startTotalTime", data.startTime));
                                                                                            else if (2 == data.continueExplore)
                                                                                                return void dispatch("finishByTimeout");
                                                                                        data.question && data.question.timeLimit > 0 && 0 == state.submitType && !state.secretBox.config.enableAdCpStyle && dispatch("questionTimeFlow"),
                                                                                        state.secretBox.config.totalTimeLimit > 0 && dispatch("totalTimeFlow"),
                                                                                        "553955109989" == state.secretBoxCode && dispatch("webTimeFlow"),
                                                                                        data.exploreDetailCount && commit("set_exploreDetailCount", data.exploreDetailCount)
                                                                                    } else
                                                                                        commit("set_currentView", "finish");
                                                                                else
                                                                                    commit("set_AlertModal", {
                                                                                        alertTitle: "消息",
                                                                                        alertMsg: state.secretBox.config.ealDesc || "抱歉，您未被授权参加此活动！",
                                                                                        showAlert: !0
                                                                                    });
                                                                            else
                                                                                commit("set_AlertModal", {
                                                                                    alertTitle: "消息",
                                                                                    alertMsg: "抱歉，您的积分未达到参与活动的条件！",
                                                                                    showAlert: !0
                                                                                });
                                                                        else {
                                                                            var currentCheckPoint = 1;
                                                                            3 == data.status && (currentCheckPoint = Math.floor(data.serialCheckPoint));
                                                                            var boxCode = ""
                                                                              , boxKey = "";
                                                                            if (state.serialBox && state.serialBox.boxs) {
                                                                                var sboxs = eval("(" + state.serialBox.boxs + ")")
                                                                                  , boxArray = sboxs.boxs;
                                                                                boxCode = boxArray[currentCheckPoint - 1].boxcode,
                                                                                boxKey = boxArray[currentCheckPoint - 1].boxkey
                                                                            }
                                                                            self.location.href = "https://e" + boxCode + ".fengchuanba.com/index.html#" + boxCode + "-" + boxKey
                                                                        }
                                                                    else
                                                                        commit("set_AlertModal", {
                                                                            alertTitle: "消息",
                                                                            alertMsg: "请先通过基础答题！",
                                                                            showAlert: !0
                                                                        });
                                                                else
                                                                    commit("set_AlertModal", {
                                                                        alertTitle: "消息",
                                                                        alertMsg: "必须完成学习后才能答题！",
                                                                        showAlert: !0
                                                                    });
                                                            else
                                                                commit("set_AlertModal", {
                                                                    alertTitle: "消息",
                                                                    alertMsg: "必须完成学习后才能答题抽奖！",
                                                                    showAlert: !0
                                                                });
                                                        else
                                                            commit("set_AlertModal", {
                                                                alertTitle: "消息",
                                                                alertMsg: "很遗憾！该游戏本轮参与人数已经超出上限10人，请等待下一轮，谢谢～",
                                                                showAlert: !0
                                                            });
                                                    else
                                                        commit("set_AlertModal", {
                                                            alertTitle: "消息",
                                                            alertMsg: "您本轮已经参与过了，如果未获胜需要再次参与，请耐心等待下一轮，谢谢～",
                                                            showAlert: !0
                                                        });
                                                else
                                                    commit("set_AlertModal", {
                                                        alertTitle: "消息",
                                                        alertMsg: "已经答对的题目不能重复作答！",
                                                        showAlert: !0
                                                    });
                                            else
                                                commit("set_AlertModal", {
                                                    alertTitle: "消息",
                                                    alertMsg: "未输入谜底，不能答题！",
                                                    showAlert: !0
                                                });
                                        else
                                            commit("set_AlertModal", {
                                                alertTitle: "消息",
                                                alertMsg: "未找到该谜题，确认编号是否正确！",
                                                showAlert: !0
                                            });
                                    else
                                        commit("set_AlertModal", {
                                            alertTitle: "消息",
                                            alertMsg: "您的成绩已录入成功，不能继续答题！",
                                            showAlert: !0
                                        });
                                else
                                    commit("set_AlertModal", {
                                        alertTitle: "消息",
                                        alertMsg: "很遗憾，该活动参与人数已经超出限制，您不能参加了，请联系主办方!",
                                        showAlert: !0
                                    });
                            else
                                commit("set_AlertModal", {
                                    alertTitle: "消息",
                                    alertMsg: "不允许在两种设备上同时答题！",
                                    showAlert: !0
                                })
                        })
                    } else
                        dispatch("tempStartExplore")
                } else
                    commit("set_currentView", "register")
            },
            reStartGame: function reStartGame(_ref7) {
                var commit = _ref7.commit
                  , state = _ref7.state
                  , dispatch = _ref7.dispatch
                  , bgImg = state.secretBox.coverImage || state.secretBox.bgImage;
                document.title = removeHTMLTag(state.secretBox.title),
                commit("set_isStart", !1),
                commit("set_choosed", !1),
                localStorage.sbox_wxopenid = "",
                localStorage.sbox_userid = "";
                var userInfoTemp = {};
                commit("set_registerInfo", userInfoTemp);
                var tmp = "";
                tmp = "other" == state.dev ? getTemplate(0, "Pc") : getTemplate(0, state.secretBox.style),
                "551203401184" != state.secretBox.code && "553315909237" != state.secretBox.code || (document.body.maxWidth = "1024px",
                document.getElementById("app").style.maxWidth = "1024px",
                tmp = getTemplate(0, state.secretBox.style));
                var img = new Image;
                img.src = bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b,
                state.secretBox.status > 2 || state.secretBox.endTime && (new Date).getTime() > new Date(state.secretBox.endTime.replace(/-/g, "/")).getTime() ? document.body.style.backgroundImage = "url(" + (bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b) + ")" : img.onload = function() {
                    state.secretBox.config.showScene && state.secretBox.config.sceneId ? 555796614158 == state.secretBox.code ? document.body.style.backgroundImage = "url(http://content.fengchuanba.com/file/company/59645/76118/bg.jpg)" : document.body.style.backgroundImage = "url(" + Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(eval("(" + state.scenePages.page0 + ")").backimg) + ")" : 555796614158 == state.secretBox.code ? document.body.style.backgroundImage = "url(http://content.fengchuanba.com/file/company/59645/76118/bg.jpg)" : document.body.style.backgroundImage = "url(" + (bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b) + ")",
                    commit("set_currentView", tmp)
                }
            },
            checkEqualsDetail: function(e, t) {
                var o = e.dispatch
                  , n = e.commit
                  , s = e.state;
                if (s.answer && s.answer != s.wholeExplores[t].answer) {
                    var i = s.wholeExplores;
                    i[t].answer = s.answer,
                    n("set_wholeExplores", i),
                    $.post("/service/explore2/updateExploreDetail", {
                        answer: s.answer,
                        exploreDetailId: s.exploreDetail.id,
                        exploreId: s.exploreDetail.exploreId,
                        visitorId: localStorage.sbox_userid || 0,
                        questionId: s.question.id,
                        secretBoxCode: s.secretBoxCode
                    }, function(e, t, s) {
                        if (2 == e.status)
                            return o("totalTimeStop"),
                            void n("set_currentView", "finish")
                    })
                }
            },
            getSecretBoxBack: function(e) {
                e.commit;
                var t = e.state
                  , o = (e.dispatch,
                parseInt(t.secretBox.checkPointCount / 2) + 1);
                if (t.exploreDetail.checkPointSeq == o) {
                    var n = parseInt(t.exploreDetail.exploreId % 1e4 / 10);
                    0 == n && (n = 333);
                    var s = t.exploreDetail.exploreId % 1e3;
                    0 == s && (s = 666);
                    var i = t.exploreDetail.checkPointSeq + "" + parseInt(t.exploreDetail.exploreId / n) + parseInt(localStorage.sbox_userid / s);
                    $.post("/service/explore2/getSecretBoxBack", {
                        secretBoxCode: t.secretBoxCode,
                        v: localStorage.sbox_userid,
                        e: t.exploreDetail.exploreId,
                        i: i
                    }, function(e, t, o) {}).error(function(e, t, o) {})
                }
            },
            showWholePreQuestion: function showWholePreQuestion(_ref10) {
                var _this = this
                  , dispatch = _ref10.dispatch
                  , commit = _ref10.commit
                  , state = _ref10.state;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
                    var nowCheckSeqIdx, nextMission;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                        for (; ; )
                            switch (_context.prev = _context.next) {
                            case 0:
                                return _context.next = 2,
                                sleep(50);
                            case 2:
                                return commit("set_currentView", "blank"),
                                _context.next = 5,
                                sleep(50);
                            case 5:
                                nowCheckSeqIdx = state.exploreDetail.checkPointSeq,
                                commit("set_choosed", !1),
                                dispatch("checkEqualsDetail", nowCheckSeqIdx),
                                nowCheckSeqIdx--,
                                commit("set_question", state.wholeQuestions[nowCheckSeqIdx]),
                                commit("set_answer", state.wholeExplores[nowCheckSeqIdx].answer),
                                commit("set_exploreDetail", state.wholeExplores[nowCheckSeqIdx]),
                                commit("set_qConfig", eval("(" + state.wholeQuestions[nowCheckSeqIdx].config + ")")),
                                nextMission = getTemplate(state.wholeQuestions[nowCheckSeqIdx].pattern, state.secretBox.config.cpStyle || state.wholeQuestions[nowCheckSeqIdx].style),
                                commit("set_currentView", nextMission);
                            case 15:
                            case "end":
                                return _context.stop()
                            }
                    }, _callee, _this)
                }))()
            },
            countMultipleScore: function(e) {
                e.dispatch;
                for (var t = e.commit, o = e.state, n = o.answer.split("/"), s = 0; s < n.length; s++)
                    if (o.question.answer.indexOf(n[s]) < 0)
                        return;
                t("set_answerValue", 1)
            },
            wrongAnswer: function(e, t) {
                var o = e.dispatch
                  , n = e.commit
                  , s = e.state;
                "5691259600334" == s.secretBox.code && (t = s.answer),
                n("set_answer", t),
                n("set_correct", !1),
                n("set_answerValue", 0),
                0 == s.submitType && n("set_life", s.life - 1),
                s.question.timeLimit > 0 && n("clear_questionTimeInterval"),
                1 == s.secretBox.config.exploreAfterShare && 0 == s.life && s.exploreDetail.checkPointSeq < s.secretBox.checkPointCount && (n("set_life", s.life + 1),
                s.secretBox.config.exploreAfterShare = -1,
                s.exploreAfterShareModal.content = "您的错题次数已经用完，分享到朋友圈后可获得一次复活机会！",
                s.secretBox.config.shareFriend && (s.exploreAfterShareModal.content = "您的错题次数已经用完，分享给朋友或朋友圈后可获得一次复活机会！"),
                ["555669799839", "555760709032"].includes(s.secretBoxCode) && s.correctnum >= 20 ? s.exploreAfterShareModal.callbackBtn = "不分享，直接抽奖" : (s.exploreAfterShareModal.callbackBtn = "不分享，直接看成绩",
                s.secretBox.config.failureAction || (s.exploreAfterShareModal.callbackBtn = "不分享，直接结束")),
                s.exploreAfterShareModal.showShare = !0),
                o("submitNextQuestion", {
                    answer: t
                })
            },
            rightAnswer: function(e, t) {
                var o = e.dispatch
                  , n = e.commit
                  , s = e.state;
                if (n("set_answer", t),
                n("set_correct", !0),
                2 == s.secretBox.keepSecret) {
                    for (var i = 0, a = s.question.choiceList || [], r = 0; r < a.length; r++)
                        (t + "").indexOf(a[r].tag) >= 0 && (i += a[r].value || 0);
                    n("set_answerValue", i)
                } else
                    3 == s.secretBox.keepSecret && o("countQuestionScore");
                s.question.timeLimit > 0 && n("clear_questionTimeInterval"),
                n("set_correctnum", s.correctnum + 1),
                o("getNextQuestion")
            },
            countQuestionScore: function(e) {
                var t = e.commit
                  , o = e.state;
                e.dispatch;
                t("set_answerValue", 2 == o.question.pattern ? o.question.answer.length > 1 ? o.secretBox.config.multipleScore : o.secretBox.config.singleScore : 3 == o.question.pattern ? o.secretBox.config.judgeScore : 1 == o.question.pattern ? o.secretBox.config.qandaScore : 13 == o.question.pattern ? o.secretBox.config.packScore : o.secretBox.config.singleScore)
            },
            getNextQuestion: function(e) {
                var t = e.commit
                  , o = e.state
                  , n = e.dispatch;
                if (o.exploreDetail.checkPointSeq == o.secretBox.checkPointCount && o.secretBox.config.showVerifyImg && 0 != o.secretBox.config.showVerifyImg && !o.verifyHack) {
                    if (1 != o.secretBox.config.showVerifyImg)
                        return t("clear_totalTimeInterval"),
                        void t("set_currentView", "verify");
                    var s = 0;
                    if (s = o.secretBox.checkPointCount < 10 ? o.secretBox.checkPointCount - 1 : o.secretBox.checkPointCount + o.secretBox.checkPointCount / 10,
                    o.secretBox.checkPointCount > 1 && o.exploretime <= s && o.correctnum == o.secretBox.checkPointCount - 1 && o.correct)
                        return t("clear_totalTimeInterval"),
                        void t("set_currentView", "verify")
                }
                o.totalTime <= 0 ? n("finishBytimeout") : o.life <= 0 ? n("finishByNoLife") : 22993 != o.secretBox.style ? 1 == o.submitType ? n("getNextQuestionFromCache") : n("getNextQuestionFromDB") : $.post("/service/temp/tempNextCheckPoint", {
                    userId: localStorage.sbox_userid || 0,
                    secretBoxCode: o.secretBoxCode,
                    secretKey: o.secretKey,
                    passMode: void 0 == o.secretBox.config.passMode ? 1 : o.secretBox.config.passMode,
                    checkPointSeq: o.exploreDetail.checkPointSeq,
                    questionId: o.exploreDetail.questionId,
                    answer: o.answer,
                    answerStatus: o.correct ? 1 : 0,
                    answerValue: o.answerValue,
                    exploreId: o.exploreDetail.exploreId,
                    exploreDetailId: o.exploreDetail.id,
                    errorTime: o.errorTime,
                    typeIndex: o.typeIndex
                }, function(e, s, i) {
                    t("set_answer", ""),
                    t("set_reason", ""),
                    callback && callback(e),
                    0 == o.submitType && 0 == e.result && t("set_life", o.life - 1),
                    n("processNextQuestion", e)
                }).error(function(e, o, n) {
                    t("set_currentView", "reload")
                })
            },
            getNextQuestionFromCache: function getNextQuestionFromCache(_ref16) {
                var _this2 = this
                  , commit = _ref16.commit
                  , state = _ref16.state
                  , dispatch = _ref16.dispatch;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
                    var nowCheckSeqIdx, nextMission, tempDArr;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                        for (; ; )
                            switch (_context2.prev = _context2.next) {
                            case 0:
                                if (nowCheckSeqIdx = state.exploreDetail.checkPointSeq + 1,
                                void 0 === state.wholeExplores[nowCheckSeqIdx]) {
                                    _context2.next = 19;
                                    break
                                }
                                return _context2.next = 5,
                                sleep(50);
                            case 5:
                                return commit("set_currentView", "blank"),
                                _context2.next = 8,
                                sleep(50);
                            case 8:
                                return dispatch("checkEqualsDetail", nowCheckSeqIdx - 1),
                                commit("set_choosed", !1),
                                commit("set_exploreDetail", state.wholeExplores[nowCheckSeqIdx]),
                                commit("set_question", state.wholeQuestions[nowCheckSeqIdx]),
                                commit("set_qConfig", eval("(" + state.wholeQuestions[nowCheckSeqIdx].config + ")")),
                                nextMission = getTemplate(state.wholeQuestions[nowCheckSeqIdx].pattern, state.secretBox.config.cpStyle || state.wholeQuestions[nowCheckSeqIdx].style),
                                commit("set_currentView", nextMission),
                                commit("set_answer", state.wholeExplores[nowCheckSeqIdx].answer),
                                _context2.abrupt("return");
                            case 19:
                                tempDArr = state.wholeExplores,
                                tempDArr[nowCheckSeqIdx - 1].answer = state.answer,
                                commit("set_wholeExplores", tempDArr),
                                dispatch("getNextQuestionFromDB");
                            case 23:
                            case "end":
                                return _context2.stop()
                            }
                    }, _callee2, _this2)
                }))()
            },
            getNextQuestionFromDB: function(e) {
                var t = e.commit
                  , o = e.state
                  , n = e.dispatch;
                $.post("/service/explore2/nextCheckPoint", {
                    userId: localStorage.sbox_userid || 0,
                    secretBoxCode: o.secretBoxCode,
                    secretKey: o.secretKey,
                    passMode: void 0 == o.secretBox.config.passMode ? 1 : o.secretBox.config.passMode,
                    checkPointSeq: o.exploreDetail.checkPointSeq,
                    questionId: o.exploreDetail.questionId,
                    answer: o.answer,
                    answerStatus: o.correct ? 1 : 0,
                    answerValue: o.answerValue,
                    exploreId: o.exploreDetail.exploreId,
                    exploreDetailId: o.exploreDetail.id,
                    errorTime: o.errorTime,
                    verifyCode: o.verifyCode
                }, function(e, s, i) {
                    return 10 == e.status ? (t("set_verifyHack", !1),
                    void t("set_verifyErrorMessage", e)) : (t("set_errorTime", 0),
                    t("set_answer", ""),
                    t("set_nextQuestionData", e),
                    t("set_getNextQuestionFlag", !0),
                    o.directNextQuestionFlag ? n("showNextQuestion") : void 0)
                }).error(function(e, o, n) {
                    t("set_currentView", "reload")
                })
            },
            showNextQuestion: function showNextQuestion(_ref18) {
                var _this3 = this
                  , commit = _ref18.commit
                  , state = _ref18.state
                  , dispatch = _ref18.dispatch;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
                    var data, audio, setHight, tempIdx, tempQArr, tempDArr, nextMission;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                        for (; ; )
                            switch (_context3.prev = _context3.next) {
                            case 0:
                                if (commit("set_startShowNextQuestion", !0),
                                !(!state.secretBox.config.submitType && state.secretBox.config.showAnswer && 5 != state.question.pattern && state.showSleep || state.secretBox.config.enableAdCpStyle)) {
                                    _context3.next = 4;
                                    break
                                }
                                return _context3.next = 4,
                                sleep(1e3);
                            case 4:
                                if (commit("set_getNextQuestionFlag", !1),
                                commit("set_directNextQuestionFlag", !0),
                                data = state.nextQuestionData,
                                3 != data.status || 1 != data.result || !state.secretBox.config.enableAdCpStyle) {
                                    _context3.next = 12;
                                    break
                                }
                                return commit("set_gameQuestion", !1),
                                commit("set_gameStart", !0),
                                commit("set_life", -1),
                                _context3.abrupt("return");
                            case 12:
                                if (state.secretBox.bgVoice && !state.selfStopBgm && (audio = document.getElementById("bgm"),
                                audio.play()),
                                555796614158 == state.secretBox.code && (document.body.style.transition = "1s",
                                state.exploreDetail.checkPointSeq <= 20 && (setHight = 5 * state.exploreDetail.checkPointSeq,
                                document.body.style.backgroundPosition = "0px " + setHight + "%")),
                                !(state.totalTime <= 0)) {
                                    _context3.next = 17;
                                    break
                                }
                                return commit("clear_totalTimeInterval"),
                                _context3.abrupt("return");
                            case 17:
                                if (!(state.life <= 0)) {
                                    _context3.next = 30;
                                    break
                                }
                                if (!(1 == state.secretBox.config.exploreAfterShare && 0 == state.life && state.exploreDetail.checkPointSeq < state.secretBox.checkPointCount)) {
                                    _context3.next = 28;
                                    break
                                }
                                commit("set_life", state.life + 1),
                                state.secretBox.config.exploreAfterShare = -1,
                                state.exploreAfterShareModal.content = "您的错题次数已经用完，分享到朋友圈后可获得一次复活机会！",
                                state.secretBox.config.shareFriend && (state.exploreAfterShareModal.content = "您的错题次数已经用完，分享给朋友或朋友圈后可获得一次复活机会！"),
                                state.exploreAfterShareModal.callbackBtn = "不分享，直接看成绩",
                                state.secretBox.config.failureAction || (state.exploreAfterShareModal.callbackBtn = "不分享，直接结束"),
                                state.exploreAfterShareModal.showShare = !0,
                                _context3.next = 30;
                                break;
                            case 28:
                                return dispatch("finishByNoLife"),
                                _context3.abrupt("return");
                            case 30:
                                return _context3.next = 32,
                                sleep(5);
                            case 32:
                                return commit("set_currentView", "blank"),
                                commit("set_getNextQuestionFlag", !0),
                                _context3.next = 36,
                                sleep(10);
                            case 36:
                                2 == data.status ? (dispatch("totalTimeStop"),
                                commit("set_currentView", "finish")) : 3 == data.status ? dispatch("showSuccess") : (data = processData(data),
                                data.correctnum > state.correctnum && commit("set_correctnum", data.correctnum),
                                commit("set_choosed", !1),
                                commit("set_exploreDetail", data.exploreDetail),
                                "5641107497637" == state.secretBoxCode && (data.question.correct = data.correct,
                                data.question.wrong = data.wrong),
                                commit("set_question", data.question),
                                1 == state.submitType && (tempIdx = data.exploreDetail.checkPointSeq,
                                tempQArr = state.wholeQuestions,
                                tempQArr[tempIdx] = data.question,
                                commit("set_wholeQuestions", tempQArr),
                                tempDArr = state.wholeExplores,
                                tempDArr[tempIdx] = data.exploreDetail,
                                commit("set_wholeExplores", tempDArr)),
                                commit("set_qConfig", eval("(" + state.nextQuestionData.question.config + ")")),
                                nextMission = getTemplate(data.question.pattern, state.secretBox.config.cpStyle || data.question.style),
                                state.secretBox.config.enableAdCpStyle && (nextMission = "specialStyle"),
                                state.secretBox.config.perLeastTime && commit("set_showTipMask", !0),
                                commit("set_currentView", nextMission),
                                data.question.timeLimit > 0 && 0 == state.submitType ? dispatch("questionTimeFlow") : commit("set_questionTime", 1e4),
                                dispatch("getSecretBoxBack"));
                            case 37:
                            case "end":
                                return _context3.stop()
                            }
                    }, _callee3, _this3)
                }))()
            },
            showSuccess: function(e) {
                var t = e.commit
                  , o = e.state
                  , n = e.dispatch;
                n("totalTimeStop"),
                $.post("/service/explore2/finishExplore", {
                    secretBoxCode: o.secretBoxCode,
                    secretKey: o.secretKey,
                    userId: localStorage.sbox_userid || 0,
                    exploreId: o.exploreDetail.exploreId,
                    gs: o.perGameScore
                }, function(e, n, s) {
                    t("set_successData", e);
                    var i = getTemplate(99, o.secretBox.finishStyle);
                    t("set_currentView", i),
                    t("set_isDemo", 1 == o.secretBox.status),
                    o.secretBox.backImage && (document.body.style.backgroundImage = "url(" + Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(o.secretBox.backImage) + ")",
                    document.body.style.backgroundPosition = "0px 0px"),
                    o.secretBox.config.switchScreen && (localStorage.removeItem("switchScreen"),
                    document.removeEventListener("visibilitychange", visibleChange))
                }),
                localStorage.exploreId = 0,
                "553955109989" == o.secretBoxCode && n("webTimeStop")
            },
            getScore: function(e, t) {
                var o = e.commit
                  , n = e.state;
                e.dispatch;
                return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function(e) {
                    $.post("service/explore2/getScore", {
                        count: n.secretBox.config.scoreListNum || 100,
                        secretBoxCode: n.secretBox.code,
                        keepSecret: n.secretBox.keepSecret,
                        rankMode: n.secretBox.config.rankMode,
                        userId: localStorage.sbox_userid,
                        field: t
                    }, function(t, s, i) {
                        if (1 == t.status) {
                            var a = getTemplate(100, n.secretBox.config.siStyle);
                            o("set_scoreInfoTemplate", a),
                            e(t)
                        }
                    })
                }
                )
            },
            questionTimeFlow: function(e) {
                var t = e.commit
                  , o = e.state
                  , n = e.dispatch;
                if (!(o.question.timeLimit <= 0) && (t("set_questionTime", o.question.timeLimit),
                t("set_startQuestionTime", Date.now() - 1),
                0 == o.questionTimeInterval)) {
                    var s = setInterval(function() {
                        var e = Date.now();
                        if (o.questionTime <= 0) {
                            if (131773 == o.secretBox.config.cpStyle)
                                return t("clear_questionTimeInterval"),
                                t("set_choosed", !0),
                                void n("failureExplore");
                            if (t("set_toast", {
                                toastMsg: "该题时间已结束!",
                                showToast: !0,
                                type: "warn",
                                time: 2e3
                            }),
                            t("clear_questionTimeInterval"),
                            t("set_choosed", !0),
                            n("wrongAnswer", 0),
                            34460 == o.secretBox.config.cpStyle) {
                                if (20 == o.exploreDetail.checkPointSeq) {
                                    if (!(o.rightNum >= 15))
                                        return void (self.location.href = "./reload2.html#" + location.href.split("#")[1]);
                                    t("set_rightNum", 0)
                                }
                                if (40 == o.exploreDetail.checkPointSeq && !(o.rightNum >= 18))
                                    return void (self.location.href = "./reload2.html#" + location.href.split("#")[1])
                            }
                        } else
                            -1 == o.secretBox.config.exploreAfterShare ? t("set_startQuestionTime", Date.now() - 1) : o.startQuestionTime < e ? (t("set_questionTime", o.questionTime - Math.round((e - o.startQuestionTime) / 1e3)),
                            t("set_startQuestionTime", e)) : (t("clear_questionTimeInterval"),
                            t("set_choosed", !0),
                            n("wrongAnswer", 0))
                    }, 1e3);
                    t("set_questionTimeInterval", s)
                }
            },
            questionTimeStop: function(e) {
                var t = e.commit;
                e.state;
                t("clear_questionTimeInterval"),
                t("set_questionTime", 1e4)
            },
            submitWhole: function(e) {
                var t = e.commit;
                e.state,
                e.dispatch;
                t("set_confirmModal", {
                    showConfirm: !0,
                    title: "提示",
                    content: "请确定是否提交？",
                    confirmText: "确定提交",
                    cancelText: "我再想想"
                })
            },
            submitFinal: function(e) {
                var t = e.commit
                  , o = e.state
                  , n = e.dispatch;
                $.post("/service/explore2/submitWhole", {
                    secretBoxCode: o.secretBoxCode,
                    secretKey: o.secretKey,
                    checkPointSeq: o.exploreDetail.checkPointSeq,
                    answer: o.answer,
                    keepSecret: o.secretBox.keepSecret,
                    exploreId: o.exploreDetail.exploreId,
                    exploreDetailId: o.exploreDetail.id,
                    questionId: o.question.id,
                    visitorId: localStorage.sbox_userid || 0,
                    verifyCode: o.verifyCode,
                    reason: o.reason
                }, function(e, o, s) {
                    return 2 == e.status ? (n("totalTimeStop"),
                    void t("set_currentView", "finish")) : 10 == e.status ? (t("set_verifyHack", !1),
                    void t("set_verifyErrorMessage", e)) : (t("set_toast", {
                        showToast: !1
                    }),
                    void n("showSuccess"))
                }).error(function(e, o, n) {
                    t("set_currentView", "reload")
                })
            },
            submitWholeNext: function(e) {
                for (var t = e.commit, o = e.state, n = e.dispatch, s = 0, i = 1; i <= o.wholeExplores.length; i++)
                    void 0 !== o.wholeExplores[i] && s++;
                if (o.secretBox.checkPointCount != s)
                    return t("set_AlertModal", {
                        alertTitle: "温馨提示",
                        alertMsg: "您还有题尚未解答，请先解答后再提交！",
                        showAlert: !0,
                        undoQuestionList: []
                    }),
                    void t("set_submitQDisabled", !1);
                var a = o.exploreDetail.checkPointSeq
                  , r = o.wholeExplores;
                r[a].answer = o.answer,
                t("set_wholeExplores", r);
                for (var c = "", l = 1; l <= o.wholeExplores.length; l++)
                    void 0 === o.wholeExplores[l] || o.wholeExplores[l].answer || l % 2 == 0 && "554568525639" == o.secretBoxCode || "554599007689" == o.secretBoxCode && 9 == l || (c += l + ",");
                if (c.length > 0)
                    return t("set_toast", {
                        showToast: !1
                    }),
                    t("set_submitQDisabled", !1),
                    void t("set_AlertModal", {
                        alertTitle: "温馨提示",
                        alertMsg: "部分题目没有作答，请先解答后再提交！",
                        showAlert: !0,
                        undoQuestionList: (c = c.substr(0, c.length - 1)).split(",")
                    });
                n("submitWhole")
            },
            goTochoosedQuestion: function goTochoosedQuestion(_ref26, i) {
                var _this4 = this
                  , dispatch = _ref26.dispatch
                  , commit = _ref26.commit
                  , state = _ref26.state;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
                    var nowCheckSeqIdx, nextMission;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                        for (; ; )
                            switch (_context4.prev = _context4.next) {
                            case 0:
                                return _context4.next = 2,
                                sleep(50);
                            case 2:
                                return commit("set_currentView", "blank"),
                                _context4.next = 5,
                                sleep(50);
                            case 5:
                                nowCheckSeqIdx = state.exploreDetail.checkPointSeq,
                                dispatch("checkEqualsDetail", nowCheckSeqIdx),
                                commit("set_choosed", !1),
                                commit("set_question", state.wholeQuestions[i]),
                                commit("set_answer", ""),
                                commit("set_exploreDetail", state.wholeExplores[i]),
                                commit("set_qConfig", eval("(" + state.wholeQuestions[i].config + ")")),
                                nextMission = getTemplate(state.wholeQuestions[i].pattern, state.secretBox.config.cpStyle || state.wholeQuestions[i].style),
                                commit("set_currentView", nextMission);
                            case 14:
                            case "end":
                                return _context4.stop()
                            }
                    }, _callee4, _this4)
                }))()
            },
            totalTimeFlow: function(e) {
                var t = e.commit
                  , o = e.state
                  , n = e.dispatch
                  , s = setInterval(function() {
                    var e = Date.now();
                    if (t("set_totalTime", o.secretBox.config.totalTimeLimit - Math.round((e - o.startTotalTime) / 1e3)),
                    o.totalTime <= 0) {
                        if (t("clear_totalTimeInterval"),
                        "5671207526806" == o.secretBoxCode)
                            return;
                        n("finishByTimeout")
                    }
                }, 1e3);
                t("set_totalTimeInterval", s)
            },
            totalTimeStop: function(e) {
                var t = e.commit;
                e.state;
                t("clear_totalTimeInterval"),
                t("set_totalTime", -1)
            },
            webTimeFlow: function(e) {
                var t = e.commit
                  , o = e.state;
                e.dispatch;
                t("set_webTimeInterval", setInterval(function() {
                    $.post("/service/explore2/updateExploreTime", {
                        secretBoxCode: o.secretBoxCode,
                        secretKey: o.secretKey,
                        visitorId: localStorage.sbox_userid || 0,
                        exploreId: o.exploreDetail.exploreId,
                        duration: 3
                    }, function(e, t, o) {})
                }, 3e3))
            },
            webTimeStop: function(e) {
                e.commit;
                var t = e.state;
                clearInterval(t.webTimeInterval)
            },
            getImgRealWidthAndHight: function(e) {
                var t = e
                  , o = new Image;
                o.src = t,
                o.onload = function() {
                    return "width:" + o.width + ",height:" + o.height
                }
            },
            reloadQuestion: function(e) {
                var t = e.commit
                  , o = e.state
                  , n = e.dispatch;
                t("set_errorTime", o.errorTime + 1),
                o.errorTime < 5 ? n("getNextQuestion") : t("set_AlertModal", {
                    alertTitle: "消息",
                    alertMsg: "请求失败次数过多请刷新本页面重试！",
                    showAlert: !0
                })
            },
            failureExplore: function(e) {
                e.commit;
                var t = e.state;
                e.dispatch;
                $.post("/service/explore2/failureExplore", {
                    secretBoxCode: t.secretBoxCode,
                    secretKey: t.secretKey,
                    userId: localStorage.sbox_userid || 0,
                    answer: t.answer,
                    answerStatus: t.correct ? 1 : 0,
                    exploreId: t.exploreDetail.exploreId,
                    exploreDetailId: t.exploreDetail.id,
                    questionId: t.question.id
                }, function(e, t, o) {})
            },
            tempStartExplore: function tempStartExplore(_ref33) {
                var commit = _ref33.commit
                  , state = _ref33.state
                  , dispatch = _ref33.dispatch;
                $.post("/service/temp/tempStartExplore", {
                    secretBoxCode: state.secretBoxCode,
                    secretKey: state.secretKey,
                    uuid: localStorage.sbox_wxopenid,
                    userId: localStorage.sbox_userid,
                    preUserId: location.href.split("#")[1].split("?")[0].split("code")[0].split("followid")[0].split("_")[1] || 0,
                    degree: parseInt(location.href.split("#")[1].split("?")[0].split("_")[2] || 0),
                    isReged: null != state.registerInfo ? 1 : 0,
                    typeIndex: state.typeIndex
                }, function(data, textStatus, xhr) {
                    if (2 != data.status) {
                        if (100 == data.status)
                            return commit("set_AlertModal", {
                                alertTitle: "消息",
                                alertMsg: "该类别题目已经全部答完",
                                showAlert: !0
                            }),
                            void commit("set_isStart", !1);
                        if (null != data.playChance && data.playChance <= 0) {
                            var alertMsg = ""
                              , shareChanceText = state.secretBox.shareChance > 99 ? "无限" : state.secretBox.shareChance;
                            return state.secretBox.shareChance > 0 && 0 == data.shareCount ? (alertMsg = state.secretBox.config.dayCycle && 1 == state.secretBox.config.dayCycle ? "抱歉，您今天的参与机会用完啦，分享朋友圈后可以获得" + shareChanceText + "次参与机会哦~" : state.secretBox.config.dayCycle && 2 == state.secretBox.config.dayCycle ? "抱歉，您本周的参与机会用完啦，分享朋友圈后可以获得" + shareChanceText + "次参与机会哦~" : state.secretBox.config.dayCycle && 3 == state.secretBox.config.dayCycle ? "抱歉，您本月的参与机会用完啦，分享朋友圈后可以获得" + shareChanceText + "次参与机会哦~" : "抱歉，您的参与机会已经用完了，分享朋友圈后可以获得" + shareChanceText + "次参与机会哦~",
                            commit("set_isStart", !1)) : (alertMsg = state.secretBox.config.dayCycle && 1 == state.secretBox.config.dayCycle ? "抱歉，您今天的参与机会用完了，请明天再来吧！" : state.secretBox.config.dayCycle && 2 == state.secretBox.config.dayCycle ? "抱歉，您本周的参与机会用完了，请下周再来吧！" : state.secretBox.config.dayCycle && 3 == state.secretBox.config.dayCycle ? "抱歉，您本月的参与机会用完了，请下个月再来吧！" : "抱歉，您的参与机会已经用完了，感谢参与活动！",
                            state.secretBox.config.noChanceNotes && (alertMsg = state.secretBox.config.noChanceNotes)),
                            void commit("set_AlertModal", {
                                alertTitle: "消息",
                                alertMsg: alertMsg,
                                showAlert: !0
                            })
                        }
                        data = processData(data),
                        commit("set_playChance", data.playChance);
                        var tmp = getTemplate(data.question.pattern, state.secretBox.config.cpStyle || data.question.style)
                          , bgImg = state.secretBox.bgImage || state.secretBox.coverImage;
                        if (document.body.style.backgroundImage = "url(" + (bgImg ? Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(bgImg) : __WEBPACK_IMPORTED_MODULE_7__configs__.b) + ")",
                        commit("set_isDemo", !1),
                        commit("set_exploreDetail", data.exploreDetail),
                        commit("set_qConfig", eval("(" + data.question.config + ")")),
                        commit("set_currentView", tmp),
                        state.secretBox.config.submitType && commit("set_submitType", state.secretBox.config.submitType),
                        0 == state.submitType && commit("set_life", state.secretBox.wrongTime),
                        state.secretBox.config.totalTimeLimit && commit("set_totalTime", state.secretBox.config.totalTimeLimit),
                        commit("set_question", data.question),
                        commit("set_startTotalTime", Date.now()),
                        state.secretBox.config.continueExplore && 1 == state.secretBox.config.continueExplore)
                            if (1 == data.continueExplore)
                                data.wrongNum > 0 && commit("set_life", state.secretBox.wrongTime - data.wrongNum),
                                state.secretBox.config.totalTimeLimit && (commit("set_totalTime", data.restTotalTime),
                                commit("set_startTotalTime", data.startTime));
                            else if (2 == data.continueExplore)
                                return void dispatch("finishByTimeout");
                        data.question && data.question.timeLimit > 0 && dispatch("questionTimeFlow"),
                        state.secretBox.config.totalTimeLimit > 0 && dispatch("totalTimeFlow")
                    } else
                        commit("set_currentView", "finish")
                })
            },
            submitNextQuestion: function(e, t) {
                var o = e.commit
                  , n = e.state
                  , s = e.dispatch
                  , i = t.answer
                  , a = t.callback;
                if (n.question.timeLimit > 0 && o("clear_questionTimeInterval"),
                n.exploreDetail.checkPointSeq == n.secretBox.checkPointCount && n.secretBox.config.showVerifyImg && 0 != n.secretBox.config.showVerifyImg && !n.verifyHack) {
                    if (o("set_answer", i),
                    1 != n.secretBox.config.showVerifyImg)
                        return o("clear_totalTimeInterval"),
                        void o("set_currentView", "verify");
                    if (n.verifyFlag)
                        return o("clear_totalTimeInterval"),
                        void o("set_currentView", "verify")
                }
                n.totalTime <= 0 ? s("finishByTimeout") : n.life <= 0 ? s("finishByNoLife") : 22993 != n.secretBox.style ? $.post("/service/explore2/nextCheckPoint", {
                    userId: localStorage.sbox_userid || 0,
                    secretBoxCode: n.secretBoxCode,
                    secretKey: n.secretKey,
                    passMode: void 0 == n.secretBox.config.passMode ? 1 : n.secretBox.config.passMode,
                    checkPointSeq: n.exploreDetail.checkPointSeq,
                    questionId: n.exploreDetail.questionId,
                    answer: i,
                    answerStatus: n.correct ? 1 : 0,
                    answerValue: n.answerValue,
                    exploreId: n.exploreDetail.exploreId,
                    exploreDetailId: n.exploreDetail.id,
                    errorTime: n.errorTime,
                    reason: n.reason,
                    gs: n.perGameScore,
                    verifyCode: n.verifyCode
                }, function(e, t, i) {
                    if (e) {
                        if (10 == e.status)
                            return o("set_verifyHack", !1),
                            void o("set_verifyErrorMessage", e);
                        o("set_perGameScore", 0),
                        e.verifyFlag && o("set_verifyFlag", !0),
                        o("set_answer", ""),
                        o("set_reason", ""),
                        a && a(e),
                        0 == n.submitType && 0 == e.result && o("set_life", n.life - 1),
                        1 == e.result && o("set_correctnum", n.correctnum + 1),
                        s("processNextQuestion", e)
                    } else
                        o("set_toast", {
                            toastMsg: "网络错误，请刷新后重试！",
                            showToast: !0,
                            type: "warn",
                            time: 2e3
                        })
                }).error(function(e, t, n) {
                    o("set_currentView", "reload")
                }) : $.post("/service/temp/tempNextCheckPoint", {
                    userId: localStorage.sbox_userid || 0,
                    secretBoxCode: n.secretBoxCode,
                    secretKey: n.secretKey,
                    passMode: void 0 == n.secretBox.config.passMode ? 1 : n.secretBox.config.passMode,
                    checkPointSeq: n.exploreDetail.checkPointSeq,
                    questionId: n.exploreDetail.questionId,
                    answer: i,
                    answerStatus: n.correct ? 1 : 0,
                    answerValue: n.answerValue,
                    exploreId: n.exploreDetail.exploreId,
                    exploreDetailId: n.exploreDetail.id,
                    errorTime: n.errorTime,
                    typeIndex: n.typeIndex
                }, function(e, t, i) {
                    o("set_answer", ""),
                    o("set_reason", ""),
                    a && a(e),
                    0 == n.submitType && 0 == e.result && o("set_life", n.life - 1),
                    s("processNextQuestion", e)
                }).error(function(e, t, n) {
                    o("set_currentView", "reload")
                })
            },
            processNextQuestion: function(e, t) {
                var o = this
                  , n = e.commit
                  , s = e.state
                  , i = e.dispatch;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function e() {
                    var a, r, c, l, u, h, d, p, f, m, _, x, g, w, v;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (n("set_showSleep", !0),
                                a = s.question,
                                n("set_errorTime", 0),
                                n("set_answer", ""),
                                n("set_nextQuestionData", t),
                                n("set_getNextQuestionFlag", !0),
                                1 == t.result && n("set_rightNum", s.rightNum + 1),
                                s.secretBox.config.showAnswer && s.secretBox.config.showAnswer >= 1 && 5 != a.pattern && "5612301111002" != s.secretBox.code && "5612301111004" != s.secretBox.code && ("5671737106717" != s.secretBox.code || "5671737106717" == s.secretBox.code && t.exploreDetail.checkPointSeq > 3) && ("5691465193919" == s.secretBox.code ? (r = "correct answer",
                                c = "wrong answer",
                                l = "",
                                s.registerInfo && s.registerInfo.value8 && (l = s.registerInfo.value8),
                                "KU" == l ? (r = "وەڵامی ڕاست",
                                c = "وەلامی هەڵە") : "AR" == l && (r = "اجابة صحيحة",
                                c = "إجابة خاطئة"),
                                1 == t.result ? n("set_toast", {
                                    toastMsg: r,
                                    showToast: !0,
                                    type: "success",
                                    time: 1e3
                                }) : n("set_toast", {
                                    toastMsg: c,
                                    showToast: !0,
                                    type: "warn",
                                    time: 1e3
                                })) : (u = 0,
                                h = "",
                                s.secretBox.config.enableAdCpStyle && (h = "增加" + (s.secretBox.config.gameIntervalTime || 15) + "秒，请继续游戏",
                                "5671899118834" == s.secretBox.code && (h = "请继续游戏"),
                                u = 500),
                                1 == t.result ? n("set_toast", {
                                    toastMsg: "回答正确" + h,
                                    showToast: !0,
                                    type: "success",
                                    time: 1e3 + u
                                }) : n("set_toast", {
                                    toastMsg: "回答错误",
                                    showToast: !0,
                                    type: "warn",
                                    time: 1e3
                                }))),
                                "5641727401812" != s.secretBox.code && "5681239095020" != s.secretBox.code || (d = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(s.rightAnswerFor124112)),
                                1 == t.result && (d.score = d.score + parseInt(100 / s.secretBox.checkPointCount)),
                                n("set_rightAnswerFor124112", d)),
                                !s.qConfig.answerExplain || !(t.result && s.secretBox.config.showAnswerExplain && 3 == s.secretBox.config.showAnswerExplain || !t.result && s.secretBox.config.showAnswerExplain && 1 == s.secretBox.config.showAnswerExplain || s.secretBox.config.showAnswerExplain && 2 == s.secretBox.config.showAnswerExplain)) {
                                    e.next = 13;
                                    break
                                }
                                n("set_explain", {
                                    showExplain: !0,
                                    title: s.qConfig.explainTitle || "答案提示",
                                    content: s.qConfig.answerExplain,
                                    btnText: s.secretBox.config.explainButton || "下一题"
                                }),
                                e.next = 36;
                                break;
                            case 13:
                                if (!(s.qConfig.answerExplain && !t.result && s.secretBox.config.showAnswerExplain && 7 == s.secretBox.config.showAnswerExplain || s.qConfig.answerExplain && s.secretBox.config.showAnswerExplain && 8 == s.secretBox.config.showAnswerExplain)) {
                                    e.next = 17;
                                    break
                                }
                                n("set_bottomExplain", 1),
                                e.next = 36;
                                break;
                            case 17:
                                if (1 == t.result || !s.secretBox.config.showAnswer || 3 != s.secretBox.config.showAnswer && 4 != s.secretBox.config.showAnswer) {
                                    e.next = 32;
                                    break
                                }
                                if (p = "",
                                f = [],
                                m = [],
                                2 == s.question.pattern) {
                                    for (_ = !1,
                                    m = t.answer.split("/"),
                                    x = 0; x < s.question.choiceList.length; x++)
                                        m.indexOf("" + s.question.choiceList[x].tag) >= 0 && (g = "",
                                        s.secretBox.config.showAnswerLabel && (g += Object(__WEBPACK_IMPORTED_MODULE_9__filters_filter__.choiceLabel)(s.question.choiceList[x].tag - 1) + "、"),
                                        p += g + s.question.choiceList[x].content + "<br>",
                                        (w = new Object).image = s.question.choiceList[x].image,
                                        w.content = s.question.choiceList[x].content,
                                        f.push(w),
                                        w.image && w.image.length > 10 && (_ = !0));
                                    _ ? p = "" : f = new Array
                                } else
                                    p = 3 == s.question.pattern ? "Y" == t.answer ? "此题判断为 [正确] " : "此题判断为 [错误] " : 4 == s.question.pattern ? '<img src="' + Object(__WEBPACK_IMPORTED_MODULE_6__filters_parseFile__.a)(s.question.contentImage) + '" style="width:50%;margin-left:25%" />' : t.answer;
                                if ("5641727401812" != s.secretBox.code && "5681239095020" != s.secretBox.code) {
                                    e.next = 29;
                                    break
                                }
                                return (v = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(s.rightAnswerFor124112))).show = !0,
                                3 == s.question.pattern && ("Y" == t.answer ? m.push("Y") : m.push("N")),
                                v.answer = m,
                                n("set_rightAnswerFor124112", v),
                                e.abrupt("return");
                            case 29:
                                "5671003004567" == s.secretBox.code || "555996563341" == s.secretBox.code ? n("set_showExplain", p) : 3 == s.secretBox.config.showAnswer ? n("set_explain", {
                                    showAnswer: !0,
                                    title: s.qConfig.explainTitle || "答案提示",
                                    content: p,
                                    btnText: s.secretBox.config.explainButton || "知道了",
                                    answerArray: f
                                }) : 4 == s.secretBox.config.showAnswer && (n("set_explain", {
                                    showAnswer: !1,
                                    title: s.qConfig.explainTitle || "答案提示",
                                    content: p,
                                    btnText: s.secretBox.config.explainButton || "知道了",
                                    answerArray: f
                                }),
                                n("set_bottomExplain", 1)),
                                e.next = 36;
                                break;
                            case 32:
                                if ("5611100994031" != s.secretBoxCode || 10 != s.exploreDetail.checkPointSeq && 25 != s.exploreDetail.checkPointSeq) {
                                    e.next = 35;
                                    break
                                }
                                return n("set_currentView", "gate"),
                                e.abrupt("return");
                            case 35:
                                i("showNextQuestion");
                            case 36:
                            case "end":
                                return e.stop()
                            }
                    }, e, o)
                }))()
            },
            getWholeNextQuestion: function getWholeNextQuestion(_ref37, answer) {
                var _this6 = this
                  , commit = _ref37.commit
                  , state = _ref37.state
                  , dispatch = _ref37.dispatch;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee6() {
                    var nextCheckPointSeq, tempEArr, nextMission;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
                        for (; ; )
                            switch (_context6.prev = _context6.next) {
                            case 0:
                                if (nextCheckPointSeq = state.exploreDetail.checkPointSeq + 1,
                                void 0 === state.wholeExplores[nextCheckPointSeq]) {
                                    _context6.next = 21;
                                    break
                                }
                                return _context6.next = 4,
                                sleep(50);
                            case 4:
                                return commit("set_currentView", "blank"),
                                _context6.next = 7,
                                sleep(50);
                            case 7:
                                if (!answer || answer == state.wholeExplores[state.exploreDetail.checkPointSeq].answer) {
                                    _context6.next = 12;
                                    break
                                }
                                tempEArr = state.wholeExplores,
                                $.post("/service/explore2/updateExploreDetail", {
                                    answer: answer,
                                    exploreDetailId: state.exploreDetail.id,
                                    exploreId: state.exploreDetail.exploreId,
                                    visitorId: localStorage.sbox_userid || 0,
                                    questionId: state.question.id,
                                    secretBoxCode: state.secretBoxCode,
                                    reason: state.reason
                                }, function(data, textStatus, xhr) {
                                    if (tempEArr[state.exploreDetail.checkPointSeq].answer = answer,
                                    commit("set_wholeExplores", tempEArr),
                                    2 == data.status)
                                        return dispatch("totalTimeStop"),
                                        void commit("set_currentView", "finish");
                                    commit("set_exploreDetail", state.wholeExplores[nextCheckPointSeq]),
                                    commit("set_question", state.wholeQuestions[nextCheckPointSeq]),
                                    commit("set_answer", state.wholeExplores[nextCheckPointSeq].answer),
                                    commit("set_qConfig", eval("(" + state.wholeQuestions[nextCheckPointSeq].config + ")"));
                                    var nextMission = getTemplate(state.wholeQuestions[nextCheckPointSeq].pattern, state.secretBox.config.cpStyle || state.wholeQuestions[nextCheckPointSeq].style);
                                    commit("set_currentView", nextMission)
                                }).error(function(e, t, o) {
                                    commit("set_currentView", "reload")
                                }),
                                _context6.next = 19;
                                break;
                            case 12:
                                return commit("set_exploreDetail", state.wholeExplores[nextCheckPointSeq]),
                                commit("set_question", state.wholeQuestions[nextCheckPointSeq]),
                                commit("set_answer", state.wholeExplores[nextCheckPointSeq].answer),
                                commit("set_qConfig", eval("(" + state.wholeQuestions[nextCheckPointSeq].config + ")")),
                                nextMission = getTemplate(state.wholeQuestions[nextCheckPointSeq].pattern, state.secretBox.config.cpStyle || state.wholeQuestions[nextCheckPointSeq].style),
                                commit("set_currentView", nextMission),
                                _context6.abrupt("return");
                            case 19:
                                _context6.next = 25;
                                break;
                            case 21:
                                tempEArr = state.wholeExplores,
                                tempEArr[state.exploreDetail.checkPointSeq].answer = answer,
                                commit("set_wholeExplores", tempEArr),
                                $.post("/service/explore2/nextCheckPoint", {
                                    userId: localStorage.sbox_userid || 0,
                                    secretBoxCode: state.secretBoxCode,
                                    secretKey: state.secretKey,
                                    passMode: void 0 == state.secretBox.config.passMode ? 1 : state.secretBox.config.passMode,
                                    checkPointSeq: state.exploreDetail.checkPointSeq,
                                    questionId: state.exploreDetail.questionId,
                                    answer: answer,
                                    answerStatus: 0,
                                    answerValue: state.answerValue,
                                    exploreId: state.exploreDetail.exploreId,
                                    exploreDetailId: state.exploreDetail.id,
                                    errorTime: state.errorTime,
                                    reason: state.reason,
                                    gs: state.perGameScore
                                }, function(e, t, o) {
                                    commit("set_errorTime", 0),
                                    commit("set_answer", ""),
                                    commit("set_reason", ""),
                                    commit("set_nextQuestionData", e),
                                    commit("set_perGameScore", 0),
                                    dispatch("showNextQuestion")
                                }).error(function(e, t, o) {
                                    commit("set_currentView", "reload")
                                });
                            case 25:
                            case "end":
                                return _context6.stop()
                            }
                    }, _callee6, _this6)
                }))()
            },
            getWholePreQuestion: function getWholePreQuestion(_ref38, answer) {
                var _this7 = this
                  , dispatch = _ref38.dispatch
                  , commit = _ref38.commit
                  , state = _ref38.state;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee7() {
                    var tempEArr, preCheckPointSeq, nextMission;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
                        for (; ; )
                            switch (_context7.prev = _context7.next) {
                            case 0:
                                return _context7.next = 2,
                                sleep(50);
                            case 2:
                                return commit("set_currentView", "blank"),
                                _context7.next = 5,
                                sleep(50);
                            case 5:
                                answer && answer != state.wholeExplores[state.exploreDetail.checkPointSeq].answer ? (tempEArr = state.wholeExplores,
                                $.post("/service/explore2/updateExploreDetail", {
                                    secretBoxCode: state.secretBoxCode,
                                    secretKey: state.secretKey,
                                    answer: answer,
                                    exploreDetailId: state.exploreDetail.id,
                                    exploreId: state.exploreDetail.exploreId,
                                    visitorId: localStorage.sbox_userid || 0,
                                    questionId: state.question.id,
                                    reason: state.reason
                                }, function(data, textStatus, xhr) {
                                    if (tempEArr[state.exploreDetail.checkPointSeq].answer = answer,
                                    commit("set_wholeExplores", tempEArr),
                                    2 == data.status)
                                        return dispatch("totalTimeStop"),
                                        void commit("set_currentView", "finish");
                                    var preCheckPointSeq = state.exploreDetail.checkPointSeq - 1;
                                    commit("set_question", state.wholeQuestions[preCheckPointSeq]),
                                    commit("set_answer", state.wholeExplores[preCheckPointSeq].answer),
                                    commit("set_exploreDetail", state.wholeExplores[preCheckPointSeq]),
                                    commit("set_qConfig", eval("(" + state.wholeQuestions[preCheckPointSeq].config + ")"));
                                    var nextMission = getTemplate(state.wholeQuestions[preCheckPointSeq].pattern, state.secretBox.config.cpStyle || state.wholeQuestions[preCheckPointSeq].style);
                                    commit("set_currentView", nextMission)
                                }).error(function(e, t, o) {
                                    commit("set_currentView", "reload")
                                })) : (preCheckPointSeq = state.exploreDetail.checkPointSeq - 1,
                                commit("set_question", state.wholeQuestions[preCheckPointSeq]),
                                commit("set_answer", state.wholeExplores[preCheckPointSeq].answer),
                                commit("set_exploreDetail", state.wholeExplores[preCheckPointSeq]),
                                commit("set_qConfig", eval("(" + state.wholeQuestions[preCheckPointSeq].config + ")")),
                                nextMission = getTemplate(state.wholeQuestions[preCheckPointSeq].pattern, state.secretBox.config.cpStyle || state.wholeQuestions[preCheckPointSeq].style),
                                commit("set_currentView", nextMission));
                            case 6:
                            case "end":
                                return _context7.stop()
                            }
                    }, _callee7, _this7)
                }))()
            },
            submitWholeFinish: function(e, t) {
                for (var o = e.commit, n = e.state, s = e.dispatch, i = 0, a = 1; a <= n.wholeExplores.length; a++)
                    void 0 !== n.wholeExplores[a] && i++;
                if (n.secretBox.checkPointCount != i && "5671109336287" != n.secretBox.code && "465125737630" != n.secretBox.code && !n.secretBox.config.enforceSubmit)
                    return o("set_AlertModal", {
                        alertTitle: "温馨提示",
                        alertMsg: "您还有题尚未解答，请先解答后再提交！",
                        showAlert: !0,
                        undoQuestionList: []
                    }),
                    void o("set_submitQDisabled", !1);
                if (t && t != n.wholeExplores[n.exploreDetail.checkPointSeq].answer) {
                    var r = n.wholeExplores;
                    r[n.exploreDetail.checkPointSeq].answer = t,
                    o("set_wholeExplores", r),
                    $.post("/service/explore2/updateExploreDetail", {
                        secretBoxCode: n.secretBoxCode,
                        secretKey: n.secretKey,
                        answer: t,
                        exploreDetailId: n.exploreDetail.id,
                        exploreId: n.exploreDetail.exploreId,
                        visitorId: localStorage.sbox_userid || 0,
                        questionId: n.question.id,
                        reason: n.reason
                    }, function(e, t, n) {
                        if (2 == e.status)
                            return s("totalTimeStop"),
                            void o("set_currentView", "finish")
                    })
                }
                o("set_answer", t);
                for (var c = "", l = 1; l <= n.wholeExplores.length; l++)
                    void 0 === n.wholeExplores[l] || n.wholeExplores[l].answer || (c += l + ",");
                if (c.length > 0 && "465125737630" != n.secretBoxCode && !n.secretBox.config.enforceSubmit) {
                    o("set_toast", {
                        showToast: !1
                    }),
                    o("set_submitQDisabled", !1);
                    var u = (c = c.substr(0, c.length - 1)).split(",");
                    o("set_AlertModal", {
                        alertTitle: "温馨提示",
                        alertMsg: "部分题目没有作答，请先解答后再提交！",
                        showAlert: !0,
                        undoQuestionList: u
                    })
                } else
                    s("submitWhole")
            },
            finishByTimeout: function(e) {
                var t = e.commit
                  , o = e.state
                  , n = e.dispatch;
                o.secretBox.config.switchScreen && localStorage.getItem("switchScreen") && localStorage.getItem("switchScreen") > o.secretBox.config.switchScreen - 1 || t("set_toast", {
                    toastMsg: "答题时间结束了!数据提交中...",
                    showToast: !0,
                    type: "warn",
                    time: 2e4
                }),
                o.secretBox.config.submitType && 2 == o.secretBox.config.submitType ? n("submitSinglePage") : $.post("/service/explore2/finishByTimeout", {
                    secretBoxCode: o.secretBoxCode,
                    secretKey: o.secretKey,
                    userId: localStorage.sbox_userid || 0,
                    answer: o.answer,
                    answerStatus: o.correct ? 1 : 0,
                    exploreId: o.exploreDetail.exploreId,
                    exploreDetailId: o.exploreDetail.id,
                    questionId: o.question.id
                }, function(e, o, s) {
                    t("set_toast", {
                        showToast: !1
                    }),
                    n("showSuccess")
                })
            },
            finishByNoLife: function(e) {
                var t = e.commit
                  , o = e.state
                  , n = e.dispatch;
                return n("totalTimeStop"),
                n("failureExplore"),
                o.secretBox.config && 1 == o.secretBox.config.failureAction ? n("showSuccess") : t("set_currentView", "fail")
            },
            submitSinglePage: function(e) {
                var t = e.commit
                  , o = e.state
                  , n = e.dispatch;
                return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function(e, s) {
                    for (var i = [], a = 0; a < o.wholeQuestions.length; a++) {
                        var r = o.wholeQuestions[a];
                        if (r) {
                            13 == r.pattern && r.questionAnswer && (r.questionAnswer = r.questionAnswer.toString());
                            var c = {
                                quesitonId: o.wholeExplores[a].questionId,
                                exploreDetailId: o.wholeExplores[a].id,
                                exploreId: o.wholeExplores[a].exploreId,
                                answer: r.questionAnswer,
                                reason: r.reason
                            };
                            i.push(c)
                        }
                    }
                    0 != i.length && (t("set_answer", i[i.length - 1].answer),
                    $.post("/service/explore2/submitSinglePage", {
                        secretBoxCode: o.secretBoxCode,
                        secretKey: o.secretKey,
                        exploreId: i[i.length - 1].exploreId,
                        answerList: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(i),
                        visitorId: localStorage.sbox_userid || 0,
                        verifyCode: o.verifyCode
                    }, function(o, s, i) {
                        return e(),
                        2 == o.status ? (n("totalTimeStop"),
                        void t("set_currentView", "finish")) : 10 == o.status ? (t("set_verifyHack", !1),
                        void t("set_verifyErrorMessage", o)) : (o.verifyFlag && t("set_verifyFlag", !0),
                        t("set_toast", {
                            showToast: !1
                        }),
                        void n("showSuccess"))
                    }))
                }
                )
            },
            getQuestionForAnswerSheet: function getQuestionForAnswerSheet(_ref43, nowCheckSeqIdx) {
                var _this8 = this
                  , commit = _ref43.commit
                  , state = _ref43.state
                  , dispatch = _ref43.dispatch;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee8() {
                    var nextMission;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
                        for (; ; )
                            switch (_context8.prev = _context8.next) {
                            case 0:
                                if (void 0 === state.wholeExplores[nowCheckSeqIdx]) {
                                    _context8.next = 14;
                                    break
                                }
                                return _context8.next = 3,
                                sleep(50);
                            case 3:
                                return commit("set_currentView", "blank"),
                                _context8.next = 6,
                                sleep(50);
                            case 6:
                                return commit("set_choosed", !1),
                                commit("set_exploreDetail", state.wholeExplores[nowCheckSeqIdx]),
                                commit("set_question", state.wholeQuestions[nowCheckSeqIdx]),
                                commit("set_qConfig", eval("(" + state.wholeQuestions[nowCheckSeqIdx].config + ")")),
                                nextMission = getTemplate(state.wholeQuestions[nowCheckSeqIdx].pattern, state.secretBox.config.cpStyle || state.wholeQuestions[nowCheckSeqIdx].style),
                                commit("set_currentView", nextMission),
                                commit("set_answer", state.wholeExplores[nowCheckSeqIdx].answer),
                                _context8.abrupt("return");
                            case 14:
                            case "end":
                                return _context8.stop()
                            }
                    }, _callee8, _this8)
                }))()
            }
        }
    },
    IPP3: function(e, t) {},
    IcnI: function(e, t, o) {
        "use strict";
        var n, s, i = o("7+uW"), a = o("NYxO"), r = o("bOdI"), c = o.n(r), l = (n = {},
        c()(n, "TEST_CHANGEMSG", function(e, t) {
            e.msg = t
        }),
        c()(n, "set_secretBoxInfo", function(e, t) {
            e.secretBoxCode = t.secretBoxCode,
            e.secretKey = t.secretKey
        }),
        c()(n, "set_exploreData", function(e, t) {
            e.winnerList = t.winnerList,
            e.secretBox = t.secretBox,
            e.serialBox = t.serialBox,
            e.explorePoints = t.explorePoints,
            e.registerInfo = t.registerInfo,
            e.shareCount = t.shareCount,
            e.ts = t.ts,
            e.tsy = t.ts - (new Date).getTime(),
            e.userId = t.userId,
            e.playChance = t.playChance,
            e.continueExplore = t.continueExplore,
            e.lotteryCount = t.lotteryCount,
            e.showGameControl = !0,
            e.isPrePass = t.isPrePass,
            e.isMember = t.isMember,
            e.scenePages = t.scenePages,
            e.wechatUserInfo = t.wechatUserInfo,
            e.playedChance = t.playedChance,
            t.uuid && (localStorage.sbox_wxopenid = t.uuid,
            localStorage.sbox_userid = t.userId),
            null != t.videoChance && (e.videoChance = t.videoChance),
            null != t.totalPlayChance && (e.totalPlayChance = t.totalPlayChance),
            null != t.leftPrizeNum && (e.leftPrizeNum = t.leftPrizeNum),
            null != t.totalScore && (e.totalScore = t.totalScore),
            null != t.dayCount && (e.dayCount = t.dayCount),
            null != t.peopleRealCount && (e.peopleRealCount = t.peopleRealCount),
            null != t.barrageCount && (e.barrageCount = t.barrageCount),
            null != t.otherResult && (e.otherResult = t.otherResult)
        }),
        c()(n, "set_exploreDataPC", function(e, t) {
            e.winnerList = t.winnerList,
            e.secretBox = t.secretBox,
            e.ts = t.ts,
            e.tsy = t.ts - (new Date).getTime(),
            e.showGameControl = !0,
            e.scenePages = t.scenePages,
            e.registerInfo = null
        }),
        c()(n, "set_exploreRegisterPC", function(e, t) {
            e.shareCount = t.shareCount,
            e.userId = t.visitorId,
            e.playChance = t.playChance,
            e.continueExplore = t.continueExplore
        }),
        c()(n, "set_secretBoxBaseConfig", function(e, t) {
            e.secretBoxBaseConfig = t
        }),
        c()(n, "start_cd", function(e) {
            e.cd = cd + 1
        }),
        c()(n, "set_currentView", function(e, t) {
            e.currentView = t
        }),
        c()(n, "set_AlertModal", function(e, t) {
            e.alertModal = t
        }),
        c()(n, "set_showAlert", function(e, t) {
            e.showAlert = t
        }),
        c()(n, "set_playChance", function(e, t) {
            e.playChance = t
        }),
        c()(n, "set_shareCount", function(e, t) {
            e.shareCount = t
        }),
        c()(n, "set_successShareCount", function(e, t) {
            e.successShareCount = t
        }),
        c()(n, "set_showSupport", function(e, t) {
            e.showSupport = t
        }),
        c()(n, "set_showAdvert", function(e, t) {
            e.showAdvert = t
        }),
        c()(n, "set_isDemo", function(e, t) {
            e.isDemo = t
        }),
        c()(n, "set_exploreDetail", function(e, t) {
            e.exploreDetail = t
        }),
        c()(n, "set_qConfig", function(e, t) {
            e.qConfig = t
        }),
        c()(n, "set_life", function(e, t) {
            e.life = t
        }),
        c()(n, "set_question", function(e, t) {
            e.question = t
        }),
        c()(n, "set_registerInfo", function(e, t) {
            e.registerInfo = t
        }),
        c()(n, "set_errorTime", function(e, t) {
            e.errorTime = t
        }),
        c()(n, "set_answer", function(e, t) {
            e.answer = t
        }),
        c()(n, "set_correct", function(e, t) {
            e.correct = t
        }),
        c()(n, "set_answerValue", function(e, t) {
            e.answerValue = t
        }),
        c()(n, "set_successData", function(e, t) {
            e.successData = t
        }),
        c()(n, "set_nextQuestionData", function(e, t) {
            e.nextQuestionData = t
        }),
        c()(n, "set_toast", function(e, t) {
            e.toast = t
        }),
        c()(n, "set_explain", function(e, t) {
            e.explain = t
        }),
        c()(n, "set_bottomExplain", function(e, t) {
            e.bottomExplain = t
        }),
        c()(n, "set_questionTimeInterval", function(e, t) {
            e.questionTimeInterval = t
        }),
        c()(n, "clear_questionTimeInterval", function(e) {
            clearInterval(e.questionTimeInterval),
            e.questionTimeInterval = 0
        }),
        c()(n, "set_questionTime", function(e, t) {
            e.questionTime = t
        }),
        c()(n, "set_totalTimeInterval", function(e, t) {
            e.totalTimeInterval = t
        }),
        c()(n, "clear_totalTimeInterval", function(e) {
            clearInterval(e.totalTimeInterval),
            e.totalTimeInterval = 0
        }),
        c()(n, "set_totalTime", function(e, t) {
            e.totalTime = t
        }),
        c()(n, "set_webTimeInterval", function(e, t) {
            e.webTimeInterval = t
        }),
        c()(n, "set_getNextQuestionFlag", function(e, t) {
            e.getNextQuestionFlag = t
        }),
        c()(n, "set_directNextQuestionFlag", function(e, t) {
            e.directNextQuestionFlag = t
        }),
        c()(n, "set_lotteryChance", function(e, t) {
            e.secretBox.config.lotteryChance = t
        }),
        c()(n, "set_lotteryCount", function(e, t) {
            e.lotteryCount = t
        }),
        c()(n, "set_startTotalTime", function(e, t) {
            e.startTotalTime = t
        }),
        c()(n, "set_followMatch", function(e, t) {
            e.followMatch = t
        }),
        c()(n, "set_verifyHack", function(e, t) {
            e.verifyHack = t
        }),
        c()(n, "set_verifyCode", function(e, t) {
            e.verifyCode = t
        }),
        c()(n, "set_verifyFlag", function(e, t) {
            e.verifyFlag = t
        }),
        c()(n, "set_verifyErrorMessage", function(e, t) {
            e.verifyErrorMessage = t
        }),
        c()(n, "set_correctnum", function(e, t) {
            e.correctnum = t
        }),
        c()(n, "set_exploretime", function(e, t) {
            e.exploretime = t
        }),
        c()(n, "set_selfStopBgm", function(e, t) {
            e.selfStopBgm = t
        }),
        c()(n, "set_shareModal", function(e, t) {
            e.shareModal = t
        }),
        c()(n, "set_exploreAfterShareModal", function(e, t) {
            e.exploreAfterShareModal = t
        }),
        c()(n, "set_startQuestionTime", function(e, t) {
            e.startQuestionTime = t
        }),
        c()(n, "set_scoreInfoTemplate", function(e, t) {
            e.scoreInfoTemplate = t
        }),
        c()(n, "set_registerTemplate", function(e, t) {
            e.registerTemplate = t
        }),
        c()(n, "set_isStart", function(e, t) {
            e.isStart = t
        }),
        c()(n, "set_eal", function(e, t) {
            e.eal = t
        }),
        c()(n, "set_choosed", function(e, t) {
            e.choosed = t
        }),
        c()(n, "set_rightNum", function(e, t) {
            e.rightNum = t
        }),
        c()(n, "set_prize", function(e, t) {
            e.prize = t
        }),
        c()(n, "set_sendBarrageFlag", function(e, t) {
            e.sendBarrageFlag = t
        }),
        c()(n, "set_miniprogramflag", function(e, t) {
            e.miniprogramflag = t
        }),
        c()(n, "set_scenePages", function(e, t) {
            e.scenePages = t
        }),
        c()(n, "set_checkpointseq", function(e, t) {
            e.checkpointseq = t
        }),
        c()(n, "set_typeIndex", function(e, t) {
            e.typeIndex = t
        }),
        c()(n, "set_wholeQuestions", function(e, t) {
            e.wholeQuestions = t
        }),
        c()(n, "set_wholeExplores", function(e, t) {
            e.wholeExplores = t
        }),
        c()(n, "set_submitType", function(e, t) {
            e.submitType = t
        }),
        c()(n, "set_submitQDisabled", function(e, t) {
            e.submitQDisabled = t
        }),
        c()(n, "set_dev", function(e, t) {
            e.dev = t
        }),
        c()(n, "set_confirmModal", function(e, t) {
            e.confirmModal.showConfirm = t.showConfirm,
            t.title && (e.confirmModal.title = t.title),
            t.content && (e.confirmModal.content = t.content),
            t.confirmText && (e.confirmModal.confirmText = t.confirmText),
            t.cancelText && (e.confirmModal.cancelText = t.cancelText)
        }),
        c()(n, "set_showBlack", function(e, t) {
            e.showBlack[t] = 1
        }),
        c()(n, "set_reason", function(e, t) {
            e.reason = t
        }),
        c()(n, "set_showExplain", function(e, t) {
            e.showExplain = t
        }),
        c()(n, "set_showGate", function(e, t) {
            e.showGate = t
        }),
        c()(n, "set_barrageCount", function(e, t) {
            e.barrageCount = t
        }),
        c()(n, "set_rightAnswerFor124112", function(e, t) {
            e.rightAnswerFor124112 = t
        }),
        c()(n, "set_startShowNextQuestion", function(e, t) {
            e.startShowNextQuestion = t
        }),
        c()(n, "set_exploreDetailCount", function(e, t) {
            e.exploreDetailCount = t
        }),
        c()(n, "set_showResource131917", function(e, t) {
            e.showResource131917 = t
        }),
        c()(n, "set_showScoreScreen148096", function(e, t) {
            e.showScoreScreen148096 = t
        }),
        c()(n, "set_explorePoints", function(e, t) {
            e.explorePoints = t
        }),
        c()(n, "set_totalScore", function(e, t) {
            e.totalScore = t
        }),
        c()(n, "set_showSleep", function(e, t) {
            e.showSleep = t
        }),
        c()(n, "set_showTipMask", function(e, t) {
            e.showTipMask = t
        }),
        c()(n, "set_gameScore", function(e, t) {
            e.gameScore = t
        }),
        c()(n, "set_perGameScore", function(e, t) {
            e.perGameScore = t
        }),
        c()(n, "set_gameStart", function(e, t) {
            e.gameStart = t
        }),
        c()(n, "set_gameQuestion", function(e, t) {
            e.gameQuestion = t
        }),
        c()(n, "set_hasWinner", function(e, t) {
            e.hasWinner = t
        }),
        c()(n, "set_isComplained", function(e, t) {
            e.isComplained = t
        }),
        n), u = o("Hqqj"), h = {
            state: {
                all: []
            },
            getters: {
                allProducts: function(e) {
                    return e.all
                }
            },
            actions: {
                getAllProducts: function(e) {
                    var t = e.commit;
                    shop.getProducts(function(e) {
                        t(l.RECEIVE_PRODUCTS, {
                            products: e
                        })
                    })
                }
            },
            mutations: (s = {},
            c()(s, l.RECEIVE_PRODUCTS, function(e, t) {
                var o = t.products;
                e.all = o
            }),
            c()(s, l.ADD_TO_CART, function(e, t) {
                var o = t.id;
                e.all.find(function(e) {
                    return e.id === o
                }).inventory--
            }),
            s)
        }, d = o("BS5S"), p = o.n(d);
        i.default.use(a.a);
        var f = {
            dev: "",
            eal: "",
            testMsg: "test",
            secretBoxCode: location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_")[0].split("-")[0],
            secretKey: location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_")[0].split("-")[1],
            ts: 0,
            tsy: 0,
            isDemo: !1,
            verifyHack: !1,
            verifyCode: "",
            verifyFlag: !1,
            verifyErrorMessage: "",
            exploretime: 0,
            correctnum: 0,
            followUserInfo: {},
            followUserArea: "",
            followMatch: 1,
            showGameControl: !1,
            selfStopBgm: !1,
            registerTemplate: "register",
            scoreInfoTemplate: "scoreInfo",
            questionTimeInterval: 0,
            totalTimeInterval: 0,
            webTimeInterval: 0,
            questionTime: 1e4,
            totalTime: 1e5,
            startTotalTime: Date.now(),
            startQuestionTime: Date.now(),
            toast: {
                toastMsg: "",
                showToast: !1,
                type: "warn",
                time: 2500,
                position: "default"
            },
            explain: {
                showAnswer: !1,
                showExplain: !1,
                title: "答案提示",
                content: "",
                answerArray: [],
                btnText: "知道了"
            },
            bottomExplain: 0,
            alertModal: {
                alertMsg: "",
                alertTitle: "",
                showAlert: !1
            },
            shareModal: {
                showShare: !1
            },
            exploreAfterShareModal: {
                showShare: !1
            },
            isStart: !1,
            isPrePass: null,
            isMember: null,
            playedChance: 0,
            videoChance: 0,
            directNextQuestionFlag: !0,
            getNextQuestionFlag: !1,
            exploreDetail: {},
            question: {},
            nextQuestion: {},
            nextQuestionData: {},
            answer: "",
            correct: !1,
            answerValue: "",
            errorTime: 0,
            choosed: !1,
            successData: {},
            showAdvert: !1,
            showSupport: !1,
            winnerList: {},
            hasWinner: !1,
            secretBox: {},
            registerInfo: {},
            shareCount: {},
            successShareCount: 0,
            lotteryCount: null,
            userId: 0,
            playChance: 0,
            continueExplore: null,
            currentView: "loading2",
            life: 9999,
            prize: {},
            qConfig: {},
            checkpointseq: 0,
            sendBarrageFlag: !1,
            miniprogramflag: !1,
            leftPrizeNum: null,
            typeIndex: 0,
            wholeQuestions: new Array(101),
            wholeExplores: new Array(101),
            submitType: 0,
            submitQDisabled: !1,
            confirmModal: {
                showConfirm: !1,
                title: "提示",
                content: "",
                confirmText: "确定",
                cancelText: "取消"
            },
            showBlack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            secretBoxBaseConfig: {},
            peopleRealCount: -1,
            serialBox: {},
            reason: "",
            showExplain: "",
            explorePoints: 0,
            totalPlayChance: null,
            showGate: !1,
            barrageCount: 0,
            rightAnswerFor124112: {
                show: !1,
                answer: "",
                score: 0
            },
            startShowNextQuestion: !1,
            exploreDetailCount: 0,
            showResource131917: !1,
            showScoreScreen148096: 7,
            totalScore: 0,
            otherResult: {},
            showSleep: !0,
            showTipMask: !1,
            gameScore: 0,
            perGameScore: 0,
            gameStart: !0,
            gameQuestion: !1,
            wechatUserInfo: null,
            isComplained: !1
        };
        t.a = new a.a.Store({
            state: f,
            actions: u.a,
            mutations: l,
            modules: {
                welcome: h,
                choice: p.a
            }
        })
    },
    JXSH: function(e, t, o) {
        "use strict";
        var n = o("/o5o")
          , s = o("UtBj")
          , i = o("S8Wg")
          , a = (s.a,
        String,
        String,
        String,
        Array,
        n.a,
        i.a,
        {
            filters: {
                cdn: s.a
            },
            props: {
                explainTitle: {
                    type: String,
                    default: "问题解读"
                },
                explainDetail: {
                    type: String,
                    default: "答案解释"
                },
                explainButton: {
                    type: String,
                    default: "我知道了"
                },
                answerArray: {
                    type: Array
                }
            },
            components: {
                Modal: n.a,
                Scroller: i.a
            },
            methods: {}
        })
          , r = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , o = e._self._c || t;
                return o("div", {
                    attrs: {
                        id: "answerexplain"
                    }
                }, [o("div", {
                    staticClass: "weui-mask"
                }), e._v(" "), o("div", {
                    staticClass: "weui-dialog"
                }, [o("div", {
                    staticClass: "title"
                }, [e._v("\n\t\t\t\t" + e._s(e.explainTitle) + "\n\t\t")]), e._v(" "), o("div", {
                    staticClass: "answer_body"
                }, [o("div", [o("div", {
                    domProps: {
                        innerHTML: e._s(e.explainDetail)
                    }
                }), e._v(" "), e._l(e.answerArray, function(t) {
                    return o("div", {
                        staticClass: "answerDiv"
                    }, [o("div", {
                        staticClass: "answerContent"
                    }, [e._v(e._s(t.content))]), e._v(" "), o("img", {
                        staticClass: "answerImage",
                        attrs: {
                            src: e._f("cdn")(t.image),
                            alt: ""
                        }
                    })])
                }), e._v(" "), o("div", {
                    staticStyle: {
                        clear: "both"
                    }
                })], 2)]), e._v(" "), o("div", {
                    staticClass: "weui-dialog__ft",
                    on: {
                        click: function(t) {
                            return e.$emit("closeExplain")
                        }
                    }
                }, [o("a", {
                    staticClass: "weui-dialog__btn weui-dialog__btn_primary"
                }, [e._v(e._s(e.explainButton))])])])])
            },
            staticRenderFns: []
        };
        var c = o("VU/8")(a, r, !1, function(e) {
            o("96rN")
        }, null, null);
        t.a = c.exports
    },
    KIGL: function(e, t) {},
    KhYh: function(e, t) {},
    LLN8: function(e, t) {},
    NHnr: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o("fZjL")
          , s = o.n(n)
          , i = o("7+uW")
          , a = o("Xxa5")
          , r = o.n(a)
          , c = o("exGp")
          , l = o.n(c)
          , u = o("0k+n")
          , h = o.n(u)
          , d = o("LpmL")
          , p = o.n(d);
        String,
        Number,
        String,
        String,
        String,
        String;
        var f = {
            name: "qrcode",
            props: {
                value: String,
                size: {
                    type: Number,
                    default: 160
                },
                level: {
                    type: String,
                    default: "L"
                },
                bgColor: {
                    type: String,
                    default: "#FFFFFF"
                },
                fgColor: {
                    type: String,
                    default: "#000000"
                },
                type: {
                    type: String,
                    default: "img"
                }
            },
            mounted: function() {
                var e = this;
                this.$nextTick(function() {
                    e.render()
                })
            },
            data: function() {
                return {
                    imgData: ""
                }
            },
            watch: {
                value: function() {
                    this.render()
                },
                size: function() {
                    this.render()
                },
                level: function() {
                    this.render()
                },
                bgColor: function() {
                    this.render()
                },
                fgColor: function() {
                    this.render()
                }
            },
            methods: {
                render: function() {
                    var e = this;
                    if (void 0 !== this.value) {
                        var t = new h.a(-1,p.a[this.level]);
                        t.addData(this.value),
                        t.make();
                        var o = this.$refs.canvas
                          , n = o.getContext("2d")
                          , s = t.modules
                          , i = this.size / s.length
                          , a = this.size / s.length
                          , r = (window.devicePixelRatio || 1) / function(e) {
                            return e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1
                        }(n);
                        o.height = o.width = this.size * r,
                        n.scale(r, r),
                        s.forEach(function(t, o) {
                            t.forEach(function(t, s) {
                                n.fillStyle = t ? e.fgColor : e.bgColor;
                                var r = Math.ceil((s + 1) * i) - Math.floor(s * i)
                                  , c = Math.ceil((o + 1) * a) - Math.floor(o * a);
                                n.fillRect(Math.round(s * i), Math.round(o * a), r, c)
                            })
                        }),
                        "img" === this.type && (this.imgData = o.toDataURL("image/png"))
                    }
                }
            }
        };
        var m = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , o = e._self._c || t;
                return o("div", [o("canvas", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "canvas" === e.type,
                        expression: "type === 'canvas'"
                    }],
                    ref: "canvas",
                    style: {
                        height: e.size + "px",
                        width: e.size + "px"
                    },
                    attrs: {
                        height: e.size,
                        width: e.size
                    }
                }), e._v(" "), "img" === e.type ? o("img", {
                    style: {
                        height: e.size + "px",
                        width: e.size + "px"
                    },
                    attrs: {
                        src: e.imgData
                    }
                }) : e._e()])
            },
            staticRenderFns: []
        }
          , x = o("VU/8")(f, m, !1, null, null, null).exports
          , g = {
            data: function() {
                return {
                    href: ""
                }
            },
            components: {
                Qrcode: x
            },
            mounted: function() {
                this.$nextTick(function() {
                    document.body.style.backgroundImage = "url('http://libs.fengchuanba.com/assets/img/default/bg1.jpg')",
                    this.href = self.location.href
                })
            },
            methods: {}
        }
          , w = {
            render: function() {
                var e = this.$createElement
                  , t = this._self._c || e;
                return t("div", {
                    attrs: {
                        id: "browserError"
                    }
                }, [t("qrcode", {
                    attrs: {
                        id: "code",
                        value: this.href,
                        type: "img"
                    }
                })], 1)
            },
            staticRenderFns: []
        };
        var v = o("VU/8")(g, w, !1, function(e) {
            o("sOvy")
        }, "data-v-821b3ffa", null).exports
          , b = o("Xe5u")
          , y = o("YVmR")
          , B = {
            render: function() {
                var e = this.$createElement;
                return (this._self._c || e)("section", {
                    attrs: {
                        id: "demo-msg"
                    }
                }, [this._v("\n\t这是模拟场景，数据和成绩将在正式发布后清空\n")])
            },
            staticRenderFns: []
        };
        var C = o("VU/8")({}, B, !1, function(e) {
            o("mQ78")
        }, null, null).exports
          , S = {
            filters: {
                formatTime: function(e) {
                    return e > 60 ? parseInt(e / 60) + "分" + e % 60 + "秒" : e + "秒"
                }
            },
            computed: {
                totalTime: function() {
                    return this.$store.state.totalTime
                },
                life: function() {
                    return this.$store.state.life
                },
                secretBox: function() {
                    return this.$store.state.secretBox
                },
                exploreDetail: function() {
                    return this.$store.state.exploreDetail
                },
                questionTime: function() {
                    return this.$store.state.questionTime
                }
            }
        }
          , T = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , o = e._self._c || t;
                return o("div", {
                    attrs: {
                        id: "topbar"
                    }
                }, [e.life <= 10 ? o("span", e._l(e.life, function(t) {
                    return o("span", {
                        staticClass: "life",
                        class: {
                            life: t <= e.life,
                            nolife: t > e.life
                        }
                    }, [o("i", {
                        class: {
                            "icon-heart": t <= e.life,
                            "icon-heart-broken": t > e.life
                        }
                    })])
                }), 0) : e._e(), e._v(" "), e._t("time"), e._v(" "), o("span", {
                    staticClass: "index"
                }, [e._v(e._s(e.exploreDetail.checkPointSeq) + "/" + e._s(e.secretBox.checkPointCount))]), e._v(" "), e.totalTime > 0 && e.totalTime < 1e4 ? o("span", {
                    staticClass: "totalTime"
                }, [o("i", {
                    staticClass: "icon-hour-glass"
                }, [e._v(e._s(e._f("formatTime")(e.totalTime)))])]) : e._e(), e._v(" "), e.questionTime > 0 && e.questionTime < 1e4 ? o("span", {
                    staticClass: "questionTime"
                }, [o("i", {
                    staticClass: "icon-alarm"
                }, [e._v(e._s(e.questionTime))])]) : e._e()], 2)
            },
            staticRenderFns: []
        };
        var I = o("VU/8")(S, T, !1, function(e) {
            o("kmot")
        }, null, null).exports
          , P = o("mzja")
          , E = o("rLAy")
          , M = o("62KO")
          , A = o("wujj")
          , k = (o("NYxO"),
        o("UtBj"))
          , D = (o("pyzf"),
        {
            render: function() {
                this.$createElement;
                this._self._c;
                return this._m(0)
            },
            staticRenderFns: [function() {
                var e = this.$createElement
                  , t = this._self._c || e;
                return t("section", {
                    attrs: {
                        id: "footer"
                    }
                }, [t("div", {
                    staticClass: "footer-text"
                }, [t("a", {
                    attrs: {
                        href: "https://www.fengchuanba.com",
                        target: "_blank"
                    }
                }, [t("span", [this._v("风传吧平台 技术支持")]), this._v(" 专业的互动传播自助平台\n\t\t")])])])
            }
            ]
        });
        var q = o("VU/8")({}, D, !1, function(e) {
            o("IPP3")
        }, null, null).exports
          , O = (Object,
        k.a,
        {
            props: {
                biz: {
                    type: Object
                }
            },
            filters: {
                cdn: k.a
            }
        })
          , L = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , o = e._self._c || t;
                return o("section", {
                    attrs: {
                        id: "biz"
                    }
                }, [o("a", {
                    attrs: {
                        href: e.biz.advUrl
                    }
                }, [e.biz.advLogo ? o("img", {
                    attrs: {
                        src: e._f("cdn")(e.biz.advLogo),
                        alt: ""
                    }
                }) : e._e(), e._v(" "), e.biz.advName ? o("span", {
                    staticClass: "name",
                    class: {
                        "text-height": e.biz.advLogo
                    },
                    domProps: {
                        textContent: e._s(e.biz.advName)
                    }
                }) : e._e(), e._v(" "), o("span", {
                    class: {
                        "text-height": e.biz.advLogo
                    },
                    domProps: {
                        textContent: e._s(e.biz.advSlogan)
                    }
                }), e._v(" "), e.biz.advPrompt ? o("div", {
                    staticClass: "download"
                }, [o("span", [e._v(e._s(e.biz.advPrompt || "点击下载"))])]) : e._e()])])
            },
            staticRenderFns: []
        };
        var R = o("VU/8")(O, L, !1, function(e) {
            o("k/cC")
        }, null, null).exports
          , U = o("H7a6")
          , V = o("v6j/")
          , F = {
            render: function() {
                this.$createElement;
                this._self._c;
                return this._m(0)
            },
            staticRenderFns: [function() {
                var e = this.$createElement
                  , t = this._self._c || e;
                return t("div", {
                    attrs: {
                        id: "main-bg"
                    }
                }, [t("div", {
                    staticClass: "page msg_warn js_show",
                    attrs: {
                        tabindex: "-1"
                    }
                }, [t("div", {
                    staticClass: "weui-msg"
                }, [t("div", {
                    staticClass: "weui-msg__icon-area"
                }, [t("i", {
                    staticClass: "weui-icon-warn weui-icon_msg"
                })]), this._v(" "), t("div", {
                    staticClass: "weui-msg__text-area"
                }, [t("h2", {
                    staticClass: "weui-msg__title"
                }, [this._v("已停止访问该网页")]), this._v(" "), t("p", {
                    staticClass: "weui-msg__desc"
                }, [this._v("网页包含违规内容，被多人投诉，为维护绿色上网环境，已停止访问。")])])])])])
            }
            ]
        };
        var Q = o("VU/8")({
            data: function() {
                return {}
            },
            computed: {
                secretBox: function() {
                    return this.$store.state.secretBox
                }
            }
        }, F, !1, function(e) {
            o("nFsJ")
        }, null, null).exports
          , W = o("6Trz")
          , K = o("JXSH")
          , N = {
            data: function() {
                return {
                    timeFlow: 0
                }
            },
            computed: {
                showTipMask: function() {
                    return this.$store.state.showTipMask
                },
                secretBox: function() {
                    return this.$store.state.secretBox
                }
            },
            watch: {
                showTipMask: function(e) {
                    e && this.setTime()
                }
            },
            methods: {
                setTime: function() {
                    var e = this;
                    this.timeFlow = this.secretBox.config.perLeastTime / 1e3;
                    var t = setInterval(function() {
                        if (e.timeFlow <= 0)
                            return e.$store.commit("set_showTipMask", !1),
                            void clearInterval(t);
                        e.timeFlow -= 1
                    }, 1e3)
                }
            }
        }
          , j = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , o = e._self._c || t;
                return e.showTipMask ? o("div", {
                    staticClass: "tip-mask"
                }, [o("span", {
                    staticClass: "content"
                }, [e._v("请"), e.timeFlow > 0 ? o("span", [e._v(e._s(e.timeFlow) + "s后")]) : e._e(), e._v("作答")])]) : e._e()
            },
            staticRenderFns: []
        };
        var z = o("VU/8")(N, j, !1, function(e) {
            o("z9hR")
        }, "data-v-77df3aa4", null).exports
          , H = (k.a,
        A.Games,
        P.a,
        E.a,
        M.a,
        y.a,
        U.a,
        V.a,
        W.a,
        K.a,
        {
            computed: {
                secretBox: function() {
                    return this.$store.state.secretBox
                },
                isDemo: function() {
                    return this.$store.state.isDemo
                },
                question: function() {
                    return this.$store.state.question
                },
                userId: function() {
                    return this.$store.state.userId
                },
                shareCount: function() {
                    return this.$store.state.shareCount
                },
                successShareCount: function() {
                    return this.$store.state.successShareCount
                },
                playChance: function() {
                    return this.$store.state.playChance
                },
                currentChangeView: function() {
                    return A.Games[this.$store.state.currentView]
                },
                currentView: function() {
                    return this.$store.state.currentView
                },
                alertModal: function() {
                    return this.$store.state.alertModal
                },
                toast: function() {
                    return this.$store.state.toast
                },
                explain: function() {
                    return this.$store.state.explain
                },
                showSupport: function() {
                    return this.$store.state.showSupport
                },
                showAdvert: function() {
                    return this.$store.state.showAdvert
                },
                shareModal: function() {
                    return this.$store.state.shareModal
                },
                confirmModal: function() {
                    return this.$store.state.confirmModal
                },
                exploreAfterShareModal: function() {
                    return this.$store.state.exploreAfterShareModal
                },
                wholeExplores: function() {
                    return this.$store.state.wholeExplores
                },
                stateAnswer: function() {
                    return this.$store.state.answer
                },
                exploreDetail: function() {
                    return this.$store.state.exploreDetail
                },
                showResource131917: function() {
                    return this.$store.state.showResource131917
                }
            },
            filters: {
                cdn: k.a
            },
            data: function() {
                return {
                    timeFlow: 0,
                    text: "",
                    accuracy: 1,
                    showSlide: !1,
                    showResource: !0
                }
            },
            components: {
                Games: A.Games,
                Alert: P.a,
                Toast: E.a,
                Confirm: M.a,
                Topbar: I,
                DemoBanner: C,
                bgmControl: y.a,
                Support: q,
                Advert: R,
                Barrage: U.a,
                ShareHint: V.a,
                Illegal: Q,
                Hint: W.a,
                AnswerExplain: K.a,
                resource116300: function(e) {
                    o.e(1).then(function() {
                        var t = [o("77Xk")];
                        e.apply(null, t)
                    }
                    .bind(this)).catch(o.oe)
                },
                resource131917: function(e) {
                    o.e(4).then(function() {
                        var t = [o("tiJU")];
                        e.apply(null, t)
                    }
                    .bind(this)).catch(o.oe)
                },
                resource133202: function(e) {
                    o.e(3).then(function() {
                        var t = [o("5zpv")];
                        e.apply(null, t)
                    }
                    .bind(this)).catch(o.oe)
                },
                alert157614: function(e) {
                    o.e(2).then(function() {
                        var t = [o("z07t")];
                        e.apply(null, t)
                    }
                    .bind(this)).catch(o.oe)
                },
                TipMask: z
            },
            mounted: function() {
                this.secretBox.bizConfig.forbid && 1 != !this.secretBox.bizConfig.forbid || this.showWelcome()
            },
            methods: {
                onHide: function() {
                    "5641778211458" == this.secretBox.code && this.alertModal.hintUrl ? location.href = this.alertModal.hintUrl : this.$store.commit("set_AlertModal", {
                        alertMsg: "",
                        alertTitle: "",
                        showAlert: !1
                    })
                },
                showWelcome: function() {
                    this.$store.dispatch("showWelcome")
                },
                submitWholeNext: function() {
                    2 != this.secretBox.config.showVerifyImg ? this.$store.dispatch("submitFinal") : this.$store.commit("set_currentView", "verify")
                },
                cancleConfirm: function() {
                    this.$store.commit("set_confirmModal", {
                        showConfirm: !1
                    }),
                    this.$store.commit("set_submitQDisabled", !1)
                },
                closeShare: function() {
                    this.$store.commit("set_shareModal", {
                        showShare: !1
                    })
                },
                exploreNoShare: function() {
                    this.$store.commit("set_exploreAfterShareModal", {
                        showShare: !1
                    }),
                    this.$store.dispatch("failureExplore"),
                    this.secretBox.config.failureAction ? this.$store.dispatch("showSuccess") : this.$store.commit("set_currentView", "fail")
                },
                closeExplain: function() {
                    this.explain.showAnswer = !1,
                    this.explain.showExplain = !1,
                    this.$store.commit("set_showSleep", !1),
                    this.$store.dispatch("showNextQuestion")
                },
                backToSerialBox: function() {
                    self.location.href = "https://serial2.fengchuanba.com/index.html#949-LKcVRqeBvLZRWWB7LCevGIfmqO8q3NrA"
                },
                closeResource: function() {
                    this.$store.commit("set_showResource131917", !1),
                    this.$store.dispatch("startGame")
                }
            }
        })
          , G = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , o = e._self._c || t;
                return e.secretBox.bizConfig.forbid && 1 == e.secretBox.bizConfig.forbid ? o("div", [o("Illegal")], 1) : o("div", [o("tip-mask"), e._v(" "), e.isDemo ? o("demo-banner") : e._e(), e._v(" "), e.secretBox.bgVoice && e.secretBox.config.voiceControl ? o("bgm-control") : e._e(), e._v(" "), e.explain.showAnswer ? o("answer-explain", {
                    attrs: {
                        "explain-title": "正确答案",
                        "explain-detail": e.explain.content,
                        "explain-button": "我知道了",
                        "answer-array": e.explain.answerArray
                    },
                    on: {
                        closeExplain: e.closeExplain
                    }
                }) : e._e(), e._v(" "), !e.explain.showExplain || "5691355716514" != e.secretBox.code && "5651955336487" != e.secretBox.code ? e.explain.showExplain ? o("hint", {
                    attrs: {
                        title: e.explain.title,
                        content: e.explain.content,
                        "btn-text": e.explain.btnText
                    },
                    on: {
                        close: e.closeExplain
                    }
                }) : e._e() : o("alert157614", {
                    attrs: {
                        title: e.explain.title,
                        content: e.explain.content,
                        "btn-text": e.explain.btnText
                    },
                    on: {
                        close: e.closeExplain
                    }
                }), e._v(" "), e.shareModal.showShare ? o("share-hint", {
                    attrs: {
                        content: e.shareModal.content
                    },
                    on: {
                        close: e.closeShare
                    }
                }) : e._e(), e._v(" "), e.exploreAfterShareModal.showShare ? o("share-hint", {
                    attrs: {
                        content: e.exploreAfterShareModal.content,
                        callbackBtn: e.exploreAfterShareModal.callbackBtn,
                        hasClose: !1
                    },
                    on: {
                        callback: e.exploreNoShare
                    }
                }) : e._e(), e._v(" "), e.showSupport ? o("support") : e._e(), e._v(" "), e.showAdvert ? o("advert", {
                    attrs: {
                        biz: e.secretBox.bizConfig
                    }
                }) : e._e(), e._v(" "), o(e.currentChangeView, {
                    tag: "component"
                }), e._v(" "), e.alertModal.showAlert ? o("hint", {
                    attrs: {
                        title: e.alertModal.alertTitle,
                        content: e.alertModal.alertMsg,
                        alertModal: e.alertModal,
                        contentList: e.alertModal.undoQuestionList,
                        "btn-text": "确定"
                    },
                    on: {
                        close: e.onHide
                    }
                }) : e._e(), e._v(" "), o("Confirm", {
                    attrs: {
                        title: e.confirmModal.title,
                        content: e.confirmModal.content,
                        "confirm-text": e.confirmModal.confirmText,
                        "cancel-text": e.confirmModal.cancelText
                    },
                    on: {
                        "on-confirm": e.submitWholeNext,
                        "on-cancel": e.cancleConfirm
                    },
                    model: {
                        value: e.confirmModal.showConfirm,
                        callback: function(t) {
                            e.$set(e.confirmModal, "showConfirm", t)
                        },
                        expression: "confirmModal.showConfirm"
                    }
                }), e._v(" "), o("toast", {
                    attrs: {
                        text: e.toast.toastMsg,
                        type: e.toast.type,
                        time: e.toast.time,
                        position: e.toast.position,
                        "is-show-mask": ""
                    },
                    model: {
                        value: e.toast.showToast,
                        callback: function(t) {
                            e.$set(e.toast, "showToast", t)
                        },
                        expression: "toast.showToast"
                    }
                }), e._v(" "), "553376034314" == e.secretBox.code ? o("audio", {
                    attrs: {
                        id: "wrongBgm36334",
                        preload: ""
                    }
                }, [o("source", {
                    attrs: {
                        src: "http://content.fengchuanba.com/file/company/20680/18430/wrong.mp3",
                        type: "audio/mpeg"
                    }
                })]) : e._e(), e._v(" "), "553376034314" == e.secretBox.code ? o("audio", {
                    attrs: {
                        id: "rightBgm36334",
                        preload: ""
                    }
                }, [o("source", {
                    attrs: {
                        src: "http://content.fengchuanba.com/file/company/20680/18430/right.mp3",
                        type: "audio/mpeg"
                    }
                })]) : e._e(), e._v(" "), "553376034314" == e.secretBox.code ? o("audio", {
                    attrs: {
                        id: "startBgm36334"
                    }
                }, [o("source", {
                    attrs: {
                        src: "https://bpic.588ku.com/audio_copy/audio/18/07/29/effca9471831a5bf1d2f19f81390380d.mp3",
                        type: "audio/mpeg"
                    }
                })]) : e._e(), e._v(" "), "556966114940" == e.secretBox.code || "556966164249" == e.secretBox.code ? o("div", {
                    staticClass: "back_serialbox",
                    on: {
                        click: e.backToSerialBox
                    }
                }, [e._v("返回首页")]) : e._e(), e._v(" "), "5671619683100" == e.secretBox.code && e.showResource ? o("resource116300", {
                    on: {
                        close: function(t) {
                            e.showResource = !1
                        }
                    }
                }) : e._e(), e._v(" "), 131917 == e.secretBox.style && e.showResource131917 ? o("resource131917", {
                    on: {
                        close: e.closeResource
                    }
                }) : e._e(), e._v(" "), "5681432322102" == e.secretBox.code && e.showResource131917 ? o("resource133202", {
                    on: {
                        close: e.closeResource
                    }
                }) : e._e()], 1)
            },
            staticRenderFns: []
        };
        var J = o("VU/8")(H, G, !1, function(e) {
            o("cKhM")
        }, null, null).exports;
        k.a,
        W.a;
        function X() {
            return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
        }
        var Y = {
            data: function() {
                return {
                    ingame: !0,
                    sbc: location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_")[0].split("-")[0],
                    secretKey: location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_")[0].split("-")[1],
                    showError: !1,
                    showHint: !1,
                    hintTitle: "消息",
                    hintMsg: "",
                    hintBtn: "好的，现在就去下载",
                    hintUrl: ""
                }
            },
            filters: {
                cdn: k.a
            },
            props: {},
            computed: {
                alertModal: function() {
                    return this.$store.state.alertModal
                },
                showGameControl: function() {
                    return this.$store.state.showGameControl
                },
                dev: function() {
                    return this.$store.state.dev
                },
                secretBox: function() {
                    return this.$store.state.secretBox
                },
                secretBoxBaseConfig: function() {
                    return this.$store.state.secretBoxBaseConfig
                }
            },
            mounted: function() {
                var e = this;
                (this.$store.commit("set_secretBoxInfo", {
                    secretBoxCode: this.sbc,
                    secretKey: this.secretKey || ""
                }),
                "465144519637" == this.sbc) && (document.getElementsByTagName("html")[0].style.maxWidth = "100%");
                if (this.secretBoxBaseConfig.paperDownload && -1 == location.href.indexOf("createpaper")) {
                    var t = window.location.href
                      , o = "https://createpaper.fengchuanba.com/index.html#"
                      , n = t.lastIndexOf("#");
                    return o += t.substring(n + 1, t.length),
                    void (location.href = o)
                }
                X() ? this.$store.commit("set_dev", "weixin") : this.$store.commit("set_dev", "other");
                var s, i = this;
                if ("555794071782" == this.sbc && wx.miniProgram.getEnv(function(e) {
                    e.miniprogram && i.$store.commit("set_followMatch", 4)
                }),
                "251733578" == this.sbc && wx.miniProgram.getEnv(function(e) {
                    e.miniprogram && i.$store.commit("set_followMatch", 4)
                }),
                (/\d{2}5\d{1}8\d{1}2\d{1}5\d{1}6.*/.test(this.sbc) || /\d{2}4\d{1}9\d{1}2\d{1}1\d{1}7.*/.test(this.sbc) || "5681637907453" == this.sbc || "5681647007468" == this.sbc || this.secretBoxBaseConfig.onlyPhone) && !function() {
                    var e = {
                        win: !1,
                        mac: !1,
                        xll: !1,
                        ipad: !1
                    }
                      , t = window.navigator.platform;
                    if (e.win = 0 == t.indexOf("Win"),
                    e.mac = 0 == t.indexOf("Mac"),
                    e.x11 = "X11" == t || 0 == t.indexOf("Linux"),
                    e.ipad = null != window.navigator.userAgent.match(/iPad/i),
                    e.win || e.mac || e.xll || e.ipad)
                        ;
                    else if ("micromessenger" == window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i))
                        return !0;
                    return !1
                }())
                    return "5611190193092" == this.sbc ? void (location.href = "https://explore.fengchuanba.com/wxcj.html") : void (this.showError = !0);
                if ("5611908573558" == this.sbc && -1 == (s = window.navigator.userAgent.toLowerCase()).indexOf("mszx"))
                    return this.hintMsg = "<div style='text-align:center;'><div>请在【眉山日报】App中参加活动！</div></div>",
                    this.showHint = !0,
                    this.hintUrl = "https://a.app.qq.com/o/simple.jsp?pkgname=com.founder.meishan",
                    !0;
                if (("5641748017435" == this.sbc || "5641748818461" == this.sbc) && -1 == (s = window.navigator.userAgent.toLowerCase()).indexOf("scgc_ua"))
                    return this.hintMsg = "<div style='text-align:center;'><div><img src='http://content.fengchuanba.com/file/company/47814/20200806/wxbz.png'></div><div>请在【无线巴中】客户端中参加活动！</div></div>",
                    this.showHint = !0,
                    this.hintUrl = "http://appdown.bzgd.com/",
                    !0;
                if (("5661449394081" == this.sbc || "5661449795077" == this.sbc) && -1 == (s = window.navigator.userAgent.toLowerCase()).indexOf("scgc_ua"))
                    return this.hintMsg = "<div style='text-align:center;'><div>请在【云上通江】客户端中参加活动！</div></div>",
                    this.showHint = !0,
                    this.hintUrl = "http://jrtjxfile.bzitv.cn/sctv/logo/download/download.html",
                    !0;
                if ("5661520366016" == this.sbc && -1 == (s = window.navigator.userAgent.toLowerCase()).indexOf("scgc_ua"))
                    return this.hintMsg = "<div style='text-align:center;'><div>请在【大美巴州】客户端中参加活动！</div></div>",
                    this.showHint = !0,
                    this.hintUrl = "http://jrbzxfile.bzitv.cn/sctv/logo/download/download.html",
                    !0;
                if ("5631549145349" == this.sbc && (-1 == (s = window.navigator.userAgent).indexOf("Aheading") && -1 == s.indexOf("ImageSwitcherSetPageShareopenpageshareCanReport")))
                    return this.hintMsg = "<div style='text-align:center;'><div><img src='http://content.fengchuanba.com/file/company/35943/20210617/zsbz.png'></div><div>请在【掌上巴中】客户端中参加活动！</div></div>",
                    this.showHint = !0,
                    this.hintUrl = "http://www.aheading.com/qiancheng/down/scbz/download/scbz.html",
                    !0;
                if (("553899589752" == this.sbc || "553994589750" == this.sbc) && -1 == (s = window.navigator.userAgent.toLowerCase()).indexOf("scgc_ua"))
                    return this.hintMsg = "<div style='text-align:center;'><div>请在【家在恩阳】客户端中参加活动！</div></div>",
                    this.showHint = !0,
                    this.hintUrl = "http://www.eyxw.com.cn/download/eyxw.apk",
                    !0;
                if ("5691351742985" != this.sbc || window.navigator.userAgent && window.navigator.userAgent.includes("TMAppName"))
                    if ("dev" == this.dev)
                        localStorage.sbox_wxopenid = "secretbox-debug-uuid-20160501",
                        this.$store.dispatch("getSecretBoxFromWeChat");
                    else {
                        if ("5691352668782" == this.sbc && "dingtalk" != navigator.userAgent.toLowerCase().match(/dingtalk/i))
                            return void alert("请在钉钉里面参与活动！");
                        if ("5611100594035" == this.sbc) {
                            setTimeout(function() {
                                AppBridgeGlobal.getTMUserInfo(function(e) {
                                    if ("" == e)
                                        alert("请注册并登录APP后使用！");
                                    else {
                                        var t = JSON.parse(e);
                                        if (t && t.member_id && t.member_id > 0) {
                                            var o = "yunshangkangbashen_" + t.member_id;
                                            localStorage.sbox_wxopenid = o,
                                            i.$store.dispatch("getSecretBoxFromWeChat")
                                        } else
                                            alert("请注册并登录APP后使用！")
                                    }
                                })
                            }, 1500)
                        } else if ("5661309629800-111" == this.sbc) {
                            if (!localStorage.UserGUID || localStorage.UserGUID.length < 15)
                                return this.hintMsg = "<div style='text-align:center;'><div>请在【掌上怀化】客户端中参加活动！</div></div>",
                                this.showHint = !0,
                                this.hintUrl = "http://www.zshh0745.cn/",
                                !0;
                            localStorage.sbox_wxopenid = "zshh-" + localStorage.UserGUID,
                            this.$store.commit("set_dev", "zshh-appuserid"),
                            this.$store.dispatch("getSecretBoxFromWeChat")
                        } else if ("554914819630" == this.sbc || "554914829530" == this.sbc || "554912829531" == this.sbc)
                            wx.miniProgram.getEnv(function(e) {
                                var t = this;
                                e.miniprogram && l()(r.a.mark(function e() {
                                    return r.a.wrap(function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                i.$store.dispatch("getSecretBoxBaseConfig");
                                            case 2:
                                                return e.next = 4,
                                                Object(b.c)(i.secretBoxBaseConfig);
                                            case 4:
                                                i.$store.dispatch("getSecretBoxFromWeChat");
                                            case 5:
                                            case "end":
                                                return e.stop()
                                            }
                                    }, e, t)
                                }))()
                            });
                        else if ("5611832274312" == this.sbc || "5611822975323" == this.sbc) {
                            if (X())
                                return;
                            if (localStorage.sbox_wxopenid && localStorage.sbox_wxopenid.indexOf("dqyt-appuserid") < 0 && (localStorage.sbox_wxopenid = null),
                            !localStorage.sbox_wxopenid || localStorage.sbox_wxopenid.length < 26)
                                if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1)
                                    !function(e) {
                                        if (window.WebViewJavascriptBridge)
                                            return e(WebViewJavascriptBridge);
                                        if (window.WVJBCallbacks)
                                            return window.WVJBCallbacks.push(e);
                                        window.WVJBCallbacks = [e];
                                        var t = document.createElement("iframe");
                                        t.style.display = "none",
                                        t.src = "https://__bridge_loaded__",
                                        document.documentElement.appendChild(t),
                                        setTimeout(function() {
                                            document.documentElement.removeChild(t)
                                        }, 0)
                                    }(function(e) {
                                        e.callHandler("morefunObjcGetUserInfo", {
                                            needLogin: !0
                                        }, function(e) {
                                            var t = JSON.parse(e);
                                            localStorage.sbox_wxopenid = "secretbox-dqyt-appuserid-" + t.userInfo.userid,
                                            i.$store.commit("set_dev", "dqyt-appuserid"),
                                            i.$store.dispatch("getSecretBoxFromWeChat")
                                        })
                                    });
                                else {
                                    var a = JSON.parse(window.android.morefunObjcGetUserInfo(!0));
                                    localStorage.sbox_wxopenid = "secretbox-dqyt-appuserid-" + a.userInfo.userid,
                                    this.$store.commit("set_dev", "dqyt-appuserid"),
                                    this.$store.dispatch("getSecretBoxFromWeChat")
                                }
                            else
                                this.$store.commit("set_dev", "dqyt-appuserid"),
                                this.$store.dispatch("getSecretBoxFromWeChat")
                        } else {
                            if ("5691351742985" == this.sbc && !localStorage.sbox_wxopenid)
                                return;
                            if (X() && "wxwork" != navigator.userAgent.toLowerCase().match(/wxwork/i))
                                l()(r.a.mark(function t() {
                                    return r.a.wrap(function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                Object(b.c)(e.secretBoxBaseConfig);
                                            case 2:
                                                e.$store.dispatch("getSecretBoxFromWeChat");
                                            case 3:
                                            case "end":
                                                return t.stop()
                                            }
                                    }, t, e)
                                }))();
                            else {
                                if ("66110941918709" == this.sbc || "66110941938105" == this.sbc || "66110941928003" == this.sbc || "66110941928007" == this.sbc) {
                                    if (Object(b.a)("sbox_wxopenid_104980"))
                                        localStorage.sbox_wxopenid = Object(b.a)("sbox_wxopenid_104980");
                                    else {
                                        var c = (new Date).getTime();
                                        localStorage.sbox_wxopenid = "secretbox-uuid-" + this.sbc + "-" + c,
                                        Object(b.b)("sbox_wxopenid_104980", localStorage.sbox_wxopenid, 30, ".fengchuanba.com")
                                    }
                                    return this.$store.commit("set_dev", "appuserid"),
                                    void this.$store.dispatch("getSecretBoxFromWeChat")
                                }
                                if ($.inArray(this.sbc, []) >= 0 || /\d{2}7\d{1}2\d{1}0\d{1}0\d{1}0.*/.test(this.sbc) || /\d{2}6\d{1}9\d{1}3\d{1}1\d{1}2.*/.test(this.sbc) || /\d{2}4\d{1}0\d{1}6\d{1}9\d{1}7.*/.test(this.sbc) || this.secretBoxBaseConfig.clientPc) {
                                    if (!localStorage.sbox_wxopenid) {
                                        var u = (new Date).getTime();
                                        localStorage.sbox_wxopenid = "secretbox-uuid-" + this.sbc + "-" + u
                                    }
                                    this.$store.commit("set_dev", "appuserid"),
                                    this.$store.dispatch("getSecretBoxFromWeChat")
                                } else
                                    this.$store.commit("set_dev", "other"),
                                    this.$store.dispatch("getSecretBoxFromPC")
                            }
                        }
                    }
            },
            components: {
                GameControl: J,
                BrowserError: v,
                Hint: W.a
            },
            methods: {
                closeHint: function() {
                    this.hintUrl && (location.href = this.hintUrl)
                }
            }
        }
          , Z = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , o = e._self._c || t;
                return o("div", {
                    attrs: {
                        id: "app"
                    }
                }, [o("audio", {
                    attrs: {
                        id: "bgm",
                        src: e._f("cdn")(e.secretBox.bgVoice),
                        autoplay: "autoplay",
                        loop: "loop"
                    }
                }), e._v(" "), e.showGameControl && !e.showError ? o("game-control") : e._e(), e._v(" "), e.showError || "error" == e.dev ? o("browser-error") : e._e(), e._v(" "), e.showHint ? o("hint", {
                    attrs: {
                        title: e.hintTitle,
                        content: e.hintMsg,
                        "btn-text": e.hintBtn
                    },
                    on: {
                        close: e.closeHint
                    }
                }) : e._e()], 1)
            },
            staticRenderFns: []
        };
        var ee = o("VU/8")(Y, Z, !1, function(e) {
            o("LLN8"),
            o("CxqR")
        }, null, null).exports
          , te = o("IcnI")
          , oe = (o("KhYh"),
        o("ocbm"))
          , ne = o("qNcu")
          , se = o.n(ne);
        var ie = o("zL8q");
        o("tvR6");
        s()(oe).forEach(function(e) {
            i.default.filter(e, oe[e])
        }),
        i.default.use(se.a),
        i.default.use(ie.Cascader),
        i.default.use(ie.Input),
        i.default.use(ie.Select),
        i.default.use(ie.Option),
        i.default.use(ie.Autocomplete),
        i.default.use(ie.Button),
        i.default.use(ie.Card),
        i.default.use(ie.Checkbox),
        i.default.use(ie.CheckboxGroup),
        i.default.use(ie.Form),
        i.default.use(ie.FormItem),
        i.default.use(ie.Upload),
        i.default.use(ie.DatePicker),
        i.default.use(ie.Radio),
        i.default.use(ie.RadioGroup),
        i.default.use(ie.Rate),
        i.default.use(ie.Collapse),
        i.default.use(ie.CollapseItem),
        i.default.use(ie.Loading.directive),
        i.default.prototype.$loading = ie.Loading.service,
        i.default.prototype.$message = ie.Message,
        o("CGz8"),
        i.default.prototype.getCurrentTimeHhMm = function() {
            var e = new Date
              , t = e.getHours()
              , o = e.getMinutes()
              , n = "";
            return t < 10 && (n += "0"),
            n += t + ":",
            o < 10 && (n += "0"),
            n += o
        }
        ,
        i.default.prototype.getCurrentDateTime = function() {
            var e = new Date
              , t = new Date(e.getTime() + 6e4 * (e.getTimezoneOffset() + 480))
              , o = t.getFullYear()
              , n = t.getMonth() + 1
              , s = t.getDate()
              , i = t.getHours()
              , a = t.getMinutes()
              , r = t.getSeconds()
              , c = o + "-";
            return n < 10 && (c += "0"),
            c += n + "-",
            s < 10 && (c += "0"),
            c += s + " ",
            i < 10 && (c += "0"),
            c += i + ":",
            a < 10 && (c += "0"),
            c += a + ":",
            r < 10 && (c += "0"),
            c += r
        }
        ,
        i.default.config.devtools = !0,
        "5671547012771" == te.a.state.secretBoxCode && (location.href = "https://e5671567610727.fengchuanba.com/index.html#5671567610727-MeSG0bwLd1q321pD18yaX3dF5jbOUJax"),
        "464136963987" == te.a.state.secretBoxCode && (location.href = "https://e464136983979.fengchuanba.com/index.html#464136983979-RVsuSJzshnS8jKcgZgyPLWafDP5WdQjy"),
        te.a.dispatch("getSecretBoxBaseConfig").then(function(e) {
            new i.default({
                el: "#app",
                store: te.a,
                template: "<App/>",
                components: {
                    App: ee
                },
                data: {
                    currentRoute: ""
                },
                computed: {
                    tsy: function() {
                        return this.$store.state.tsy
                    },
                    secretBoxBaseConfig: function() {
                        return this.$store.state.secretBoxBaseConfig
                    }
                },
                mounted: function() {
                    var e, t, o, n = "2022Feb";
                    this.secretBoxBaseConfig.h && (e = this.secretBoxBaseConfig.h,
                    t = this.$store.state.secretKey.substr(0, 16),
                    o = this.$store.state.secretKey.substr(16, 32),
                    n = CryptoJS.AES.decrypt(e, CryptoJS.enc.Utf8.parse(t), {
                        iv: CryptoJS.enc.Utf8.parse(o),
                        mode: CryptoJS.mode.CBC,
                        padding: CryptoJS.pad.Pkcs7
                    }).toString(CryptoJS.enc.Utf8));
                    var s = function(e, t) {
                        return e << t | e >>> 32 - t
                    }
                      , i = function(e, t) {
                        var o, n, s, i, a;
                        return s = 2147483648 & e,
                        i = 2147483648 & t,
                        a = (1073741823 & e) + (1073741823 & t),
                        (o = 1073741824 & e) & (n = 1073741824 & t) ? 2147483648 ^ a ^ s ^ i : o | n ? 1073741824 & a ? 3221225472 ^ a ^ s ^ i : 1073741824 ^ a ^ s ^ i : a ^ s ^ i
                    }
                      , a = function(e, t, o, n, a, r, c) {
                        return e = i(e, i(i(function(e, t, o) {
                            return e & t | ~e & o
                        }(t, o, n), a), c)),
                        i(s(e, r), t)
                    }
                      , r = function(e, t, o, n, a, r, c) {
                        return e = i(e, i(i(function(e, t, o) {
                            return e & o | t & ~o
                        }(t, o, n), a), c)),
                        i(s(e, r), t)
                    }
                      , c = function(e, t, o, n, a, r, c) {
                        return e = i(e, i(i(function(e, t, o) {
                            return e ^ t ^ o
                        }(t, o, n), a), c)),
                        i(s(e, r), t)
                    }
                      , l = function(e, t, o, n, a, r, c) {
                        return e = i(e, i(i(function(e, t, o) {
                            return t ^ (e | ~o)
                        }(t, o, n), a), c)),
                        i(s(e, r), t)
                    }
                      , u = function(e) {
                        var t, o = "", n = "";
                        for (t = 0; t <= 3; t++)
                            o += (n = "0" + (e >>> 8 * t & 255).toString(16)).substr(n.length - 2, 2);
                        return o
                    };
                    $.extend({
                        foo: function(e) {
                            var t, o, n, s, h, d, p, f, m, _ = Array();
                            for (_ = function(e) {
                                for (var t, o = e.length, n = o + 8, s = 16 * ((n - n % 64) / 64 + 1), i = Array(s - 1), a = 0, r = 0; r < o; )
                                    a = r % 4 * 8,
                                    i[t = (r - r % 4) / 4] = i[t] | e.charCodeAt(r) << a,
                                    r++;
                                return a = r % 4 * 8,
                                i[t = (r - r % 4) / 4] = i[t] | 128 << a,
                                i[s - 2] = o << 3,
                                i[s - 1] = o >>> 29,
                                i
                            }(e = function(e) {
                                e = e.replace(/\x0d\x0a/g, "\n");
                                for (var t = "", o = 0; o < e.length; o++) {
                                    var n = e.charCodeAt(o);
                                    n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192),
                                    t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224),
                                    t += String.fromCharCode(n >> 6 & 63 | 128),
                                    t += String.fromCharCode(63 & n | 128))
                                }
                                return t
                            }(e)),
                            d = 1732584193,
                            p = 4023233417,
                            f = 2562383102,
                            m = 271733878,
                            t = 0; t < _.length; t += 16)
                                o = d,
                                n = p,
                                s = f,
                                h = m,
                                d = a(d, p, f, m, _[t + 0], 7, 3614090360),
                                m = a(m, d, p, f, _[t + 1], 12, 3905402710),
                                f = a(f, m, d, p, _[t + 2], 17, 606105819),
                                p = a(p, f, m, d, _[t + 3], 22, 3250441966),
                                d = a(d, p, f, m, _[t + 4], 7, 4118548399),
                                m = a(m, d, p, f, _[t + 5], 12, 1200080426),
                                f = a(f, m, d, p, _[t + 6], 17, 2821735955),
                                p = a(p, f, m, d, _[t + 7], 22, 4249261313),
                                d = a(d, p, f, m, _[t + 8], 7, 1770035416),
                                m = a(m, d, p, f, _[t + 9], 12, 2336552879),
                                f = a(f, m, d, p, _[t + 10], 17, 4294925233),
                                p = a(p, f, m, d, _[t + 11], 22, 2304563134),
                                d = a(d, p, f, m, _[t + 12], 7, 1804603682),
                                m = a(m, d, p, f, _[t + 13], 12, 4254626195),
                                f = a(f, m, d, p, _[t + 14], 17, 2792965006),
                                p = a(p, f, m, d, _[t + 15], 22, 1236535329),
                                d = r(d, p, f, m, _[t + 1], 5, 4129170786),
                                m = r(m, d, p, f, _[t + 6], 9, 3225465664),
                                f = r(f, m, d, p, _[t + 11], 14, 643717713),
                                p = r(p, f, m, d, _[t + 0], 20, 3921069994),
                                d = r(d, p, f, m, _[t + 5], 5, 3593408605),
                                m = r(m, d, p, f, _[t + 10], 9, 38016083),
                                f = r(f, m, d, p, _[t + 15], 14, 3634488961),
                                p = r(p, f, m, d, _[t + 4], 20, 3889429448),
                                d = r(d, p, f, m, _[t + 9], 5, 568446438),
                                m = r(m, d, p, f, _[t + 14], 9, 3275163606),
                                f = r(f, m, d, p, _[t + 3], 14, 4107603335),
                                p = r(p, f, m, d, _[t + 8], 20, 1163531501),
                                d = r(d, p, f, m, _[t + 13], 5, 2850285829),
                                m = r(m, d, p, f, _[t + 2], 9, 4243563512),
                                f = r(f, m, d, p, _[t + 7], 14, 1735328473),
                                p = r(p, f, m, d, _[t + 12], 20, 2368359562),
                                d = c(d, p, f, m, _[t + 5], 4, 4294588738),
                                m = c(m, d, p, f, _[t + 8], 11, 2272392833),
                                f = c(f, m, d, p, _[t + 11], 16, 1839030562),
                                p = c(p, f, m, d, _[t + 14], 23, 4259657740),
                                d = c(d, p, f, m, _[t + 1], 4, 2763975236),
                                m = c(m, d, p, f, _[t + 4], 11, 1272893353),
                                f = c(f, m, d, p, _[t + 7], 16, 4139469664),
                                p = c(p, f, m, d, _[t + 10], 23, 3200236656),
                                d = c(d, p, f, m, _[t + 13], 4, 681279174),
                                m = c(m, d, p, f, _[t + 0], 11, 3936430074),
                                f = c(f, m, d, p, _[t + 3], 16, 3572445317),
                                p = c(p, f, m, d, _[t + 6], 23, 76029189),
                                d = c(d, p, f, m, _[t + 9], 4, 3654602809),
                                m = c(m, d, p, f, _[t + 12], 11, 3873151461),
                                f = c(f, m, d, p, _[t + 15], 16, 530742520),
                                p = c(p, f, m, d, _[t + 2], 23, 3299628645),
                                d = l(d, p, f, m, _[t + 0], 6, 4096336452),
                                m = l(m, d, p, f, _[t + 7], 10, 1126891415),
                                f = l(f, m, d, p, _[t + 14], 15, 2878612391),
                                p = l(p, f, m, d, _[t + 5], 21, 4237533241),
                                d = l(d, p, f, m, _[t + 12], 6, 1700485571),
                                m = l(m, d, p, f, _[t + 3], 10, 2399980690),
                                f = l(f, m, d, p, _[t + 10], 15, 4293915773),
                                p = l(p, f, m, d, _[t + 1], 21, 2240044497),
                                d = l(d, p, f, m, _[t + 8], 6, 1873313359),
                                m = l(m, d, p, f, _[t + 15], 10, 4264355552),
                                f = l(f, m, d, p, _[t + 6], 15, 2734768916),
                                p = l(p, f, m, d, _[t + 13], 21, 1309151649),
                                d = l(d, p, f, m, _[t + 4], 6, 4149444226),
                                m = l(m, d, p, f, _[t + 11], 10, 3174756917),
                                f = l(f, m, d, p, _[t + 2], 15, 718787259),
                                p = l(p, f, m, d, _[t + 9], 21, 3951481745),
                                d = i(d, o),
                                p = i(p, n),
                                f = i(f, s),
                                m = i(m, h);
                            return (u(d) + u(p) + u(f) + u(m)).toUpperCase()
                        }
                    }),
                    Function.prototype.before = function(e) {
                        var t = this;
                        return function() {
                            return e.apply(this, arguments),
                            t.apply(this, arguments)
                        }
                    }
                    ,
                    $._ajax = $.ajax;
                    var h = this;
                    $.ajax = $._ajax.before(function(e) {
                        var t = e.data
                          , o = []
                          , s = (new Date).getTime();
                        for (var i in t)
                            o.push(i + "=" + t[i]);
                        (o = _.sortBy(o)).push("ts=" + Math.floor(s / 1e3));
                        var a = function(e) {
                            for (var t, o = "".length, s = o + 8, i = 16 * ((s - s % 64) / 64 + 1), a = Array(i - 1), r = 0, c = 0; c < o; )
                                r = c % 4 * 8,
                                a[t = (c - c % 4) / 4] = a[t] | "".charCodeAt(c) << r,
                                c++;
                            r = c % 4 * 8,
                            a[t = (c - c % 4) / 4] = a[t] | 128 << r,
                            a[i - 2] = o << 3,
                            a[i - 1] = o >>> 29;
                            var l, u, h, d, p, f, m, _ = location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_")[0].split("-")[0];
                            for (location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_")[0].indexOf("-"),
                            _ = n + _,
                            e.unshift(_),
                            f = "".length,
                            p = 0,
                            m = ""; p < f; ) {
                                do {
                                    l = base64DecodeChars[255 & "".charCodeAt(p++)]
                                } while (p < f && -1 == l);
                                if (-1 == l)
                                    break;
                                do {
                                    u = base64DecodeChars[255 & "".charCodeAt(p++)]
                                } while (p < f && -1 == u);
                                if (-1 == u)
                                    break;
                                m += String.fromCharCode(l << 2 | (48 & u) >> 4);
                                do {
                                    if (61 == (h = 255 & "".charCodeAt(p++)))
                                        return m;
                                    h = base64DecodeChars[h]
                                } while (p < f && -1 == h);
                                if (-1 == h)
                                    break;
                                m += String.fromCharCode((15 & u) << 4 | (60 & h) >> 2);
                                do {
                                    if (61 == (d = 255 & "".charCodeAt(p++)))
                                        return m;
                                    d = base64DecodeChars[d]
                                } while (p < f && -1 == d);
                                if (-1 == d)
                                    break;
                                m += String.fromCharCode((3 & h) << 6 | d)
                            }
                            return e
                        }(o);
                        e.data.sign = $.foo(a.join("&")),
                        e.data.ts = s,
                        e.data.tsy = h.tsy
                    })
                }
            })
        })
    },
    S8Wg: function(e, t, o) {
        "use strict";
        var n = o("mvHQ")
          , s = o.n(n)
          , i = o("BEQ0")
          , a = o.n(i)
          , r = o("WTNC")
          , c = o.n(r)
          , l = o("ypEt")
          , u = o.n(l)
          , h = o("qbvd")
          , d = o.n(h);
        Object,
        String,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Object,
        Object,
        Boolean,
        Number;
        var p = {
            name: "scroller",
            props: {
                value: {
                    type: Object,
                    default: function() {
                        return {
                            pulldownStatus: "",
                            pullupStatus: ""
                        }
                    }
                },
                height: String,
                lockX: Boolean,
                lockY: Boolean,
                scrollbarX: Boolean,
                scrollbarY: Boolean,
                bounce: {
                    type: Boolean,
                    default: !0
                },
                useOriginScroll: {
                    type: Boolean,
                    default: !1
                },
                useTransition: {
                    type: Boolean,
                    default: !0
                },
                preventDefault: {
                    type: Boolean,
                    default: !1
                },
                stopPropagation: Boolean,
                boundryCheck: {
                    type: Boolean,
                    default: !0
                },
                gpuAcceleration: {
                    type: Boolean,
                    default: !0
                },
                usePulldown: {
                    type: Boolean,
                    default: !1
                },
                usePullup: {
                    type: Boolean,
                    default: !1
                },
                pulldownConfig: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                pullupConfig: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                enableHorizontalSwiping: {
                    type: Boolean,
                    default: !1
                },
                scrollBottomOffset: {
                    type: Number,
                    default: 0
                }
            },
            methods: {
                reset: function(e, t, o) {
                    e && (void 0 !== e.left && this._xscroll.scrollLeft(e.left, t, o),
                    void 0 !== e.top && this._xscroll.scrollTop(e.top, t, o)),
                    this._xscroll && this._xscroll.resetSize()
                },
                donePulldown: function() {
                    var e = this;
                    this.pulldown.reset(function() {
                        e.reset()
                    }),
                    this.currentValue.pulldownStatus = "default"
                },
                disablePullup: function() {
                    this.pullup.stop(),
                    this.currentValue.pullupStatus = "disabled"
                },
                enablePullup: function() {
                    this.currentValue.pullupStatus = "default",
                    this.pullup.restart()
                },
                donePullup: function() {
                    this.pullup.complete(),
                    this.reset(),
                    this.currentValue.pullupStatus = "default"
                },
                getStyles: function() {
                    var e = this.height;
                    !this.height && this.$el && !this.$el.style.height && this.lockX && (e = document.documentElement.clientHeight + "px",
                    this.reset()),
                    this.height && 0 === this.height.indexOf("-") && (e = document.documentElement.clientHeight + parseInt(this.height) + "px"),
                    this.styles = {
                        height: "" + e
                    }
                }
            },
            created: function() {
                var e = this;
                this.value ? this.currentValue = this.value : this.currentValue = {
                    pulldownStatus: "",
                    pullupStatus: ""
                },
                this.handleOrientationchange = function() {
                    setTimeout(function() {
                        e.reset()
                    }, 100)
                }
            },
            data: function() {
                return {
                    currentValue: {},
                    styles: {}
                }
            },
            watch: {
                currentValue: {
                    handler: function(e) {
                        var t;
                        this.$emit("input", (t = e,
                        JSON.parse(s()(t))))
                    },
                    deep: !0
                },
                height: function() {
                    this.getStyles()
                },
                value: {
                    handler: function(e) {
                        "default" === e.pullupStatus && "default" !== this.currentValue.pullupStatus && this.donePullup(),
                        "default" === e.pulldownStatus && "default" !== this.currentValue.pulldownStatus && this.donePulldown(),
                        "disabled" === e.pullupStatus && "disabled" !== this.currentValue.pullupStatus && this.disablePullup(),
                        "enabled" === e.pullupStatus && "disabled" === this.currentValue.pullupStatus && this.enablePullup()
                    },
                    deep: !0
                }
            },
            mounted: function() {
                var e = this;
                this.uuid = Math.random().toString(36).substring(3, 8),
                this.$nextTick(function() {
                    e.$el.setAttribute("id", "vux-scroller-" + e.uuid);
                    var t = null;
                    if (e.$slots.default && (t = e.$slots.default[0].elm),
                    !t)
                        throw new Error("no content is found");
                    if (e._xscroll = new c.a({
                        renderTo: "#vux-scroller-" + e.uuid,
                        lockX: e.lockX,
                        lockY: e.lockY,
                        scrollbarX: e.scrollbarX,
                        scrollbarY: e.scrollbarY,
                        content: t,
                        bounce: e.bounce,
                        useOriginScroll: e.useOriginScroll,
                        useTransition: e.useTransition,
                        preventDefault: e.preventDefault,
                        boundryCheck: e.boundryCheck,
                        gpuAcceleration: e.gpuAcceleration,
                        stopPropagation: e.stopPropagation
                    }),
                    e._xscroll.on("scroll", function() {
                        if (e._xscroll) {
                            var t = e._xscroll.getScrollTop();
                            e.$emit("on-scroll", {
                                top: t,
                                left: e._xscroll.getScrollLeft()
                            }),
                            t >= e._xscroll.containerHeight - e._xscroll.height - e.scrollBottomOffset && e.$emit("on-scroll-bottom")
                        }
                    }),
                    e.usePulldown) {
                        var o = e.$slots.pulldown
                          , n = a()({
                            content: "Pull Down To Refresh",
                            height: 60,
                            autoRefresh: !1,
                            downContent: "Pull Down To Refresh",
                            upContent: "Release To Refresh",
                            loadingContent: "Loading...",
                            clsPrefix: "xs-plugin-pulldown-"
                        }, e.pulldownConfig);
                        o && (n.container = o[0].elm),
                        e.pulldown = new u.a(n),
                        e._xscroll.plug(e.pulldown),
                        e.pulldown.on("loading", function(t) {
                            e.$emit("on-pulldown-loading", e.uuid)
                        }),
                        e.pulldown.on("statuschange", function(t) {
                            e.currentValue.pulldownStatus = t.newVal
                        })
                    }
                    if (e.usePullup) {
                        var s = e.$slots.pullup
                          , i = a()({
                            content: "Pull Up To Refresh",
                            pullUpHeight: 60,
                            height: 40,
                            autoRefresh: !1,
                            downContent: "Release To Refresh",
                            upContent: "Pull Up To Refresh",
                            loadingContent: "Loading...",
                            clsPrefix: "xs-plugin-pullup-"
                        }, e.pullupConfig);
                        s && (i.container = s[0].elm),
                        e.pullup = new d.a(i),
                        e._xscroll.plug(e.pullup),
                        e.pullup.on("loading", function(t) {
                            e.$emit("on-pullup-loading", e.uuid)
                        }),
                        e.pullup.on("statuschange", function(t) {
                            e.currentValue.pullupStatus = t.newVal
                        })
                    }
                    e.enableHorizontalSwiping && (e._xscroll.on("panstart", function(t) {
                        2 !== t.direction && 4 !== t.direction || (t.preventDefault(),
                        e.scrollbarY && (e._xscroll.userConfig.scrollbarY = !1),
                        e._xscroll.userConfig.lockY = !0)
                    }),
                    e._xscroll.on("panend", function() {
                        e.scrollbarY && (e._xscroll.userConfig.scrollbarY = !0),
                        e._xscroll.userConfig.lockY = !1
                    })),
                    e._xscroll.render(),
                    window.addEventListener("orientationchange", e.handleOrientationchange, !1)
                }),
                this.getStyles()
            },
            updated: function() {
                this.reset()
            },
            beforeDestroy: function() {
                this.pullup && (this._xscroll.unplug(this.pullup),
                this.pullup.pluginDestructor()),
                this.pulldown && (this._xscroll.unplug(this.pulldown),
                this.pulldown.pluginDestructor()),
                window.removeEventListener("orientationchange", this.handleOrientationchange, !1),
                this._xscroll.destroy(),
                this._xscroll = null
            }
        };
        var f = {
            render: function() {
                var e = this.$createElement
                  , t = this._self._c || e;
                return t("div", {
                    style: this.styles
                }, [t("div", {
                    staticClass: "xs-container"
                }, [this._t("default"), this._v(" "), this._t("pulldown"), this._v(" "), this._t("pullup")], 2)])
            },
            staticRenderFns: []
        };
        var m = o("VU/8")(p, f, !1, function(e) {
            o("cRUl")
        }, null, null);
        t.a = m.exports
    },
    UtBj: function(e, t, o) {
        "use strict";
        var n = o("pyzf");
        t.a = function(e) {
            return e ? e.indexOf("http") >= 0 ? e : n.a + e : ""
        }
    },
    "Vr/v": function(e, t) {},
    Xe5u: function(e, t, o) {
        "use strict";
        o.d(t, "c", function() {
            return M
        }),
        o.d(t, "e", function() {
            return D
        }),
        o.d(t, "d", function() {
            return q
        }),
        t.b = function(e, t) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ""
              , s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
              , i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "/"
              , a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "Lax"
              , r = encodeURIComponent(e) + "=" + encodeURIComponent(t) + "; path=" + i;
            if (o > 0) {
                var c = new Date;
                c.setTime(c.getTime() + 24 * o * 60 * 60 * 1e3),
                r += "; expires=" + c.toUTCString()
            }
            n && (r += "; domain=" + n);
            s && (r += "; secure");
            a && (r += "; samesite=" + a);
            document.cookie = r
        }
        ,
        t.a = function(e) {
            var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]+)"));
            return t ? t[2] : null
        }
        ;
        var n = o("//Fk")
          , s = o.n(n)
          , i = location.host.split(".")[0]
          , a = ""
          , r = "wx473d4078f39e86d8"
          , c = "https%3a%2f%2fwechat.fengchuanba.com%2fwechat%2fcodeCallback20250309.html"
          , l = "https://" + location.host + "/index.html"
          , u = ""
          , h = 1433849398
          , d = "426677957"
          , p = r
          , f = "../wechat/getSignature"
          , m = "https://open.weixin.qq.com/connect/oauth2/authorize?"
          , _ = "&response_type=code&scope=snsapi_base&state="
          , x = location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0].split("_")
          , g = "https://" + location.host + "/index.html#" + x[0] + "_" + (localStorage.sbox_userid || 0) + "_" + (parseInt(x[2] || 0) + 1)
          , w = location.href.split("#")[1].split("code")[0].split("followid")[0].split("?")[0]
          , v = w.split("_")[0].split("-")[0]
          , b = ""
          , y = "";
        if ("5611832377394" == v && (self.location.href = "https://mportal.fengchuanba.com/index.html#18273"),
        "5651202452330" == v && x[1] && localStorage.setItem("preUserId", x[1]),
        "5631709516304" == v) {
            var B = window.location.href.split("?");
            B.length > 1 && localStorage.setItem("LL", B[1])
        }
        (0 == i.indexOf("explore") || 0 == i.indexOf("e553365012127")) && i.indexOf("mini") < 0 && i.indexOf("explorelab") < 0 && (window.location.href = "https://e" + v + ".fengchuanba.com/index.html#" + w);
        var C = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
          , S = [{
            code: "000",
            appid: "appId",
            callback: "url"
        }];
        if (location.href.indexOf("bovi") >= 0 && "5622100125559" == v)
            c = "https%3a%2f%2fwechat.fengchuanba.com%2fwechat%2fjxboviCallback.html",
            l = "http://" + location.host + "/index.html",
            g = "http://" + location.host + "/index.html#" + x[0] + "_" + (localStorage.sbox_userid || 0) + "_" + (parseInt(x[2] || 0) + 1);
        else if (location.href.indexOf("hairui") >= 0) {
            p = r = "wxb9838596940c956d",
            c = "https%3a%2f%2fhd21.hairuikeji.com%2fwechat%2fcodeCallback.html",
            l = "https://" + location.host + "/index.html",
            g = "https://" + location.host + "/index.html#" + x[0] + "_" + (localStorage.sbox_userid || 0) + "_" + (parseInt(x[2] || 0) + 1),
            h = 20170312,
            d = "20170312";
            for (var T = 0; T < S.length; T++)
                0 == v.indexOf(S[T].code) && (p = S[T].appid,
                i = S[T].callback.split(".")[0],
                l = "https://" + S[T].callback + "/index.html",
                f = "../followwechat" + S[T].port + "/getSignature")
        } else if (location.href.indexOf("sosokx") >= 0) {
            p = r = "wx1b69d94d178c8292",
            c = "https%3a%2f%2fdthd.sosokx.com%2fwechat%2fcodeCallback.html",
            l = "https://" + location.host + "/index.html",
            g = "https://" + location.host + "/index.html#" + x[0] + "_" + (localStorage.sbox_userid || 0) + "_" + (parseInt(x[2] || 0) + 1),
            h = 20170617,
            d = "20170617";
            for (var I = 0; I < S.length; I++)
                0 == v.indexOf(S[I].code) && (p = S[I].appid,
                i = S[I].callback.split(".")[0],
                l = document.location.protocol + "//" + S[I].callback + "/index.html",
                f = "../followwechat" + S[I].port + "/getSignature")
        }
        function P(e, t, o, n) {
            ("5681022432834" == v || "5681042638845" == v || "5681359931534" == v || "5661462653792" == v || n && n.shareFriend) && (e = 1),
            (/\d{2}4\d{1}1\d{1}7\d{1}9\d{1}6.*/.test(v) || "553967532052" == v) && (e = 1),
            $.post("/service/social/share", {
                secretBoxCode: v,
                userId: localStorage.sbox_userid || 0,
                preUserId: x[1] || 0,
                degree: parseInt(x[2] || 0) + 1,
                target: e,
                type: t,
                actType: 0
            }, function(t, n, s) {
                1 == e && o && o()
            })
        }
        function C() {
            var e = navigator.userAgent;
            navigator.appVersion;
            return !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        }
        function E(e, t, o, n, s, i, a) {
            s = s || 0,
            wx.onMenuShareAppMessage({
                title: e,
                desc: t,
                link: n || g,
                imgUrl: o,
                success: function() {
                    C ? setTimeout(function() {
                        P(0, s, i, a)
                    }, 500) : P(0, s, i, a)
                }
            }),
            wx.onMenuShareTimeline({
                title: t.indexOf("我得了") >= 0 ? t + "#" + e + "#" : e,
                desc: t,
                link: n || g,
                imgUrl: o,
                success: function() {
                    C ? setTimeout(function() {
                        P(1, s, i, a)
                    }, 500) : P(1, s, i, a)
                }
            })
        }
        var M = function(e) {
            return new s.a(function(t, o) {
                if (e.wechatUserInfo && (_ = "&response_type=code&scope=snsapi_userinfo&forcePopup=true&state="),
                e.AppId && (r = e.AppId,
                u = "&component_appid=wxffbafd606db6e004"),
                -1 == window.location.href.indexOf("explorelab") && -1 == window.location.href.indexOf("sosokx") && -1 == window.location.href.indexOf("hairui") && -1 == window.location.href.indexOf("bovi") && !e.paperDownload && e.followDomain && e.eDomain && "miniprogram" !== window.__wxjs_environment) {
                    var n = e.eDomain
                      , s = (e.followDomain,
                    location.host.split(".")[0])
                      , i = "fengchuanba.com";
                    e.domain && (i = e.domain,
                    e.AppId ? a = "@" + i.split(".")[0] : c = "https%3a%2f%2fwechat." + i + "%2fwechat%2fcodeCallback20250309.html");
                    var h = new Date;
                    h.getHours(),
                    h.getHours(),
                    h.getMinutes(),
                    h.getMinutes(),
                    h.getSeconds(),
                    h.getSeconds();
                    if (window.location.href.indexOf("#") > -1 && s != n)
                        return void window.location.replace("https://" + n + "." + i + "/index.html#" + window.location.href.split("#")[1]);
                    g.indexOf("#") > -1 && (g = "https://" + n + "." + i + "/transfer.html#" + g.split("#")[1])
                }
                var d = window.location.href;
                if (d.split("#")[1])
                    if (d.indexOf("code") >= 0) {
                        var p = d.split("code")[1]
                          , f = "/wechat/getVisitor";
                        0,
                        _.indexOf("snsapi_userinfo") > 0 && (f = "/wechat/getUserInfoByWechatAuth");
                        var m = "GET";
                        if (e.AppId && (m = "POST",
                        f = "/wechat/open/getVisitor",
                        _.indexOf("snsapi_userinfo") > 0 && (f = "/wechat/open/getUserInfoByWechatAuth")),
                        32 != p.length)
                            return void A();
                        $.ajax({
                            type: m,
                            url: f,
                            data: {
                                appId: r,
                                code: p,
                                actCode: v,
                                desc: "box"
                            }
                        }).done(function(e) {
                            var o = null
                              , n = null;
                            null != e.visitor ? (o = e.visitor.uuid,
                            n = e.visitor.id) : (o = e.openId,
                            n = e.visitorId),
                            o.indexOf("Error") >= 0 ? A() : (localStorage.tt = (new Date).getTime(),
                            localStorage.setItem("sbox_wxopenid", o),
                            localStorage.setItem("sbox_userid", n),
                            O() && !R() ? L() : (window.location.href = d.split("code")[0],
                            t()))
                        })
                    } else {
                        if (!k())
                            return void A();
                        if (O() && !R())
                            L(),
                            R() && t();
                        else if (d.indexOf("followid") >= 0) {
                            var x = window.location.href.split("followid")[1];
                            localStorage.setItem("follow_" + v, x),
                            window.location.href = d.split("followid")[0],
                            R() && t()
                        } else if (d.indexOf("?") > 0 && "5631709516304" != v) {
                            var w = d.split("#")[1];
                            w.indexOf("?") > 0 && (w = w.split("?")[0]),
                            window.location.href = l + "#" + w,
                            t()
                        } else
                            t()
                    }
                else
                    window.location.href = "http://www.fengchuanba.com"
            }
            )
        }
          , A = function() {
            var e = m + "appid=" + r + "&redirect_uri=" + c + _ + w + "@" + i + a + u + "#wechat_redirect";
            location.href.indexOf("l-chuang") >= 0 && (e = "http://wx.l-chuang.com/get-weixin-code.html?appid=wx884fdefc348641c1&scope=snsapi_base&state=" + w + "&redirect_uri=" + encodeURIComponent(l)),
            window.location.href = e
        }
          , k = function() {
            var e = localStorage.getItem("sbox_wxopenid")
              , t = localStorage.getItem("tt");
            if (!t)
                return !1;
            if ((new Date).getTime() - t > 6e6)
                return !1;
            if (e) {
                if (28 == e.length || e.indexOf("secretbox") >= 0)
                    return !0;
                localStorage.clear()
            }
            return !1
        }
          , D = function(e, t, o, n, s, i, a, r) {
            if (C || ("5691465271534" == v || "5691465271536" == v || "5691465271533" == v || "5691465271537" == v ? 1 != localStorage.stopMusic && U() : U()),
            "dingtalk" != navigator.userAgent.toLowerCase().match(/dingtalk/i) || "5651952852327" != v) {
                var c = l;
                location.href.indexOf("l-chuang") >= 0 && (c = l.replace("lcwlCode", "index"));
                var u = ["onMenuShareTimeline", "onMenuShareAppMessage", "hideAllNonBaseMenuItem", "showMenuItems"];
                a.getLocation && u.push("getLocation"),
                $.get(f, {
                    url: c
                }, function(c) {
                    c.signature && (wx.config({
                        debug: !1,
                        appId: p,
                        timestamp: h,
                        nonceStr: d,
                        signature: c.signature,
                        jsApiList: u,
                        openTagList: ["wx-open-launch-weapp"]
                    }),
                    wx.ready(function() {
                        if (a.getLocation && wx.getLocation({
                            success: function(e) {
                                var t = e.longitude
                                  , o = e.latitude;
                                e.speed,
                                e.accuracy;
                                localStorage.setItem("LL", o + "," + t)
                            },
                            cancel: function(e) {}
                        }),
                        !e.enableVideo) {
                            var c = document.getElementById("bgm");
                            c && c.play()
                        }
                        wx.hideAllNonBaseMenuItem(),
                        /\d{2}2\d{1}5\d{1}8\d{1}6\d{1}1.*/.test(v) || "553706072870" == v || e.noShare || wx.showMenuItems({
                            menuList: ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:favorite"]
                        }),
                        E(t, o, n, s, i, r, a)
                    }))
                })
            } else
                !function(e, t, o, n) {
                    navigator.userAgent.toLowerCase().indexOf("dingtalk") >= 0 && "notInDingTalk" !== dd.env.platform && dd.biz.navigation.setRight({
                        show: !0,
                        control: !0,
                        text: "···",
                        onSuccess: function(s) {
                            dd.biz.util.share({
                                type: 0,
                                url: n,
                                title: e,
                                content: t,
                                image: o,
                                onSuccess: function() {},
                                onFail: function(e) {}
                            })
                        },
                        onFail: function(e) {}
                    })
                }(t, o, n, s)
        }
          , q = function(e, t, o, n, s, i, a) {
            E(e, t, o, n, s = s || 0, i, a)
        };
        function O() {
            for (var e = 0; e < S.length; e++)
                if (0 == v.indexOf(S[e].code))
                    return !0;
            return !1
        }
        function L() {
            for (var e = 0; e < S.length; e++)
                if (0 == v.indexOf(S[e].code)) {
                    b = S[e].appid;
                    var t = "https%3a%2f%2f";
                    S[e].callback.indexOf("l-chuang") > 0 && (t = "http%3a%2f%2f"),
                    y = t + S[e].callback + "%2ffollowwechat" + S[e].port + "%2ffollowCallback.html";
                    var o = window.location.href.split("followid")[1];
                    o && 28 == o.length ? (localStorage.setItem("follow_" + v, o),
                    window.location.href = window.location.href.split("followid")[0].split("code")[0]) : R() || (void 0,
                    n = m + "appid=" + b + "&redirect_uri=" + y + _ + w + "#wechat_redirect",
                    window.location.href = n)
                }
            var n
        }
        function R() {
            var e = localStorage.getItem("follow_" + v);
            return !(!e || 28 != e.length)
        }
        function U() {
            document.body.addEventListener("touchstart", function e() {
                t = !0,
                o = document.getElementById("bgm"),
                o && t && o.paused && o.play(),
                !o || t || o.paused || o.pause(),
                document.body.removeEventListener("touchstart", e);
                var t, o
            })
        }
    },
    YVmR: function(e, t, o) {
        "use strict";
        String;
        var n = {
            props: {
                url: {
                    type: String
                }
            },
            computed: {
                secretBox: function() {
                    return this.$store.state.secretBox
                }
            },
            data: function() {
                return {
                    play: !0
                }
            },
            mounted: function() {
                var e = this;
                if ("5691465271534" == this.secretBox.code || "5691465271536" == this.secretBox.code || "5691465271533" == this.secretBox.code || "5691465271537" == this.secretBox.code) {
                    var t = document.getElementById("bgm");
                    setTimeout(function() {
                        1 == localStorage.stopMusic && (t.pause(),
                        e.play = !1)
                    }, 1e3)
                }
            },
            methods: {
                toggleBgm: function() {
                    var e = document.getElementById("bgm");
                    this.play ? e.pause() : e.play(),
                    "5691465271534" != this.secretBox.code && "5691465271536" != this.secretBox.code && "5691465271533" != this.secretBox.code && "5691465271537" != this.secretBox.code || (this.play ? localStorage.stopMusic = 1 : localStorage.stopMusic = 0),
                    this.$store.commit("set_selfStopBgm", this.play),
                    this.play = !this.play
                }
            }
        }
          , s = {
            render: function() {
                var e = this.$createElement;
                return (this._self._c || e)("div", {
                    class: {
                        "music-play": this.play,
                        "music-stop": !this.play
                    },
                    on: {
                        click: this.toggleBgm
                    }
                })
            },
            staticRenderFns: []
        };
        var i = o("VU/8")(n, s, !1, function(e) {
            o("Vr/v")
        }, null, null);
        t.a = i.exports
    },
    cKhM: function(e, t) {},
    cRUl: function(e, t) {},
    dDGC: function(e, t) {},
    ewSO: function(e, t) {},
    gO4i: function(e, t) {},
    "k/cC": function(e, t) {},
    kmot: function(e, t) {},
    mQ78: function(e, t) {},
    mzja: function(e, t, o) {
        "use strict";
        var n = o("/kga")
          , s = (n.a,
        Boolean,
        String,
        String,
        String,
        Boolean,
        String,
        String,
        Number,
        String,
        {
            name: "alert",
            components: {
                XDialog: n.a
            },
            created: function() {
                void 0 !== this.value && (this.showValue = this.value)
            },
            props: {
                value: Boolean,
                title: String,
                content: String,
                buttonText: String,
                hideOnBlur: {
                    type: Boolean,
                    default: !1
                },
                maskTransition: {
                    type: String,
                    default: "vux-mask"
                },
                dialogTransition: {
                    type: String,
                    default: "vux-dialog"
                },
                maskZIndex: [Number, String]
            },
            data: function() {
                return {
                    showValue: !1
                }
            },
            methods: {
                _onHide: function() {
                    this.showValue = !1
                }
            },
            watch: {
                value: function(e) {
                    this.showValue = e
                },
                showValue: function(e) {
                    this.$emit("input", e)
                }
            }
        })
          , i = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , o = e._self._c || t;
                return o("div", {
                    staticClass: "vux-alert"
                }, [o("x-dialog", {
                    attrs: {
                        "mask-transition": e.maskTransition,
                        "dialog-transition": e.dialogTransition,
                        "hide-on-blur": e.hideOnBlur,
                        "mask-z-index": e.maskZIndex
                    },
                    on: {
                        "on-hide": function(t) {
                            return e.$emit("on-hide")
                        },
                        "on-show": function(t) {
                            return e.$emit("on-show")
                        }
                    },
                    model: {
                        value: e.showValue,
                        callback: function(t) {
                            e.showValue = t
                        },
                        expression: "showValue"
                    }
                }, [o("div", {
                    staticClass: "weui-dialog__hd"
                }, [o("strong", {
                    staticClass: "weui-dialog__title"
                }, [e._v(e._s(e.title))])]), e._v(" "), o("div", {
                    staticClass: "weui-dialog__bd"
                }, [e._t("default", function() {
                    return [o("div", {
                        domProps: {
                            innerHTML: e._s(e.content)
                        }
                    })]
                })], 2), e._v(" "), o("div", {
                    staticClass: "weui-dialog__ft"
                }, [o("a", {
                    staticClass: "weui-dialog__btn weui-dialog__btn_primary",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: e._onHide
                    }
                }, [e._v(e._s(e.buttonText || "确定"))])])])], 1)
            },
            staticRenderFns: []
        };
        var a = o("VU/8")(s, i, !1, function(e) {
            o("2PtM")
        }, null, null);
        t.a = a.exports
    },
    nFsJ: function(e, t) {},
    ocbm: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        o.d(t, "formatSecond", function() {
            return s
        }),
        o.d(t, "cdn", function() {
            return i
        }),
        o.d(t, "choiceLabel", function() {
            return a
        });
        var n = o("pyzf")
          , s = function(e) {
            var t = 0
              , o = 0;
            e > 60 ? (t = parseInt(e / 60),
            o = e % 60) : o = e;
            var n = "";
            return t > 0 && (n += t + ":"),
            o < 10 && (n += "0"),
            n += o
        }
          , i = function(e) {
            return e ? e.indexOf("http") >= 0 ? e : n.a + e : ""
        }
          , a = function(e) {
            return String.fromCharCode(65 + parseInt(e))
        }
    },
    pyzf: function(e, t, o) {
        "use strict";
        o.d(t, "f", function() {
            return n
        }),
        o.d(t, "b", function() {
            return s
        }),
        o.d(t, "e", function() {
            return i
        }),
        o.d(t, "d", function() {
            return a
        }),
        o.d(t, "c", function() {
            return r
        }),
        o.d(t, "a", function() {
            return c
        });
        var n = "http://libs.fengchuanba.com"
          , s = n + "/assets/img/default/bg1.jpg"
          , i = n + "/assets/img/default/failure2.jpg"
          , a = location.href.indexOf("hairuikeji") >= 0 ? n + "/assets/img/default/logo_hrkj.jpg" : n + "/assets/img/default/logo_fcb.jpg"
          , r = n + "/assets/img/default/cardback.jpg"
          , c = "http://content.fengchuanba.com"
    },
    qNcu: function(e, t) {
        t.install = function(e, t) {
            e.prototype.sortByNumber = function(e, t) {
                return e - t
            }
            ,
            e.prototype.isArrayExistItem = function(e, t) {
                for (var o = 0; o < e.length; o++)
                    if (e[o] == t)
                        return !0;
                return !1
            }
            ,
            e.prototype.judgeMutilSelectLimit = function(e, t) {
                if (0 != e.maxSelect && 0 != e.minSelect) {
                    var o = !1
                      , n = "";
                    if (t.length > e.maxSelect ? (o = !0,
                    n = "最多选择" + e.maxSelect + "项") : t.length < e.minSelect && (n = "最少选择" + e.minSelect + "项",
                    o = !0),
                    o)
                        return this.$store.commit("set_toast", {
                            toastMsg: n,
                            showToast: !0,
                            type: "warn",
                            time: 1e3,
                            position: "center"
                        }),
                        !1
                }
                return !0
            }
            ,
            e.prototype.getCurrentDate = function() {
                var e = new Date;
                return e.getFullYear() + "年" + (e.getMonth() + 1) + "月" + e.getDate() + "日"
            }
            ,
            e.prototype.removeHTMLTag = function(e) {
                return e = (e = (e = (e = e.replace(/<\/?[^>]*>/g, "")).replace(/[ | ]*\n/g, "\n")).replace(/&nbsp;/gi, "")).replace(/\s/g, "")
            }
            ,
            e.prototype.previewImage = function(e) {
                e = this.$options.filters.cdn(e);
                var t = [];
                t.push(e),
                wx.previewImage({
                    current: e,
                    urls: t
                })
            }
        }
    },
    rLAy: function(e, t, o) {
        "use strict";
        var n = o("xNvf")
          , s = (n.a,
        Boolean,
        Number,
        String,
        String,
        String,
        Boolean,
        String,
        String,
        {
            name: "toast",
            mixins: [n.a],
            props: {
                value: Boolean,
                time: {
                    type: Number,
                    default: 2e3
                },
                type: {
                    type: String,
                    default: "success"
                },
                transition: String,
                width: {
                    type: String,
                    default: "7.6em"
                },
                isShowMask: {
                    type: Boolean,
                    default: !1
                },
                text: String,
                position: String
            },
            data: function() {
                return {
                    show: !1
                }
            },
            created: function() {
                this.value && (this.show = !0)
            },
            computed: {
                currentTransition: function() {
                    return this.transition ? this.transition : "top" === this.position ? "vux-slide-from-top" : "bottom" === this.position ? "vux-slide-from-bottom" : "vux-fade"
                },
                toastClass: function() {
                    return {
                        "weui-toast_forbidden": "warn" === this.type,
                        "weui-toast_cancel": "cancel" === this.type,
                        "weui-toast_success": "success" === this.type,
                        "weui-toast_text": "text" === this.type,
                        "vux-toast-top": "top" === this.position,
                        "vux-toast-bottom": "bottom" === this.position,
                        "vux-toast-middle": "middle" === this.position
                    }
                },
                style: function() {
                    if ("text" === this.type && "auto" === this.width)
                        return {
                            padding: "10px"
                        }
                }
            },
            watch: {
                show: function(e) {
                    var t = this;
                    e && (this.$emit("input", !0),
                    this.$emit("on-show"),
                    this.fixSafariOverflowScrolling("auto"),
                    clearTimeout(this.timeout),
                    this.timeout = setTimeout(function() {
                        t.show = !1,
                        t.$emit("input", !1),
                        t.$emit("on-hide"),
                        t.fixSafariOverflowScrolling("touch")
                    }, this.time))
                },
                value: function(e) {
                    this.show = e
                }
            }
        })
          , i = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , o = e._self._c || t;
                return o("div", {
                    staticClass: "vux-toast"
                }, [o("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isShowMask && e.show,
                        expression: "isShowMask && show"
                    }],
                    staticClass: "weui-mask_transparent"
                }), e._v(" "), o("transition", {
                    attrs: {
                        name: e.currentTransition
                    }
                }, [o("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.show,
                        expression: "show"
                    }],
                    staticClass: "weui-toast",
                    class: e.toastClass,
                    style: {
                        width: e.width
                    }
                }, [o("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "text" !== e.type,
                        expression: "type !== 'text'"
                    }],
                    staticClass: "weui-icon-success-no-circle weui-icon_toast"
                }), e._v(" "), e.text ? o("p", {
                    staticClass: "weui-toast__content",
                    style: e.style,
                    domProps: {
                        innerHTML: e._s(e.text)
                    }
                }) : o("p", {
                    staticClass: "weui-toast__content",
                    style: e.style
                }, [e._t("default")], 2)])])], 1)
            },
            staticRenderFns: []
        };
        var a = o("VU/8")(s, i, !1, function(e) {
            o("KIGL")
        }, null, null);
        t.a = a.exports
    },
    sOvy: function(e, t) {},
    tvR6: function(e, t) {},
    "v6j/": function(e, t, o) {
        "use strict";
        String,
        Boolean,
        String;
        var n = {
            props: {
                content: {
                    type: String,
                    default: ""
                },
                hasClose: {
                    type: Boolean,
                    default: !0
                },
                callbackBtn: {
                    type: String,
                    default: null
                }
            },
            computed: {
                secretBox: function() {
                    return this.$store.state.secretBox
                }
            },
            mounted: function() {
                "555890674154" == this.secretBox.code && (this.content = "分享到朋友圈，让亲朋好友点击参与答题，为你的学校打call吧！")
            }
        }
          , s = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , o = e._self._c || t;
                return o("div", {
                    staticClass: "sharehint",
                    style: "556719012885" == e.secretBox.code ? {
                        opacity: 1
                    } : "5691076406697" == e.secretBox.code ? {
                        opacity: 1,
                        backgroundColor: "#01289b"
                    } : {
                        opacity: .9
                    }
                }, [o("div", {
                    staticClass: "sharehint-child"
                }, ["556719012885" == e.secretBox.code ? o("img", {
                    attrs: {
                        src: "http://content.fengchuanba.com/file/user/59253/material20200619174202.jpg",
                        alt: ""
                    }
                }) : "5691076406697" == e.secretBox.code ? o("img", {
                    staticStyle: {
                        "vertical-align": "middle"
                    },
                    attrs: {
                        src: "https://content.fengchuanba.com/file/user/59253/material20240202171153.jpg",
                        alt: ""
                    }
                }) : o("div", {
                    staticStyle: {
                        "text-align": "right",
                        "padding-right": "1rem",
                        "padding-top": "1rem"
                    }
                }, [o("img", {
                    staticClass: "animation-updown",
                    staticStyle: {
                        width: "2rem"
                    },
                    attrs: {
                        src: "https://content.fengchuanba.com/file/user/59253/material20240808160424.png",
                        alt: ""
                    }
                }), e._v(" "), o("div", {
                    staticStyle: {
                        color: "#fff",
                        "font-size": "1.3rem"
                    }
                }, [e._v("点击右上角微信分享按钮")])]), e._v(" "), e.hasClose ? o("div", {
                    staticClass: "closeBtn",
                    on: {
                        click: function(t) {
                            return e.$emit("close")
                        }
                    }
                }, [o("img", {
                    staticStyle: {
                        width: "80%"
                    },
                    attrs: {
                        src: "http://libs.fengchuanba.com/assets/img/explore/close2.png"
                    }
                })]) : e._e(), e._v(" "), o("div", {
                    staticClass: "text-content"
                }, [o("div", {
                    domProps: {
                        innerHTML: e._s(e.content)
                    }
                }), e._v(" "), o("div", {
                    staticStyle: {
                        "margin-top": "2rem"
                    }
                }, [e.callbackBtn ? o("span", {
                    staticClass: "callbackBtn",
                    on: {
                        click: function(t) {
                            return e.$emit("callback")
                        }
                    }
                }, [e._v(e._s(e.callbackBtn))]) : e._e()])])])])
            },
            staticRenderFns: []
        };
        var i = o("VU/8")(n, s, !1, function(e) {
            o("gO4i")
        }, null, null);
        t.a = i.exports
    },
    wujj: function(e, t, o) {
        "use strict";
        var n = {
            choice: function(e) {
                Promise.all([o.e(0), o.e(39)]).then(function() {
                    var t = [o("aC6m")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda: function(e) {
                Promise.all([o.e(0), o.e(64)]).then(function() {
                    var t = [o("Mrvx")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            jigsaw: function(e) {
                o.e(128).then(function() {
                    var t = [o("+66c")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords: function(e) {
                Promise.all([o.e(0), o.e(43)]).then(function() {
                    var t = [o("8/pP")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            findmost: function(e) {
                Promise.all([o.e(0), o.e(40)]).then(function() {
                    var t = [o("dNw1")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            card: function(e) {
                Promise.all([o.e(0), o.e(130)]).then(function() {
                    var t = [o("NvB5")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            dice: function(e) {
                o.e(127).then(function() {
                    var t = [o("jzkr")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            vote: function(e) {
                o.e(16).then(function() {
                    var t = [o("Inso")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            liveError: function(e) {
                o.e(138).then(function() {
                    var t = [o("laYa")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            whacMole: function(e) {
                Promise.all([o.e(0), o.e(63)]).then(function() {
                    var t = [o("H8Nv")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack: function(e) {
                Promise.all([o.e(0), o.e(85)]).then(function() {
                    var t = [o("wrrr")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            welcome: function(e) {
                Promise.all([o.e(0), o.e(15)]).then(function() {
                    var t = [o("5eUU")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            welcomePc: function(e) {
                Promise.all([o.e(0), o.e(10)]).then(function() {
                    var t = [o("NyKW")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            welcomeDiy: function(e) {
                Promise.all([o.e(0), o.e(77)]).then(function() {
                    var t = [o("ktN7")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            loading: function(e) {
                o.e(92).then(function() {
                    var t = [o("KgXo")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            register: function(e) {
                o.e(0).then(function() {
                    var t = [o("dIqY")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            register1: function(e) {
                Promise.all([o.e(0), o.e(118)]).then(function() {
                    var t = [o("QhHt")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            success: function(e) {
                Promise.all([o.e(0), o.e(6)]).then(function() {
                    var t = [o("gtde")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            scoreInfo: function(e) {
                o.e(0).then(function() {
                    var t = [o("Q1Il")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            finish: function(e) {
                Promise.all([o.e(0), o.e(7)]).then(function() {
                    var t = [o("10+s")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fail: function(e) {
                Promise.all([o.e(0), o.e(116)]).then(function() {
                    var t = [o("e78H")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            blank: function(e) {
                o.e(44).then(function() {
                    var t = [o("ppua")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            gate: function(e) {
                o.e(73).then(function() {
                    var t = [o("Z/L8")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            reload: function(e) {
                o.e(26).then(function() {
                    var t = [o("Miya")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            lottery: function(e) {
                Promise.all([o.e(0), o.e(11)]).then(function() {
                    var t = [o("0tuv")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            verify: function(e) {
                o.e(121).then(function() {
                    var t = [o("jB8w")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            boxVideo: function(e) {
                o.e(0).then(function() {
                    var t = [o("+VqB")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            Illegal: function(e) {
                e(["@/components/Illegal.vue"], e)
            },
            singlePage: function(e) {
                Promise.all([o.e(0), o.e(82)]).then(function() {
                    var t = [o("tMt1")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            findError: function(e) {
                Promise.all([o.e(0), o.e(81)]).then(function() {
                    var t = [o("mkfU")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            specialStyle: function(e) {
                Promise.all([o.e(0), o.e(33)]).then(function() {
                    var t = [o("TE7r")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            adCpStyle: function(e) {
                Promise.all([o.e(0), o.e(88)]).then(function() {
                    var t = [o("Et82")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            adCpStyle1: function(e) {
                Promise.all([o.e(0), o.e(14)]).then(function() {
                    var t = [o("59tG")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            adCpStyle2: function(e) {
                o.e(47).then(function() {
                    var t = [o("tazc")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            adCpStyle3: function(e) {
                o.e(100).then(function() {
                    var t = [o("ZLWq")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            adCpStyle4: function(e) {
                o.e(75).then(function() {
                    var t = [o("sfSr")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice2: function(e) {
                Promise.all([o.e(0), o.e(5)]).then(function() {
                    var t = [o("DApp")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice3: function(e) {
                Promise.all([o.e(0), o.e(79)]).then(function() {
                    var t = [o("FBqX")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords3: function(e) {
                Promise.all([o.e(0), o.e(132)]).then(function() {
                    var t = [o("5TRS")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack3: function(e) {
                Promise.all([o.e(0), o.e(42)]).then(function() {
                    var t = [o("XPV2")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda3: function(e) {
                Promise.all([o.e(0), o.e(50)]).then(function() {
                    var t = [o("a6BI")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice4: function(e) {
                Promise.all([o.e(0), o.e(27)]).then(function() {
                    var t = [o("C/Iz")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords4: function(e) {
                Promise.all([o.e(0), o.e(91)]).then(function() {
                    var t = [o("YPPK")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack4: function(e) {
                Promise.all([o.e(0), o.e(38)]).then(function() {
                    var t = [o("vD/M")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda4: function(e) {
                Promise.all([o.e(0), o.e(112)]).then(function() {
                    var t = [o("iLJ3")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice5: function(e) {
                Promise.all([o.e(0), o.e(123)]).then(function() {
                    var t = [o("9bRn")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords5: function(e) {
                Promise.all([o.e(0), o.e(76)]).then(function() {
                    var t = [o("9caS")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack5: function(e) {
                Promise.all([o.e(0), o.e(67)]).then(function() {
                    var t = [o("fPs5")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda5: function(e) {
                Promise.all([o.e(0), o.e(37)]).then(function() {
                    var t = [o("k0ON")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice6: function(e) {
                Promise.all([o.e(0), o.e(125)]).then(function() {
                    var t = [o("q0ME")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords6: function(e) {
                Promise.all([o.e(0), o.e(139)]).then(function() {
                    var t = [o("cO8X")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack6: function(e) {
                Promise.all([o.e(0), o.e(96)]).then(function() {
                    var t = [o("h7rQ")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda6: function(e) {
                Promise.all([o.e(0), o.e(62)]).then(function() {
                    var t = [o("jivz")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack7: function(e) {
                Promise.all([o.e(0), o.e(46)]).then(function() {
                    var t = [o("M/T+")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack8: function(e) {
                Promise.all([o.e(0), o.e(95)]).then(function() {
                    var t = [o("vO8P")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack9: function(e) {
                Promise.all([o.e(0), o.e(31)]).then(function() {
                    var t = [o("ZsmK")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack11: function(e) {
                Promise.all([o.e(0), o.e(126)]).then(function() {
                    var t = [o("sqrF")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack12: function(e) {
                Promise.all([o.e(0), o.e(21)]).then(function() {
                    var t = [o("o3lv")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice7: function(e) {
                Promise.all([o.e(0), o.e(23)]).then(function() {
                    var t = [o("hM3L")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda7: function(e) {
                Promise.all([o.e(0), o.e(89)]).then(function() {
                    var t = [o("BSLV")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords7: function(e) {
                Promise.all([o.e(0), o.e(102)]).then(function() {
                    var t = [o("8/9R")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice8: function(e) {
                Promise.all([o.e(0), o.e(87)]).then(function() {
                    var t = [o("zT6p")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda8: function(e) {
                Promise.all([o.e(0), o.e(103)]).then(function() {
                    var t = [o("elvS")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords8: function(e) {
                Promise.all([o.e(0), o.e(133)]).then(function() {
                    var t = [o("vVKH")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice9: function(e) {
                Promise.all([o.e(0), o.e(80)]).then(function() {
                    var t = [o("PWCS")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda9: function(e) {
                Promise.all([o.e(0), o.e(74)]).then(function() {
                    var t = [o("uuqu")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords9: function(e) {
                Promise.all([o.e(0), o.e(35)]).then(function() {
                    var t = [o("iW6Q")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice10: function(e) {
                Promise.all([o.e(0), o.e(34)]).then(function() {
                    var t = [o("zQ9e")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda10: function(e) {
                Promise.all([o.e(0), o.e(108)]).then(function() {
                    var t = [o("zTpM")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords10: function(e) {
                Promise.all([o.e(0), o.e(53)]).then(function() {
                    var t = [o("X5DS")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack10: function(e) {
                Promise.all([o.e(0), o.e(117)]).then(function() {
                    var t = [o("bvIi")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice11: function(e) {
                Promise.all([o.e(0), o.e(113)]).then(function() {
                    var t = [o("2FRu")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda11: function(e) {
                Promise.all([o.e(0), o.e(119)]).then(function() {
                    var t = [o("5Vhg")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords11: function(e) {
                Promise.all([o.e(0), o.e(104)]).then(function() {
                    var t = [o("iwCa")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice12: function(e) {
                Promise.all([o.e(0), o.e(86)]).then(function() {
                    var t = [o("38w7")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda12: function(e) {
                Promise.all([o.e(0), o.e(22)]).then(function() {
                    var t = [o("wljU")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice13: function(e) {
                Promise.all([o.e(0), o.e(61)]).then(function() {
                    var t = [o("B05L")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda13: function(e) {
                Promise.all([o.e(0), o.e(94)]).then(function() {
                    var t = [o("Nc/O")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords13: function(e) {
                Promise.all([o.e(0), o.e(54)]).then(function() {
                    var t = [o("rdng")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack13: function(e) {
                Promise.all([o.e(0), o.e(78)]).then(function() {
                    var t = [o("RyxS")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice14: function(e) {
                Promise.all([o.e(0), o.e(84)]).then(function() {
                    var t = [o("01Ex")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda14: function(e) {
                Promise.all([o.e(0), o.e(124)]).then(function() {
                    var t = [o("xaBm")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords14: function(e) {
                Promise.all([o.e(0), o.e(66)]).then(function() {
                    var t = [o("eBh3")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack14: function(e) {
                Promise.all([o.e(0), o.e(99)]).then(function() {
                    var t = [o("xoyv")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice15: function(e) {
                Promise.all([o.e(0), o.e(68)]).then(function() {
                    var t = [o("u+lF")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda15: function(e) {
                Promise.all([o.e(0), o.e(134)]).then(function() {
                    var t = [o("9RAw")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords15: function(e) {
                Promise.all([o.e(0), o.e(70)]).then(function() {
                    var t = [o("eod/")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack15: function(e) {
                Promise.all([o.e(0), o.e(115)]).then(function() {
                    var t = [o("VqJG")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice16: function(e) {
                Promise.all([o.e(0), o.e(59)]).then(function() {
                    var t = [o("RQr7")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda16: function(e) {
                Promise.all([o.e(0), o.e(49)]).then(function() {
                    var t = [o("pfQK")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords16: function(e) {
                Promise.all([o.e(0), o.e(111)]).then(function() {
                    var t = [o("BREX")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack16: function(e) {
                Promise.all([o.e(0), o.e(114)]).then(function() {
                    var t = [o("zXOa")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice17: function(e) {
                Promise.all([o.e(0), o.e(93)]).then(function() {
                    var t = [o("xXI9")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda17: function(e) {
                Promise.all([o.e(0), o.e(107)]).then(function() {
                    var t = [o("HBVW")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords17: function(e) {
                Promise.all([o.e(0), o.e(57)]).then(function() {
                    var t = [o("vfTH")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack17: function(e) {
                Promise.all([o.e(0), o.e(24)]).then(function() {
                    var t = [o("PRhm")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice18: function(e) {
                Promise.all([o.e(0), o.e(29)]).then(function() {
                    var t = [o("EWn7")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda18: function(e) {
                Promise.all([o.e(0), o.e(32)]).then(function() {
                    var t = [o("FCXE")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords18: function(e) {
                Promise.all([o.e(0), o.e(105)]).then(function() {
                    var t = [o("Y9+J")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack18: function(e) {
                Promise.all([o.e(0), o.e(36)]).then(function() {
                    var t = [o("+4Nv")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice19: function(e) {
                Promise.all([o.e(0), o.e(48)]).then(function() {
                    var t = [o("MC/i")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda19: function(e) {
                Promise.all([o.e(0), o.e(90)]).then(function() {
                    var t = [o("751z")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords19: function(e) {
                Promise.all([o.e(0), o.e(83)]).then(function() {
                    var t = [o("bbo3")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack19: function(e) {
                Promise.all([o.e(0), o.e(122)]).then(function() {
                    var t = [o("ZRht")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice20: function(e) {
                Promise.all([o.e(0), o.e(51)]).then(function() {
                    var t = [o("v/lI")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda20: function(e) {
                Promise.all([o.e(0), o.e(45)]).then(function() {
                    var t = [o("1KGJ")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords20: function(e) {
                Promise.all([o.e(0), o.e(131)]).then(function() {
                    var t = [o("38gw")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack20: function(e) {
                Promise.all([o.e(0), o.e(98)]).then(function() {
                    var t = [o("AJS4")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice21: function(e) {
                Promise.all([o.e(0), o.e(65)]).then(function() {
                    var t = [o("/sAt")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda21: function(e) {
                Promise.all([o.e(0), o.e(72)]).then(function() {
                    var t = [o("85xb")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords21: function(e) {
                Promise.all([o.e(0), o.e(137)]).then(function() {
                    var t = [o("OJGu")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack21: function(e) {
                Promise.all([o.e(0), o.e(69)]).then(function() {
                    var t = [o("SXJH")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice22: function(e) {
                Promise.all([o.e(0), o.e(136)]).then(function() {
                    var t = [o("bxEM")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            qanda22: function(e) {
                Promise.all([o.e(0), o.e(25)]).then(function() {
                    var t = [o("uRr3")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            fillWords22: function(e) {
                Promise.all([o.e(0), o.e(55)]).then(function() {
                    var t = [o("FlwS")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            pack22: function(e) {
                Promise.all([o.e(0), o.e(97)]).then(function() {
                    var t = [o("8LTg")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            success183625: function(e) {
                Promise.all([o.e(0), o.e(19)]).then(function() {
                    var t = [o("2rdl")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            welcome161388: function(e) {
                Promise.all([o.e(0), o.e(52)]).then(function() {
                    var t = [o("hGzC")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            singlePage193555: function(e) {
                Promise.all([o.e(0), o.e(60)]).then(function() {
                    var t = [o("MsgZ")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            welcome195231: function(e) {
                Promise.all([o.e(0), o.e(12)]).then(function() {
                    var t = [o("iGa3")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            success195335: function(e) {
                Promise.all([o.e(0), o.e(18)]).then(function() {
                    var t = [o("tVlt")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            welcome138844: function(e) {
                Promise.all([o.e(0), o.e(101)]).then(function() {
                    var t = [o("zS7/")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            welcome147887: function(e) {
                Promise.all([o.e(0), o.e(56)]).then(function() {
                    var t = [o("N61a")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            welcome174697: function(e) {
                Promise.all([o.e(0), o.e(58)]).then(function() {
                    var t = [o("mpOF")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            finish174697: function(e) {
                Promise.all([o.e(0), o.e(8)]).then(function() {
                    var t = [o("+VIO")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            scoreInfo174697: function(e) {
                Promise.all([o.e(0), o.e(20)]).then(function() {
                    var t = [o("tdtC")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            welcome180338: function(e) {
                Promise.all([o.e(0), o.e(71)]).then(function() {
                    var t = [o("YCzB")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            singlePage167562: function(e) {
                Promise.all([o.e(0), o.e(109)]).then(function() {
                    var t = [o("BllW")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            scoreInfo177550: function(e) {
                Promise.all([o.e(0), o.e(135)]).then(function() {
                    var t = [o("XwLR")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice153630: function(e) {
                Promise.all([o.e(0), o.e(41)]).then(function() {
                    var t = [o("KqDm")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            singlePage200541: function(e) {
                Promise.all([o.e(0), o.e(30)]).then(function() {
                    var t = [o("hyFq")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            welcome201102: function(e) {
                Promise.all([o.e(0), o.e(13)]).then(function() {
                    var t = [o("A8RT")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            register201102: function(e) {
                Promise.all([o.e(0), o.e(28)]).then(function() {
                    var t = [o("ttGe")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            choice201102: function(e) {
                Promise.all([o.e(0), o.e(120)]).then(function() {
                    var t = [o("6cf9")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            success201102: function(e) {
                Promise.all([o.e(0), o.e(9)]).then(function() {
                    var t = [o("N0GO")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            scoreInfo201102: function(e) {
                o.e(129).then(function() {
                    var t = [o("Vv14")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            success201514: function(e) {
                Promise.all([o.e(0), o.e(17)]).then(function() {
                    var t = [o("Cj45")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            scoreInfo202238: function(e) {
                Promise.all([o.e(0), o.e(106)]).then(function() {
                    var t = [o("878Q")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            },
            welcome202238: function(e) {
                Promise.all([o.e(0), o.e(110)]).then(function() {
                    var t = [o("VeUa")];
                    e.apply(null, t)
                }
                .bind(this)).catch(o.oe)
            }
        }
          , s = [];
        s[1] = {
            type: "qanda"
        },
        s[2] = {
            type: "choice"
        },
        s[5] = {
            type: "choice"
        },
        s[4] = {
            type: "jigsaw"
        },
        s[6] = {
            type: "dice"
        },
        s[7] = {
            type: "fillWords"
        },
        s[98] = {
            type: "register"
        },
        s[99] = {
            type: "success"
        },
        s[100] = {
            type: "scoreInfo"
        },
        s[0] = {
            type: "welcome"
        },
        s[3] = {
            type: "choice"
        },
        s[8] = {
            type: "card"
        },
        s[10] = {
            type: "vote"
        },
        s[11] = {
            type: "findmost"
        },
        s[12] = {
            type: "whacMole"
        },
        s[13] = {
            type: "pack"
        },
        s[101] = {
            type: "singlePage"
        },
        s[14] = {
            type: "findError"
        },
        s[102] = {
            type: "adCpStyle"
        },
        e.exports = {
            Games: n,
            GameTypes: s
        }
    },
    z9hR: function(e, t) {}
}, ["NHnr"]);
