
$(function() {
            $.fn.picslider = function(q) {
                q = jQuery.extend({
                    wraper: "cycle",
                    wrapWidth: 610,
                    cycleWidth: 610,
                    navList: null ,
                    navClass: "on",
                    next: "",
                    prev: "",
                    autotime: 6000,
                    isAuto: true
                }, q || {});
                if (!q.navList) {
                    return false
                }
                return this.each(function() {
                            var t;
                            var A = 0;
                            var s = this;
                            var z = $(s).find("ul");
                            var v = z.find("li");
                            z.attr("id", "ul0");
                            var B = q.navList;
                            var y = q.isAuto;
                            var r = $("#" + q.wraper);
                            var u = $(q.prev);
                            var x = $(q.next);
                            $(this).hover(function() {
                                        y = false
                                    }
                                    , function() {
                                        y = true
                                    }
                            );
                            B.each(function(C, D) {
                                        $(D).mousedown(function() {
                                                    A = C;
                                                    B.removeClass().eq(A).addClass(q.navClass);
                                                    w(A)
                                                }
                                        )
                                    }
                            );
                            u.mousedown(function(C) {
                                        y = false;
                                        C.preventDefault();
                                        A -= 1;
                                        if (A < 0) {
                                            A = 0;
                                            if (t) {
                                                clearInterval(t)
                                            }
                                            return false
                                        }
                                        B.removeClass().eq(A).addClass(q.navClass);
                                        w(A)
                                    }
                            );
                            x.mousedown(function(C) {
                                        y = false;
                                        C.preventDefault();
                                        A += 1;
                                        if (A > B.size() - 1) {
                                            A = B.size() - 1;
                                            if (t) {
                                                clearInterval(t)
                                            }
                                            return false
                                        }
                                        B.removeClass().eq(A).addClass(q.navClass);
                                        w(A)
                                    }
                            );
                            function w(C) {
                                v.removeClass("current show");
                                v.eq(C).addClass("current show");
                                z.attr("id", "ul" + C)
                            }
                        }
                )
            }
            ;
            $("#fitshow").picslider({
                wraper: "fitshow",
                wrapWidth: 1021,
                cycleWidth: 1021,
                navList: $(".snav li"),
                navClass: "cur",
                prev: ".prev",
                next: ".next"
            });
        }
);