'use strict';
(self.webpackChunkindirara_github_io = self.webpackChunkindirara_github_io || []).push([
  [179],
  {
    914: (Di, Mt, mn) => {
      function te(e) {
        return 'function' == typeof e;
      }
      let be = !1;
      const Je = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          if (e) {
            const n = new Error();
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + n.stack
            );
          } else be && console.log('RxJS: Back to a better error behavior. Thank you. <3');
          be = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return be;
        },
      };
      function en(e) {
        setTimeout(() => {
          throw e;
        }, 0);
      }
      const Rn = {
          closed: !0,
          next(e) {},
          error(e) {
            if (Je.useDeprecatedSynchronousErrorHandling) throw e;
            en(e);
          },
          complete() {},
        },
        Bt = Array.isArray || ((e) => e && 'number' == typeof e.length);
      function Nr(e) {
        return null !== e && 'object' == typeof e;
      }
      const ti = (() => {
        function e(n) {
          return (
            Error.call(this),
            (this.message = n
              ? `${n.length} errors occurred during unsubscription:\n${n
                  .map((t, i) => `${i + 1}) ${t.toString()}`)
                  .join('\n  ')}`
              : ''),
            (this.name = 'UnsubscriptionError'),
            (this.errors = n),
            this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
      class he {
        constructor(n) {
          (this.closed = !1),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            n && ((this._ctorUnsubscribe = !0), (this._unsubscribe = n));
        }
        unsubscribe() {
          let n;
          if (this.closed) return;
          let { _parentOrParents: t, _ctorUnsubscribe: i, _unsubscribe: r, _subscriptions: o } = this;
          if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), t instanceof he))
            t.remove(this);
          else if (null !== t) for (let s = 0; s < t.length; ++s) t[s].remove(this);
          if (te(r)) {
            i && (this._unsubscribe = void 0);
            try {
              r.call(this);
            } catch (s) {
              n = s instanceof ti ? Er(s.errors) : [s];
            }
          }
          if (Bt(o)) {
            let s = -1,
              a = o.length;
            for (; ++s < a; ) {
              const l = o[s];
              if (Nr(l))
                try {
                  l.unsubscribe();
                } catch (u) {
                  (n = n || []), u instanceof ti ? (n = n.concat(Er(u.errors))) : n.push(u);
                }
            }
          }
          if (n) throw new ti(n);
        }
        add(n) {
          let t = n;
          if (!n) return he.EMPTY;
          switch (typeof n) {
            case 'function':
              t = new he(n);
            case 'object':
              if (t === this || t.closed || 'function' != typeof t.unsubscribe) return t;
              if (this.closed) return t.unsubscribe(), t;
              if (!(t instanceof he)) {
                const o = t;
                (t = new he()), (t._subscriptions = [o]);
              }
              break;
            default:
              throw new Error('unrecognized teardown ' + n + ' added to Subscription.');
          }
          let { _parentOrParents: i } = t;
          if (null === i) t._parentOrParents = this;
          else if (i instanceof he) {
            if (i === this) return t;
            t._parentOrParents = [i, this];
          } else {
            if (-1 !== i.indexOf(this)) return t;
            i.push(this);
          }
          const r = this._subscriptions;
          return null === r ? (this._subscriptions = [t]) : r.push(t), t;
        }
        remove(n) {
          const t = this._subscriptions;
          if (t) {
            const i = t.indexOf(n);
            -1 !== i && t.splice(i, 1);
          }
        }
      }
      var e;
      function Er(e) {
        return e.reduce((n, t) => n.concat(t instanceof ti ? t.errors : t), []);
      }
      he.EMPTY = (((e = new he()).closed = !0), e);
      const Ae = 'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
      class $ extends he {
        constructor(n, t, i) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = Rn;
              break;
            case 1:
              if (!n) {
                this.destination = Rn;
                break;
              }
              if ('object' == typeof n) {
                n instanceof $
                  ? ((this.syncErrorThrowable = n.syncErrorThrowable), (this.destination = n), n.add(this))
                  : ((this.syncErrorThrowable = !0), (this.destination = new xn(this, n)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0), (this.destination = new xn(this, n, t, i));
          }
        }
        [Ae]() {
          return this;
        }
        static create(n, t, i) {
          const r = new $(n, t, i);
          return (r.syncErrorThrowable = !1), r;
        }
        next(n) {
          this.isStopped || this._next(n);
        }
        error(n) {
          this.isStopped || ((this.isStopped = !0), this._error(n));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(n) {
          this.destination.next(n);
        }
        _error(n) {
          this.destination.error(n), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: n } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = n),
            this
          );
        }
      }
      class xn extends $ {
        constructor(n, t, i, r) {
          super(), (this._parentSubscriber = n);
          let o,
            s = this;
          te(t)
            ? (o = t)
            : t &&
              ((o = t.next),
              (i = t.error),
              (r = t.complete),
              t !== Rn &&
                ((s = Object.create(t)),
                te(s.unsubscribe) && this.add(s.unsubscribe.bind(s)),
                (s.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = s),
            (this._next = o),
            (this._error = i),
            (this._complete = r);
        }
        next(n) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: t } = this;
            Je.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
              ? this.__tryOrSetError(t, this._next, n) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, n);
          }
        }
        error(n) {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this,
              { useDeprecatedSynchronousErrorHandling: i } = Je;
            if (this._error)
              i && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, this._error, n), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, n), this.unsubscribe());
            else if (t.syncErrorThrowable)
              i ? ((t.syncErrorValue = n), (t.syncErrorThrown = !0)) : en(n), this.unsubscribe();
            else {
              if ((this.unsubscribe(), i)) throw n;
              en(n);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: n } = this;
            if (this._complete) {
              const t = () => this._complete.call(this._context);
              Je.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable
                ? (this.__tryOrSetError(n, t), this.unsubscribe())
                : (this.__tryOrUnsub(t), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(n, t) {
          try {
            n.call(this._context, t);
          } catch (i) {
            if ((this.unsubscribe(), Je.useDeprecatedSynchronousErrorHandling)) throw i;
            en(i);
          }
        }
        __tryOrSetError(n, t, i) {
          if (!Je.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
          try {
            t.call(this._context, i);
          } catch (r) {
            return Je.useDeprecatedSynchronousErrorHandling
              ? ((n.syncErrorValue = r), (n.syncErrorThrown = !0), !0)
              : (en(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: n } = this;
          (this._context = null), (this._parentSubscriber = null), n.unsubscribe();
        }
      }
      const kn = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function wi(e) {
        return e;
      }
      let ge = (() => {
        class e {
          constructor(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          lift(t) {
            const i = new e();
            return (i.source = this), (i.operator = t), i;
          }
          subscribe(t, i, r) {
            const { operator: o } = this,
              s = (function (e, n, t) {
                if (e) {
                  if (e instanceof $) return e;
                  if (e[Ae]) return e[Ae]();
                }
                return e || n || t ? new $(e, n, t) : new $(Rn);
              })(t, i, r);
            if (
              (s.add(
                o
                  ? o.call(s, this.source)
                  : this.source || (Je.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable)
                  ? this._subscribe(s)
                  : this._trySubscribe(s)
              ),
              Je.useDeprecatedSynchronousErrorHandling &&
                s.syncErrorThrowable &&
                ((s.syncErrorThrowable = !1), s.syncErrorThrown))
            )
              throw s.syncErrorValue;
            return s;
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (i) {
              Je.useDeprecatedSynchronousErrorHandling && ((t.syncErrorThrown = !0), (t.syncErrorValue = i)),
                (function (e) {
                  for (; e; ) {
                    const { closed: n, destination: t, isStopped: i } = e;
                    if (n || i) return !1;
                    e = t && t instanceof $ ? t : null;
                  }
                  return !0;
                })(t)
                  ? t.error(i)
                  : console.warn(i);
            }
          }
          forEach(t, i) {
            return new (i = vd(i))((r, o) => {
              let s;
              s = this.subscribe(
                (a) => {
                  try {
                    t(a);
                  } catch (l) {
                    o(l), s && s.unsubscribe();
                  }
                },
                o,
                r
              );
            });
          }
          _subscribe(t) {
            const { source: i } = this;
            return i && i.subscribe(t);
          }
          [kn]() {
            return this;
          }
          pipe(...t) {
            return 0 === t.length
              ? this
              : (function (e) {
                  return 0 === e.length
                    ? wi
                    : 1 === e.length
                    ? e[0]
                    : function (t) {
                        return e.reduce((i, r) => r(i), t);
                      };
                })(t)(this);
          }
          toPromise(t) {
            return new (t = vd(t))((i, r) => {
              let o;
              this.subscribe(
                (s) => (o = s),
                (s) => r(s),
                () => i(o)
              );
            });
          }
        }
        return (e.create = (n) => new e(n)), e;
      })();
      function vd(e) {
        if ((e || (e = Je.Promise || Promise), !e)) throw new Error('no Promise impl found');
        return e;
      }
      const Ci = (() => {
        function e() {
          return (
            Error.call(this), (this.message = 'object unsubscribed'), (this.name = 'ObjectUnsubscribedError'), this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
      class Jy extends he {
        constructor(n, t) {
          super(), (this.subject = n), (this.subscriber = t), (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const n = this.subject,
            t = n.observers;
          if (((this.subject = null), !t || 0 === t.length || n.isStopped || n.closed)) return;
          const i = t.indexOf(this.subscriber);
          -1 !== i && t.splice(i, 1);
        }
      }
      class Dd extends $ {
        constructor(n) {
          super(n), (this.destination = n);
        }
      }
      let $e = (() => {
        class e extends ge {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [Ae]() {
            return new Dd(this);
          }
          lift(t) {
            const i = new wd(this, this);
            return (i.operator = t), i;
          }
          next(t) {
            if (this.closed) throw new Ci();
            if (!this.isStopped) {
              const { observers: i } = this,
                r = i.length,
                o = i.slice();
              for (let s = 0; s < r; s++) o[s].next(t);
            }
          }
          error(t) {
            if (this.closed) throw new Ci();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            const { observers: i } = this,
              r = i.length,
              o = i.slice();
            for (let s = 0; s < r; s++) o[s].error(t);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new Ci();
            this.isStopped = !0;
            const { observers: t } = this,
              i = t.length,
              r = t.slice();
            for (let o = 0; o < i; o++) r[o].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(t) {
            if (this.closed) throw new Ci();
            return super._trySubscribe(t);
          }
          _subscribe(t) {
            if (this.closed) throw new Ci();
            return this.hasError
              ? (t.error(this.thrownError), he.EMPTY)
              : this.isStopped
              ? (t.complete(), he.EMPTY)
              : (this.observers.push(t), new Jy(this, t));
          }
          asObservable() {
            const t = new ge();
            return (t.source = this), t;
          }
        }
        return (e.create = (n, t) => new wd(n, t)), e;
      })();
      class wd extends $e {
        constructor(n, t) {
          super(), (this.destination = n), (this.source = t);
        }
        next(n) {
          const { destination: t } = this;
          t && t.next && t.next(n);
        }
        error(n) {
          const { destination: t } = this;
          t && t.error && this.destination.error(n);
        }
        complete() {
          const { destination: n } = this;
          n && n.complete && this.destination.complete();
        }
        _subscribe(n) {
          const { source: t } = this;
          return t ? this.source.subscribe(n) : he.EMPTY;
        }
      }
      function Ni(e) {
        return e && 'function' == typeof e.schedule;
      }
      function pt(e, n) {
        return function (i) {
          if ('function' != typeof e) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return i.lift(new Xy(e, n));
        };
      }
      class Xy {
        constructor(n, t) {
          (this.project = n), (this.thisArg = t);
        }
        call(n, t) {
          return t.subscribe(new eb(n, this.project, this.thisArg));
        }
      }
      class eb extends $ {
        constructor(n, t, i) {
          super(n), (this.project = t), (this.count = 0), (this.thisArg = i || this);
        }
        _next(n) {
          let t;
          try {
            t = this.project.call(this.thisArg, n, this.count++);
          } catch (i) {
            return void this.destination.error(i);
          }
          this.destination.next(t);
        }
      }
      const Cd = (e) => (n) => {
          for (let t = 0, i = e.length; t < i && !n.closed; t++) n.next(e[t]);
          n.complete();
        },
        Pn = 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator',
        Nd = (e) => e && 'number' == typeof e.length && 'function' != typeof e;
      function Ed(e) {
        return !!e && 'function' != typeof e.subscribe && 'function' == typeof e.then;
      }
      const Oa = (e) => {
        if (e && 'function' == typeof e[kn])
          return ((e) => (n) => {
            const t = e[kn]();
            if ('function' != typeof t.subscribe)
              throw new TypeError('Provided object does not correctly implement Symbol.observable');
            return t.subscribe(n);
          })(e);
        if (Nd(e)) return Cd(e);
        if (Ed(e))
          return ((e) => (n) => (
            e
              .then(
                (t) => {
                  n.closed || (n.next(t), n.complete());
                },
                (t) => n.error(t)
              )
              .then(null, en),
            n
          ))(e);
        if (e && 'function' == typeof e[Pn])
          return ((e) => (n) => {
            const t = e[Pn]();
            for (;;) {
              let i;
              try {
                i = t.next();
              } catch (r) {
                return n.error(r), n;
              }
              if (i.done) {
                n.complete();
                break;
              }
              if ((n.next(i.value), n.closed)) break;
            }
            return (
              'function' == typeof t.return &&
                n.add(() => {
                  t.return && t.return();
                }),
              n
            );
          })(e);
        {
          const t = `You provided ${
            Nr(e) ? 'an invalid object' : `'${e}'`
          } where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;
          throw new TypeError(t);
        }
      };
      function Ra(e, n) {
        return new ge((t) => {
          const i = new he();
          let r = 0;
          return (
            i.add(
              n.schedule(function () {
                r !== e.length ? (t.next(e[r++]), t.closed || i.add(this.schedule())) : t.complete();
              })
            ),
            i
          );
        });
      }
      function xo(e, n) {
        return n
          ? (function (e, n) {
              if (null != e) {
                if (
                  (function (e) {
                    return e && 'function' == typeof e[kn];
                  })(e)
                )
                  return (function (e, n) {
                    return new ge((t) => {
                      const i = new he();
                      return (
                        i.add(
                          n.schedule(() => {
                            const r = e[kn]();
                            i.add(
                              r.subscribe({
                                next(o) {
                                  i.add(n.schedule(() => t.next(o)));
                                },
                                error(o) {
                                  i.add(n.schedule(() => t.error(o)));
                                },
                                complete() {
                                  i.add(n.schedule(() => t.complete()));
                                },
                              })
                            );
                          })
                        ),
                        i
                      );
                    });
                  })(e, n);
                if (Ed(e))
                  return (function (e, n) {
                    return new ge((t) => {
                      const i = new he();
                      return (
                        i.add(
                          n.schedule(() =>
                            e.then(
                              (r) => {
                                i.add(
                                  n.schedule(() => {
                                    t.next(r), i.add(n.schedule(() => t.complete()));
                                  })
                                );
                              },
                              (r) => {
                                i.add(n.schedule(() => t.error(r)));
                              }
                            )
                          )
                        ),
                        i
                      );
                    });
                  })(e, n);
                if (Nd(e)) return Ra(e, n);
                if (
                  (function (e) {
                    return e && 'function' == typeof e[Pn];
                  })(e) ||
                  'string' == typeof e
                )
                  return (function (e, n) {
                    if (!e) throw new Error('Iterable cannot be null');
                    return new ge((t) => {
                      const i = new he();
                      let r;
                      return (
                        i.add(() => {
                          r && 'function' == typeof r.return && r.return();
                        }),
                        i.add(
                          n.schedule(() => {
                            (r = e[Pn]()),
                              i.add(
                                n.schedule(function () {
                                  if (t.closed) return;
                                  let o, s;
                                  try {
                                    const a = r.next();
                                    (o = a.value), (s = a.done);
                                  } catch (a) {
                                    return void t.error(a);
                                  }
                                  s ? t.complete() : (t.next(o), this.schedule());
                                })
                              );
                          })
                        ),
                        i
                      );
                    });
                  })(e, n);
              }
              throw new TypeError(((null !== e && typeof e) || e) + ' is not observable');
            })(e, n)
          : e instanceof ge
          ? e
          : new ge(Oa(e));
      }
      class ko extends $ {
        constructor(n) {
          super(), (this.parent = n);
        }
        _next(n) {
          this.parent.notifyNext(n);
        }
        _error(n) {
          this.parent.notifyError(n), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }
      class Po extends $ {
        notifyNext(n) {
          this.destination.next(n);
        }
        notifyError(n) {
          this.destination.error(n);
        }
        notifyComplete() {
          this.destination.complete();
        }
      }
      function Fo(e, n) {
        if (!n.closed) return e instanceof ge ? e.subscribe(n) : Oa(e)(n);
      }
      function Md(e, n, t = Number.POSITIVE_INFINITY) {
        return 'function' == typeof n
          ? (i) => i.pipe(Md((r, o) => xo(e(r, o)).pipe(pt((s, a) => n(r, s, o, a))), t))
          : ('number' == typeof n && (t = n), (i) => i.lift(new db(e, t)));
      }
      class db {
        constructor(n, t = Number.POSITIVE_INFINITY) {
          (this.project = n), (this.concurrent = t);
        }
        call(n, t) {
          return t.subscribe(new fb(n, this.project, this.concurrent));
        }
      }
      class fb extends Po {
        constructor(n, t, i = Number.POSITIVE_INFINITY) {
          super(n),
            (this.project = t),
            (this.concurrent = i),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(n) {
          this.active < this.concurrent ? this._tryNext(n) : this.buffer.push(n);
        }
        _tryNext(n) {
          let t;
          const i = this.index++;
          try {
            t = this.project(n, i);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(t);
        }
        _innerSub(n) {
          const t = new ko(this),
            i = this.destination;
          i.add(t);
          const r = Fo(n, t);
          r !== t && i.add(r);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active && 0 === this.buffer.length && this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(n) {
          this.destination.next(n);
        }
        notifyComplete() {
          const n = this.buffer;
          this.active--,
            n.length > 0
              ? this._next(n.shift())
              : 0 === this.active && this.hasCompleted && this.destination.complete();
        }
      }
      function Id(e = Number.POSITIVE_INFINITY) {
        return Md(wi, e);
      }
      function Ir(e, n) {
        return n ? Ra(e, n) : new ge(Cd(e));
      }
      function Td() {
        return function (n) {
          return n.lift(new pb(n));
        };
      }
      class pb {
        constructor(n) {
          this.connectable = n;
        }
        call(n, t) {
          const { connectable: i } = this;
          i._refCount++;
          const r = new gb(n, i),
            o = t.subscribe(r);
          return r.closed || (r.connection = i.connect()), o;
        }
      }
      class gb extends $ {
        constructor(n, t) {
          super(n), (this.connectable = t);
        }
        _unsubscribe() {
          const { connectable: n } = this;
          if (!n) return void (this.connection = null);
          this.connectable = null;
          const t = n._refCount;
          if (t <= 0) return void (this.connection = null);
          if (((n._refCount = t - 1), t > 1)) return void (this.connection = null);
          const { connection: i } = this,
            r = n._connection;
          (this.connection = null), r && (!i || r === i) && r.unsubscribe();
        }
      }
      class mb extends ge {
        constructor(n, t) {
          super(), (this.source = n), (this.subjectFactory = t), (this._refCount = 0), (this._isComplete = !1);
        }
        _subscribe(n) {
          return this.getSubject().subscribe(n);
        }
        getSubject() {
          const n = this._subject;
          return (!n || n.isStopped) && (this._subject = this.subjectFactory()), this._subject;
        }
        connect() {
          let n = this._connection;
          return (
            n ||
              ((this._isComplete = !1),
              (n = this._connection = new he()),
              n.add(this.source.subscribe(new yb(this.getSubject(), this))),
              n.closed && ((this._connection = null), (n = he.EMPTY))),
            n
          );
        }
        refCount() {
          return Td()(this);
        }
      }
      const _b = (() => {
        const e = mb.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: e._subscribe },
          _isComplete: { value: e._isComplete, writable: !0 },
          getSubject: { value: e.getSubject },
          connect: { value: e.connect },
          refCount: { value: e.refCount },
        };
      })();
      class yb extends Dd {
        constructor(n, t) {
          super(n), (this.connectable = t);
        }
        _error(n) {
          this._unsubscribe(), super._error(n);
        }
        _complete() {
          (this.connectable._isComplete = !0), this._unsubscribe(), super._complete();
        }
        _unsubscribe() {
          const n = this.connectable;
          if (n) {
            this.connectable = null;
            const t = n._connection;
            (n._refCount = 0), (n._subject = null), (n._connection = null), t && t.unsubscribe();
          }
        }
      }
      function wb() {
        return new $e();
      }
      function re(e) {
        for (let n in e) if (e[n] === re) return n;
        throw Error('Could not find renamed property on target object.');
      }
      function xa(e, n) {
        for (const t in n) n.hasOwnProperty(t) && !e.hasOwnProperty(t) && (e[t] = n[t]);
      }
      function Z(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(Z).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const n = e.toString();
        if (null == n) return '' + n;
        const t = n.indexOf('\n');
        return -1 === t ? n : n.substring(0, t);
      }
      function ka(e, n) {
        return null == e || '' === e ? (null === n ? '' : n) : null == n || '' === n ? e : e + ' ' + n;
      }
      const Nb = re({ __forward_ref__: re });
      function J(e) {
        return (
          (e.__forward_ref__ = J),
          (e.toString = function () {
            return Z(this());
          }),
          e
        );
      }
      function V(e) {
        return Sd(e) ? e() : e;
      }
      function Sd(e) {
        return 'function' == typeof e && e.hasOwnProperty(Nb) && e.__forward_ref__ === J;
      }
      class gt extends Error {
        constructor(n, t) {
          super(
            (function (e, n) {
              return `${e ? `NG0${e}: ` : ''}${n}`;
            })(n, t)
          ),
            (this.code = n);
        }
      }
      function k(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function Xe(e) {
        return 'function' == typeof e
          ? e.name || e.toString()
          : 'object' == typeof e && null != e && 'function' == typeof e.type
          ? e.type.name || e.type.toString()
          : k(e);
      }
      function Vo(e, n) {
        const t = n ? ` in ${n}` : '';
        throw new gt('201', `No provider for ${Xe(e)} found${t}`);
      }
      function _t(e, n) {
        null == e &&
          (function (e, n, t, i) {
            throw new Error(`ASSERTION ERROR: ${e}` + (null == i ? '' : ` [Expected=> ${t} ${i} ${n} <=Actual]`));
          })(n, e, null, '!=');
      }
      function X(e) {
        return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 };
      }
      function ne(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function Fa(e) {
        return Ad(e, Bo) || Ad(e, Rd);
      }
      function Ad(e, n) {
        return e.hasOwnProperty(n) ? e[n] : null;
      }
      function Od(e) {
        return e && (e.hasOwnProperty(Va) || e.hasOwnProperty(Ob)) ? e[Va] : null;
      }
      const Bo = re({ ɵprov: re }),
        Va = re({ ɵinj: re }),
        Rd = re({ ngInjectableDef: re }),
        Ob = re({ ngInjectorDef: re });
      var B = (() => (
        ((B = B || {})[(B.Default = 0)] = 'Default'),
        (B[(B.Host = 1)] = 'Host'),
        (B[(B.Self = 2)] = 'Self'),
        (B[(B.SkipSelf = 4)] = 'SkipSelf'),
        (B[(B.Optional = 8)] = 'Optional'),
        B
      ))();
      let Ba;
      function Fn(e) {
        const n = Ba;
        return (Ba = e), n;
      }
      function xd(e, n, t) {
        const i = Fa(e);
        return i && 'root' == i.providedIn
          ? void 0 === i.value
            ? (i.value = i.factory())
            : i.value
          : t & B.Optional
          ? null
          : void 0 !== n
          ? n
          : void Vo(Z(e), 'Injector');
      }
      function Vn(e) {
        return { toString: e }.toString();
      }
      var Ht = (() => (((Ht = Ht || {})[(Ht.OnPush = 0)] = 'OnPush'), (Ht[(Ht.Default = 1)] = 'Default'), Ht))(),
        tn = (() => (
          (function (e) {
            (e[(e.Emulated = 0)] = 'Emulated'), (e[(e.None = 2)] = 'None'), (e[(e.ShadowDom = 3)] = 'ShadowDom');
          })(tn || (tn = {})),
          tn
        ))();
      const xb = 'undefined' != typeof globalThis && globalThis,
        kb = 'undefined' != typeof window && window,
        Pb =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        ie = xb || ('undefined' != typeof global && global) || kb || Pb,
        Ei = {},
        oe = [],
        Lo = re({ ɵcmp: re }),
        La = re({ ɵdir: re }),
        Ha = re({ ɵpipe: re }),
        kd = re({ ɵmod: re }),
        yn = re({ ɵfac: re }),
        Tr = re({ __NG_ELEMENT_ID__: re });
      let Fb = 0;
      function Ue(e) {
        return Vn(() => {
          const t = {},
            i = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: t,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === Ht.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: e.selectors || oe,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || tn.Emulated,
              id: 'c',
              styles: e.styles || oe,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            r = e.directives,
            o = e.features,
            s = e.pipes;
          return (
            (i.id += Fb++),
            (i.inputs = Bd(e.inputs, t)),
            (i.outputs = Bd(e.outputs)),
            o && o.forEach((a) => a(i)),
            (i.directiveDefs = r ? () => ('function' == typeof r ? r() : r).map(Pd) : null),
            (i.pipeDefs = s ? () => ('function' == typeof s ? s() : s).map(Fd) : null),
            i
          );
        });
      }
      function Pd(e) {
        return (
          We(e) ||
          (function (e) {
            return e[La] || null;
          })(e)
        );
      }
      function Fd(e) {
        return (function (e) {
          return e[Ha] || null;
        })(e);
      }
      const Vd = {};
      function se(e) {
        return Vn(() => {
          const n = {
            type: e.type,
            bootstrap: e.bootstrap || oe,
            declarations: e.declarations || oe,
            imports: e.imports || oe,
            exports: e.exports || oe,
            transitiveCompileScopes: null,
            schemas: e.schemas || null,
            id: e.id || null,
          };
          return null != e.id && (Vd[e.id] = e.type), n;
        });
      }
      function Bd(e, n) {
        if (null == e) return Ei;
        const t = {};
        for (const i in e)
          if (e.hasOwnProperty(i)) {
            let r = e[i],
              o = r;
            Array.isArray(r) && ((o = r[1]), (r = r[0])), (t[r] = i), n && (n[r] = o);
          }
        return t;
      }
      const N = Ue;
      function We(e) {
        return e[Lo] || null;
      }
      function Tt(e, n) {
        const t = e[kd] || null;
        if (!t && !0 === n) throw new Error(`Type ${Z(e)} does not have '\u0275mod' property.`);
        return t;
      }
      const L = 11;
      function nn(e) {
        return Array.isArray(e) && 'object' == typeof e[1];
      }
      function Gt(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function $a(e) {
        return 0 != (8 & e.flags);
      }
      function $o(e) {
        return 2 == (2 & e.flags);
      }
      function Uo(e) {
        return 1 == (1 & e.flags);
      }
      function $t(e) {
        return null !== e.template;
      }
      function Gb(e) {
        return 0 != (512 & e[2]);
      }
      function si(e, n) {
        return e.hasOwnProperty(yn) ? e[yn] : null;
      }
      class Wb {
        constructor(n, t, i) {
          (this.previousValue = n), (this.currentValue = t), (this.firstChange = i);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function bt() {
        return Hd;
      }
      function Hd(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = zb), qb;
      }
      function qb() {
        const e = Gd(this),
          n = null == e ? void 0 : e.current;
        if (n) {
          const t = e.previous;
          if (t === Ei) e.previous = n;
          else for (let i in n) t[i] = n[i];
          (e.current = null), this.ngOnChanges(n);
        }
      }
      function zb(e, n, t, i) {
        const r =
            Gd(e) ||
            (function (e, n) {
              return (e[jd] = n);
            })(e, { previous: Ei, current: null }),
          o = r.current || (r.current = {}),
          s = r.previous,
          a = this.declaredInputs[t],
          l = s[a];
        (o[a] = new Wb(l && l.currentValue, n, s === Ei)), (e[i] = n);
      }
      bt.ngInherit = !0;
      const jd = '__ngSimpleChanges__';
      function Gd(e) {
        return e[jd] || null;
      }
      const $d = 'http://www.w3.org/2000/svg';
      let qa;
      function we(e) {
        return !!e.listen;
      }
      const Wd = {
        createRenderer: (e, n) => (void 0 !== qa ? qa : 'undefined' != typeof document ? document : void 0),
      };
      function Oe(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function Wo(e, n) {
        return Oe(n[e]);
      }
      function Ot(e, n) {
        return Oe(n[e.index]);
      }
      function Ya(e, n) {
        return e.data[n];
      }
      function vt(e, n) {
        const t = n[e];
        return nn(t) ? t : t[0];
      }
      function qd(e) {
        return 4 == (4 & e[2]);
      }
      function Za(e) {
        return 128 == (128 & e[2]);
      }
      function Ln(e, n) {
        return null == n ? null : e[n];
      }
      function zd(e) {
        e[18] = 0;
      }
      function Ka(e, n) {
        e[5] += n;
        let t = e,
          i = e[3];
        for (; null !== i && ((1 === n && 1 === t[5]) || (-1 === n && 0 === t[5])); ) (i[5] += n), (t = i), (i = i[3]);
      }
      const x = { lFrame: tf(null), bindingsEnabled: !0, isInCheckNoChangesMode: !1 };
      function Yd() {
        return x.bindingsEnabled;
      }
      function D() {
        return x.lFrame.lView;
      }
      function K() {
        return x.lFrame.tView;
      }
      function Pe() {
        let e = Zd();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function Zd() {
        return x.lFrame.currentTNode;
      }
      function rn(e, n) {
        const t = x.lFrame;
        (t.currentTNode = e), (t.isParent = n);
      }
      function Qa() {
        return x.lFrame.isParent;
      }
      function Ja() {
        x.lFrame.isParent = !1;
      }
      function qo() {
        return x.isInCheckNoChangesMode;
      }
      function zo(e) {
        x.isInCheckNoChangesMode = e;
      }
      function Oi() {
        return x.lFrame.bindingIndex++;
      }
      function Dn(e) {
        const n = x.lFrame,
          t = n.bindingIndex;
        return (n.bindingIndex = n.bindingIndex + e), t;
      }
      function l1(e, n) {
        const t = x.lFrame;
        (t.bindingIndex = t.bindingRootIndex = e), Xa(n);
      }
      function Xa(e) {
        x.lFrame.currentDirectiveIndex = e;
      }
      function Jd() {
        return x.lFrame.currentQueryIndex;
      }
      function tl(e) {
        x.lFrame.currentQueryIndex = e;
      }
      function c1(e) {
        const n = e[1];
        return 2 === n.type ? n.declTNode : 1 === n.type ? e[6] : null;
      }
      function Xd(e, n, t) {
        if (t & B.SkipSelf) {
          let r = n,
            o = e;
          for (
            ;
            !((r = r.parent), null !== r || t & B.Host || ((r = c1(o)), null === r || ((o = o[15]), 10 & r.type)));

          );
          if (null === r) return !1;
          (n = r), (e = o);
        }
        const i = (x.lFrame = ef());
        return (i.currentTNode = n), (i.lView = e), !0;
      }
      function Yo(e) {
        const n = ef(),
          t = e[1];
        (x.lFrame = n),
          (n.currentTNode = t.firstChild),
          (n.lView = e),
          (n.tView = t),
          (n.contextLView = e),
          (n.bindingIndex = t.bindingStartIndex),
          (n.inI18n = !1);
      }
      function ef() {
        const e = x.lFrame,
          n = null === e ? null : e.child;
        return null === n ? tf(e) : n;
      }
      function tf(e) {
        const n = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = n), n;
      }
      function nf() {
        const e = x.lFrame;
        return (x.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
      }
      const rf = nf;
      function Zo() {
        const e = nf();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function tt() {
        return x.lFrame.selectedIndex;
      }
      function Hn(e) {
        x.lFrame.selectedIndex = e;
      }
      function Ce() {
        const e = x.lFrame;
        return Ya(e.tView, e.selectedIndex);
      }
      function Ko() {
        x.lFrame.currentNamespace = $d;
      }
      function Qo() {
        x.lFrame.currentNamespace = null;
      }
      function Jo(e, n) {
        for (let t = n.directiveStart, i = n.directiveEnd; t < i; t++) {
          const o = e.data[t].type.prototype,
            {
              ngAfterContentInit: s,
              ngAfterContentChecked: a,
              ngAfterViewInit: l,
              ngAfterViewChecked: u,
              ngOnDestroy: c,
            } = o;
          s && (e.contentHooks || (e.contentHooks = [])).push(-t, s),
            a &&
              ((e.contentHooks || (e.contentHooks = [])).push(t, a),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(t, a)),
            l && (e.viewHooks || (e.viewHooks = [])).push(-t, l),
            u &&
              ((e.viewHooks || (e.viewHooks = [])).push(t, u),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(t, u)),
            null != c && (e.destroyHooks || (e.destroyHooks = [])).push(t, c);
        }
      }
      function Xo(e, n, t) {
        sf(e, n, 3, t);
      }
      function es(e, n, t, i) {
        (3 & e[2]) === t && sf(e, n, t, i);
      }
      function nl(e, n) {
        let t = e[2];
        (3 & t) === n && ((t &= 2047), (t += 1), (e[2] = t));
      }
      function sf(e, n, t, i) {
        const o = null != i ? i : -1,
          s = n.length - 1;
        let a = 0;
        for (let l = void 0 !== i ? 65535 & e[18] : 0; l < s; l++)
          if ('number' == typeof n[l + 1]) {
            if (((a = n[l]), null != i && a >= i)) break;
          } else
            n[l] < 0 && (e[18] += 65536),
              (a < o || -1 == o) && (_1(e, t, n, l), (e[18] = (4294901760 & e[18]) + l + 2)),
              l++;
      }
      function _1(e, n, t, i) {
        const r = t[i] < 0,
          o = t[i + 1],
          a = e[r ? -t[i] : t[i]];
        if (r) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === n) {
            e[2] += 2048;
            try {
              o.call(a);
            } finally {
            }
          }
        } else
          try {
            o.call(a);
          } finally {
          }
      }
      class xr {
        constructor(n, t, i) {
          (this.factory = n), (this.resolving = !1), (this.canSeeViewProviders = t), (this.injectImpl = i);
        }
      }
      function ts(e, n, t) {
        const i = we(e);
        let r = 0;
        for (; r < t.length; ) {
          const o = t[r];
          if ('number' == typeof o) {
            if (0 !== o) break;
            r++;
            const s = t[r++],
              a = t[r++],
              l = t[r++];
            i ? e.setAttribute(n, a, l, s) : n.setAttributeNS(s, a, l);
          } else {
            const s = o,
              a = t[++r];
            rl(s) ? i && e.setProperty(n, s, a) : i ? e.setAttribute(n, s, a) : n.setAttribute(s, a), r++;
          }
        }
        return r;
      }
      function af(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function rl(e) {
        return 64 === e.charCodeAt(0);
      }
      function ns(e, n) {
        if (null !== n && 0 !== n.length)
          if (null === e || 0 === e.length) e = n.slice();
          else {
            let t = -1;
            for (let i = 0; i < n.length; i++) {
              const r = n[i];
              'number' == typeof r ? (t = r) : 0 === t || lf(e, t, r, null, -1 === t || 2 === t ? n[++i] : null);
            }
          }
        return e;
      }
      function lf(e, n, t, i, r) {
        let o = 0,
          s = e.length;
        if (-1 === n) s = -1;
        else
          for (; o < e.length; ) {
            const a = e[o++];
            if ('number' == typeof a) {
              if (a === n) {
                s = -1;
                break;
              }
              if (a > n) {
                s = o - 1;
                break;
              }
            }
          }
        for (; o < e.length; ) {
          const a = e[o];
          if ('number' == typeof a) break;
          if (a === t) {
            if (null === i) return void (null !== r && (e[o + 1] = r));
            if (i === e[o + 1]) return void (e[o + 2] = r);
          }
          o++, null !== i && o++, null !== r && o++;
        }
        -1 !== s && (e.splice(s, 0, n), (o = s + 1)),
          e.splice(o++, 0, t),
          null !== i && e.splice(o++, 0, i),
          null !== r && e.splice(o++, 0, r);
      }
      function uf(e) {
        return -1 !== e;
      }
      function Ri(e) {
        return 32767 & e;
      }
      function xi(e, n) {
        let t = (function (e) {
            return e >> 16;
          })(e),
          i = n;
        for (; t > 0; ) (i = i[15]), t--;
        return i;
      }
      let ol = !0;
      function is(e) {
        const n = ol;
        return (ol = e), n;
      }
      let C1 = 0;
      function Pr(e, n) {
        const t = al(e, n);
        if (-1 !== t) return t;
        const i = n[1];
        i.firstCreatePass && ((e.injectorIndex = n.length), sl(i.data, e), sl(n, null), sl(i.blueprint, null));
        const r = rs(e, n),
          o = e.injectorIndex;
        if (uf(r)) {
          const s = Ri(r),
            a = xi(r, n),
            l = a[1].data;
          for (let u = 0; u < 8; u++) n[o + u] = a[s + u] | l[s + u];
        }
        return (n[o + 8] = r), o;
      }
      function sl(e, n) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, n);
      }
      function al(e, n) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === n[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function rs(e, n) {
        if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
        let t = 0,
          i = null,
          r = n;
        for (; null !== r; ) {
          const o = r[1],
            s = o.type;
          if (((i = 2 === s ? o.declTNode : 1 === s ? r[6] : null), null === i)) return -1;
          if ((t++, (r = r[15]), -1 !== i.injectorIndex)) return i.injectorIndex | (t << 16);
        }
        return -1;
      }
      function os(e, n, t) {
        !(function (e, n, t) {
          let i;
          'string' == typeof t ? (i = t.charCodeAt(0) || 0) : t.hasOwnProperty(Tr) && (i = t[Tr]),
            null == i && (i = t[Tr] = C1++);
          const r = 255 & i;
          n.data[e + (r >> 5)] |= 1 << r;
        })(e, n, t);
      }
      function ff(e, n, t) {
        if (t & B.Optional) return e;
        Vo(n, 'NodeInjector');
      }
      function hf(e, n, t, i) {
        if ((t & B.Optional && void 0 === i && (i = null), 0 == (t & (B.Self | B.Host)))) {
          const r = e[9],
            o = Fn(void 0);
          try {
            return r ? r.get(n, i, t & B.Optional) : xd(n, i, t & B.Optional);
          } finally {
            Fn(o);
          }
        }
        return ff(i, n, t);
      }
      function pf(e, n, t, i = B.Default, r) {
        if (null !== e) {
          const o = (function (e) {
            if ('string' == typeof e) return e.charCodeAt(0) || 0;
            const n = e.hasOwnProperty(Tr) ? e[Tr] : void 0;
            return 'number' == typeof n ? (n >= 0 ? 255 & n : M1) : n;
          })(t);
          if ('function' == typeof o) {
            if (!Xd(n, e, i)) return i & B.Host ? ff(r, t, i) : hf(n, t, i, r);
            try {
              const s = o(i);
              if (null != s || i & B.Optional) return s;
              Vo(t);
            } finally {
              rf();
            }
          } else if ('number' == typeof o) {
            let s = null,
              a = al(e, n),
              l = -1,
              u = i & B.Host ? n[16][6] : null;
            for (
              (-1 === a || i & B.SkipSelf) &&
              ((l = -1 === a ? rs(e, n) : n[a + 8]),
              -1 !== l && _f(i, !1) ? ((s = n[1]), (a = Ri(l)), (n = xi(l, n))) : (a = -1));
              -1 !== a;

            ) {
              const c = n[1];
              if (mf(o, a, c.data)) {
                const d = I1(a, n, t, s, i, u);
                if (d !== gf) return d;
              }
              (l = n[a + 8]),
                -1 !== l && _f(i, n[1].data[a + 8] === u) && mf(o, a, n)
                  ? ((s = c), (a = Ri(l)), (n = xi(l, n)))
                  : (a = -1);
            }
          }
        }
        return hf(n, t, i, r);
      }
      const gf = {};
      function M1() {
        return new ki(Pe(), D());
      }
      function I1(e, n, t, i, r, o) {
        const s = n[1],
          a = s.data[e + 8],
          c = ss(a, s, t, null == i ? $o(a) && ol : i != s && 0 != (3 & a.type), r & B.Host && o === a);
        return null !== c ? Fr(n, s, c, a) : gf;
      }
      function ss(e, n, t, i, r) {
        const o = e.providerIndexes,
          s = n.data,
          a = 1048575 & o,
          l = e.directiveStart,
          c = o >> 20,
          f = r ? a + c : e.directiveEnd;
        for (let h = i ? a : a + c; h < f; h++) {
          const m = s[h];
          if ((h < l && t === m) || (h >= l && m.type === t)) return h;
        }
        if (r) {
          const h = s[l];
          if (h && $t(h) && h.type === t) return l;
        }
        return null;
      }
      function Fr(e, n, t, i) {
        let r = e[t];
        const o = n.data;
        if (
          (function (e) {
            return e instanceof xr;
          })(r)
        ) {
          const s = r;
          s.resolving &&
            (function (e, n) {
              throw new gt('200', `Circular dependency in DI detected for ${e}`);
            })(Xe(o[t]));
          const a = is(s.canSeeViewProviders);
          s.resolving = !0;
          const l = s.injectImpl ? Fn(s.injectImpl) : null;
          Xd(e, i, B.Default);
          try {
            (r = e[t] = s.factory(void 0, o, e, i)),
              n.firstCreatePass &&
                t >= i.directiveStart &&
                (function (e, n, t) {
                  const { ngOnChanges: i, ngOnInit: r, ngDoCheck: o } = n.type.prototype;
                  if (i) {
                    const s = Hd(n);
                    (t.preOrderHooks || (t.preOrderHooks = [])).push(e, s),
                      (t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(e, s);
                  }
                  r && (t.preOrderHooks || (t.preOrderHooks = [])).push(0 - e, r),
                    o &&
                      ((t.preOrderHooks || (t.preOrderHooks = [])).push(e, o),
                      (t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(e, o));
                })(t, o[t], n);
          } finally {
            null !== l && Fn(l), is(a), (s.resolving = !1), rf();
          }
        }
        return r;
      }
      function mf(e, n, t) {
        return !!(t[n + (e >> 5)] & (1 << e));
      }
      function _f(e, n) {
        return !(e & B.Self || (e & B.Host && n));
      }
      class ki {
        constructor(n, t) {
          (this._tNode = n), (this._lView = t);
        }
        get(n, t, i) {
          return pf(this._tNode, this._lView, n, i, t);
        }
      }
      function Dt(e) {
        return Vn(() => {
          const n = e.prototype.constructor,
            t = n[yn] || ll(n),
            i = Object.prototype;
          let r = Object.getPrototypeOf(e.prototype).constructor;
          for (; r && r !== i; ) {
            const o = r[yn] || ll(r);
            if (o && o !== t) return o;
            r = Object.getPrototypeOf(r);
          }
          return (o) => new o();
        });
      }
      function ll(e) {
        return Sd(e)
          ? () => {
              const n = ll(V(e));
              return n && n();
            }
          : si(e);
      }
      const Fi = '__parameters__';
      function Bi(e, n, t) {
        return Vn(() => {
          const i = (function (e) {
            return function (...t) {
              if (e) {
                const i = e(...t);
                for (const r in i) this[r] = i[r];
              }
            };
          })(n);
          function r(...o) {
            if (this instanceof r) return i.apply(this, o), this;
            const s = new r(...o);
            return (a.annotation = s), a;
            function a(l, u, c) {
              const d = l.hasOwnProperty(Fi) ? l[Fi] : Object.defineProperty(l, Fi, { value: [] })[Fi];
              for (; d.length <= c; ) d.push(null);
              return (d[c] = d[c] || []).push(s), l;
            }
          }
          return (
            t && (r.prototype = Object.create(t.prototype)), (r.prototype.ngMetadataName = e), (r.annotationCls = r), r
          );
        });
      }
      class Y {
        constructor(n, t) {
          (this._desc = n),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof t
              ? (this.__NG_ELEMENT_ID__ = t)
              : void 0 !== t &&
                (this.ɵprov = X({ token: this, providedIn: t.providedIn || 'root', factory: t.factory }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function Rt(e, n) {
        void 0 === n && (n = e);
        for (let t = 0; t < e.length; t++) {
          let i = e[t];
          Array.isArray(i) ? (n === e && (n = e.slice(0, t)), Rt(i, n)) : n !== e && n.push(i);
        }
        return n;
      }
      function on(e, n) {
        e.forEach((t) => (Array.isArray(t) ? on(t, n) : n(t)));
      }
      function bf(e, n, t) {
        n >= e.length ? e.push(t) : e.splice(n, 0, t);
      }
      function as(e, n) {
        return n >= e.length - 1 ? e.pop() : e.splice(n, 1)[0];
      }
      function Hr(e, n) {
        const t = [];
        for (let i = 0; i < e; i++) t.push(n);
        return t;
      }
      function wt(e, n, t) {
        let i = Li(e, n);
        return (
          i >= 0
            ? (e[1 | i] = t)
            : ((i = ~i),
              (function (e, n, t, i) {
                let r = e.length;
                if (r == n) e.push(t, i);
                else if (1 === r) e.push(i, e[0]), (e[0] = t);
                else {
                  for (r--, e.push(e[r - 1], e[r]); r > n; ) (e[r] = e[r - 2]), r--;
                  (e[n] = t), (e[n + 1] = i);
                }
              })(e, i, n, t)),
          i
        );
      }
      function dl(e, n) {
        const t = Li(e, n);
        if (t >= 0) return e[1 | t];
      }
      function Li(e, n) {
        return (function (e, n, t) {
          let i = 0,
            r = e.length >> t;
          for (; r !== i; ) {
            const o = i + ((r - i) >> 1),
              s = e[o << t];
            if (n === s) return o << t;
            s > n ? (r = o) : (i = o + 1);
          }
          return ~(r << t);
        })(e, n, 1);
      }
      const jr = {},
        hl = '__NG_DI_FLAG__',
        us = 'ngTempTokenPath',
        L1 = /\n/gm,
        Nf = '__source',
        j1 = re({ provide: String, useValue: re });
      let Gr;
      function Ef(e) {
        const n = Gr;
        return (Gr = e), n;
      }
      function G1(e, n = B.Default) {
        if (void 0 === Gr) throw new Error('inject() must be called from an injection context');
        return null === Gr ? xd(e, void 0, n) : Gr.get(e, n & B.Optional ? null : void 0, n);
      }
      function H(e, n = B.Default) {
        return (Ba || G1)(V(e), n);
      }
      function pl(e) {
        const n = [];
        for (let t = 0; t < e.length; t++) {
          const i = V(e[t]);
          if (Array.isArray(i)) {
            if (0 === i.length) throw new Error('Arguments array must have arguments.');
            let r,
              o = B.Default;
            for (let s = 0; s < i.length; s++) {
              const a = i[s],
                l = $1(a);
              'number' == typeof l ? (-1 === l ? (r = a.token) : (o |= l)) : (r = a);
            }
            n.push(H(r, o));
          } else n.push(H(i));
        }
        return n;
      }
      function $r(e, n) {
        return (e[hl] = n), (e.prototype[hl] = n), e;
      }
      function $1(e) {
        return e[hl];
      }
      const cs = $r(
          Bi('Inject', (e) => ({ token: e })),
          -1
        ),
        Hi = $r(Bi('Optional'), 8),
        Ur = $r(Bi('SkipSelf'), 4);
      function Gn(e) {
        return e instanceof
          class {
            constructor(n) {
              this.changingThisBreaksApplicationSecurity = n;
            }
            toString() {
              return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
            }
          }
          ? e.changingThisBreaksApplicationSecurity
          : e;
      }
      const Wf = '__ngContext__';
      function ze(e, n) {
        e[Wf] = n;
      }
      function Cl(e) {
        const n = (function (e) {
          return e[Wf] || null;
        })(e);
        return n ? (Array.isArray(n) ? n : n.lView) : null;
      }
      function El(e) {
        return e.ngOriginalError;
      }
      function Fv(e, ...n) {
        e.error(...n);
      }
      class $i {
        constructor() {
          this._console = console;
        }
        handleError(n) {
          const t = this._findOriginalError(n),
            i = (function (e) {
              return (e && e.ngErrorLogger) || Fv;
            })(n);
          i(this._console, 'ERROR', n), t && i(this._console, 'ORIGINAL ERROR', t);
        }
        _findOriginalError(n) {
          let t = n && El(n);
          for (; t && El(t); ) t = El(t);
          return t || null;
        }
      }
      const Kf = (() =>
        (('undefined' != typeof requestAnimationFrame && requestAnimationFrame) || setTimeout).bind(ie))();
      function an(e) {
        return e instanceof Function ? e() : e;
      }
      var Ct = (() => (
        ((Ct = Ct || {})[(Ct.Important = 1)] = 'Important'), (Ct[(Ct.DashCase = 2)] = 'DashCase'), Ct
      ))();
      function Il(e, n) {
        return undefined(e, n);
      }
      function Kr(e) {
        const n = e[3];
        return Gt(n) ? n[3] : n;
      }
      function Tl(e) {
        return th(e[13]);
      }
      function Sl(e) {
        return th(e[4]);
      }
      function th(e) {
        for (; null !== e && !Gt(e); ) e = e[4];
        return e;
      }
      function Wi(e, n, t, i, r) {
        if (null != i) {
          let o,
            s = !1;
          Gt(i) ? (o = i) : nn(i) && ((s = !0), (i = i[0]));
          const a = Oe(i);
          0 === e && null !== t
            ? null == r
              ? ah(n, t, a)
              : ai(n, t, a, r || null, !0)
            : 1 === e && null !== t
            ? ai(n, t, a, r || null, !0)
            : 2 === e
            ? (function (e, n, t) {
                const i = ms(e, n);
                i &&
                  (function (e, n, t, i) {
                    we(e) ? e.removeChild(n, t, i) : n.removeChild(t);
                  })(e, i, n, t);
              })(n, a, s)
            : 3 === e && n.destroyNode(a),
            null != o &&
              (function (e, n, t, i, r) {
                const o = t[7];
                o !== Oe(t) && Wi(n, e, i, o, r);
                for (let a = 10; a < t.length; a++) {
                  const l = t[a];
                  Qr(l[1], l, e, n, i, o);
                }
              })(n, e, o, t, r);
        }
      }
      function Ol(e, n, t) {
        return we(e) ? e.createElement(n, t) : null === t ? e.createElement(n) : e.createElementNS(t, n);
      }
      function ih(e, n) {
        const t = e[9],
          i = t.indexOf(n),
          r = n[3];
        1024 & n[2] && ((n[2] &= -1025), Ka(r, -1)), t.splice(i, 1);
      }
      function Rl(e, n) {
        if (e.length <= 10) return;
        const t = 10 + n,
          i = e[t];
        if (i) {
          const r = i[17];
          null !== r && r !== e && ih(r, i), n > 0 && (e[t - 1][4] = i[4]);
          const o = as(e, 10 + n);
          !(function (e, n) {
            Qr(e, n, n[L], 2, null, null), (n[0] = null), (n[6] = null);
          })(i[1], i);
          const s = o[19];
          null !== s && s.detachView(o[1]), (i[3] = null), (i[4] = null), (i[2] &= -129);
        }
        return i;
      }
      function rh(e, n) {
        if (!(256 & n[2])) {
          const t = n[L];
          we(t) && t.destroyNode && Qr(e, n, t, 3, null, null),
            (function (e) {
              let n = e[13];
              if (!n) return xl(e[1], e);
              for (; n; ) {
                let t = null;
                if (nn(n)) t = n[13];
                else {
                  const i = n[10];
                  i && (t = i);
                }
                if (!t) {
                  for (; n && !n[4] && n !== e; ) nn(n) && xl(n[1], n), (n = n[3]);
                  null === n && (n = e), nn(n) && xl(n[1], n), (t = n && n[4]);
                }
                n = t;
              }
            })(n);
        }
      }
      function xl(e, n) {
        if (!(256 & n[2])) {
          (n[2] &= -129),
            (n[2] |= 256),
            (function (e, n) {
              let t;
              if (null != e && null != (t = e.destroyHooks))
                for (let i = 0; i < t.length; i += 2) {
                  const r = n[t[i]];
                  if (!(r instanceof xr)) {
                    const o = t[i + 1];
                    if (Array.isArray(o))
                      for (let s = 0; s < o.length; s += 2) {
                        const a = r[o[s]],
                          l = o[s + 1];
                        try {
                          l.call(a);
                        } finally {
                        }
                      }
                    else
                      try {
                        o.call(r);
                      } finally {
                      }
                  }
                }
            })(e, n),
            (function (e, n) {
              const t = e.cleanup,
                i = n[7];
              let r = -1;
              if (null !== t)
                for (let o = 0; o < t.length - 1; o += 2)
                  if ('string' == typeof t[o]) {
                    const s = t[o + 1],
                      a = 'function' == typeof s ? s(n) : Oe(n[s]),
                      l = i[(r = t[o + 2])],
                      u = t[o + 3];
                    'boolean' == typeof u
                      ? a.removeEventListener(t[o], l, u)
                      : u >= 0
                      ? i[(r = u)]()
                      : i[(r = -u)].unsubscribe(),
                      (o += 2);
                  } else {
                    const s = i[(r = t[o + 1])];
                    t[o].call(s);
                  }
              if (null !== i) {
                for (let o = r + 1; o < i.length; o++) i[o]();
                n[7] = null;
              }
            })(e, n),
            1 === n[1].type && we(n[L]) && n[L].destroy();
          const t = n[17];
          if (null !== t && Gt(n[3])) {
            t !== n[3] && ih(t, n);
            const i = n[19];
            null !== i && i.detachView(e);
          }
        }
      }
      function oh(e, n, t) {
        return (function (e, n, t) {
          let i = n;
          for (; null !== i && 40 & i.type; ) i = (n = i).parent;
          if (null === i) return t[0];
          if (2 & i.flags) {
            const r = e.data[i.directiveStart].encapsulation;
            if (r === tn.None || r === tn.Emulated) return null;
          }
          return Ot(i, t);
        })(e, n.parent, t);
      }
      function ai(e, n, t, i, r) {
        we(e) ? e.insertBefore(n, t, i, r) : n.insertBefore(t, i, r);
      }
      function ah(e, n, t) {
        we(e) ? e.appendChild(n, t) : n.appendChild(t);
      }
      function lh(e, n, t, i, r) {
        null !== i ? ai(e, n, t, i, r) : ah(e, n, t);
      }
      function ms(e, n) {
        return we(e) ? e.parentNode(n) : n.parentNode;
      }
      function uh(e, n, t) {
        return dh(e, n, t);
      }
      let dh = function (e, n, t) {
        return 40 & e.type ? Ot(e, t) : null;
      };
      function _s(e, n, t, i) {
        const r = oh(e, i, n),
          o = n[L],
          a = uh(i.parent || n[6], i, n);
        if (null != r)
          if (Array.isArray(t)) for (let l = 0; l < t.length; l++) lh(o, r, t[l], a, !1);
          else lh(o, r, t, a, !1);
      }
      function ys(e, n) {
        if (null !== n) {
          const t = n.type;
          if (3 & t) return Ot(n, e);
          if (4 & t) return Pl(-1, e[n.index]);
          if (8 & t) {
            const i = n.child;
            if (null !== i) return ys(e, i);
            {
              const r = e[n.index];
              return Gt(r) ? Pl(-1, r) : Oe(r);
            }
          }
          if (32 & t) return Il(n, e)() || Oe(e[n.index]);
          {
            const i = hh(e, n);
            return null !== i ? (Array.isArray(i) ? i[0] : ys(Kr(e[16]), i)) : ys(e, n.next);
          }
        }
        return null;
      }
      function hh(e, n) {
        return null !== n ? e[16][6].projection[n.projection] : null;
      }
      function Pl(e, n) {
        const t = 10 + e + 1;
        if (t < n.length) {
          const i = n[t],
            r = i[1].firstChild;
          if (null !== r) return ys(i, r);
        }
        return n[7];
      }
      function Fl(e, n, t, i, r, o, s) {
        for (; null != t; ) {
          const a = i[t.index],
            l = t.type;
          if ((s && 0 === n && (a && ze(Oe(a), i), (t.flags |= 4)), 64 != (64 & t.flags)))
            if (8 & l) Fl(e, n, t.child, i, r, o, !1), Wi(n, e, r, a, o);
            else if (32 & l) {
              const u = Il(t, i);
              let c;
              for (; (c = u()); ) Wi(n, e, r, c, o);
              Wi(n, e, r, a, o);
            } else 16 & l ? gh(e, n, i, t, r, o) : Wi(n, e, r, a, o);
          t = s ? t.projectionNext : t.next;
        }
      }
      function Qr(e, n, t, i, r, o) {
        Fl(t, i, e.firstChild, n, r, o, !1);
      }
      function gh(e, n, t, i, r, o) {
        const s = t[16],
          l = s[6].projection[i.projection];
        if (Array.isArray(l)) for (let u = 0; u < l.length; u++) Wi(n, e, r, l[u], o);
        else Fl(e, n, l, s[3], r, o, !0);
      }
      function mh(e, n, t) {
        we(e) ? e.setAttribute(n, 'style', t) : (n.style.cssText = t);
      }
      function Vl(e, n, t) {
        we(e) ? ('' === t ? e.removeAttribute(n, 'class') : e.setAttribute(n, 'class', t)) : (n.className = t);
      }
      function _h(e, n, t) {
        let i = e.length;
        for (;;) {
          const r = e.indexOf(n, t);
          if (-1 === r) return r;
          if (0 === r || e.charCodeAt(r - 1) <= 32) {
            const o = n.length;
            if (r + o === i || e.charCodeAt(r + o) <= 32) return r;
          }
          t = r + 1;
        }
      }
      const yh = 'ng-template';
      function cD(e, n, t) {
        let i = 0;
        for (; i < e.length; ) {
          let r = e[i++];
          if (t && 'class' === r) {
            if (((r = e[i]), -1 !== _h(r.toLowerCase(), n, 0))) return !0;
          } else if (1 === r) {
            for (; i < e.length && 'string' == typeof (r = e[i++]); ) if (r.toLowerCase() === n) return !0;
            return !1;
          }
        }
        return !1;
      }
      function bh(e) {
        return 4 === e.type && e.value !== yh;
      }
      function dD(e, n, t) {
        return n === (4 !== e.type || t ? e.value : yh);
      }
      function fD(e, n, t) {
        let i = 4;
        const r = e.attrs || [],
          o = (function (e) {
            for (let n = 0; n < e.length; n++) if (af(e[n])) return n;
            return e.length;
          })(r);
        let s = !1;
        for (let a = 0; a < n.length; a++) {
          const l = n[a];
          if ('number' != typeof l) {
            if (!s)
              if (4 & i) {
                if (((i = 2 | (1 & i)), ('' !== l && !dD(e, l, t)) || ('' === l && 1 === n.length))) {
                  if (Ut(i)) return !1;
                  s = !0;
                }
              } else {
                const u = 8 & i ? l : n[++a];
                if (8 & i && null !== e.attrs) {
                  if (!cD(e.attrs, u, t)) {
                    if (Ut(i)) return !1;
                    s = !0;
                  }
                  continue;
                }
                const d = hD(8 & i ? 'class' : l, r, bh(e), t);
                if (-1 === d) {
                  if (Ut(i)) return !1;
                  s = !0;
                  continue;
                }
                if ('' !== u) {
                  let f;
                  f = d > o ? '' : r[d + 1].toLowerCase();
                  const h = 8 & i ? f : null;
                  if ((h && -1 !== _h(h, u, 0)) || (2 & i && u !== f)) {
                    if (Ut(i)) return !1;
                    s = !0;
                  }
                }
              }
          } else {
            if (!s && !Ut(i) && !Ut(l)) return !1;
            if (s && Ut(l)) continue;
            (s = !1), (i = l | (1 & i));
          }
        }
        return Ut(i) || s;
      }
      function Ut(e) {
        return 0 == (1 & e);
      }
      function hD(e, n, t, i) {
        if (null === n) return -1;
        let r = 0;
        if (i || !t) {
          let o = !1;
          for (; r < n.length; ) {
            const s = n[r];
            if (s === e) return r;
            if (3 === s || 6 === s) o = !0;
            else {
              if (1 === s || 2 === s) {
                let a = n[++r];
                for (; 'string' == typeof a; ) a = n[++r];
                continue;
              }
              if (4 === s) break;
              if (0 === s) {
                r += 4;
                continue;
              }
            }
            r += o ? 1 : 2;
          }
          return -1;
        }
        return (function (e, n) {
          let t = e.indexOf(4);
          if (t > -1)
            for (t++; t < e.length; ) {
              const i = e[t];
              if ('number' == typeof i) return -1;
              if (i === n) return t;
              t++;
            }
          return -1;
        })(n, e);
      }
      function vh(e, n, t = !1) {
        for (let i = 0; i < n.length; i++) if (fD(e, n[i], t)) return !0;
        return !1;
      }
      function _D(e, n) {
        e: for (let t = 0; t < n.length; t++) {
          const i = n[t];
          if (e.length === i.length) {
            for (let r = 0; r < e.length; r++) if (e[r] !== i[r]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function Dh(e, n) {
        return e ? ':not(' + n.trim() + ')' : n;
      }
      function yD(e) {
        let n = e[0],
          t = 1,
          i = 2,
          r = '',
          o = !1;
        for (; t < e.length; ) {
          let s = e[t];
          if ('string' == typeof s)
            if (2 & i) {
              const a = e[++t];
              r += '[' + s + (a.length > 0 ? '="' + a + '"' : '') + ']';
            } else 8 & i ? (r += '.' + s) : 4 & i && (r += ' ' + s);
          else '' !== r && !Ut(s) && ((n += Dh(o, r)), (r = '')), (i = s), (o = o || !Ut(i));
          t++;
        }
        return '' !== r && (n += Dh(o, r)), n;
      }
      const P = {};
      function M(e) {
        wh(K(), D(), tt() + e, qo());
      }
      function wh(e, n, t, i) {
        if (!i)
          if (3 == (3 & n[2])) {
            const o = e.preOrderCheckHooks;
            null !== o && Xo(n, o, t);
          } else {
            const o = e.preOrderHooks;
            null !== o && es(n, o, 0, t);
          }
        Hn(t);
      }
      function bs(e, n) {
        return (e << 17) | (n << 2);
      }
      function Wt(e) {
        return (e >> 17) & 32767;
      }
      function Bl(e) {
        return 2 | e;
      }
      function wn(e) {
        return (131068 & e) >> 2;
      }
      function Ll(e, n) {
        return (-131069 & e) | (n << 2);
      }
      function Hl(e) {
        return 1 | e;
      }
      function xh(e, n) {
        const t = e.contentQueries;
        if (null !== t)
          for (let i = 0; i < t.length; i += 2) {
            const r = t[i],
              o = t[i + 1];
            if (-1 !== o) {
              const s = e.data[o];
              tl(r), s.contentQueries(2, n[o], o);
            }
          }
      }
      function Jr(e, n, t, i, r, o, s, a, l, u) {
        const c = n.blueprint.slice();
        return (
          (c[0] = r),
          (c[2] = 140 | i),
          zd(c),
          (c[3] = c[15] = e),
          (c[8] = t),
          (c[10] = s || (e && e[10])),
          (c[L] = a || (e && e[L])),
          (c[12] = l || (e && e[12]) || null),
          (c[9] = u || (e && e[9]) || null),
          (c[6] = o),
          (c[16] = 2 == n.type ? e[16] : c),
          c
        );
      }
      function qi(e, n, t, i, r) {
        let o = e.data[n];
        if (null === o)
          (o = (function (e, n, t, i, r) {
            const o = Zd(),
              s = Qa(),
              l = (e.data[n] = (function (e, n, t, i, r, o) {
                return {
                  type: t,
                  index: i,
                  insertBeforeIndex: null,
                  injectorIndex: n ? n.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: r,
                  attrs: o,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: n,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, s ? o : o && o.parent, t, n, i, r));
            return (
              null === e.firstChild && (e.firstChild = l),
              null !== o &&
                (s ? null == o.child && null !== l.parent && (o.child = l) : null === o.next && (o.next = l)),
              l
            );
          })(e, n, t, i, r)),
            x.lFrame.inI18n && (o.flags |= 64);
        else if (64 & o.type) {
          (o.type = t), (o.value = i), (o.attrs = r);
          const s = (function () {
            const e = x.lFrame,
              n = e.currentTNode;
            return e.isParent ? n : n.parent;
          })();
          o.injectorIndex = null === s ? -1 : s.injectorIndex;
        }
        return rn(o, !0), o;
      }
      function zi(e, n, t, i) {
        if (0 === t) return -1;
        const r = n.length;
        for (let o = 0; o < t; o++) n.push(i), e.blueprint.push(i), e.data.push(null);
        return r;
      }
      function Xr(e, n, t) {
        Yo(n);
        try {
          const i = e.viewQuery;
          null !== i && ru(1, i, t);
          const r = e.template;
          null !== r && kh(e, n, r, 1, t),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && xh(e, n),
            e.staticViewQueries && ru(2, e.viewQuery, t);
          const o = e.components;
          null !== o &&
            (function (e, n) {
              for (let t = 0; t < n.length; t++) ew(e, n[t]);
            })(n, o);
        } catch (i) {
          throw (e.firstCreatePass && ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)), i);
        } finally {
          (n[2] &= -5), Zo();
        }
      }
      function Yi(e, n, t, i) {
        const r = n[2];
        if (256 == (256 & r)) return;
        Yo(n);
        const o = qo();
        try {
          zd(n),
            (function (e) {
              x.lFrame.bindingIndex = e;
            })(e.bindingStartIndex),
            null !== t && kh(e, n, t, 2, i);
          const s = 3 == (3 & r);
          if (!o)
            if (s) {
              const u = e.preOrderCheckHooks;
              null !== u && Xo(n, u, null);
            } else {
              const u = e.preOrderHooks;
              null !== u && es(n, u, 0, null), nl(n, 0);
            }
          if (
            ((function (e) {
              for (let n = Tl(e); null !== n; n = Sl(n)) {
                if (!n[2]) continue;
                const t = n[9];
                for (let i = 0; i < t.length; i++) {
                  const r = t[i],
                    o = r[3];
                  0 == (1024 & r[2]) && Ka(o, 1), (r[2] |= 1024);
                }
              }
            })(n),
            (function (e) {
              for (let n = Tl(e); null !== n; n = Sl(n))
                for (let t = 10; t < n.length; t++) {
                  const i = n[t],
                    r = i[1];
                  Za(i) && Yi(r, i, r.template, i[8]);
                }
            })(n),
            null !== e.contentQueries && xh(e, n),
            !o)
          )
            if (s) {
              const u = e.contentCheckHooks;
              null !== u && Xo(n, u);
            } else {
              const u = e.contentHooks;
              null !== u && es(n, u, 1), nl(n, 1);
            }
          !(function (e, n) {
            const t = e.hostBindingOpCodes;
            if (null !== t)
              try {
                for (let i = 0; i < t.length; i++) {
                  const r = t[i];
                  if (r < 0) Hn(~r);
                  else {
                    const o = r,
                      s = t[++i],
                      a = t[++i];
                    l1(s, o), a(2, n[o]);
                  }
                }
              } finally {
                Hn(-1);
              }
          })(e, n);
          const a = e.components;
          null !== a &&
            (function (e, n) {
              for (let t = 0; t < n.length; t++) XD(e, n[t]);
            })(n, a);
          const l = e.viewQuery;
          if ((null !== l && ru(2, l, i), !o))
            if (s) {
              const u = e.viewCheckHooks;
              null !== u && Xo(n, u);
            } else {
              const u = e.viewHooks;
              null !== u && es(n, u, 2), nl(n, 2);
            }
          !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
            o || (n[2] &= -73),
            1024 & n[2] && ((n[2] &= -1025), Ka(n[3], -1));
        } finally {
          Zo();
        }
      }
      function kD(e, n, t, i) {
        const r = n[10],
          o = !qo(),
          s = qd(n);
        try {
          o && !s && r.begin && r.begin(), s && Xr(e, n, i), Yi(e, n, t, i);
        } finally {
          o && !s && r.end && r.end();
        }
      }
      function kh(e, n, t, i, r) {
        const o = tt(),
          s = 2 & i;
        try {
          Hn(-1), s && n.length > 20 && wh(e, n, 20, qo()), t(i, r);
        } finally {
          Hn(o);
        }
      }
      function Kl(e, n, t) {
        !Yd() ||
          ((function (e, n, t, i) {
            const r = t.directiveStart,
              o = t.directiveEnd;
            e.firstCreatePass || Pr(t, n), ze(i, n);
            const s = t.initialInputs;
            for (let a = r; a < o; a++) {
              const l = e.data[a],
                u = $t(l);
              u && YD(n, t, l);
              const c = Fr(n, e, a, t);
              ze(c, n), null !== s && ZD(0, a - r, c, l, 0, s), u && (vt(t.index, n)[8] = c);
            }
          })(e, n, t, Ot(t, n)),
          128 == (128 & t.flags) &&
            (function (e, n, t) {
              const i = t.directiveStart,
                r = t.directiveEnd,
                s = t.index,
                a = x.lFrame.currentDirectiveIndex;
              try {
                Hn(s);
                for (let l = i; l < r; l++) {
                  const u = e.data[l],
                    c = n[l];
                  Xa(l), (null !== u.hostBindings || 0 !== u.hostVars || null !== u.hostAttrs) && $h(u, c);
                }
              } finally {
                Hn(-1), Xa(a);
              }
            })(e, n, t));
      }
      function Ql(e, n, t = Ot) {
        const i = n.localNames;
        if (null !== i) {
          let r = n.index + 1;
          for (let o = 0; o < i.length; o += 2) {
            const s = i[o + 1],
              a = -1 === s ? t(n, e) : e[s];
            e[r++] = a;
          }
        }
      }
      function Fh(e) {
        const n = e.tView;
        return null === n || n.incompleteFirstPass
          ? (e.tView = ws(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : n;
      }
      function ws(e, n, t, i, r, o, s, a, l, u) {
        const c = 20 + i,
          d = c + r,
          f = (function (e, n) {
            const t = [];
            for (let i = 0; i < n; i++) t.push(i < e ? null : P);
            return t;
          })(c, d),
          h = 'function' == typeof u ? u() : u;
        return (f[1] = {
          type: e,
          blueprint: f,
          template: t,
          queries: null,
          viewQuery: a,
          declTNode: n,
          data: f.slice().fill(null, c),
          bindingStartIndex: c,
          expandoStartIndex: d,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof o ? o() : o,
          pipeRegistry: 'function' == typeof s ? s() : s,
          firstChild: null,
          schemas: l,
          consts: h,
          incompleteFirstPass: !1,
        });
      }
      function Lh(e, n, t, i) {
        const r = Zh(n);
        null === t ? r.push(i) : (r.push(t), e.firstCreatePass && Kh(e).push(i, r.length - 1));
      }
      function Hh(e, n, t) {
        for (let i in e)
          if (e.hasOwnProperty(i)) {
            const r = e[i];
            (t = null === t ? {} : t).hasOwnProperty(i) ? t[i].push(n, r) : (t[i] = [n, r]);
          }
        return t;
      }
      function Jl(e, n, t, i) {
        let r = !1;
        if (Yd()) {
          const o = (function (e, n, t) {
              const i = e.directiveRegistry;
              let r = null;
              if (i)
                for (let o = 0; o < i.length; o++) {
                  const s = i[o];
                  vh(t, s.selectors, !1) &&
                    (r || (r = []), os(Pr(t, n), e, s.type), $t(s) ? (Uh(e, t), r.unshift(s)) : r.push(s));
                }
              return r;
            })(e, n, t),
            s = null === i ? null : { '': -1 };
          if (null !== o) {
            (r = !0), Wh(t, e.data.length, o.length);
            for (let c = 0; c < o.length; c++) {
              const d = o[c];
              d.providersResolver && d.providersResolver(d);
            }
            let a = !1,
              l = !1,
              u = zi(e, n, o.length, null);
            for (let c = 0; c < o.length; c++) {
              const d = o[c];
              (t.mergedAttrs = ns(t.mergedAttrs, d.hostAttrs)),
                qh(e, t, n, u, d),
                zD(u, d, s),
                null !== d.contentQueries && (t.flags |= 8),
                (null !== d.hostBindings || null !== d.hostAttrs || 0 !== d.hostVars) && (t.flags |= 128);
              const f = d.type.prototype;
              !a &&
                (f.ngOnChanges || f.ngOnInit || f.ngDoCheck) &&
                ((e.preOrderHooks || (e.preOrderHooks = [])).push(t.index), (a = !0)),
                !l &&
                  (f.ngOnChanges || f.ngDoCheck) &&
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(t.index), (l = !0)),
                u++;
            }
            !(function (e, n) {
              const i = n.directiveEnd,
                r = e.data,
                o = n.attrs,
                s = [];
              let a = null,
                l = null;
              for (let u = n.directiveStart; u < i; u++) {
                const c = r[u],
                  d = c.inputs,
                  f = null === o || bh(n) ? null : KD(d, o);
                s.push(f), (a = Hh(d, u, a)), (l = Hh(c.outputs, u, l));
              }
              null !== a &&
                (a.hasOwnProperty('class') && (n.flags |= 16), a.hasOwnProperty('style') && (n.flags |= 32)),
                (n.initialInputs = s),
                (n.inputs = a),
                (n.outputs = l);
            })(e, t);
          }
          s &&
            (function (e, n, t) {
              if (n) {
                const i = (e.localNames = []);
                for (let r = 0; r < n.length; r += 2) {
                  const o = t[n[r + 1]];
                  if (null == o) throw new gt('301', `Export of name '${n[r + 1]}' not found!`);
                  i.push(n[r], o);
                }
              }
            })(t, i, s);
        }
        return (t.mergedAttrs = ns(t.mergedAttrs, t.attrs)), r;
      }
      function Gh(e, n, t, i, r, o) {
        const s = o.hostBindings;
        if (s) {
          let a = e.hostBindingOpCodes;
          null === a && (a = e.hostBindingOpCodes = []);
          const l = ~n.index;
          (function (e) {
            let n = e.length;
            for (; n > 0; ) {
              const t = e[--n];
              if ('number' == typeof t && t < 0) return t;
            }
            return 0;
          })(a) != l && a.push(l),
            a.push(i, r, s);
        }
      }
      function $h(e, n) {
        null !== e.hostBindings && e.hostBindings(1, n);
      }
      function Uh(e, n) {
        (n.flags |= 2), (e.components || (e.components = [])).push(n.index);
      }
      function zD(e, n, t) {
        if (t) {
          if (n.exportAs) for (let i = 0; i < n.exportAs.length; i++) t[n.exportAs[i]] = e;
          $t(n) && (t[''] = e);
        }
      }
      function Wh(e, n, t) {
        (e.flags |= 1), (e.directiveStart = n), (e.directiveEnd = n + t), (e.providerIndexes = n);
      }
      function qh(e, n, t, i, r) {
        e.data[i] = r;
        const o = r.factory || (r.factory = si(r.type)),
          s = new xr(o, $t(r), null);
        (e.blueprint[i] = s), (t[i] = s), Gh(e, n, 0, i, zi(e, t, r.hostVars, P), r);
      }
      function YD(e, n, t) {
        const i = Ot(n, e),
          r = Fh(t),
          o = e[10],
          s = Cs(e, Jr(e, r, null, t.onPush ? 64 : 16, i, n, o, o.createRenderer(i, t), null, null));
        e[n.index] = s;
      }
      function ln(e, n, t, i, r, o) {
        const s = Ot(e, n);
        !(function (e, n, t, i, r, o, s) {
          if (null == o) we(e) ? e.removeAttribute(n, r, t) : n.removeAttribute(r);
          else {
            const a = null == s ? k(o) : s(o, i || '', r);
            we(e) ? e.setAttribute(n, r, a, t) : t ? n.setAttributeNS(t, r, a) : n.setAttribute(r, a);
          }
        })(n[L], s, o, e.value, t, i, r);
      }
      function ZD(e, n, t, i, r, o) {
        const s = o[n];
        if (null !== s) {
          const a = i.setInput;
          for (let l = 0; l < s.length; ) {
            const u = s[l++],
              c = s[l++],
              d = s[l++];
            null !== a ? i.setInput(t, d, u, c) : (t[c] = d);
          }
        }
      }
      function KD(e, n) {
        let t = null,
          i = 0;
        for (; i < n.length; ) {
          const r = n[i];
          if (0 !== r)
            if (5 !== r) {
              if ('number' == typeof r) break;
              e.hasOwnProperty(r) && (null === t && (t = []), t.push(r, e[r], n[i + 1])), (i += 2);
            } else i += 2;
          else i += 4;
        }
        return t;
      }
      function zh(e, n, t, i) {
        return new Array(e, !0, !1, n, null, 0, i, t, null, null);
      }
      function XD(e, n) {
        const t = vt(n, e);
        if (Za(t)) {
          const i = t[1];
          80 & t[2] ? Yi(i, t, i.template, t[8]) : t[5] > 0 && eu(t);
        }
      }
      function eu(e) {
        for (let i = Tl(e); null !== i; i = Sl(i))
          for (let r = 10; r < i.length; r++) {
            const o = i[r];
            if (1024 & o[2]) {
              const s = o[1];
              Yi(s, o, s.template, o[8]);
            } else o[5] > 0 && eu(o);
          }
        const t = e[1].components;
        if (null !== t)
          for (let i = 0; i < t.length; i++) {
            const r = vt(t[i], e);
            Za(r) && r[5] > 0 && eu(r);
          }
      }
      function ew(e, n) {
        const t = vt(n, e),
          i = t[1];
        (function (e, n) {
          for (let t = n.length; t < e.blueprint.length; t++) n.push(e.blueprint[t]);
        })(i, t),
          Xr(i, t, t[8]);
      }
      function Cs(e, n) {
        return e[13] ? (e[14][4] = n) : (e[13] = n), (e[14] = n), n;
      }
      function tu(e) {
        for (; e; ) {
          e[2] |= 64;
          const n = Kr(e);
          if (Gb(e) && !n) return e;
          e = n;
        }
        return null;
      }
      function iu(e, n, t) {
        const i = n[10];
        i.begin && i.begin();
        try {
          Yi(e, n, e.template, t);
        } catch (r) {
          throw (Jh(n, r), r);
        } finally {
          i.end && i.end();
        }
      }
      function Yh(e) {
        !(function (e) {
          for (let n = 0; n < e.components.length; n++) {
            const t = e.components[n],
              i = Cl(t),
              r = i[1];
            kD(r, i, r.template, t);
          }
        })(e[8]);
      }
      function ru(e, n, t) {
        tl(0), n(e, t);
      }
      const ow = (() => Promise.resolve(null))();
      function Zh(e) {
        return e[7] || (e[7] = []);
      }
      function Kh(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function Jh(e, n) {
        const t = e[9],
          i = t ? t.get($i, null) : null;
        i && i.handleError(n);
      }
      function Xh(e, n, t, i, r) {
        for (let o = 0; o < t.length; ) {
          const s = t[o++],
            a = t[o++],
            l = n[s],
            u = e.data[s];
          null !== u.setInput ? u.setInput(l, r, i, a) : (l[a] = r);
        }
      }
      function Cn(e, n, t) {
        const i = Wo(n, e);
        !(function (e, n, t) {
          we(e) ? e.setValue(n, t) : (n.textContent = t);
        })(e[L], i, t);
      }
      function Ns(e, n, t) {
        let i = t ? e.styles : null,
          r = t ? e.classes : null,
          o = 0;
        if (null !== n)
          for (let s = 0; s < n.length; s++) {
            const a = n[s];
            'number' == typeof a ? (o = a) : 1 == o ? (r = ka(r, a)) : 2 == o && (i = ka(i, a + ': ' + n[++s] + ';'));
          }
        t ? (e.styles = i) : (e.stylesWithoutHost = i), t ? (e.classes = r) : (e.classesWithoutHost = r);
      }
      const ou = new Y('INJECTOR', -1);
      class ep {
        get(n, t = jr) {
          if (t === jr) {
            const i = new Error(`NullInjectorError: No provider for ${Z(n)}!`);
            throw ((i.name = 'NullInjectorError'), i);
          }
          return t;
        }
      }
      const su = new Y('Set Injector scope.'),
        eo = {},
        lw = {};
      let au;
      function tp() {
        return void 0 === au && (au = new ep()), au;
      }
      function np(e, n = null, t = null, i) {
        const r = ip(e, n, t, i);
        return r._resolveInjectorDefTypes(), r;
      }
      function ip(e, n = null, t = null, i) {
        return new uw(e, t, n || tp(), i);
      }
      class uw {
        constructor(n, t, i, r = null) {
          (this.parent = i),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const o = [];
          t && on(t, (a) => this.processProvider(a, n, t)),
            on([n], (a) => this.processInjectorType(a, [], o)),
            this.records.set(ou, Zi(void 0, this));
          const s = this.records.get(su);
          (this.scope = null != s ? s.value : null), (this.source = r || ('object' == typeof n ? null : Z(n)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((n) => n.ngOnDestroy());
          } finally {
            this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear();
          }
        }
        get(n, t = jr, i = B.Default) {
          this.assertNotDestroyed();
          const r = Ef(this),
            o = Fn(void 0);
          try {
            if (!(i & B.SkipSelf)) {
              let a = this.records.get(n);
              if (void 0 === a) {
                const l =
                  (function (e) {
                    return 'function' == typeof e || ('object' == typeof e && e instanceof Y);
                  })(n) && Fa(n);
                (a = l && this.injectableDefInScope(l) ? Zi(lu(n), eo) : null), this.records.set(n, a);
              }
              if (null != a) return this.hydrate(n, a);
            }
            return (i & B.Self ? tp() : this.parent).get(n, (t = i & B.Optional && t === jr ? null : t));
          } catch (s) {
            if ('NullInjectorError' === s.name) {
              if (((s[us] = s[us] || []).unshift(Z(n)), r)) throw s;
              return (function (e, n, t, i) {
                const r = e[us];
                throw (
                  (n[Nf] && r.unshift(n[Nf]),
                  (e.message = (function (e, n, t, i = null) {
                    e = e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1) ? e.substr(2) : e;
                    let r = Z(n);
                    if (Array.isArray(n)) r = n.map(Z).join(' -> ');
                    else if ('object' == typeof n) {
                      let o = [];
                      for (let s in n)
                        if (n.hasOwnProperty(s)) {
                          let a = n[s];
                          o.push(s + ':' + ('string' == typeof a ? JSON.stringify(a) : Z(a)));
                        }
                      r = `{${o.join(', ')}}`;
                    }
                    return `${t}${i ? '(' + i + ')' : ''}[${r}]: ${e.replace(L1, '\n  ')}`;
                  })('\n' + e.message, r, t, i)),
                  (e.ngTokenPath = r),
                  (e[us] = null),
                  e)
                );
              })(s, n, 'R3InjectorError', this.source);
            }
            throw s;
          } finally {
            Fn(o), Ef(r);
          }
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((n) => this.get(n));
        }
        toString() {
          const n = [];
          return this.records.forEach((i, r) => n.push(Z(r))), `R3Injector[${n.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new Error('Injector has already been destroyed.');
        }
        processInjectorType(n, t, i) {
          if (!(n = V(n))) return !1;
          let r = Od(n);
          const o = (null == r && n.ngModule) || void 0,
            s = void 0 === o ? n : o,
            a = -1 !== i.indexOf(s);
          if ((void 0 !== o && (r = Od(o)), null == r)) return !1;
          if (null != r.imports && !a) {
            let c;
            i.push(s);
            try {
              on(r.imports, (d) => {
                this.processInjectorType(d, t, i) && (void 0 === c && (c = []), c.push(d));
              });
            } finally {
            }
            if (void 0 !== c)
              for (let d = 0; d < c.length; d++) {
                const { ngModule: f, providers: h } = c[d];
                on(h, (m) => this.processProvider(m, f, h || oe));
              }
          }
          this.injectorDefTypes.add(s);
          const l = si(s) || (() => new s());
          this.records.set(s, Zi(l, eo));
          const u = r.providers;
          if (null != u && !a) {
            const c = n;
            on(u, (d) => this.processProvider(d, c, u));
          }
          return void 0 !== o && void 0 !== n.providers;
        }
        processProvider(n, t, i) {
          let r = Ki((n = V(n))) ? n : V(n && n.provide);
          const o = (function (e, n, t) {
            return op(e) ? Zi(void 0, e.useValue) : Zi(rp(e), eo);
          })(n);
          if (Ki(n) || !0 !== n.multi) this.records.get(r);
          else {
            let s = this.records.get(r);
            s || ((s = Zi(void 0, eo, !0)), (s.factory = () => pl(s.multi)), this.records.set(r, s)),
              (r = n),
              s.multi.push(n);
          }
          this.records.set(r, o);
        }
        hydrate(n, t) {
          return (
            t.value === eo && ((t.value = lw), (t.value = t.factory())),
            'object' == typeof t.value &&
              t.value &&
              (function (e) {
                return null !== e && 'object' == typeof e && 'function' == typeof e.ngOnDestroy;
              })(t.value) &&
              this.onDestroy.add(t.value),
            t.value
          );
        }
        injectableDefInScope(n) {
          if (!n.providedIn) return !1;
          const t = V(n.providedIn);
          return 'string' == typeof t ? 'any' === t || t === this.scope : this.injectorDefTypes.has(t);
        }
      }
      function lu(e) {
        const n = Fa(e),
          t = null !== n ? n.factory : si(e);
        if (null !== t) return t;
        if (e instanceof Y) throw new Error(`Token ${Z(e)} is missing a \u0275prov definition.`);
        if (e instanceof Function)
          return (function (e) {
            const n = e.length;
            if (n > 0) {
              const i = Hr(n, '?');
              throw new Error(`Can't resolve all parameters for ${Z(e)}: (${i.join(', ')}).`);
            }
            const t = (function (e) {
              const n = e && (e[Bo] || e[Rd]);
              if (n) {
                const t = (function (e) {
                  if (e.hasOwnProperty('name')) return e.name;
                  const n = ('' + e).match(/^function\s*([^\s(]+)/);
                  return null === n ? '' : n[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${t}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${t}" class.`
                  ),
                  n
                );
              }
              return null;
            })(e);
            return null !== t ? () => t.factory(e) : () => new e();
          })(e);
        throw new Error('unreachable');
      }
      function rp(e, n, t) {
        let i;
        if (Ki(e)) {
          const r = V(e);
          return si(r) || lu(r);
        }
        if (op(e)) i = () => V(e.useValue);
        else if (
          (function (e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          i = () => e.useFactory(...pl(e.deps || []));
        else if (
          (function (e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          i = () => H(V(e.useExisting));
        else {
          const r = V(e && (e.useClass || e.provide));
          if (
            !(function (e) {
              return !!e.deps;
            })(e)
          )
            return si(r) || lu(r);
          i = () => new r(...pl(e.deps));
        }
        return i;
      }
      function Zi(e, n, t = !1) {
        return { factory: e, value: n, multi: t ? [] : void 0 };
      }
      function op(e) {
        return null !== e && 'object' == typeof e && j1 in e;
      }
      function Ki(e) {
        return 'function' == typeof e;
      }
      let Ye = (() => {
        class e {
          static create(t, i) {
            var r;
            if (Array.isArray(t)) return np({ name: '' }, i, t, '');
            {
              const o = null !== (r = t.name) && void 0 !== r ? r : '';
              return np({ name: o }, t.parent, t.providers, o);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = jr),
          (e.NULL = new ep()),
          (e.ɵprov = X({ token: e, providedIn: 'any', factory: () => H(ou) })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function Ew(e, n) {
        Jo(Cl(e)[1], Pe());
      }
      function ae(e) {
        let n = (function (e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          t = !0;
        const i = [e];
        for (; n; ) {
          let r;
          if ($t(e)) r = n.ɵcmp || n.ɵdir;
          else {
            if (n.ɵcmp) throw new Error('Directives cannot inherit Components');
            r = n.ɵdir;
          }
          if (r) {
            if (t) {
              i.push(r);
              const s = e;
              (s.inputs = du(e.inputs)), (s.declaredInputs = du(e.declaredInputs)), (s.outputs = du(e.outputs));
              const a = r.hostBindings;
              a && Sw(e, a);
              const l = r.viewQuery,
                u = r.contentQueries;
              if (
                (l && Iw(e, l),
                u && Tw(e, u),
                xa(e.inputs, r.inputs),
                xa(e.declaredInputs, r.declaredInputs),
                xa(e.outputs, r.outputs),
                $t(r) && r.data.animation)
              ) {
                const c = e.data;
                c.animation = (c.animation || []).concat(r.data.animation);
              }
            }
            const o = r.features;
            if (o)
              for (let s = 0; s < o.length; s++) {
                const a = o[s];
                a && a.ngInherit && a(e), a === ae && (t = !1);
              }
          }
          n = Object.getPrototypeOf(n);
        }
        !(function (e) {
          let n = 0,
            t = null;
          for (let i = e.length - 1; i >= 0; i--) {
            const r = e[i];
            (r.hostVars = n += r.hostVars), (r.hostAttrs = ns(r.hostAttrs, (t = ns(t, r.hostAttrs))));
          }
        })(i);
      }
      function du(e) {
        return e === Ei ? {} : e === oe ? [] : e;
      }
      function Iw(e, n) {
        const t = e.viewQuery;
        e.viewQuery = t
          ? (i, r) => {
              n(i, r), t(i, r);
            }
          : n;
      }
      function Tw(e, n) {
        const t = e.contentQueries;
        e.contentQueries = t
          ? (i, r, o) => {
              n(i, r, o), t(i, r, o);
            }
          : n;
      }
      function Sw(e, n) {
        const t = e.hostBindings;
        e.hostBindings = t
          ? (i, r) => {
              n(i, r), t(i, r);
            }
          : n;
      }
      let Es = null;
      function Qi() {
        if (!Es) {
          const e = ie.Symbol;
          if (e && e.iterator) Es = e.iterator;
          else {
            const n = Object.getOwnPropertyNames(Map.prototype);
            for (let t = 0; t < n.length; ++t) {
              const i = n[t];
              'entries' !== i && 'size' !== i && Map.prototype[i] === Map.prototype.entries && (Es = i);
            }
          }
        }
        return Es;
      }
      function to(e) {
        return !!fu(e) && (Array.isArray(e) || (!(e instanceof Map) && Qi() in e));
      }
      function fu(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function Ze(e, n, t) {
        return !Object.is(e[n], t) && ((e[n] = t), !0);
      }
      function le(e, n, t, i) {
        const r = D();
        return Ze(r, Oi(), n) && (K(), ln(Ce(), r, e, n, t, i)), le;
      }
      function S(e, n, t, i, r, o, s, a) {
        const l = D(),
          u = K(),
          c = e + 20,
          d = u.firstCreatePass
            ? (function (e, n, t, i, r, o, s, a, l) {
                const u = n.consts,
                  c = qi(n, e, 4, s || null, Ln(u, a));
                Jl(n, t, c, Ln(u, l)), Jo(n, c);
                const d = (c.tViews = ws(2, c, i, r, o, n.directiveRegistry, n.pipeRegistry, null, n.schemas, u));
                return null !== n.queries && (n.queries.template(n, c), (d.queries = n.queries.embeddedTView(c))), c;
              })(c, u, l, n, t, i, r, o, s)
            : u.data[c];
        rn(d, !1);
        const f = l[L].createComment('');
        _s(u, l, f, d), ze(f, l), Cs(l, (l[c] = zh(f, l, f, d))), Uo(d) && Kl(u, l, d), null != s && Ql(l, d, a);
      }
      function _(e, n = B.Default) {
        const t = D();
        return null === t ? H(e, n) : pf(Pe(), t, V(e), n);
      }
      function O(e, n, t) {
        const i = D();
        return (
          Ze(i, Oi(), n) &&
            (function (e, n, t, i, r, o, s, a) {
              const l = Ot(n, t);
              let c,
                u = n.inputs;
              !a && null != u && (c = u[i])
                ? (Xh(e, t, c, i, r),
                  $o(n) &&
                    (function (e, n) {
                      const t = vt(n, e);
                      16 & t[2] || (t[2] |= 64);
                    })(t, n.index))
                : 3 & n.type &&
                  ((i = (function (e) {
                    return 'class' === e
                      ? 'className'
                      : 'for' === e
                      ? 'htmlFor'
                      : 'formaction' === e
                      ? 'formAction'
                      : 'innerHtml' === e
                      ? 'innerHTML'
                      : 'readonly' === e
                      ? 'readOnly'
                      : 'tabindex' === e
                      ? 'tabIndex'
                      : e;
                  })(i)),
                  (r = null != s ? s(r, n.value || '', i) : r),
                  we(o) ? o.setProperty(l, i, r) : rl(i) || (l.setProperty ? l.setProperty(i, r) : (l[i] = r)));
            })(K(), Ce(), i, e, n, i[L], t, !1),
          O
        );
      }
      function _u(e, n, t, i, r) {
        const s = r ? 'class' : 'style';
        Xh(e, t, n.inputs[s], s, i);
      }
      function p(e, n, t, i) {
        const r = D(),
          o = K(),
          s = 20 + e,
          a = r[L],
          l = (r[s] = Ol(a, n, x.lFrame.currentNamespace)),
          u = o.firstCreatePass
            ? (function (e, n, t, i, r, o, s) {
                const a = n.consts,
                  u = qi(n, e, 2, r, Ln(a, o));
                return (
                  Jl(n, t, u, Ln(a, s)),
                  null !== u.attrs && Ns(u, u.attrs, !1),
                  null !== u.mergedAttrs && Ns(u, u.mergedAttrs, !0),
                  null !== n.queries && n.queries.elementStart(n, u),
                  u
                );
              })(s, o, r, 0, n, t, i)
            : o.data[s];
        rn(u, !0);
        const c = u.mergedAttrs;
        null !== c && ts(a, l, c);
        const d = u.classes;
        null !== d && Vl(a, l, d);
        const f = u.styles;
        null !== f && mh(a, l, f),
          64 != (64 & u.flags) && _s(o, r, l, u),
          0 === x.lFrame.elementDepthCount && ze(l, r),
          x.lFrame.elementDepthCount++,
          Uo(u) &&
            (Kl(o, r, u),
            (function (e, n, t) {
              if ($a(n)) {
                const r = n.directiveEnd;
                for (let o = n.directiveStart; o < r; o++) {
                  const s = e.data[o];
                  s.contentQueries && s.contentQueries(1, t[o], o);
                }
              }
            })(o, u, r)),
          null !== i && Ql(r, u);
      }
      function g() {
        let e = Pe();
        Qa() ? Ja() : ((e = e.parent), rn(e, !1));
        const n = e;
        x.lFrame.elementDepthCount--;
        const t = K();
        t.firstCreatePass && (Jo(t, e), $a(e) && t.queries.elementEnd(e)),
          null != n.classesWithoutHost &&
            (function (e) {
              return 0 != (16 & e.flags);
            })(n) &&
            _u(t, n, D(), n.classesWithoutHost, !0),
          null != n.stylesWithoutHost &&
            (function (e) {
              return 0 != (32 & e.flags);
            })(n) &&
            _u(t, n, D(), n.stylesWithoutHost, !1);
      }
      function G(e, n, t, i) {
        p(e, n, t, i), g();
      }
      function Ts(e) {
        return !!e && 'function' == typeof e.then;
      }
      const Hp = function (e) {
        return !!e && 'function' == typeof e.subscribe;
      };
      function ee(e, n, t, i) {
        const r = D(),
          o = K(),
          s = Pe();
        return (
          (function (e, n, t, i, r, o, s, a) {
            const l = Uo(i),
              c = e.firstCreatePass && Kh(e),
              d = n[8],
              f = Zh(n);
            let h = !0;
            if (3 & i.type || a) {
              const v = Ot(i, n),
                w = a ? a(v) : v,
                y = f.length,
                I = a ? (F) => a(Oe(F[i.index])) : i.index;
              if (we(t)) {
                let F = null;
                if (
                  (!a &&
                    l &&
                    (F = (function (e, n, t, i) {
                      const r = e.cleanup;
                      if (null != r)
                        for (let o = 0; o < r.length - 1; o += 2) {
                          const s = r[o];
                          if (s === t && r[o + 1] === i) {
                            const a = n[7],
                              l = r[o + 2];
                            return a.length > l ? a[l] : null;
                          }
                          'string' == typeof s && (o += 2);
                        }
                      return null;
                    })(e, n, r, i.index)),
                  null !== F)
                )
                  ((F.__ngLastListenerFn__ || F).__ngNextListenerFn__ = o), (F.__ngLastListenerFn__ = o), (h = !1);
                else {
                  o = yu(i, n, d, o, !1);
                  const q = t.listen(w, r, o);
                  f.push(o, q), c && c.push(r, I, y, y + 1);
                }
              } else (o = yu(i, n, d, o, !0)), w.addEventListener(r, o, s), f.push(o), c && c.push(r, I, y, s);
            } else o = yu(i, n, d, o, !1);
            const m = i.outputs;
            let b;
            if (h && null !== m && (b = m[r])) {
              const v = b.length;
              if (v)
                for (let w = 0; w < v; w += 2) {
                  const Qe = n[b[w]][b[w + 1]].subscribe(o),
                    gn = f.length;
                  f.push(o, Qe), c && c.push(r, i.index, gn, -(gn + 1));
                }
            }
          })(o, r, r[L], s, e, n, !!t, i),
          ee
        );
      }
      function $p(e, n, t, i) {
        try {
          return !1 !== t(i);
        } catch (r) {
          return Jh(e, r), !1;
        }
      }
      function yu(e, n, t, i, r) {
        return function o(s) {
          if (s === Function) return i;
          const a = 2 & e.flags ? vt(e.index, n) : n;
          0 == (32 & n[2]) && tu(a);
          let l = $p(n, 0, i, s),
            u = o.__ngNextListenerFn__;
          for (; u; ) (l = $p(n, 0, u, s) && l), (u = u.__ngNextListenerFn__);
          return r && !1 === l && (s.preventDefault(), (s.returnValue = !1)), l;
        };
      }
      function lC(e, n) {
        let t = null;
        const i = (function (e) {
          const n = e.attrs;
          if (null != n) {
            const t = n.indexOf(5);
            if (0 == (1 & t)) return n[t + 1];
          }
          return null;
        })(e);
        for (let r = 0; r < n.length; r++) {
          const o = n[r];
          if ('*' !== o) {
            if (null === i ? vh(e, o, !0) : _D(i, o)) return r;
          } else t = r;
        }
        return t;
      }
      function eg(e, n, t, i, r) {
        const o = e[t + 1],
          s = null === n;
        let a = i ? Wt(o) : wn(o),
          l = !1;
        for (; 0 !== a && (!1 === l || s); ) {
          const c = e[a + 1];
          dC(e[a], n) && ((l = !0), (e[a + 1] = i ? Hl(c) : Bl(c))), (a = i ? Wt(c) : wn(c));
        }
        l && (e[t + 1] = i ? Bl(o) : Hl(o));
      }
      function dC(e, n) {
        return (
          null === e ||
          null == n ||
          (Array.isArray(e) ? e[1] : e) === n ||
          (!(!Array.isArray(e) || 'string' != typeof n) && Li(e, n) >= 0)
        );
      }
      const Ve = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function tg(e) {
        return e.substring(Ve.key, Ve.keyEnd);
      }
      function ng(e, n) {
        const t = Ve.textEnd;
        return t === n
          ? -1
          : ((n = Ve.keyEnd = (function (e, n, t) {
              for (; n < t && e.charCodeAt(n) > 32; ) n++;
              return n;
            })(e, (Ve.key = n), t)),
            lr(e, n, t));
      }
      function lr(e, n, t) {
        for (; n < t && e.charCodeAt(n) <= 32; ) n++;
        return n;
      }
      function W(e, n) {
        return (
          (function (e, n, t, i) {
            const r = D(),
              o = K(),
              s = Dn(2);
            o.firstUpdatePass && lg(o, e, s, i),
              n !== P &&
                Ze(r, s, n) &&
                cg(
                  o,
                  o.data[tt()],
                  r,
                  r[L],
                  e,
                  (r[s + 1] = (function (e, n) {
                    return null == e || ('string' == typeof n ? (e += n) : 'object' == typeof e && (e = Z(Gn(e)))), e;
                  })(n, t)),
                  i,
                  s
                );
          })(e, n, null, !0),
          W
        );
      }
      function ui(e) {
        !(function (e, n, t, i) {
          const r = K(),
            o = Dn(2);
          r.firstUpdatePass && lg(r, null, o, i);
          const s = D();
          if (t !== P && Ze(s, o, t)) {
            const a = r.data[tt()];
            if (fg(a, i) && !ag(r, o)) {
              let l = i ? a.classesWithoutHost : a.stylesWithoutHost;
              null !== l && (t = ka(l, t || '')), _u(r, a, s, t, i);
            } else
              !(function (e, n, t, i, r, o, s, a) {
                r === P && (r = oe);
                let l = 0,
                  u = 0,
                  c = 0 < r.length ? r[0] : null,
                  d = 0 < o.length ? o[0] : null;
                for (; null !== c || null !== d; ) {
                  const f = l < r.length ? r[l + 1] : void 0,
                    h = u < o.length ? o[u + 1] : void 0;
                  let b,
                    m = null;
                  c === d
                    ? ((l += 2), (u += 2), f !== h && ((m = d), (b = h)))
                    : null === d || (null !== c && c < d)
                    ? ((l += 2), (m = c))
                    : ((u += 2), (m = d), (b = h)),
                    null !== m && cg(e, n, t, i, m, b, s, a),
                    (c = l < r.length ? r[l] : null),
                    (d = u < o.length ? o[u] : null);
                }
              })(
                r,
                a,
                s,
                s[L],
                s[o + 1],
                (s[o + 1] = (function (e, n, t) {
                  if (null == t || '' === t) return oe;
                  const i = [],
                    r = Gn(t);
                  if (Array.isArray(r)) for (let o = 0; o < r.length; o++) e(i, r[o], !0);
                  else if ('object' == typeof r) for (const o in r) r.hasOwnProperty(o) && e(i, o, r[o]);
                  else 'string' == typeof r && n(i, r);
                  return i;
                })(e, n, t)),
                i,
                o
              );
          }
        })(wt, dn, e, !0);
      }
      function dn(e, n) {
        for (
          let t = (function (e) {
            return (
              (function (e) {
                (Ve.key = 0), (Ve.keyEnd = 0), (Ve.value = 0), (Ve.valueEnd = 0), (Ve.textEnd = e.length);
              })(e),
              ng(e, lr(e, 0, Ve.textEnd))
            );
          })(n);
          t >= 0;
          t = ng(n, t)
        )
          wt(e, tg(n), !0);
      }
      function ag(e, n) {
        return n >= e.expandoStartIndex;
      }
      function lg(e, n, t, i) {
        const r = e.data;
        if (null === r[t + 1]) {
          const o = r[tt()],
            s = ag(e, t);
          fg(o, i) && null === n && !s && (n = !1),
            (n = (function (e, n, t, i) {
              const r = (function (e) {
                const n = x.lFrame.currentDirectiveIndex;
                return -1 === n ? null : e[n];
              })(e);
              let o = i ? n.residualClasses : n.residualStyles;
              if (null === r)
                0 === (i ? n.classBindings : n.styleBindings) &&
                  ((t = io((t = Du(null, e, n, t, i)), n.attrs, i)), (o = null));
              else {
                const s = n.directiveStylingLast;
                if (-1 === s || e[s] !== r)
                  if (((t = Du(r, e, n, t, i)), null === o)) {
                    let l = (function (e, n, t) {
                      const i = t ? n.classBindings : n.styleBindings;
                      if (0 !== wn(i)) return e[Wt(i)];
                    })(e, n, i);
                    void 0 !== l &&
                      Array.isArray(l) &&
                      ((l = Du(null, e, n, l[1], i)),
                      (l = io(l, n.attrs, i)),
                      (function (e, n, t, i) {
                        e[Wt(t ? n.classBindings : n.styleBindings)] = i;
                      })(e, n, i, l));
                  } else
                    o = (function (e, n, t) {
                      let i;
                      const r = n.directiveEnd;
                      for (let o = 1 + n.directiveStylingLast; o < r; o++) i = io(i, e[o].hostAttrs, t);
                      return io(i, n.attrs, t);
                    })(e, n, i);
              }
              return void 0 !== o && (i ? (n.residualClasses = o) : (n.residualStyles = o)), t;
            })(r, o, n, i)),
            (function (e, n, t, i, r, o) {
              let s = o ? n.classBindings : n.styleBindings,
                a = Wt(s),
                l = wn(s);
              e[i] = t;
              let c,
                u = !1;
              if (Array.isArray(t)) {
                const d = t;
                (c = d[1]), (null === c || Li(d, c) > 0) && (u = !0);
              } else c = t;
              if (r)
                if (0 !== l) {
                  const f = Wt(e[a + 1]);
                  (e[i + 1] = bs(f, a)),
                    0 !== f && (e[f + 1] = Ll(e[f + 1], i)),
                    (e[a + 1] = (function (e, n) {
                      return (131071 & e) | (n << 17);
                    })(e[a + 1], i));
                } else (e[i + 1] = bs(a, 0)), 0 !== a && (e[a + 1] = Ll(e[a + 1], i)), (a = i);
              else (e[i + 1] = bs(l, 0)), 0 === a ? (a = i) : (e[l + 1] = Ll(e[l + 1], i)), (l = i);
              u && (e[i + 1] = Bl(e[i + 1])),
                eg(e, c, i, !0),
                eg(e, c, i, !1),
                (function (e, n, t, i, r) {
                  const o = r ? e.residualClasses : e.residualStyles;
                  null != o && 'string' == typeof n && Li(o, n) >= 0 && (t[i + 1] = Hl(t[i + 1]));
                })(n, c, e, i, o),
                (s = bs(a, l)),
                o ? (n.classBindings = s) : (n.styleBindings = s);
            })(r, o, n, t, s, i);
        }
      }
      function Du(e, n, t, i, r) {
        let o = null;
        const s = t.directiveEnd;
        let a = t.directiveStylingLast;
        for (-1 === a ? (a = t.directiveStart) : a++; a < s && ((o = n[a]), (i = io(i, o.hostAttrs, r)), o !== e); )
          a++;
        return null !== e && (t.directiveStylingLast = a), i;
      }
      function io(e, n, t) {
        const i = t ? 1 : 2;
        let r = -1;
        if (null !== n)
          for (let o = 0; o < n.length; o++) {
            const s = n[o];
            'number' == typeof s
              ? (r = s)
              : r === i && (Array.isArray(e) || (e = void 0 === e ? [] : ['', e]), wt(e, s, !!t || n[++o]));
          }
        return void 0 === e ? null : e;
      }
      function cg(e, n, t, i, r, o, s, a) {
        if (!(3 & n.type)) return;
        const l = e.data,
          u = l[a + 1];
        As(
          (function (e) {
            return 1 == (1 & e);
          })(u)
            ? dg(l, n, t, r, wn(u), s)
            : void 0
        ) ||
          (As(o) ||
            ((function (e) {
              return 2 == (2 & e);
            })(u) &&
              (o = dg(l, null, t, r, a, s))),
          (function (e, n, t, i, r) {
            const o = we(e);
            if (n) r ? (o ? e.addClass(t, i) : t.classList.add(i)) : o ? e.removeClass(t, i) : t.classList.remove(i);
            else {
              let s = -1 === i.indexOf('-') ? void 0 : Ct.DashCase;
              if (null == r) o ? e.removeStyle(t, i, s) : t.style.removeProperty(i);
              else {
                const a = 'string' == typeof r && r.endsWith('!important');
                a && ((r = r.slice(0, -10)), (s |= Ct.Important)),
                  o ? e.setStyle(t, i, r, s) : t.style.setProperty(i, r, a ? 'important' : '');
              }
            }
          })(i, s, Wo(tt(), t), r, o));
      }
      function dg(e, n, t, i, r, o) {
        const s = null === n;
        let a;
        for (; r > 0; ) {
          const l = e[r],
            u = Array.isArray(l),
            c = u ? l[1] : l,
            d = null === c;
          let f = t[r + 1];
          f === P && (f = d ? oe : void 0);
          let h = d ? dl(f, i) : c === i ? f : void 0;
          if ((u && !As(h) && (h = dl(l, i)), As(h) && ((a = h), s))) return a;
          const m = e[r + 1];
          r = s ? Wt(m) : wn(m);
        }
        if (null !== n) {
          let l = o ? n.residualClasses : n.residualStyles;
          null != l && (a = dl(l, i));
        }
        return a;
      }
      function As(e) {
        return void 0 !== e;
      }
      function fg(e, n) {
        return 0 != (e.flags & (n ? 16 : 32));
      }
      function R(e, n = '') {
        const t = D(),
          i = K(),
          r = e + 20,
          o = i.firstCreatePass ? qi(i, r, 1, n, null) : i.data[r],
          s = (t[r] = (function (e, n) {
            return we(e) ? e.createText(n) : e.createTextNode(n);
          })(t[L], n));
        _s(i, t, s, o), rn(o, !1);
      }
      function Os(e) {
        return Wn('', e, ''), Os;
      }
      function Wn(e, n, t) {
        const i = D(),
          r = (function (e, n, t, i) {
            return Ze(e, Oi(), t) ? n + k(t) + i : P;
          })(i, e, n, t);
        return r !== P && Cn(i, tt(), r), Wn;
      }
      const di = void 0;
      var WC = [
        'en',
        [['a', 'p'], ['AM', 'PM'], di],
        [['AM', 'PM'], di, di],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        ],
        di,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        ],
        di,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini'],
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', di, "{1} 'at' {0}", di],
        ['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        'ltr',
        function (e) {
          const t = Math.floor(Math.abs(e)),
            i = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === t && 0 === i ? 1 : 5;
        },
      ];
      let ur = {};
      function Rg(e) {
        return e in ur || (ur[e] = ie.ng && ie.ng.common && ie.ng.common.locales && ie.ng.common.locales[e]), ur[e];
      }
      var E = (() => (
        ((E = E || {})[(E.LocaleId = 0)] = 'LocaleId'),
        (E[(E.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
        (E[(E.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
        (E[(E.DaysFormat = 3)] = 'DaysFormat'),
        (E[(E.DaysStandalone = 4)] = 'DaysStandalone'),
        (E[(E.MonthsFormat = 5)] = 'MonthsFormat'),
        (E[(E.MonthsStandalone = 6)] = 'MonthsStandalone'),
        (E[(E.Eras = 7)] = 'Eras'),
        (E[(E.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
        (E[(E.WeekendRange = 9)] = 'WeekendRange'),
        (E[(E.DateFormat = 10)] = 'DateFormat'),
        (E[(E.TimeFormat = 11)] = 'TimeFormat'),
        (E[(E.DateTimeFormat = 12)] = 'DateTimeFormat'),
        (E[(E.NumberSymbols = 13)] = 'NumberSymbols'),
        (E[(E.NumberFormats = 14)] = 'NumberFormats'),
        (E[(E.CurrencyCode = 15)] = 'CurrencyCode'),
        (E[(E.CurrencySymbol = 16)] = 'CurrencySymbol'),
        (E[(E.CurrencyName = 17)] = 'CurrencyName'),
        (E[(E.Currencies = 18)] = 'Currencies'),
        (E[(E.Directionality = 19)] = 'Directionality'),
        (E[(E.PluralCase = 20)] = 'PluralCase'),
        (E[(E.ExtraData = 21)] = 'ExtraData'),
        E
      ))();
      const Rs = 'en-US';
      let xg = Rs;
      function Eu(e, n, t, i, r) {
        if (((e = V(e)), Array.isArray(e))) for (let o = 0; o < e.length; o++) Eu(e[o], n, t, i, r);
        else {
          const o = K(),
            s = D();
          let a = Ki(e) ? e : V(e.provide),
            l = rp(e);
          const u = Pe(),
            c = 1048575 & u.providerIndexes,
            d = u.directiveStart,
            f = u.providerIndexes >> 20;
          if (Ki(e) || !e.multi) {
            const h = new xr(l, r, _),
              m = Iu(a, n, r ? c : c + f, d);
            -1 === m
              ? (os(Pr(u, s), o, a),
                Mu(o, e, n.length),
                n.push(a),
                u.directiveStart++,
                u.directiveEnd++,
                r && (u.providerIndexes += 1048576),
                t.push(h),
                s.push(h))
              : ((t[m] = h), (s[m] = h));
          } else {
            const h = Iu(a, n, c + f, d),
              m = Iu(a, n, c, c + f),
              b = h >= 0 && t[h],
              v = m >= 0 && t[m];
            if ((r && !v) || (!r && !b)) {
              os(Pr(u, s), o, a);
              const w = (function (e, n, t, i, r) {
                const o = new xr(e, t, _);
                return (o.multi = []), (o.index = n), (o.componentProviders = 0), im(o, r, i && !t), o;
              })(r ? jN : HN, t.length, r, i, l);
              !r && v && (t[m].providerFactory = w),
                Mu(o, e, n.length, 0),
                n.push(a),
                u.directiveStart++,
                u.directiveEnd++,
                r && (u.providerIndexes += 1048576),
                t.push(w),
                s.push(w);
            } else Mu(o, e, h > -1 ? h : m, im(t[r ? m : h], l, !r && i));
            !r && i && v && t[m].componentProviders++;
          }
        }
      }
      function Mu(e, n, t, i) {
        const r = Ki(n),
          o = (function (e) {
            return !!e.useClass;
          })(n);
        if (r || o) {
          const l = (o ? V(n.useClass) : n).prototype.ngOnDestroy;
          if (l) {
            const u = e.destroyHooks || (e.destroyHooks = []);
            if (!r && n.multi) {
              const c = u.indexOf(t);
              -1 === c ? u.push(t, [i, l]) : u[c + 1].push(i, l);
            } else u.push(t, l);
          }
        }
      }
      function im(e, n, t) {
        return t && e.componentProviders++, e.multi.push(n) - 1;
      }
      function Iu(e, n, t, i) {
        for (let r = t; r < i; r++) if (n[r] === e) return r;
        return -1;
      }
      function HN(e, n, t, i) {
        return Tu(this.multi, []);
      }
      function jN(e, n, t, i) {
        const r = this.multi;
        let o;
        if (this.providerFactory) {
          const s = this.providerFactory.componentProviders,
            a = Fr(t, t[1], this.providerFactory.index, i);
          (o = a.slice(0, s)), Tu(r, o);
          for (let l = s; l < a.length; l++) o.push(a[l]);
        } else (o = []), Tu(r, o);
        return o;
      }
      function Tu(e, n) {
        for (let t = 0; t < e.length; t++) n.push((0, e[t])());
        return n;
      }
      function ce(e, n = []) {
        return (t) => {
          t.providersResolver = (i, r) =>
            (function (e, n, t) {
              const i = K();
              if (i.firstCreatePass) {
                const r = $t(e);
                Eu(t, i.data, i.blueprint, r, !0), Eu(n, i.data, i.blueprint, r, !1);
              }
            })(i, r ? r(e) : e, n);
        };
      }
      class rm {}
      class WN {
        resolveComponentFactory(n) {
          throw (function (e) {
            const n = Error(`No component factory found for ${Z(e)}. Did you add it to @NgModule.entryComponents?`);
            return (n.ngComponent = e), n;
          })(n);
        }
      }
      let dr = (() => {
        class e {}
        return (e.NULL = new WN()), e;
      })();
      function qN() {
        return fr(Pe(), D());
      }
      function fr(e, n) {
        return new _e(Ot(e, n));
      }
      let _e = (() => {
        class e {
          constructor(t) {
            this.nativeElement = t;
          }
        }
        return (e.__NG_ELEMENT_ID__ = qN), e;
      })();
      function zN(e) {
        return e instanceof _e ? e.nativeElement : e;
      }
      class Su {}
      let Mn = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function () {
                const e = D(),
                  t = vt(Pe().index, e);
                return (function (e) {
                  return e[L];
                })(nn(t) ? t : e);
              })()),
            e
          );
        })(),
        KN = (() => {
          class e {}
          return (e.ɵprov = X({ token: e, providedIn: 'root', factory: () => null })), e;
        })();
      class Vs {
        constructor(n) {
          (this.full = n),
            (this.major = n.split('.')[0]),
            (this.minor = n.split('.')[1]),
            (this.patch = n.split('.').slice(2).join('.'));
        }
      }
      const QN = new Vs('13.1.1'),
        Au = {};
      function Bs(e, n, t, i, r = !1) {
        for (; null !== t; ) {
          const o = n[t.index];
          if ((null !== o && i.push(Oe(o)), Gt(o)))
            for (let a = 10; a < o.length; a++) {
              const l = o[a],
                u = l[1].firstChild;
              null !== u && Bs(l[1], l, u, i);
            }
          const s = t.type;
          if (8 & s) Bs(e, n, t.child, i);
          else if (32 & s) {
            const a = Il(t, n);
            let l;
            for (; (l = a()); ) i.push(l);
          } else if (16 & s) {
            const a = hh(n, t);
            if (Array.isArray(a)) i.push(...a);
            else {
              const l = Kr(n[16]);
              Bs(l[1], l, a, i, !0);
            }
          }
          t = r ? t.projectionNext : t.next;
        }
        return i;
      }
      class lo {
        constructor(n, t) {
          (this._lView = n),
            (this._cdRefInjectingView = t),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const n = this._lView,
            t = n[1];
          return Bs(t, n, t.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        set context(n) {
          this._lView[8] = n;
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const n = this._lView[3];
            if (Gt(n)) {
              const t = n[8],
                i = t ? t.indexOf(this) : -1;
              i > -1 && (Rl(n, i), as(t, i));
            }
            this._attachedToViewContainer = !1;
          }
          rh(this._lView[1], this._lView);
        }
        onDestroy(n) {
          Lh(this._lView[1], this._lView, null, n);
        }
        markForCheck() {
          tu(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          iu(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (e, n, t) {
            zo(!0);
            try {
              iu(e, n, t);
            } finally {
              zo(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef() {
          if (this._appRef) throw new Error('This view is already attached directly to the ApplicationRef!');
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function (e, n) {
              Qr(e, n, n[L], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(n) {
          if (this._attachedToViewContainer) throw new Error('This view is already attached to a ViewContainer!');
          this._appRef = n;
        }
      }
      class JN extends lo {
        constructor(n) {
          super(n), (this._view = n);
        }
        detectChanges() {
          Yh(this._view);
        }
        checkNoChanges() {
          !(function (e) {
            zo(!0);
            try {
              Yh(e);
            } finally {
              zo(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      class sm extends dr {
        constructor(n) {
          super(), (this.ngModule = n);
        }
        resolveComponentFactory(n) {
          const t = We(n);
          return new Ou(t, this.ngModule);
        }
      }
      function am(e) {
        const n = [];
        for (let t in e) e.hasOwnProperty(t) && n.push({ propName: e[t], templateName: t });
        return n;
      }
      const eE = new Y('SCHEDULER_TOKEN', { providedIn: 'root', factory: () => Kf });
      class Ou extends rm {
        constructor(n, t) {
          super(),
            (this.componentDef = n),
            (this.ngModule = t),
            (this.componentType = n.type),
            (this.selector = (function (e) {
              return e.map(yD).join(',');
            })(n.selectors)),
            (this.ngContentSelectors = n.ngContentSelectors ? n.ngContentSelectors : []),
            (this.isBoundToModule = !!t);
        }
        get inputs() {
          return am(this.componentDef.inputs);
        }
        get outputs() {
          return am(this.componentDef.outputs);
        }
        create(n, t, i, r) {
          const o = (r = r || this.ngModule)
              ? (function (e, n) {
                  return {
                    get: (t, i, r) => {
                      const o = e.get(t, Au, r);
                      return o !== Au || i === Au ? o : n.get(t, i, r);
                    },
                  };
                })(n, r.injector)
              : n,
            s = o.get(Su, Wd),
            a = o.get(KN, null),
            l = s.createRenderer(null, this.componentDef),
            u = this.componentDef.selectors[0][0] || 'div',
            c = i
              ? (function (e, n, t) {
                  if (we(e)) return e.selectRootElement(n, t === tn.ShadowDom);
                  let i = 'string' == typeof n ? e.querySelector(n) : n;
                  return (i.textContent = ''), i;
                })(l, i, this.componentDef.encapsulation)
              : Ol(
                  s.createRenderer(null, this.componentDef),
                  u,
                  (function (e) {
                    const n = e.toLowerCase();
                    return 'svg' === n ? $d : 'math' === n ? 'http://www.w3.org/1998/MathML/' : null;
                  })(u)
                ),
            d = this.componentDef.onPush ? 576 : 528,
            f = (function (e, n) {
              return { components: [], scheduler: e || Kf, clean: ow, playerHandler: n || null, flags: 0 };
            })(),
            h = ws(0, null, null, 1, 0, null, null, null, null, null),
            m = Jr(null, h, f, d, null, null, s, l, a, o);
          let b, v;
          Yo(m);
          try {
            const w = (function (e, n, t, i, r, o) {
              const s = t[1];
              t[20] = e;
              const l = qi(s, 20, 2, '#host', null),
                u = (l.mergedAttrs = n.hostAttrs);
              null !== u &&
                (Ns(l, u, !0),
                null !== e &&
                  (ts(r, e, u), null !== l.classes && Vl(r, e, l.classes), null !== l.styles && mh(r, e, l.styles)));
              const c = i.createRenderer(e, n),
                d = Jr(t, Fh(n), null, n.onPush ? 64 : 16, t[20], l, i, c, o || null, null);
              return (
                s.firstCreatePass && (os(Pr(l, t), s, n.type), Uh(s, l), Wh(l, t.length, 1)), Cs(t, d), (t[20] = d)
              );
            })(c, this.componentDef, m, s, l);
            if (c)
              if (i) ts(l, c, ['ng-version', QN.full]);
              else {
                const { attrs: y, classes: I } = (function (e) {
                  const n = [],
                    t = [];
                  let i = 1,
                    r = 2;
                  for (; i < e.length; ) {
                    let o = e[i];
                    if ('string' == typeof o) 2 === r ? '' !== o && n.push(o, e[++i]) : 8 === r && t.push(o);
                    else {
                      if (!Ut(r)) break;
                      r = o;
                    }
                    i++;
                  }
                  return { attrs: n, classes: t };
                })(this.componentDef.selectors[0]);
                y && ts(l, c, y), I && I.length > 0 && Vl(l, c, I.join(' '));
              }
            if (((v = Ya(h, 20)), void 0 !== t)) {
              const y = (v.projection = []);
              for (let I = 0; I < this.ngContentSelectors.length; I++) {
                const F = t[I];
                y.push(null != F ? Array.from(F) : null);
              }
            }
            (b = (function (e, n, t, i, r) {
              const o = t[1],
                s = (function (e, n, t) {
                  const i = Pe();
                  e.firstCreatePass &&
                    (t.providersResolver && t.providersResolver(t), qh(e, i, n, zi(e, n, 1, null), t));
                  const r = Fr(n, e, i.directiveStart, i);
                  ze(r, n);
                  const o = Ot(i, n);
                  return o && ze(o, n), r;
                })(o, t, n);
              if ((i.components.push(s), (e[8] = s), r && r.forEach((l) => l(s, n)), n.contentQueries)) {
                const l = Pe();
                n.contentQueries(1, s, l.directiveStart);
              }
              const a = Pe();
              return (
                !o.firstCreatePass ||
                  (null === n.hostBindings && null === n.hostAttrs) ||
                  (Hn(a.index), Gh(t[1], a, 0, a.directiveStart, a.directiveEnd, n), $h(n, s)),
                s
              );
            })(w, this.componentDef, m, f, [Ew])),
              Xr(h, m, null);
          } finally {
            Zo();
          }
          return new iE(this.componentType, b, fr(v, m), m, v);
        }
      }
      class iE extends class {} {
        constructor(n, t, i, r, o) {
          super(),
            (this.location = i),
            (this._rootLView = r),
            (this._tNode = o),
            (this.instance = t),
            (this.hostView = this.changeDetectorRef = new JN(r)),
            (this.componentType = n);
        }
        get injector() {
          return new ki(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(n) {
          this.hostView.onDestroy(n);
        }
      }
      class hr {}
      const pr = new Map();
      class cm extends hr {
        constructor(n, t) {
          super(),
            (this._parent = t),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new sm(this));
          const i = Tt(n);
          (this._bootstrapComponents = an(i.bootstrap)),
            (this._r3Injector = ip(
              n,
              t,
              [
                { provide: hr, useValue: this },
                { provide: dr, useValue: this.componentFactoryResolver },
              ],
              Z(n)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(n));
        }
        get(n, t = Ye.THROW_IF_NOT_FOUND, i = B.Default) {
          return n === Ye || n === hr || n === ou ? this : this._r3Injector.get(n, t, i);
        }
        destroy() {
          const n = this._r3Injector;
          !n.destroyed && n.destroy(), this.destroyCbs.forEach((t) => t()), (this.destroyCbs = null);
        }
        onDestroy(n) {
          this.destroyCbs.push(n);
        }
      }
      class Ru extends class {} {
        constructor(n) {
          super(),
            (this.moduleType = n),
            null !== Tt(n) &&
              (function (e) {
                const n = new Set();
                !(function t(i) {
                  const r = Tt(i, !0),
                    o = r.id;
                  null !== o &&
                    ((function (e, n, t) {
                      if (n && n !== t)
                        throw new Error(`Duplicate module registered for ${e} - ${Z(n)} vs ${Z(n.name)}`);
                    })(o, pr.get(o), i),
                    pr.set(o, i));
                  const s = an(r.imports);
                  for (const a of s) n.has(a) || (n.add(a), t(a));
                })(e);
              })(n);
        }
        create(n) {
          return new cm(this.moduleType, n);
        }
      }
      function ku(e) {
        return (n) => {
          setTimeout(e, void 0, n);
        };
      }
      const Q = class extends $e {
        constructor(n = !1) {
          super(), (this.__isAsync = n);
        }
        emit(n) {
          super.next(n);
        }
        subscribe(n, t, i) {
          var r, o, s;
          let a = n,
            l = t || (() => null),
            u = i;
          if (n && 'object' == typeof n) {
            const d = n;
            (a = null === (r = d.next) || void 0 === r ? void 0 : r.bind(d)),
              (l = null === (o = d.error) || void 0 === o ? void 0 : o.bind(d)),
              (u = null === (s = d.complete) || void 0 === s ? void 0 : s.bind(d));
          }
          this.__isAsync && ((l = ku(l)), a && (a = ku(a)), u && (u = ku(u)));
          const c = super.subscribe({ next: a, error: l, complete: u });
          return n instanceof he && n.add(c), c;
        }
      };
      function wE() {
        return this._results[Qi()]();
      }
      class Pu {
        constructor(n = !1) {
          (this._emitDistinctChangesOnly = n),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const t = Qi(),
            i = Pu.prototype;
          i[t] || (i[t] = wE);
        }
        get changes() {
          return this._changes || (this._changes = new Q());
        }
        get(n) {
          return this._results[n];
        }
        map(n) {
          return this._results.map(n);
        }
        filter(n) {
          return this._results.filter(n);
        }
        find(n) {
          return this._results.find(n);
        }
        reduce(n, t) {
          return this._results.reduce(n, t);
        }
        forEach(n) {
          this._results.forEach(n);
        }
        some(n) {
          return this._results.some(n);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(n, t) {
          const i = this;
          i.dirty = !1;
          const r = Rt(n);
          (this._changesDetected = !(function (e, n, t) {
            if (e.length !== n.length) return !1;
            for (let i = 0; i < e.length; i++) {
              let r = e[i],
                o = n[i];
              if ((t && ((r = t(r)), (o = t(o))), o !== r)) return !1;
            }
            return !0;
          })(i._results, r, t)) &&
            ((i._results = r), (i.length = r.length), (i.last = r[this.length - 1]), (i.first = r[0]));
        }
        notifyOnChanges() {
          this._changes && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      Symbol;
      let Ee = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = EE), e;
      })();
      const CE = Ee,
        NE = class extends CE {
          constructor(n, t, i) {
            super(), (this._declarationLView = n), (this._declarationTContainer = t), (this.elementRef = i);
          }
          createEmbeddedView(n) {
            const t = this._declarationTContainer.tViews,
              i = Jr(this._declarationLView, t, n, 16, null, t.declTNode, null, null, null, null);
            i[17] = this._declarationLView[this._declarationTContainer.index];
            const o = this._declarationLView[19];
            return null !== o && (i[19] = o.createEmbeddedView(t)), Xr(t, i, n), new lo(i);
          }
        };
      function EE() {
        return Hs(Pe(), D());
      }
      function Hs(e, n) {
        return 4 & e.type ? new NE(n, e, fr(e, n)) : null;
      }
      let fn = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = ME), e;
      })();
      function ME() {
        return ym(Pe(), D());
      }
      const IE = fn,
        mm = class extends IE {
          constructor(n, t, i) {
            super(), (this._lContainer = n), (this._hostTNode = t), (this._hostLView = i);
          }
          get element() {
            return fr(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new ki(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const n = rs(this._hostTNode, this._hostLView);
            if (uf(n)) {
              const t = xi(n, this._hostLView),
                i = Ri(n);
              return new ki(t[1].data[i + 8], t);
            }
            return new ki(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(n) {
            const t = _m(this._lContainer);
            return (null !== t && t[n]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(n, t, i) {
            const r = n.createEmbeddedView(t || {});
            return this.insert(r, i), r;
          }
          createComponent(n, t, i, r, o) {
            const s =
              n &&
              !(function (e) {
                return 'function' == typeof e;
              })(n);
            let a;
            if (s) a = t;
            else {
              const d = t || {};
              (a = d.index), (i = d.injector), (r = d.projectableNodes), (o = d.ngModuleRef);
            }
            const l = s ? n : new Ou(We(n)),
              u = i || this.parentInjector;
            if (!o && null == l.ngModule && u) {
              const d = u.get(hr, null);
              d && (o = d);
            }
            const c = l.create(u, r, void 0, o);
            return this.insert(c.hostView, a), c;
          }
          insert(n, t) {
            const i = n._lView,
              r = i[1];
            if (
              (function (e) {
                return Gt(e[3]);
              })(i)
            ) {
              const c = this.indexOf(n);
              if (-1 !== c) this.detach(c);
              else {
                const d = i[3],
                  f = new mm(d, d[6], d[3]);
                f.detach(f.indexOf(n));
              }
            }
            const o = this._adjustIndex(t),
              s = this._lContainer;
            !(function (e, n, t, i) {
              const r = 10 + i,
                o = t.length;
              i > 0 && (t[r - 1][4] = n),
                i < o - 10 ? ((n[4] = t[r]), bf(t, 10 + i, n)) : (t.push(n), (n[4] = null)),
                (n[3] = t);
              const s = n[17];
              null !== s &&
                t !== s &&
                (function (e, n) {
                  const t = e[9];
                  n[16] !== n[3][3][16] && (e[2] = !0), null === t ? (e[9] = [n]) : t.push(n);
                })(s, n);
              const a = n[19];
              null !== a && a.insertView(e), (n[2] |= 128);
            })(r, i, s, o);
            const a = Pl(o, s),
              l = i[L],
              u = ms(l, s[7]);
            return (
              null !== u &&
                (function (e, n, t, i, r, o) {
                  (i[0] = r), (i[6] = n), Qr(e, i, t, 1, r, o);
                })(r, s[6], l, i, u, a),
              n.attachToViewContainerRef(),
              bf(Fu(s), o, n),
              n
            );
          }
          move(n, t) {
            return this.insert(n, t);
          }
          indexOf(n) {
            const t = _m(this._lContainer);
            return null !== t ? t.indexOf(n) : -1;
          }
          remove(n) {
            const t = this._adjustIndex(n, -1),
              i = Rl(this._lContainer, t);
            i && (as(Fu(this._lContainer), t), rh(i[1], i));
          }
          detach(n) {
            const t = this._adjustIndex(n, -1),
              i = Rl(this._lContainer, t);
            return i && null != as(Fu(this._lContainer), t) ? new lo(i) : null;
          }
          _adjustIndex(n, t = 0) {
            return null == n ? this.length + t : n;
          }
        };
      function _m(e) {
        return e[8];
      }
      function Fu(e) {
        return e[8] || (e[8] = []);
      }
      function ym(e, n) {
        let t;
        const i = n[e.index];
        if (Gt(i)) t = i;
        else {
          let r;
          if (8 & e.type) r = Oe(i);
          else {
            const o = n[L];
            r = o.createComment('');
            const s = Ot(e, n);
            ai(
              o,
              ms(o, s),
              r,
              (function (e, n) {
                return we(e) ? e.nextSibling(n) : n.nextSibling;
              })(o, s),
              !1
            );
          }
          (n[e.index] = t = zh(i, n, r, e)), Cs(n, t);
        }
        return new mm(t, e, n);
      }
      class Vu {
        constructor(n) {
          (this.queryList = n), (this.matches = null);
        }
        clone() {
          return new Vu(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Bu {
        constructor(n = []) {
          this.queries = n;
        }
        createEmbeddedView(n) {
          const t = n.queries;
          if (null !== t) {
            const i = null !== n.contentQueries ? n.contentQueries[0] : t.length,
              r = [];
            for (let o = 0; o < i; o++) {
              const s = t.getByIndex(o);
              r.push(this.queries[s.indexInDeclarationView].clone());
            }
            return new Bu(r);
          }
          return null;
        }
        insertView(n) {
          this.dirtyQueriesWithMatches(n);
        }
        detachView(n) {
          this.dirtyQueriesWithMatches(n);
        }
        dirtyQueriesWithMatches(n) {
          for (let t = 0; t < this.queries.length; t++) null !== Cm(n, t).matches && this.queries[t].setDirty();
        }
      }
      class bm {
        constructor(n, t, i = null) {
          (this.predicate = n), (this.flags = t), (this.read = i);
        }
      }
      class Lu {
        constructor(n = []) {
          this.queries = n;
        }
        elementStart(n, t) {
          for (let i = 0; i < this.queries.length; i++) this.queries[i].elementStart(n, t);
        }
        elementEnd(n) {
          for (let t = 0; t < this.queries.length; t++) this.queries[t].elementEnd(n);
        }
        embeddedTView(n) {
          let t = null;
          for (let i = 0; i < this.length; i++) {
            const r = null !== t ? t.length : 0,
              o = this.getByIndex(i).embeddedTView(n, r);
            o && ((o.indexInDeclarationView = i), null !== t ? t.push(o) : (t = [o]));
          }
          return null !== t ? new Lu(t) : null;
        }
        template(n, t) {
          for (let i = 0; i < this.queries.length; i++) this.queries[i].template(n, t);
        }
        getByIndex(n) {
          return this.queries[n];
        }
        get length() {
          return this.queries.length;
        }
        track(n) {
          this.queries.push(n);
        }
      }
      class Hu {
        constructor(n, t = -1) {
          (this.metadata = n),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = t);
        }
        elementStart(n, t) {
          this.isApplyingToNode(t) && this.matchTNode(n, t);
        }
        elementEnd(n) {
          this._declarationNodeIndex === n.index && (this._appliesToNextNode = !1);
        }
        template(n, t) {
          this.elementStart(n, t);
        }
        embeddedTView(n, t) {
          return this.isApplyingToNode(n)
            ? ((this.crossesNgTemplate = !0), this.addMatch(-n.index, t), new Hu(this.metadata))
            : null;
        }
        isApplyingToNode(n) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const t = this._declarationNodeIndex;
            let i = n.parent;
            for (; null !== i && 8 & i.type && i.index !== t; ) i = i.parent;
            return t === (null !== i ? i.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(n, t) {
          const i = this.metadata.predicate;
          if (Array.isArray(i))
            for (let r = 0; r < i.length; r++) {
              const o = i[r];
              this.matchTNodeWithReadOption(n, t, AE(t, o)), this.matchTNodeWithReadOption(n, t, ss(t, n, o, !1, !1));
            }
          else
            i === Ee
              ? 4 & t.type && this.matchTNodeWithReadOption(n, t, -1)
              : this.matchTNodeWithReadOption(n, t, ss(t, n, i, !1, !1));
        }
        matchTNodeWithReadOption(n, t, i) {
          if (null !== i) {
            const r = this.metadata.read;
            if (null !== r)
              if (r === _e || r === fn || (r === Ee && 4 & t.type)) this.addMatch(t.index, -2);
              else {
                const o = ss(t, n, r, !1, !1);
                null !== o && this.addMatch(t.index, o);
              }
            else this.addMatch(t.index, i);
          }
        }
        addMatch(n, t) {
          null === this.matches ? (this.matches = [n, t]) : this.matches.push(n, t);
        }
      }
      function AE(e, n) {
        const t = e.localNames;
        if (null !== t) for (let i = 0; i < t.length; i += 2) if (t[i] === n) return t[i + 1];
        return null;
      }
      function RE(e, n, t, i) {
        return -1 === t
          ? (function (e, n) {
              return 11 & e.type ? fr(e, n) : 4 & e.type ? Hs(e, n) : null;
            })(n, e)
          : -2 === t
          ? (function (e, n, t) {
              return t === _e ? fr(n, e) : t === Ee ? Hs(n, e) : t === fn ? ym(n, e) : void 0;
            })(e, n, i)
          : Fr(e, e[1], t, n);
      }
      function vm(e, n, t, i) {
        const r = n[19].queries[i];
        if (null === r.matches) {
          const o = e.data,
            s = t.matches,
            a = [];
          for (let l = 0; l < s.length; l += 2) {
            const u = s[l];
            a.push(u < 0 ? null : RE(n, o[u], s[l + 1], t.metadata.read));
          }
          r.matches = a;
        }
        return r.matches;
      }
      function ju(e, n, t, i) {
        const r = e.queries.getByIndex(t),
          o = r.matches;
        if (null !== o) {
          const s = vm(e, n, r, t);
          for (let a = 0; a < o.length; a += 2) {
            const l = o[a];
            if (l > 0) i.push(s[a / 2]);
            else {
              const u = o[a + 1],
                c = n[-l];
              for (let d = 10; d < c.length; d++) {
                const f = c[d];
                f[17] === f[3] && ju(f[1], f, u, i);
              }
              if (null !== c[9]) {
                const d = c[9];
                for (let f = 0; f < d.length; f++) {
                  const h = d[f];
                  ju(h[1], h, u, i);
                }
              }
            }
          }
        }
        return i;
      }
      function Ie(e) {
        const n = D(),
          t = K(),
          i = Jd();
        tl(i + 1);
        const r = Cm(t, i);
        if (e.dirty && qd(n) === (2 == (2 & r.metadata.flags))) {
          if (null === r.matches) e.reset([]);
          else {
            const o = r.crossesNgTemplate ? ju(t, n, i, []) : vm(t, n, r, i);
            e.reset(o, zN), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Gu(e, n, t) {
        const i = K();
        i.firstCreatePass &&
          ((function (e, n, t) {
            null === e.queries && (e.queries = new Lu()), e.queries.track(new Hu(n, t));
          })(i, new bm(e, n, t), -1),
          2 == (2 & n) && (i.staticViewQueries = !0)),
          (function (e, n, t) {
            const i = new Pu(4 == (4 & t));
            Lh(e, n, i, i.destroy), null === n[19] && (n[19] = new Bu()), n[19].queries.push(new Vu(i));
          })(i, D(), n);
      }
      function Cm(e, n) {
        return e.queries.getByIndex(n);
      }
      function $s(...e) {}
      const Yu = new Y('Application Initializer');
      let mr = (() => {
        class e {
          constructor(t) {
            (this.appInits = t),
              (this.resolve = $s),
              (this.reject = $s),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((i, r) => {
                (this.resolve = i), (this.reject = r);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [],
              i = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let r = 0; r < this.appInits.length; r++) {
                const o = this.appInits[r]();
                if (Ts(o)) t.push(o);
                else if (Hp(o)) {
                  const s = new Promise((a, l) => {
                    o.subscribe({ complete: a, error: l });
                  });
                  t.push(s);
                }
              }
            Promise.all(t)
              .then(() => {
                i();
              })
              .catch((r) => {
                this.reject(r);
              }),
              0 === t.length && i(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(H(Yu, 8));
          }),
          (e.ɵprov = X({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const po = new Y('AppId'),
        XE = {
          provide: po,
          useFactory: function () {
            return `${Zu()}${Zu()}${Zu()}`;
          },
          deps: [],
        };
      function Zu() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Hm = new Y('Platform Initializer'),
        Us = new Y('Platform ID'),
        eM = new Y('appBootstrapListener');
      let tM = (() => {
        class e {
          log(t) {
            console.log(t);
          }
          warn(t) {
            console.warn(t);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = X({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const zn = new Y('LocaleId'),
        jm = new Y('DefaultCurrencyCode');
      class nM {
        constructor(n, t) {
          (this.ngModuleFactory = n), (this.componentFactories = t);
        }
      }
      let Gm = (() => {
        class e {
          compileModuleSync(t) {
            return new Ru(t);
          }
          compileModuleAsync(t) {
            return Promise.resolve(this.compileModuleSync(t));
          }
          compileModuleAndAllComponentsSync(t) {
            const i = this.compileModuleSync(t),
              o = an(Tt(t).declarations).reduce((s, a) => {
                const l = We(a);
                return l && s.push(new Ou(l)), s;
              }, []);
            return new nM(i, o);
          }
          compileModuleAndAllComponentsAsync(t) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(t));
          }
          clearCache() {}
          clearCacheFor(t) {}
          getModuleId(t) {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = X({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const rM = (() => Promise.resolve(0))();
      function Ku(e) {
        'undefined' == typeof Zone
          ? rM.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      class ve {
        constructor({
          enableLongStackTrace: n = !1,
          shouldCoalesceEventChangeDetection: t = !1,
          shouldCoalesceRunChangeDetection: i = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Q(!1)),
            (this.onMicrotaskEmpty = new Q(!1)),
            (this.onStable = new Q(!1)),
            (this.onError = new Q(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched();
          const r = this;
          (r._nesting = 0),
            (r._outer = r._inner = Zone.current),
            Zone.TaskTrackingZoneSpec && (r._inner = r._inner.fork(new Zone.TaskTrackingZoneSpec())),
            n && Zone.longStackTraceZoneSpec && (r._inner = r._inner.fork(Zone.longStackTraceZoneSpec)),
            (r.shouldCoalesceEventChangeDetection = !i && t),
            (r.shouldCoalesceRunChangeDetection = i),
            (r.lastRequestAnimationFrameId = -1),
            (r.nativeRequestAnimationFrame = (function () {
              let e = ie.requestAnimationFrame,
                n = ie.cancelAnimationFrame;
              if ('undefined' != typeof Zone && e && n) {
                const t = e[Zone.__symbol__('OriginalDelegate')];
                t && (e = t);
                const i = n[Zone.__symbol__('OriginalDelegate')];
                i && (n = i);
              }
              return { nativeRequestAnimationFrame: e, nativeCancelAnimationFrame: n };
            })().nativeRequestAnimationFrame),
            (function (e) {
              const n = () => {
                !(function (e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(ie, () => {
                      e.fakeTopEventTask ||
                        (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                          'fakeTopEventTask',
                          () => {
                            (e.lastRequestAnimationFrameId = -1),
                              Ju(e),
                              (e.isCheckStableRunning = !0),
                              Qu(e),
                              (e.isCheckStableRunning = !1);
                          },
                          void 0,
                          () => {},
                          () => {}
                        )),
                        e.fakeTopEventTask.invoke();
                    })),
                    Ju(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (t, i, r, o, s, a) => {
                  try {
                    return $m(e), t.invokeTask(r, o, s, a);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection && 'eventTask' === o.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      n(),
                      Um(e);
                  }
                },
                onInvoke: (t, i, r, o, s, a, l) => {
                  try {
                    return $m(e), t.invoke(r, o, s, a, l);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && n(), Um(e);
                  }
                },
                onHasTask: (t, i, r, o) => {
                  t.hasTask(r, o),
                    i === r &&
                      ('microTask' == o.change
                        ? ((e._hasPendingMicrotasks = o.microTask), Ju(e), Qu(e))
                        : 'macroTask' == o.change && (e.hasPendingMacrotasks = o.macroTask));
                },
                onHandleError: (t, i, r, o) => (t.handleError(r, o), e.runOutsideAngular(() => e.onError.emit(o)), !1),
              });
            })(r);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!ve.isInAngularZone()) throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (ve.isInAngularZone()) throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(n, t, i) {
          return this._inner.run(n, t, i);
        }
        runTask(n, t, i, r) {
          const o = this._inner,
            s = o.scheduleEventTask('NgZoneEvent: ' + r, n, sM, $s, $s);
          try {
            return o.runTask(s, t, i);
          } finally {
            o.cancelTask(s);
          }
        }
        runGuarded(n, t, i) {
          return this._inner.runGuarded(n, t, i);
        }
        runOutsideAngular(n) {
          return this._outer.run(n);
        }
      }
      const sM = {};
      function Qu(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Ju(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function $m(e) {
        e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Um(e) {
        e._nesting--, Qu(e);
      }
      class uM {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Q()),
            (this.onMicrotaskEmpty = new Q()),
            (this.onStable = new Q()),
            (this.onError = new Q());
        }
        run(n, t, i) {
          return n.apply(t, i);
        }
        runGuarded(n, t, i) {
          return n.apply(t, i);
        }
        runOutsideAngular(n) {
          return n();
        }
        runTask(n, t, i, r) {
          return n.apply(t, i);
        }
      }
      let Xu = (() => {
          class e {
            constructor(t) {
              (this._ngZone = t),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                t.run(() => {
                  this.taskTrackingZone = 'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      ve.assertNotInAngularZone(),
                        Ku(() => {
                          (this._isZoneStable = !0), this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Ku(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let t = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (i) => !i.updateCb || !i.updateCb(t) || (clearTimeout(i.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((t) => ({
                    source: t.source,
                    creationLocation: t.creationLocation,
                    data: t.data,
                  }))
                : [];
            }
            addCallback(t, i, r) {
              let o = -1;
              i &&
                i > 0 &&
                (o = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter((s) => s.timeoutId !== o)),
                    t(this._didWork, this.getPendingTasks());
                }, i)),
                this._callbacks.push({ doneCb: t, timeoutId: o, updateCb: r });
            }
            whenStable(t, i, r) {
              if (r && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(t, i, r), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(t, i, r) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(H(ve));
            }),
            (e.ɵprov = X({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Wm = (() => {
          class e {
            constructor() {
              (this._applications = new Map()), ec.addToWindow(this);
            }
            registerApplication(t, i) {
              this._applications.set(t, i);
            }
            unregisterApplication(t) {
              this._applications.delete(t);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(t) {
              return this._applications.get(t) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(t, i = !0) {
              return ec.findTestabilityInTree(this, t, i);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = X({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      class cM {
        addToWindow(n) {}
        findTestabilityInTree(n, t, i) {
          return null;
        }
      }
      let Zt,
        ec = new cM();
      const qm = new Y('AllowMultipleToken');
      function zm(e, n, t = []) {
        const i = `Platform: ${n}`,
          r = new Y(i);
        return (o = []) => {
          let s = Ym();
          if (!s || s.injector.get(qm, !1))
            if (e) e(t.concat(o).concat({ provide: r, useValue: !0 }));
            else {
              const a = t.concat(o).concat({ provide: r, useValue: !0 }, { provide: su, useValue: 'platform' });
              !(function (e) {
                if (Zt && !Zt.destroyed && !Zt.injector.get(qm, !1)) throw new gt('400', '');
                Zt = e.get(Zm);
                const n = e.get(Hm, null);
                n && n.forEach((t) => t());
              })(Ye.create({ providers: a, name: i }));
            }
          return (function (e) {
            const n = Ym();
            if (!n) throw new gt('401', '');
            return n;
          })();
        };
      }
      function Ym() {
        return Zt && !Zt.destroyed ? Zt : null;
      }
      let Zm = (() => {
        class e {
          constructor(t) {
            (this._injector = t), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
          }
          bootstrapModuleFactory(t, i) {
            const a = (function (e, n) {
                let t;
                return (
                  (t =
                    'noop' === e
                      ? new uM()
                      : ('zone.js' === e ? void 0 : e) ||
                        new ve({
                          enableLongStackTrace: !1,
                          shouldCoalesceEventChangeDetection: !!(null == n ? void 0 : n.ngZoneEventCoalescing),
                          shouldCoalesceRunChangeDetection: !!(null == n ? void 0 : n.ngZoneRunCoalescing),
                        })),
                  t
                );
              })(i ? i.ngZone : void 0, {
                ngZoneEventCoalescing: (i && i.ngZoneEventCoalescing) || !1,
                ngZoneRunCoalescing: (i && i.ngZoneRunCoalescing) || !1,
              }),
              l = [{ provide: ve, useValue: a }];
            return a.run(() => {
              const u = Ye.create({ providers: l, parent: this.injector, name: t.moduleType.name }),
                c = t.create(u),
                d = c.injector.get($i, null);
              if (!d) throw new gt('402', '');
              return (
                a.runOutsideAngular(() => {
                  const f = a.onError.subscribe({
                    next: (h) => {
                      d.handleError(h);
                    },
                  });
                  c.onDestroy(() => {
                    tc(this._modules, c), f.unsubscribe();
                  });
                }),
                (function (e, n, t) {
                  try {
                    const i = t();
                    return Ts(i)
                      ? i.catch((r) => {
                          throw (n.runOutsideAngular(() => e.handleError(r)), r);
                        })
                      : i;
                  } catch (i) {
                    throw (n.runOutsideAngular(() => e.handleError(i)), i);
                  }
                })(d, a, () => {
                  const f = c.injector.get(mr);
                  return (
                    f.runInitializers(),
                    f.donePromise.then(
                      () => (
                        (function (e) {
                          _t(e, 'Expected localeId to be defined'),
                            'string' == typeof e && (xg = e.toLowerCase().replace(/_/g, '-'));
                        })(c.injector.get(zn, Rs) || Rs),
                        this._moduleDoBootstrap(c),
                        c
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(t, i = []) {
            const r = Km({}, i);
            return (function (e, n, t) {
              const i = new Ru(t);
              return Promise.resolve(i);
            })(0, 0, t).then((o) => this.bootstrapModuleFactory(o, r));
          }
          _moduleDoBootstrap(t) {
            const i = t.injector.get(go);
            if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach((r) => i.bootstrap(r));
            else {
              if (!t.instance.ngDoBootstrap) throw new gt('403', '');
              t.instance.ngDoBootstrap(i);
            }
            this._modules.push(t);
          }
          onDestroy(t) {
            this._destroyListeners.push(t);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new gt('404', '');
            this._modules.slice().forEach((t) => t.destroy()),
              this._destroyListeners.forEach((t) => t()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(H(Ye));
          }),
          (e.ɵprov = X({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function Km(e, n) {
        return Array.isArray(n) ? n.reduce(Km, e) : Object.assign(Object.assign({}, e), n);
      }
      let go = (() => {
        class e {
          constructor(t, i, r, o, s) {
            (this._zone = t),
              (this._injector = i),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = o),
              (this._initStatus = s),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                },
              }));
            const a = new ge((u) => {
                (this._stable =
                  this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    u.next(this._stable), u.complete();
                  });
              }),
              l = new ge((u) => {
                let c;
                this._zone.runOutsideAngular(() => {
                  c = this._zone.onStable.subscribe(() => {
                    ve.assertNotInAngularZone(),
                      Ku(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), u.next(!0));
                      });
                  });
                });
                const d = this._zone.onUnstable.subscribe(() => {
                  ve.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        u.next(!1);
                      }));
                });
                return () => {
                  c.unsubscribe(), d.unsubscribe();
                };
              });
            this.isStable = (function (...e) {
              let n = Number.POSITIVE_INFINITY,
                t = null,
                i = e[e.length - 1];
              return (
                Ni(i)
                  ? ((t = e.pop()), e.length > 1 && 'number' == typeof e[e.length - 1] && (n = e.pop()))
                  : 'number' == typeof i && (n = e.pop()),
                null === t && 1 === e.length && e[0] instanceof ge ? e[0] : Id(n)(Ir(e, t))
              );
            })(
              a,
              l.pipe((e) =>
                Td()(
                  (function (e, n) {
                    return function (i) {
                      let r;
                      r =
                        'function' == typeof e
                          ? e
                          : function () {
                              return e;
                            };
                      const o = Object.create(i, _b);
                      return (o.source = i), (o.subjectFactory = r), o;
                    };
                  })(wb)(e)
                )
              )
            );
          }
          bootstrap(t, i) {
            if (!this._initStatus.done) throw new gt('405', '');
            let r;
            (r = t instanceof rm ? t : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(r.componentType);
            const o = (function (e) {
                return e.isBoundToModule;
              })(r)
                ? void 0
                : this._injector.get(hr),
              a = r.create(Ye.NULL, [], i || r.selector, o),
              l = a.location.nativeElement,
              u = a.injector.get(Xu, null),
              c = u && a.injector.get(Wm);
            return (
              u && c && c.registerApplication(l, u),
              a.onDestroy(() => {
                this.detachView(a.hostView), tc(this.components, a), c && c.unregisterApplication(l);
              }),
              this._loadComponent(a),
              a
            );
          }
          tick() {
            if (this._runningTick) throw new gt('101', '');
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
            } catch (t) {
              this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(t));
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(t) {
            const i = t;
            this._views.push(i), i.attachToAppRef(this);
          }
          detachView(t) {
            const i = t;
            tc(this._views, i), i.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(eM, [])
                .concat(this._bootstrapListeners)
                .forEach((r) => r(t));
          }
          ngOnDestroy() {
            this._views.slice().forEach((t) => t.destroy()), this._onMicrotaskEmptySubscription.unsubscribe();
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(H(ve), H(Ye), H($i), H(dr), H(mr));
          }),
          (e.ɵprov = X({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function tc(e, n) {
        const t = e.indexOf(n);
        t > -1 && e.splice(t, 1);
      }
      let Jm = !0;
      class o_ {
        constructor() {}
        supports(n) {
          return to(n);
        }
        create(n) {
          return new TM(n);
        }
      }
      const IM = (e, n) => n;
      class TM {
        constructor(n) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = n || IM);
        }
        forEachItem(n) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) n(t);
        }
        forEachOperation(n) {
          let t = this._itHead,
            i = this._removalsHead,
            r = 0,
            o = null;
          for (; t || i; ) {
            const s = !i || (t && t.currentIndex < a_(i, r, o)) ? t : i,
              a = a_(s, r, o),
              l = s.currentIndex;
            if (s === i) r--, (i = i._nextRemoved);
            else if (((t = t._next), null == s.previousIndex)) r++;
            else {
              o || (o = []);
              const u = a - r,
                c = l - r;
              if (u != c) {
                for (let f = 0; f < u; f++) {
                  const h = f < o.length ? o[f] : (o[f] = 0),
                    m = h + f;
                  c <= m && m < u && (o[f] = h + 1);
                }
                o[s.previousIndex] = c - u;
              }
            }
            a !== l && n(s, a, l);
          }
        }
        forEachPreviousItem(n) {
          let t;
          for (t = this._previousItHead; null !== t; t = t._nextPrevious) n(t);
        }
        forEachAddedItem(n) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) n(t);
        }
        forEachMovedItem(n) {
          let t;
          for (t = this._movesHead; null !== t; t = t._nextMoved) n(t);
        }
        forEachRemovedItem(n) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) n(t);
        }
        forEachIdentityChange(n) {
          let t;
          for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) n(t);
        }
        diff(n) {
          if ((null == n && (n = []), !to(n)))
            throw new Error(`Error trying to diff '${Z(n)}'. Only arrays and iterables are allowed`);
          return this.check(n) ? this : null;
        }
        onDestroy() {}
        check(n) {
          this._reset();
          let r,
            o,
            s,
            t = this._itHead,
            i = !1;
          if (Array.isArray(n)) {
            this.length = n.length;
            for (let a = 0; a < this.length; a++)
              (o = n[a]),
                (s = this._trackByFn(a, o)),
                null !== t && Object.is(t.trackById, s)
                  ? (i && (t = this._verifyReinsertion(t, o, s, a)),
                    Object.is(t.item, o) || this._addIdentityChange(t, o))
                  : ((t = this._mismatch(t, o, s, a)), (i = !0)),
                (t = t._next);
          } else
            (r = 0),
              (function (e, n) {
                if (Array.isArray(e)) for (let t = 0; t < e.length; t++) n(e[t]);
                else {
                  const t = e[Qi()]();
                  let i;
                  for (; !(i = t.next()).done; ) n(i.value);
                }
              })(n, (a) => {
                (s = this._trackByFn(r, a)),
                  null !== t && Object.is(t.trackById, s)
                    ? (i && (t = this._verifyReinsertion(t, a, s, r)),
                      Object.is(t.item, a) || this._addIdentityChange(t, a))
                    : ((t = this._mismatch(t, a, s, r)), (i = !0)),
                  (t = t._next),
                  r++;
              }),
              (this.length = r);
          return this._truncate(t), (this.collection = n), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let n;
            for (n = this._previousItHead = this._itHead; null !== n; n = n._next) n._nextPrevious = n._next;
            for (n = this._additionsHead; null !== n; n = n._nextAdded) n.previousIndex = n.currentIndex;
            for (this._additionsHead = this._additionsTail = null, n = this._movesHead; null !== n; n = n._nextMoved)
              n.previousIndex = n.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(n, t, i, r) {
          let o;
          return (
            null === n ? (o = this._itTail) : ((o = n._prev), this._remove(n)),
            null !== (n = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(i, null))
              ? (Object.is(n.item, t) || this._addIdentityChange(n, t), this._reinsertAfter(n, o, r))
              : null !== (n = null === this._linkedRecords ? null : this._linkedRecords.get(i, r))
              ? (Object.is(n.item, t) || this._addIdentityChange(n, t), this._moveAfter(n, o, r))
              : (n = this._addAfter(new SM(t, i), o, r)),
            n
          );
        }
        _verifyReinsertion(n, t, i, r) {
          let o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(i, null);
          return (
            null !== o
              ? (n = this._reinsertAfter(o, n._prev, r))
              : n.currentIndex != r && ((n.currentIndex = r), this._addToMoves(n, r)),
            n
          );
        }
        _truncate(n) {
          for (; null !== n; ) {
            const t = n._next;
            this._addToRemovals(this._unlink(n)), (n = t);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(n, t, i) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(n);
          const r = n._prevRemoved,
            o = n._nextRemoved;
          return (
            null === r ? (this._removalsHead = o) : (r._nextRemoved = o),
            null === o ? (this._removalsTail = r) : (o._prevRemoved = r),
            this._insertAfter(n, t, i),
            this._addToMoves(n, i),
            n
          );
        }
        _moveAfter(n, t, i) {
          return this._unlink(n), this._insertAfter(n, t, i), this._addToMoves(n, i), n;
        }
        _addAfter(n, t, i) {
          return (
            this._insertAfter(n, t, i),
            (this._additionsTail =
              null === this._additionsTail ? (this._additionsHead = n) : (this._additionsTail._nextAdded = n)),
            n
          );
        }
        _insertAfter(n, t, i) {
          const r = null === t ? this._itHead : t._next;
          return (
            (n._next = r),
            (n._prev = t),
            null === r ? (this._itTail = n) : (r._prev = n),
            null === t ? (this._itHead = n) : (t._next = n),
            null === this._linkedRecords && (this._linkedRecords = new s_()),
            this._linkedRecords.put(n),
            (n.currentIndex = i),
            n
          );
        }
        _remove(n) {
          return this._addToRemovals(this._unlink(n));
        }
        _unlink(n) {
          null !== this._linkedRecords && this._linkedRecords.remove(n);
          const t = n._prev,
            i = n._next;
          return null === t ? (this._itHead = i) : (t._next = i), null === i ? (this._itTail = t) : (i._prev = t), n;
        }
        _addToMoves(n, t) {
          return (
            n.previousIndex === t ||
              (this._movesTail = null === this._movesTail ? (this._movesHead = n) : (this._movesTail._nextMoved = n)),
            n
          );
        }
        _addToRemovals(n) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new s_()),
            this._unlinkedRecords.put(n),
            (n.currentIndex = null),
            (n._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = n), (n._prevRemoved = null))
              : ((n._prevRemoved = this._removalsTail), (this._removalsTail = this._removalsTail._nextRemoved = n)),
            n
          );
        }
        _addIdentityChange(n, t) {
          return (
            (n.item = t),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = n)
                : (this._identityChangesTail._nextIdentityChange = n)),
            n
          );
        }
      }
      class SM {
        constructor(n, t) {
          (this.item = n),
            (this.trackById = t),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class AM {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(n) {
          null === this._head
            ? ((this._head = this._tail = n), (n._nextDup = null), (n._prevDup = null))
            : ((this._tail._nextDup = n), (n._prevDup = this._tail), (n._nextDup = null), (this._tail = n));
        }
        get(n, t) {
          let i;
          for (i = this._head; null !== i; i = i._nextDup)
            if ((null === t || t <= i.currentIndex) && Object.is(i.trackById, n)) return i;
          return null;
        }
        remove(n) {
          const t = n._prevDup,
            i = n._nextDup;
          return (
            null === t ? (this._head = i) : (t._nextDup = i),
            null === i ? (this._tail = t) : (i._prevDup = t),
            null === this._head
          );
        }
      }
      class s_ {
        constructor() {
          this.map = new Map();
        }
        put(n) {
          const t = n.trackById;
          let i = this.map.get(t);
          i || ((i = new AM()), this.map.set(t, i)), i.add(n);
        }
        get(n, t) {
          const r = this.map.get(n);
          return r ? r.get(n, t) : null;
        }
        remove(n) {
          const t = n.trackById;
          return this.map.get(t).remove(n) && this.map.delete(t), n;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function a_(e, n, t) {
        const i = e.previousIndex;
        if (null === i) return i;
        let r = 0;
        return t && i < t.length && (r = t[i]), i + n + r;
      }
      class l_ {
        constructor() {}
        supports(n) {
          return n instanceof Map || fu(n);
        }
        create() {
          return new OM();
        }
      }
      class OM {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
        }
        forEachItem(n) {
          let t;
          for (t = this._mapHead; null !== t; t = t._next) n(t);
        }
        forEachPreviousItem(n) {
          let t;
          for (t = this._previousMapHead; null !== t; t = t._nextPrevious) n(t);
        }
        forEachChangedItem(n) {
          let t;
          for (t = this._changesHead; null !== t; t = t._nextChanged) n(t);
        }
        forEachAddedItem(n) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) n(t);
        }
        forEachRemovedItem(n) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) n(t);
        }
        diff(n) {
          if (n) {
            if (!(n instanceof Map || fu(n)))
              throw new Error(`Error trying to diff '${Z(n)}'. Only maps and objects are allowed`);
          } else n = new Map();
          return this.check(n) ? this : null;
        }
        onDestroy() {}
        check(n) {
          this._reset();
          let t = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(n, (i, r) => {
              if (t && t.key === r) this._maybeAddToChanges(t, i), (this._appendAfter = t), (t = t._next);
              else {
                const o = this._getOrCreateRecordForKey(r, i);
                t = this._insertBeforeOrAppend(t, o);
              }
            }),
            t)
          ) {
            t._prev && (t._prev._next = null), (this._removalsHead = t);
            for (let i = t; null !== i; i = i._nextRemoved)
              i === this._mapHead && (this._mapHead = null),
                this._records.delete(i.key),
                (i._nextRemoved = i._next),
                (i.previousValue = i.currentValue),
                (i.currentValue = null),
                (i._prev = null),
                (i._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(n, t) {
          if (n) {
            const i = n._prev;
            return (
              (t._next = n),
              (t._prev = i),
              (n._prev = t),
              i && (i._next = t),
              n === this._mapHead && (this._mapHead = t),
              (this._appendAfter = n),
              n
            );
          }
          return (
            this._appendAfter ? ((this._appendAfter._next = t), (t._prev = this._appendAfter)) : (this._mapHead = t),
            (this._appendAfter = t),
            null
          );
        }
        _getOrCreateRecordForKey(n, t) {
          if (this._records.has(n)) {
            const r = this._records.get(n);
            this._maybeAddToChanges(r, t);
            const o = r._prev,
              s = r._next;
            return o && (o._next = s), s && (s._prev = o), (r._next = null), (r._prev = null), r;
          }
          const i = new RM(n);
          return this._records.set(n, i), (i.currentValue = t), this._addToAdditions(i), i;
        }
        _reset() {
          if (this.isDirty) {
            let n;
            for (this._previousMapHead = this._mapHead, n = this._previousMapHead; null !== n; n = n._next)
              n._nextPrevious = n._next;
            for (n = this._changesHead; null !== n; n = n._nextChanged) n.previousValue = n.currentValue;
            for (n = this._additionsHead; null != n; n = n._nextAdded) n.previousValue = n.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(n, t) {
          Object.is(t, n.currentValue) ||
            ((n.previousValue = n.currentValue), (n.currentValue = t), this._addToChanges(n));
        }
        _addToAdditions(n) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = n)
            : ((this._additionsTail._nextAdded = n), (this._additionsTail = n));
        }
        _addToChanges(n) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = n)
            : ((this._changesTail._nextChanged = n), (this._changesTail = n));
        }
        _forEach(n, t) {
          n instanceof Map ? n.forEach(t) : Object.keys(n).forEach((i) => t(n[i], i));
        }
      }
      class RM {
        constructor(n) {
          (this.key = n),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function u_() {
        return new mo([new o_()]);
      }
      let mo = (() => {
        class e {
          constructor(t) {
            this.factories = t;
          }
          static create(t, i) {
            if (null != i) {
              const r = i.factories.slice();
              t = t.concat(r);
            }
            return new e(t);
          }
          static extend(t) {
            return { provide: e, useFactory: (i) => e.create(t, i || u_()), deps: [[e, new Ur(), new Hi()]] };
          }
          find(t) {
            const i = this.factories.find((r) => r.supports(t));
            if (null != i) return i;
            throw new Error(
              `Cannot find a differ supporting object '${t}' of type '${(function (e) {
                return e.name || typeof e;
              })(t)}'`
            );
          }
        }
        return (e.ɵprov = X({ token: e, providedIn: 'root', factory: u_ })), e;
      })();
      function c_() {
        return new _r([new l_()]);
      }
      let _r = (() => {
        class e {
          constructor(t) {
            this.factories = t;
          }
          static create(t, i) {
            if (i) {
              const r = i.factories.slice();
              t = t.concat(r);
            }
            return new e(t);
          }
          static extend(t) {
            return { provide: e, useFactory: (i) => e.create(t, i || c_()), deps: [[e, new Ur(), new Hi()]] };
          }
          find(t) {
            const i = this.factories.find((r) => r.supports(t));
            if (i) return i;
            throw new Error(`Cannot find a differ supporting object '${t}'`);
          }
        }
        return (e.ɵprov = X({ token: e, providedIn: 'root', factory: c_ })), e;
      })();
      const kM = [new l_()],
        FM = new mo([new o_()]),
        VM = new _r(kM),
        BM = zm(null, 'core', [
          { provide: Us, useValue: 'unknown' },
          { provide: Zm, deps: [Ye] },
          { provide: Wm, deps: [] },
          { provide: tM, deps: [] },
        ]),
        $M = [
          { provide: go, useClass: go, deps: [ve, Ye, $i, dr, mr] },
          {
            provide: eE,
            deps: [ve],
            useFactory: function (e) {
              let n = [];
              return (
                e.onStable.subscribe(() => {
                  for (; n.length; ) n.pop()();
                }),
                function (t) {
                  n.push(t);
                }
              );
            },
          },
          { provide: mr, useClass: mr, deps: [[new Hi(), Yu]] },
          { provide: Gm, useClass: Gm, deps: [] },
          XE,
          {
            provide: mo,
            useFactory: function () {
              return FM;
            },
            deps: [],
          },
          {
            provide: _r,
            useFactory: function () {
              return VM;
            },
            deps: [],
          },
          {
            provide: zn,
            useFactory: function (e) {
              return e || ('undefined' != typeof $localize && $localize.locale) || Rs;
            },
            deps: [[new cs(zn), new Hi(), new Ur()]],
          },
          { provide: jm, useValue: 'USD' },
        ];
      let WM = (() => {
          class e {
            constructor(t) {}
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(H(go));
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ providers: $M })),
            e
          );
        })(),
        qs = null;
      function hi() {
        return qs;
      }
      const ot = new Y('DocumentToken');
      var xe = (() => (
        ((xe = xe || {})[(xe.Zero = 0)] = 'Zero'),
        (xe[(xe.One = 1)] = 'One'),
        (xe[(xe.Two = 2)] = 'Two'),
        (xe[(xe.Few = 3)] = 'Few'),
        (xe[(xe.Many = 4)] = 'Many'),
        (xe[(xe.Other = 5)] = 'Other'),
        xe
      ))();
      const rI = function (e) {
        return (function (e) {
          const n = (function (e) {
            return e.toLowerCase().replace(/_/g, '-');
          })(e);
          let t = Rg(n);
          if (t) return t;
          const i = n.split('-')[0];
          if (((t = Rg(i)), t)) return t;
          if ('en' === i) return WC;
          throw new Error(`Missing locale data for the locale "${e}".`);
        })(e)[E.PluralCase];
      };
      class na {}
      let xI = (() => {
        class e extends na {
          constructor(t) {
            super(), (this.locale = t);
          }
          getPluralCategory(t, i) {
            switch (rI(i || this.locale)(t)) {
              case xe.Zero:
                return 'zero';
              case xe.One:
                return 'one';
              case xe.Two:
                return 'two';
              case xe.Few:
                return 'few';
              case xe.Many:
                return 'many';
              default:
                return 'other';
            }
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(H(zn));
          }),
          (e.ɵprov = X({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class VI {
        constructor(n, t, i, r) {
          (this.$implicit = n), (this.ngForOf = t), (this.index = i), (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let yr = (() => {
        class e {
          constructor(t, i, r) {
            (this._viewContainer = t),
              (this._template = i),
              (this._differs = r),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            this._trackByFn = t;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const t = this._ngForOf;
              !this._differ && t && (this._differ = this._differs.find(t).create(this.ngForTrackBy));
            }
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const i = this._viewContainer;
            t.forEachOperation((r, o, s) => {
              if (null == r.previousIndex)
                i.createEmbeddedView(this._template, new VI(r.item, this._ngForOf, -1, -1), null === s ? void 0 : s);
              else if (null == s) i.remove(null === o ? void 0 : o);
              else if (null !== o) {
                const a = i.get(o);
                i.move(a, s), D_(a, r);
              }
            });
            for (let r = 0, o = i.length; r < o; r++) {
              const a = i.get(r).context;
              (a.index = r), (a.count = o), (a.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange((r) => {
              D_(i.get(r.currentIndex), r);
            });
          }
          static ngTemplateContextGuard(t, i) {
            return !0;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(_(fn), _(Ee), _(mo));
          }),
          (e.ɵdir = N({
            type: e,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: { ngForOf: 'ngForOf', ngForTrackBy: 'ngForTrackBy', ngForTemplate: 'ngForTemplate' },
          })),
          e
        );
      })();
      function D_(e, n) {
        e.context.$implicit = n.item;
      }
      let br = (() => {
        class e {
          constructor(t, i) {
            (this._viewContainer = t),
              (this._context = new BI()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = i);
          }
          set ngIf(t) {
            (this._context.$implicit = this._context.ngIf = t), this._updateView();
          }
          set ngIfThen(t) {
            w_('ngIfThen', t), (this._thenTemplateRef = t), (this._thenViewRef = null), this._updateView();
          }
          set ngIfElse(t) {
            w_('ngIfElse', t), (this._elseTemplateRef = t), (this._elseViewRef = null), this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context)))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
          }
          static ngTemplateContextGuard(t, i) {
            return !0;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(_(fn), _(Ee));
          }),
          (e.ɵdir = N({
            type: e,
            selectors: [['', 'ngIf', '']],
            inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' },
          })),
          e
        );
      })();
      class BI {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function w_(e, n) {
        if (n && !n.createEmbeddedView) throw new Error(`${e} must be a TemplateRef, but received '${Z(n)}'.`);
      }
      let Et = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = se({ type: e })),
          (e.ɵinj = ne({ providers: [{ provide: na, useClass: xI }] })),
          e
        );
      })();
      class yc extends class extends class {} {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      } {
        static makeCurrent() {
          !(function (e) {
            qs || (qs = e);
          })(new yc());
        }
        onAndCancel(n, t, i) {
          return (
            n.addEventListener(t, i, !1),
            () => {
              n.removeEventListener(t, i, !1);
            }
          );
        }
        dispatchEvent(n, t) {
          n.dispatchEvent(t);
        }
        remove(n) {
          n.parentNode && n.parentNode.removeChild(n);
        }
        createElement(n, t) {
          return (t = t || this.getDefaultDocument()).createElement(n);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(n) {
          return n.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(n) {
          return n instanceof DocumentFragment;
        }
        getGlobalEventTarget(n, t) {
          return 'window' === t ? window : 'document' === t ? n : 'body' === t ? n.body : null;
        }
        getBaseHref(n) {
          const t = ((vo = vo || document.querySelector('base')), vo ? vo.getAttribute('href') : null);
          return null == t
            ? null
            : (function (e) {
                (ia = ia || document.createElement('a')), ia.setAttribute('href', e);
                const n = ia.pathname;
                return '/' === n.charAt(0) ? n : `/${n}`;
              })(t);
        }
        resetBaseElement() {
          vo = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(n) {
          return (function (e, n) {
            n = encodeURIComponent(n);
            for (const t of e.split(';')) {
              const i = t.indexOf('='),
                [r, o] = -1 == i ? [t, ''] : [t.slice(0, i), t.slice(i + 1)];
              if (r.trim() === n) return decodeURIComponent(o);
            }
            return null;
          })(document.cookie, n);
        }
      }
      let ia,
        vo = null;
      const I_ = new Y('TRANSITION_ID'),
        vT = [
          {
            provide: Yu,
            useFactory: function (e, n, t) {
              return () => {
                t.get(mr).donePromise.then(() => {
                  const i = hi(),
                    r = n.querySelectorAll(`style[ng-transition="${e}"]`);
                  for (let o = 0; o < r.length; o++) i.remove(r[o]);
                });
              };
            },
            deps: [I_, ot, Ye],
            multi: !0,
          },
        ];
      class bc {
        static init() {
          !(function (e) {
            ec = e;
          })(new bc());
        }
        addToWindow(n) {
          (ie.getAngularTestability = (i, r = !0) => {
            const o = n.findTestabilityInTree(i, r);
            if (null == o) throw new Error('Could not find testability for element.');
            return o;
          }),
            (ie.getAllAngularTestabilities = () => n.getAllTestabilities()),
            (ie.getAllAngularRootElements = () => n.getAllRootElements()),
            ie.frameworkStabilizers || (ie.frameworkStabilizers = []),
            ie.frameworkStabilizers.push((i) => {
              const r = ie.getAllAngularTestabilities();
              let o = r.length,
                s = !1;
              const a = function (l) {
                (s = s || l), o--, 0 == o && i(s);
              };
              r.forEach(function (l) {
                l.whenStable(a);
              });
            });
        }
        findTestabilityInTree(n, t, i) {
          if (null == t) return null;
          const r = n.getTestability(t);
          return null != r
            ? r
            : i
            ? hi().isShadowRoot(t)
              ? this.findTestabilityInTree(n, t.host, !0)
              : this.findTestabilityInTree(n, t.parentElement, !0)
            : null;
        }
      }
      let DT = (() => {
        class e {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = X({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const ra = new Y('EventManagerPlugins');
      let oa = (() => {
        class e {
          constructor(t, i) {
            (this._zone = i),
              (this._eventNameToPlugin = new Map()),
              t.forEach((r) => (r.manager = this)),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, i, r) {
            return this._findPluginFor(i).addEventListener(t, i, r);
          }
          addGlobalEventListener(t, i, r) {
            return this._findPluginFor(i).addGlobalEventListener(t, i, r);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            const i = this._eventNameToPlugin.get(t);
            if (i) return i;
            const r = this._plugins;
            for (let o = 0; o < r.length; o++) {
              const s = r[o];
              if (s.supports(t)) return this._eventNameToPlugin.set(t, s), s;
            }
            throw new Error(`No event manager plugin found for event ${t}`);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(H(ra), H(ve));
          }),
          (e.ɵprov = X({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class T_ {
        constructor(n) {
          this._doc = n;
        }
        addGlobalEventListener(n, t, i) {
          const r = hi().getGlobalEventTarget(this._doc, n);
          if (!r) throw new Error(`Unsupported event target ${r} for event ${t}`);
          return this.addEventListener(r, t, i);
        }
      }
      let S_ = (() => {
          class e {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(t) {
              const i = new Set();
              t.forEach((r) => {
                this._stylesSet.has(r) || (this._stylesSet.add(r), i.add(r));
              }),
                this.onStylesAdded(i);
            }
            onStylesAdded(t) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = X({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Do = (() => {
          class e extends S_ {
            constructor(t) {
              super(), (this._doc = t), (this._hostNodes = new Map()), this._hostNodes.set(t.head, []);
            }
            _addStylesToHost(t, i, r) {
              t.forEach((o) => {
                const s = this._doc.createElement('style');
                (s.textContent = o), r.push(i.appendChild(s));
              });
            }
            addHost(t) {
              const i = [];
              this._addStylesToHost(this._stylesSet, t, i), this._hostNodes.set(t, i);
            }
            removeHost(t) {
              const i = this._hostNodes.get(t);
              i && i.forEach(A_), this._hostNodes.delete(t);
            }
            onStylesAdded(t) {
              this._hostNodes.forEach((i, r) => {
                this._addStylesToHost(t, r, i);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((t) => t.forEach(A_));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(H(ot));
            }),
            (e.ɵprov = X({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      function A_(e) {
        hi().remove(e);
      }
      const vc = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
        },
        Dc = /%COMP%/g;
      function sa(e, n, t) {
        for (let i = 0; i < n.length; i++) {
          let r = n[i];
          Array.isArray(r) ? sa(e, r, t) : ((r = r.replace(Dc, e)), t.push(r));
        }
        return t;
      }
      function x_(e) {
        return (n) => {
          if ('__ngUnwrap__' === n) return e;
          !1 === e(n) && (n.preventDefault(), (n.returnValue = !1));
        };
      }
      let wc = (() => {
        class e {
          constructor(t, i, r) {
            (this.eventManager = t),
              (this.sharedStylesHost = i),
              (this.appId = r),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Cc(t));
          }
          createRenderer(t, i) {
            if (!t || !i) return this.defaultRenderer;
            switch (i.encapsulation) {
              case tn.Emulated: {
                let r = this.rendererByCompId.get(i.id);
                return (
                  r ||
                    ((r = new IT(this.eventManager, this.sharedStylesHost, i, this.appId)),
                    this.rendererByCompId.set(i.id, r)),
                  r.applyToHost(t),
                  r
                );
              }
              case 1:
              case tn.ShadowDom:
                return new TT(this.eventManager, this.sharedStylesHost, t, i);
              default:
                if (!this.rendererByCompId.has(i.id)) {
                  const r = sa(i.id, i.styles, []);
                  this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(i.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(H(oa), H(Do), H(po));
          }),
          (e.ɵprov = X({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class Cc {
        constructor(n) {
          (this.eventManager = n), (this.data = Object.create(null)), (this.destroyNode = null);
        }
        destroy() {}
        createElement(n, t) {
          return t ? document.createElementNS(vc[t] || t, n) : document.createElement(n);
        }
        createComment(n) {
          return document.createComment(n);
        }
        createText(n) {
          return document.createTextNode(n);
        }
        appendChild(n, t) {
          n.appendChild(t);
        }
        insertBefore(n, t, i) {
          n && n.insertBefore(t, i);
        }
        removeChild(n, t) {
          n && n.removeChild(t);
        }
        selectRootElement(n, t) {
          let i = 'string' == typeof n ? document.querySelector(n) : n;
          if (!i) throw new Error(`The selector "${n}" did not match any elements`);
          return t || (i.textContent = ''), i;
        }
        parentNode(n) {
          return n.parentNode;
        }
        nextSibling(n) {
          return n.nextSibling;
        }
        setAttribute(n, t, i, r) {
          if (r) {
            t = r + ':' + t;
            const o = vc[r];
            o ? n.setAttributeNS(o, t, i) : n.setAttribute(t, i);
          } else n.setAttribute(t, i);
        }
        removeAttribute(n, t, i) {
          if (i) {
            const r = vc[i];
            r ? n.removeAttributeNS(r, t) : n.removeAttribute(`${i}:${t}`);
          } else n.removeAttribute(t);
        }
        addClass(n, t) {
          n.classList.add(t);
        }
        removeClass(n, t) {
          n.classList.remove(t);
        }
        setStyle(n, t, i, r) {
          r & (Ct.DashCase | Ct.Important)
            ? n.style.setProperty(t, i, r & Ct.Important ? 'important' : '')
            : (n.style[t] = i);
        }
        removeStyle(n, t, i) {
          i & Ct.DashCase ? n.style.removeProperty(t) : (n.style[t] = '');
        }
        setProperty(n, t, i) {
          n[t] = i;
        }
        setValue(n, t) {
          n.nodeValue = t;
        }
        listen(n, t, i) {
          return 'string' == typeof n
            ? this.eventManager.addGlobalEventListener(n, t, x_(i))
            : this.eventManager.addEventListener(n, t, x_(i));
        }
      }
      class IT extends Cc {
        constructor(n, t, i, r) {
          super(n), (this.component = i);
          const o = sa(r + '-' + i.id, i.styles, []);
          t.addStyles(o),
            (this.contentAttr = (function (e) {
              return '_ngcontent-%COMP%'.replace(Dc, e);
            })(r + '-' + i.id)),
            (this.hostAttr = (function (e) {
              return '_nghost-%COMP%'.replace(Dc, e);
            })(r + '-' + i.id));
        }
        applyToHost(n) {
          super.setAttribute(n, this.hostAttr, '');
        }
        createElement(n, t) {
          const i = super.createElement(n, t);
          return super.setAttribute(i, this.contentAttr, ''), i;
        }
      }
      class TT extends Cc {
        constructor(n, t, i, r) {
          super(n),
            (this.sharedStylesHost = t),
            (this.hostEl = i),
            (this.shadowRoot = i.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const o = sa(r.id, r.styles, []);
          for (let s = 0; s < o.length; s++) {
            const a = document.createElement('style');
            (a.textContent = o[s]), this.shadowRoot.appendChild(a);
          }
        }
        nodeOrShadowRoot(n) {
          return n === this.hostEl ? this.shadowRoot : n;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(n, t) {
          return super.appendChild(this.nodeOrShadowRoot(n), t);
        }
        insertBefore(n, t, i) {
          return super.insertBefore(this.nodeOrShadowRoot(n), t, i);
        }
        removeChild(n, t) {
          return super.removeChild(this.nodeOrShadowRoot(n), t);
        }
        parentNode(n) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)));
        }
      }
      let ST = (() => {
        class e extends T_ {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, i, r) {
            return t.addEventListener(i, r, !1), () => this.removeEventListener(t, i, r);
          }
          removeEventListener(t, i, r) {
            return t.removeEventListener(i, r);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(H(ot));
          }),
          (e.ɵprov = X({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const P_ = ['alt', 'control', 'meta', 'shift'],
        OT = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        F_ = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock',
        },
        RT = { alt: (e) => e.altKey, control: (e) => e.ctrlKey, meta: (e) => e.metaKey, shift: (e) => e.shiftKey };
      let xT = (() => {
        class e extends T_ {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return null != e.parseEventName(t);
          }
          addEventListener(t, i, r) {
            const o = e.parseEventName(i),
              s = e.eventCallback(o.fullKey, r, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(() => hi().onAndCancel(t, o.domEventName, s));
          }
          static parseEventName(t) {
            const i = t.toLowerCase().split('.'),
              r = i.shift();
            if (0 === i.length || ('keydown' !== r && 'keyup' !== r)) return null;
            const o = e._normalizeKey(i.pop());
            let s = '';
            if (
              (P_.forEach((l) => {
                const u = i.indexOf(l);
                u > -1 && (i.splice(u, 1), (s += l + '.'));
              }),
              (s += o),
              0 != i.length || 0 === o.length)
            )
              return null;
            const a = {};
            return (a.domEventName = r), (a.fullKey = s), a;
          }
          static getEventFullKey(t) {
            let i = '',
              r = (function (e) {
                let n = e.key;
                if (null == n) {
                  if (((n = e.keyIdentifier), null == n)) return 'Unidentified';
                  n.startsWith('U+') &&
                    ((n = String.fromCharCode(parseInt(n.substring(2), 16))),
                    3 === e.location && F_.hasOwnProperty(n) && (n = F_[n]));
                }
                return OT[n] || n;
              })(t);
            return (
              (r = r.toLowerCase()),
              ' ' === r ? (r = 'space') : '.' === r && (r = 'dot'),
              P_.forEach((o) => {
                o != r && RT[o](t) && (i += o + '.');
              }),
              (i += r),
              i
            );
          }
          static eventCallback(t, i, r) {
            return (o) => {
              e.getEventFullKey(o) === t && r.runGuarded(() => i(o));
            };
          }
          static _normalizeKey(t) {
            return 'esc' === t ? 'escape' : t;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(H(ot));
          }),
          (e.ɵprov = X({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const BT = zm(BM, 'browser', [
          { provide: Us, useValue: 'browser' },
          {
            provide: Hm,
            useValue: function () {
              yc.makeCurrent(), bc.init();
            },
            multi: !0,
          },
          {
            provide: ot,
            useFactory: function () {
              return (
                (function (e) {
                  qa = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        LT = [
          { provide: su, useValue: 'root' },
          {
            provide: $i,
            useFactory: function () {
              return new $i();
            },
            deps: [],
          },
          { provide: ra, useClass: ST, multi: !0, deps: [ot, ve, Us] },
          { provide: ra, useClass: xT, multi: !0, deps: [ot] },
          { provide: wc, useClass: wc, deps: [oa, Do, po] },
          { provide: Su, useExisting: wc },
          { provide: S_, useExisting: Do },
          { provide: Do, useClass: Do, deps: [ot] },
          { provide: Xu, useClass: Xu, deps: [ve] },
          { provide: oa, useClass: oa, deps: [ra, ve] },
          { provide: class {}, useClass: DT, deps: [] },
        ];
      let HT = (() => {
        class e {
          constructor(t) {
            if (t)
              throw new Error(
                'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
              );
          }
          static withServerTransition(t) {
            return {
              ngModule: e,
              providers: [{ provide: po, useValue: t.appId }, { provide: I_, useExisting: po }, vT],
            };
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(H(e, 12));
          }),
          (e.ɵmod = se({ type: e })),
          (e.ɵinj = ne({ providers: LT, imports: [Et, WM] })),
          e
        );
      })();
      'undefined' != typeof window && window;
      const L_ = new ge((e) => e.complete());
      function H_(e) {
        return e
          ? (function (e) {
              return new ge((n) => e.schedule(() => n.complete()));
            })(e)
          : L_;
      }
      function wo(...e) {
        let n = e[e.length - 1];
        return Ni(n) ? (e.pop(), Ra(e, n)) : Ir(e);
      }
      function dt(e, n, t, i) {
        return (
          te(t) && ((i = t), (t = void 0)),
          i
            ? dt(e, n, t).pipe(pt((r) => (Bt(r) ? i(...r) : i(r))))
            : new ge((r) => {
                j_(
                  e,
                  n,
                  function (s) {
                    r.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : s);
                  },
                  r,
                  t
                );
              })
        );
      }
      function j_(e, n, t, i, r) {
        let o;
        if (
          (function (e) {
            return e && 'function' == typeof e.addEventListener && 'function' == typeof e.removeEventListener;
          })(e)
        ) {
          const s = e;
          e.addEventListener(n, t, r), (o = () => s.removeEventListener(n, t, r));
        } else if (
          (function (e) {
            return e && 'function' == typeof e.on && 'function' == typeof e.off;
          })(e)
        ) {
          const s = e;
          e.on(n, t), (o = () => s.off(n, t));
        } else if (
          (function (e) {
            return e && 'function' == typeof e.addListener && 'function' == typeof e.removeListener;
          })(e)
        ) {
          const s = e;
          e.addListener(n, t), (o = () => s.removeListener(n, t));
        } else {
          if (!e || !e.length) throw new TypeError('Invalid event target');
          for (let s = 0, a = e.length; s < a; s++) j_(e[s], n, t, i, r);
        }
        i.add(o);
      }
      class tS extends he {
        constructor(n, t) {
          super();
        }
        schedule(n, t = 0) {
          return this;
        }
      }
      let G_ = (() => {
        class e {
          constructor(t, i = e.now) {
            (this.SchedulerAction = t), (this.now = i);
          }
          schedule(t, i = 0, r) {
            return new this.SchedulerAction(this, t).schedule(r, i);
          }
        }
        return (e.now = () => Date.now()), e;
      })();
      class Kn extends G_ {
        constructor(n, t = G_.now) {
          super(n, () => (Kn.delegate && Kn.delegate !== this ? Kn.delegate.now() : t())),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(n, t = 0, i) {
          return Kn.delegate && Kn.delegate !== this ? Kn.delegate.schedule(n, t, i) : super.schedule(n, t, i);
        }
        flush(n) {
          const { actions: t } = this;
          if (this.active) return void t.push(n);
          let i;
          this.active = !0;
          do {
            if ((i = n.execute(n.state, n.delay))) break;
          } while ((n = t.shift()));
          if (((this.active = !1), i)) {
            for (; (n = t.shift()); ) n.unsubscribe();
            throw i;
          }
        }
      }
      const $_ = new Kn(
        class extends tS {
          constructor(n, t) {
            super(n, t), (this.scheduler = n), (this.work = t), (this.pending = !1);
          }
          schedule(n, t = 0) {
            if (this.closed) return this;
            this.state = n;
            const i = this.id,
              r = this.scheduler;
            return (
              null != i && (this.id = this.recycleAsyncId(r, i, t)),
              (this.pending = !0),
              (this.delay = t),
              (this.id = this.id || this.requestAsyncId(r, this.id, t)),
              this
            );
          }
          requestAsyncId(n, t, i = 0) {
            return setInterval(n.flush.bind(n, this), i);
          }
          recycleAsyncId(n, t, i = 0) {
            if (null !== i && this.delay === i && !1 === this.pending) return t;
            clearInterval(t);
          }
          execute(n, t) {
            if (this.closed) return new Error('executing a cancelled action');
            this.pending = !1;
            const i = this._execute(n, t);
            if (i) return i;
            !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
          }
          _execute(n, t) {
            let r,
              i = !1;
            try {
              this.work(n);
            } catch (o) {
              (i = !0), (r = (!!o && o) || new Error(o));
            }
            if (i) return this.unsubscribe(), r;
          }
          _unsubscribe() {
            const n = this.id,
              t = this.scheduler,
              i = t.actions,
              r = i.indexOf(this);
            (this.work = null),
              (this.state = null),
              (this.pending = !1),
              (this.scheduler = null),
              -1 !== r && i.splice(r, 1),
              null != n && (this.id = this.recycleAsyncId(t, n, null)),
              (this.delay = null);
          }
        }
      );
      function U_(e) {
        return !Bt(e) && e - parseFloat(e) + 1 >= 0;
      }
      function iS(e) {
        const { index: n, period: t, subscriber: i } = e;
        if ((i.next(n), !i.closed)) {
          if (-1 === t) return i.complete();
          (e.index = n + 1), this.schedule(e, t);
        }
      }
      class Ec extends $ {
        notifyNext(n, t, i, r, o) {
          this.destination.next(t);
        }
        notifyError(n, t) {
          this.destination.error(n);
        }
        notifyComplete(n) {
          this.destination.complete();
        }
      }
      class rS extends $ {
        constructor(n, t, i) {
          super(), (this.parent = n), (this.outerValue = t), (this.outerIndex = i), (this.index = 0);
        }
        _next(n) {
          this.parent.notifyNext(this.outerValue, n, this.outerIndex, this.index++, this);
        }
        _error(n) {
          this.parent.notifyError(n, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      function Mc(e, n, t, i, r = new rS(e, t, i)) {
        if (!r.closed) return n instanceof ge ? n.subscribe(r) : Oa(n)(r);
      }
      class oS {
        call(n, t) {
          return t.subscribe(new sS(n));
        }
      }
      class sS extends Ec {
        constructor(n) {
          super(n), (this.hasFirst = !1), (this.observables = []), (this.subscriptions = []);
        }
        _next(n) {
          this.observables.push(n);
        }
        _complete() {
          const n = this.observables,
            t = n.length;
          if (0 === t) this.destination.complete();
          else {
            for (let i = 0; i < t && !this.hasFirst; i++) {
              const o = Mc(this, n[i], void 0, i);
              this.subscriptions && this.subscriptions.push(o), this.add(o);
            }
            this.observables = null;
          }
        }
        notifyNext(n, t, i) {
          if (!this.hasFirst) {
            this.hasFirst = !0;
            for (let r = 0; r < this.subscriptions.length; r++)
              if (r !== i) {
                let o = this.subscriptions[r];
                o.unsubscribe(), this.remove(o);
              }
            this.subscriptions = null;
          }
          this.destination.next(t);
        }
      }
      function Sn() {}
      function aa(...e) {
        const n = e[e.length - 1];
        return 'function' == typeof n && e.pop(), Ir(e, void 0).lift(new uS(n));
      }
      new ge(Sn);
      class uS {
        constructor(n) {
          this.resultSelector = n;
        }
        call(n, t) {
          return t.subscribe(new cS(n, this.resultSelector));
        }
      }
      class cS extends $ {
        constructor(n, t, i = Object.create(null)) {
          super(n),
            (this.resultSelector = t),
            (this.iterators = []),
            (this.active = 0),
            (this.resultSelector = 'function' == typeof t ? t : void 0);
        }
        _next(n) {
          const t = this.iterators;
          Bt(n)
            ? t.push(new fS(n))
            : t.push('function' == typeof n[Pn] ? new dS(n[Pn]()) : new hS(this.destination, this, n));
        }
        _complete() {
          const n = this.iterators,
            t = n.length;
          if ((this.unsubscribe(), 0 !== t)) {
            this.active = t;
            for (let i = 0; i < t; i++) {
              let r = n[i];
              r.stillUnsubscribed ? this.destination.add(r.subscribe()) : this.active--;
            }
          } else this.destination.complete();
        }
        notifyInactive() {
          this.active--, 0 === this.active && this.destination.complete();
        }
        checkIterators() {
          const n = this.iterators,
            t = n.length,
            i = this.destination;
          for (let s = 0; s < t; s++) {
            let a = n[s];
            if ('function' == typeof a.hasValue && !a.hasValue()) return;
          }
          let r = !1;
          const o = [];
          for (let s = 0; s < t; s++) {
            let a = n[s],
              l = a.next();
            if ((a.hasCompleted() && (r = !0), l.done)) return void i.complete();
            o.push(l.value);
          }
          this.resultSelector ? this._tryresultSelector(o) : i.next(o), r && i.complete();
        }
        _tryresultSelector(n) {
          let t;
          try {
            t = this.resultSelector.apply(this, n);
          } catch (i) {
            return void this.destination.error(i);
          }
          this.destination.next(t);
        }
      }
      class dS {
        constructor(n) {
          (this.iterator = n), (this.nextResult = n.next());
        }
        hasValue() {
          return !0;
        }
        next() {
          const n = this.nextResult;
          return (this.nextResult = this.iterator.next()), n;
        }
        hasCompleted() {
          const n = this.nextResult;
          return Boolean(n && n.done);
        }
      }
      class fS {
        constructor(n) {
          (this.array = n), (this.index = 0), (this.length = 0), (this.length = n.length);
        }
        [Pn]() {
          return this;
        }
        next(n) {
          const t = this.index++;
          return t < this.length ? { value: this.array[t], done: !1 } : { value: null, done: !0 };
        }
        hasValue() {
          return this.array.length > this.index;
        }
        hasCompleted() {
          return this.array.length === this.index;
        }
      }
      class hS extends Po {
        constructor(n, t, i) {
          super(n),
            (this.parent = t),
            (this.observable = i),
            (this.stillUnsubscribed = !0),
            (this.buffer = []),
            (this.isComplete = !1);
        }
        [Pn]() {
          return this;
        }
        next() {
          const n = this.buffer;
          return 0 === n.length && this.isComplete ? { value: null, done: !0 } : { value: n.shift(), done: !1 };
        }
        hasValue() {
          return this.buffer.length > 0;
        }
        hasCompleted() {
          return 0 === this.buffer.length && this.isComplete;
        }
        notifyComplete() {
          this.buffer.length > 0 ? ((this.isComplete = !0), this.parent.notifyInactive()) : this.destination.complete();
        }
        notifyNext(n) {
          this.buffer.push(n), this.parent.checkIterators();
        }
        subscribe() {
          return Fo(this.observable, new ko(this));
        }
      }
      function He(e) {
        return (n) => n.lift(new mS(e));
      }
      class mS {
        constructor(n) {
          this.notifier = n;
        }
        call(n, t) {
          const i = new _S(n),
            r = Fo(this.notifier, new ko(i));
          return r && !i.seenValue ? (i.add(r), t.subscribe(i)) : i;
        }
      }
      class _S extends Po {
        constructor(n) {
          super(n), (this.seenValue = !1);
        }
        notifyNext() {
          (this.seenValue = !0), this.complete();
        }
        notifyComplete() {}
      }
      function vr(e, n) {
        return function (i) {
          return i.lift(new yS(e, n));
        };
      }
      class yS {
        constructor(n, t) {
          (this.predicate = n), (this.thisArg = t);
        }
        call(n, t) {
          return t.subscribe(new bS(n, this.predicate, this.thisArg));
        }
      }
      class bS extends $ {
        constructor(n, t, i) {
          super(n), (this.predicate = t), (this.thisArg = i), (this.count = 0);
        }
        _next(n) {
          let t;
          try {
            t = this.predicate.call(this.thisArg, n, this.count++);
          } catch (i) {
            return void this.destination.error(i);
          }
          t && this.destination.next(n);
        }
      }
      const vS = (() => {
        function e() {
          return (
            Error.call(this), (this.message = 'argument out of range'), (this.name = 'ArgumentOutOfRangeError'), this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
      function An(e) {
        return (n) => (0 === e ? H_() : n.lift(new DS(e)));
      }
      class DS {
        constructor(n) {
          if (((this.total = n), this.total < 0)) throw new vS();
        }
        call(n, t) {
          return t.subscribe(new wS(n, this.total));
        }
      }
      class wS extends $ {
        constructor(n, t) {
          super(n), (this.total = t), (this.count = 0);
        }
        _next(n) {
          const t = this.total,
            i = ++this.count;
          i <= t && (this.destination.next(n), i === t && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function Ac(e, n) {
        return 'function' == typeof n
          ? (t) => t.pipe(Ac((i, r) => xo(e(i, r)).pipe(pt((o, s) => n(i, o, r, s)))))
          : (t) => t.lift(new ES(e));
      }
      class ES {
        constructor(n) {
          this.project = n;
        }
        call(n, t) {
          return t.subscribe(new MS(n, this.project));
        }
      }
      class MS extends Po {
        constructor(n, t) {
          super(n), (this.project = t), (this.index = 0);
        }
        _next(n) {
          let t;
          const i = this.index++;
          try {
            t = this.project(n, i);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(t);
        }
        _innerSub(n) {
          const t = this.innerSubscription;
          t && t.unsubscribe();
          const i = new ko(this),
            r = this.destination;
          r.add(i), (this.innerSubscription = Fo(n, i)), this.innerSubscription !== i && r.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: n } = this;
          (!n || n.closed) && super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = void 0;
        }
        notifyComplete() {
          (this.innerSubscription = void 0), this.isStopped && super._complete();
        }
        notifyNext(n) {
          this.destination.next(n);
        }
      }
      class IS {
        constructor(n, t, i) {
          (this.nextOrObserver = n), (this.error = t), (this.complete = i);
        }
        call(n, t) {
          return t.subscribe(new TS(n, this.nextOrObserver, this.error, this.complete));
        }
      }
      class TS extends $ {
        constructor(n, t, i, r) {
          super(n),
            (this._tapNext = Sn),
            (this._tapError = Sn),
            (this._tapComplete = Sn),
            (this._tapError = i || Sn),
            (this._tapComplete = r || Sn),
            te(t)
              ? ((this._context = this), (this._tapNext = t))
              : t &&
                ((this._context = t),
                (this._tapNext = t.next || Sn),
                (this._tapError = t.error || Sn),
                (this._tapComplete = t.complete || Sn));
        }
        _next(n) {
          try {
            this._tapNext.call(this._context, n);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(n);
        }
        _error(n) {
          try {
            this._tapError.call(this._context, n);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(n);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (n) {
            return void this.destination.error(n);
          }
          return this.destination.complete();
        }
      }
      function Oc(...e) {
        return (n) => {
          let t;
          return 'function' == typeof e[e.length - 1] && (t = e.pop()), n.lift(new SS(e, t));
        };
      }
      class SS {
        constructor(n, t) {
          (this.observables = n), (this.project = t);
        }
        call(n, t) {
          return t.subscribe(new AS(n, this.observables, this.project));
        }
      }
      class AS extends Ec {
        constructor(n, t, i) {
          super(n), (this.observables = t), (this.project = i), (this.toRespond = []);
          const r = t.length;
          this.values = new Array(r);
          for (let o = 0; o < r; o++) this.toRespond.push(o);
          for (let o = 0; o < r; o++) this.add(Mc(this, t[o], void 0, o));
        }
        notifyNext(n, t, i) {
          this.values[i] = t;
          const r = this.toRespond;
          if (r.length > 0) {
            const o = r.indexOf(i);
            -1 !== o && r.splice(o, 1);
          }
        }
        notifyComplete() {}
        _next(n) {
          if (0 === this.toRespond.length) {
            const t = [n, ...this.values];
            this.project ? this._tryProject(t) : this.destination.next(t);
          }
        }
        _tryProject(n) {
          let t;
          try {
            t = this.project.apply(this, n);
          } catch (i) {
            return void this.destination.error(i);
          }
          this.destination.next(t);
        }
      }
      class Jt {
        constructor(n, t, i) {
          (this.kind = n), (this.value = t), (this.error = i), (this.hasValue = 'N' === n);
        }
        observe(n) {
          switch (this.kind) {
            case 'N':
              return n.next && n.next(this.value);
            case 'E':
              return n.error && n.error(this.error);
            case 'C':
              return n.complete && n.complete();
          }
        }
        do(n, t, i) {
          switch (this.kind) {
            case 'N':
              return n && n(this.value);
            case 'E':
              return t && t(this.error);
            case 'C':
              return i && i();
          }
        }
        accept(n, t, i) {
          return n && 'function' == typeof n.next ? this.observe(n) : this.do(n, t, i);
        }
        toObservable() {
          switch (this.kind) {
            case 'N':
              return wo(this.value);
            case 'E':
              return (function (e, n) {
                return new ge((t) => t.error(e));
              })(this.error);
            case 'C':
              return H_();
          }
          throw new Error('unexpected notification kind value');
        }
        static createNext(n) {
          return void 0 !== n ? new Jt('N', n) : Jt.undefinedValueNotification;
        }
        static createError(n) {
          return new Jt('E', void 0, n);
        }
        static createComplete() {
          return Jt.completeNotification;
        }
      }
      function la(e, n) {
        return new ge((t) => {
          const i = e.length;
          if (0 === i) return void t.complete();
          const r = new Array(i);
          let o = 0,
            s = 0;
          for (let a = 0; a < i; a++) {
            const l = xo(e[a]);
            let u = !1;
            t.add(
              l.subscribe({
                next: (c) => {
                  u || ((u = !0), s++), (r[a] = c);
                },
                error: (c) => t.error(c),
                complete: () => {
                  o++,
                    (o === i || !u) &&
                      (s === i && t.next(n ? n.reduce((c, d, f) => ((c[d] = r[f]), c), {}) : r), t.complete());
                },
              })
            );
          }
        });
      }
      (Jt.completeNotification = new Jt('C')), (Jt.undefinedValueNotification = new Jt('N', void 0));
      let Q_ = (() => {
          class e {
            constructor(t, i) {
              (this._renderer = t), (this._elementRef = i), (this.onChange = (r) => {}), (this.onTouched = () => {});
            }
            setProperty(t, i) {
              this._renderer.setProperty(this._elementRef.nativeElement, t, i);
            }
            registerOnTouched(t) {
              this.onTouched = t;
            }
            registerOnChange(t) {
              this.onChange = t;
            }
            setDisabledState(t) {
              this.setProperty('disabled', t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(_(Mn), _(_e));
            }),
            (e.ɵdir = N({ type: e })),
            e
          );
        })(),
        gi = (() => {
          class e extends Q_ {}
          return (
            (e.ɵfac = (function () {
              let n;
              return function (i) {
                return (n || (n = Dt(e)))(i || e);
              };
            })()),
            (e.ɵdir = N({ type: e, features: [ae] })),
            e
          );
        })();
      const Ft = new Y('NgValueAccessor'),
        GS = { provide: Ft, useExisting: J(() => ua), multi: !0 },
        US = new Y('CompositionEventMode');
      let ua = (() => {
        class e extends Q_ {
          constructor(t, i, r) {
            super(t, i),
              (this._compositionMode = r),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function () {
                  const e = hi() ? hi().getUserAgent() : '';
                  return /android (\d+)/.test(e.toLowerCase());
                })());
          }
          writeValue(t) {
            this.setProperty('value', null == t ? '' : t);
          }
          _handleInput(t) {
            (!this._compositionMode || (this._compositionMode && !this._composing)) && this.onChange(t);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(t) {
            (this._composing = !1), this._compositionMode && this.onChange(t);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(_(Mn), _(_e), _(US, 8));
          }),
          (e.ɵdir = N({
            type: e,
            selectors: [
              ['input', 'formControlName', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControlName', ''],
              ['input', 'formControl', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControl', ''],
              ['input', 'ngModel', '', 3, 'type', 'checkbox'],
              ['textarea', 'ngModel', ''],
              ['', 'ngDefaultControl', ''],
            ],
            hostBindings: function (t, i) {
              1 & t &&
                ee('input', function (o) {
                  return i._handleInput(o.target.value);
                })('blur', function () {
                  return i.onTouched();
                })('compositionstart', function () {
                  return i._compositionStart();
                })('compositionend', function (o) {
                  return i._compositionEnd(o.target.value);
                });
            },
            features: [ce([GS]), ae],
          })),
          e
        );
      })();
      function Qn(e) {
        return null == e || 0 === e.length;
      }
      function X_(e) {
        return null != e && 'number' == typeof e.length;
      }
      const Ke = new Y('NgValidators'),
        Jn = new Y('NgAsyncValidators'),
        WS = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class hn {
        static min(n) {
          return (function (e) {
            return (n) => {
              if (Qn(n.value) || Qn(e)) return null;
              const t = parseFloat(n.value);
              return !isNaN(t) && t < e ? { min: { min: e, actual: n.value } } : null;
            };
          })(n);
        }
        static max(n) {
          return (function (e) {
            return (n) => {
              if (Qn(n.value) || Qn(e)) return null;
              const t = parseFloat(n.value);
              return !isNaN(t) && t > e ? { max: { max: e, actual: n.value } } : null;
            };
          })(n);
        }
        static required(n) {
          return (function (e) {
            return Qn(e.value) ? { required: !0 } : null;
          })(n);
        }
        static requiredTrue(n) {
          return (function (e) {
            return !0 === e.value ? null : { required: !0 };
          })(n);
        }
        static email(n) {
          return (function (e) {
            return Qn(e.value) || WS.test(e.value) ? null : { email: !0 };
          })(n);
        }
        static minLength(n) {
          return (function (e) {
            return (n) =>
              Qn(n.value) || !X_(n.value)
                ? null
                : n.value.length < e
                ? { minlength: { requiredLength: e, actualLength: n.value.length } }
                : null;
          })(n);
        }
        static maxLength(n) {
          return (function (e) {
            return (n) =>
              X_(n.value) && n.value.length > e
                ? { maxlength: { requiredLength: e, actualLength: n.value.length } }
                : null;
          })(n);
        }
        static pattern(n) {
          return (function (e) {
            if (!e) return Co;
            let n, t;
            return (
              'string' == typeof e
                ? ((t = ''),
                  '^' !== e.charAt(0) && (t += '^'),
                  (t += e),
                  '$' !== e.charAt(e.length - 1) && (t += '$'),
                  (n = new RegExp(t)))
                : ((t = e.toString()), (n = e)),
              (i) => {
                if (Qn(i.value)) return null;
                const r = i.value;
                return n.test(r) ? null : { pattern: { requiredPattern: t, actualValue: r } };
              }
            );
          })(n);
        }
        static nullValidator(n) {
          return null;
        }
        static compose(n) {
          return p0(n);
        }
        static composeAsync(n) {
          return g0(n);
        }
      }
      function Co(e) {
        return null;
      }
      function u0(e) {
        return null != e;
      }
      function c0(e) {
        const n = Ts(e) ? xo(e) : e;
        return Hp(n), n;
      }
      function d0(e) {
        let n = {};
        return (
          e.forEach((t) => {
            n = null != t ? Object.assign(Object.assign({}, n), t) : n;
          }),
          0 === Object.keys(n).length ? null : n
        );
      }
      function f0(e, n) {
        return n.map((t) => t(e));
      }
      function h0(e) {
        return e.map((n) =>
          (function (e) {
            return !e.validate;
          })(n)
            ? n
            : (t) => n.validate(t)
        );
      }
      function p0(e) {
        if (!e) return null;
        const n = e.filter(u0);
        return 0 == n.length
          ? null
          : function (t) {
              return d0(f0(t, n));
            };
      }
      function xc(e) {
        return null != e ? p0(h0(e)) : null;
      }
      function g0(e) {
        if (!e) return null;
        const n = e.filter(u0);
        return 0 == n.length
          ? null
          : function (t) {
              return (function (...e) {
                if (1 === e.length) {
                  const n = e[0];
                  if (Bt(n)) return la(n, null);
                  if (Nr(n) && Object.getPrototypeOf(n) === Object.prototype) {
                    const t = Object.keys(n);
                    return la(
                      t.map((i) => n[i]),
                      t
                    );
                  }
                }
                if ('function' == typeof e[e.length - 1]) {
                  const n = e.pop();
                  return la((e = 1 === e.length && Bt(e[0]) ? e[0] : e), null).pipe(pt((t) => n(...t)));
                }
                return la(e, null);
              })(f0(t, n).map(c0)).pipe(pt(d0));
            };
      }
      function kc(e) {
        return null != e ? g0(h0(e)) : null;
      }
      function m0(e, n) {
        return null === e ? [n] : Array.isArray(e) ? [...e, n] : [e, n];
      }
      function _0(e) {
        return e._rawValidators;
      }
      function y0(e) {
        return e._rawAsyncValidators;
      }
      function Pc(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function ca(e, n) {
        return Array.isArray(e) ? e.includes(n) : e === n;
      }
      function b0(e, n) {
        const t = Pc(n);
        return (
          Pc(e).forEach((r) => {
            ca(t, r) || t.push(r);
          }),
          t
        );
      }
      function v0(e, n) {
        return Pc(n).filter((t) => !ca(e, t));
      }
      class D0 {
        constructor() {
          (this._rawValidators = []), (this._rawAsyncValidators = []), (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(n) {
          (this._rawValidators = n || []), (this._composedValidatorFn = xc(this._rawValidators));
        }
        _setAsyncValidators(n) {
          (this._rawAsyncValidators = n || []), (this._composedAsyncValidatorFn = kc(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(n) {
          this._onDestroyCallbacks.push(n);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((n) => n()), (this._onDestroyCallbacks = []);
        }
        reset(n) {
          this.control && this.control.reset(n);
        }
        hasError(n, t) {
          return !!this.control && this.control.hasError(n, t);
        }
        getError(n, t) {
          return this.control ? this.control.getError(n, t) : null;
        }
      }
      class Xn extends D0 {
        constructor() {
          super(...arguments), (this._parent = null), (this.name = null), (this.valueAccessor = null);
        }
      }
      class st extends D0 {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class w0 {
        constructor(n) {
          this._cd = n;
        }
        is(n) {
          var t, i, r;
          return 'submitted' === n
            ? !!(null === (t = this._cd) || void 0 === t ? void 0 : t.submitted)
            : !!(null === (r = null === (i = this._cd) || void 0 === i ? void 0 : i.control) || void 0 === r
                ? void 0
                : r[n]);
        }
      }
      let C0 = (() => {
          class e extends w0 {
            constructor(t) {
              super(t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(_(Xn, 2));
            }),
            (e.ɵdir = N({
              type: e,
              selectors: [
                ['', 'formControlName', ''],
                ['', 'ngModel', ''],
                ['', 'formControl', ''],
              ],
              hostVars: 14,
              hostBindings: function (t, i) {
                2 & t &&
                  W('ng-untouched', i.is('untouched'))('ng-touched', i.is('touched'))('ng-pristine', i.is('pristine'))(
                    'ng-dirty',
                    i.is('dirty')
                  )('ng-valid', i.is('valid'))('ng-invalid', i.is('invalid'))('ng-pending', i.is('pending'));
              },
              features: [ae],
            })),
            e
          );
        })(),
        N0 = (() => {
          class e extends w0 {
            constructor(t) {
              super(t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(_(st, 10));
            }),
            (e.ɵdir = N({
              type: e,
              selectors: [
                ['', 'formGroupName', ''],
                ['', 'formArrayName', ''],
                ['', 'ngModelGroup', ''],
                ['', 'formGroup', ''],
                ['form', 3, 'ngNoForm', ''],
                ['', 'ngForm', ''],
              ],
              hostVars: 16,
              hostBindings: function (t, i) {
                2 & t &&
                  W('ng-untouched', i.is('untouched'))('ng-touched', i.is('touched'))('ng-pristine', i.is('pristine'))(
                    'ng-dirty',
                    i.is('dirty')
                  )('ng-valid', i.is('valid'))('ng-invalid', i.is('invalid'))('ng-pending', i.is('pending'))(
                    'ng-submitted',
                    i.is('submitted')
                  );
              },
              features: [ae],
            })),
            e
          );
        })();
      function No(e, n) {
        Bc(e, n),
          n.valueAccessor.writeValue(e.value),
          (function (e, n) {
            n.valueAccessor.registerOnChange((t) => {
              (e._pendingValue = t),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                'change' === e.updateOn && E0(e, n);
            });
          })(e, n),
          (function (e, n) {
            const t = (i, r) => {
              n.valueAccessor.writeValue(i), r && n.viewToModelUpdate(i);
            };
            e.registerOnChange(t),
              n._registerOnDestroy(() => {
                e._unregisterOnChange(t);
              });
          })(e, n),
          (function (e, n) {
            n.valueAccessor.registerOnTouched(() => {
              (e._pendingTouched = !0),
                'blur' === e.updateOn && e._pendingChange && E0(e, n),
                'submit' !== e.updateOn && e.markAsTouched();
            });
          })(e, n),
          (function (e, n) {
            if (n.valueAccessor.setDisabledState) {
              const t = (i) => {
                n.valueAccessor.setDisabledState(i);
              };
              e.registerOnDisabledChange(t),
                n._registerOnDestroy(() => {
                  e._unregisterOnDisabledChange(t);
                });
            }
          })(e, n);
      }
      function ha(e, n, t = !0) {
        const i = () => {};
        n.valueAccessor && (n.valueAccessor.registerOnChange(i), n.valueAccessor.registerOnTouched(i)),
          ga(e, n),
          e && (n._invokeOnDestroyCallbacks(), e._registerOnCollectionChange(() => {}));
      }
      function pa(e, n) {
        e.forEach((t) => {
          t.registerOnValidatorChange && t.registerOnValidatorChange(n);
        });
      }
      function Bc(e, n) {
        const t = _0(e);
        null !== n.validator ? e.setValidators(m0(t, n.validator)) : 'function' == typeof t && e.setValidators([t]);
        const i = y0(e);
        null !== n.asyncValidator
          ? e.setAsyncValidators(m0(i, n.asyncValidator))
          : 'function' == typeof i && e.setAsyncValidators([i]);
        const r = () => e.updateValueAndValidity();
        pa(n._rawValidators, r), pa(n._rawAsyncValidators, r);
      }
      function ga(e, n) {
        let t = !1;
        if (null !== e) {
          if (null !== n.validator) {
            const r = _0(e);
            if (Array.isArray(r) && r.length > 0) {
              const o = r.filter((s) => s !== n.validator);
              o.length !== r.length && ((t = !0), e.setValidators(o));
            }
          }
          if (null !== n.asyncValidator) {
            const r = y0(e);
            if (Array.isArray(r) && r.length > 0) {
              const o = r.filter((s) => s !== n.asyncValidator);
              o.length !== r.length && ((t = !0), e.setAsyncValidators(o));
            }
          }
        }
        const i = () => {};
        return pa(n._rawValidators, i), pa(n._rawAsyncValidators, i), t;
      }
      function E0(e, n) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          n.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function ma(e, n) {
        const t = e.indexOf(n);
        t > -1 && e.splice(t, 1);
      }
      const Eo = 'VALID',
        _a = 'INVALID',
        Dr = 'PENDING',
        Mo = 'DISABLED';
      function jc(e) {
        return ($c(e) ? e.validators : e) || null;
      }
      function T0(e) {
        return Array.isArray(e) ? xc(e) : e || null;
      }
      function Gc(e, n) {
        return ($c(n) ? n.asyncValidators : e) || null;
      }
      function S0(e) {
        return Array.isArray(e) ? kc(e) : e || null;
      }
      function $c(e) {
        return null != e && !Array.isArray(e) && 'object' == typeof e;
      }
      class Uc {
        constructor(n, t) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            (this._rawValidators = n),
            (this._rawAsyncValidators = t),
            (this._composedValidatorFn = T0(this._rawValidators)),
            (this._composedAsyncValidatorFn = S0(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(n) {
          this._rawValidators = this._composedValidatorFn = n;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(n) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = n;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === Eo;
        }
        get invalid() {
          return this.status === _a;
        }
        get pending() {
          return this.status == Dr;
        }
        get disabled() {
          return this.status === Mo;
        }
        get enabled() {
          return this.status !== Mo;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
        }
        setValidators(n) {
          (this._rawValidators = n), (this._composedValidatorFn = T0(n));
        }
        setAsyncValidators(n) {
          (this._rawAsyncValidators = n), (this._composedAsyncValidatorFn = S0(n));
        }
        addValidators(n) {
          this.setValidators(b0(n, this._rawValidators));
        }
        addAsyncValidators(n) {
          this.setAsyncValidators(b0(n, this._rawAsyncValidators));
        }
        removeValidators(n) {
          this.setValidators(v0(n, this._rawValidators));
        }
        removeAsyncValidators(n) {
          this.setAsyncValidators(v0(n, this._rawAsyncValidators));
        }
        hasValidator(n) {
          return ca(this._rawValidators, n);
        }
        hasAsyncValidator(n) {
          return ca(this._rawAsyncValidators, n);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(n = {}) {
          (this.touched = !0), this._parent && !n.onlySelf && this._parent.markAsTouched(n);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }), this._forEachChild((n) => n.markAllAsTouched());
        }
        markAsUntouched(n = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((t) => {
              t.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !n.onlySelf && this._parent._updateTouched(n);
        }
        markAsDirty(n = {}) {
          (this.pristine = !1), this._parent && !n.onlySelf && this._parent.markAsDirty(n);
        }
        markAsPristine(n = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((t) => {
              t.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !n.onlySelf && this._parent._updatePristine(n);
        }
        markAsPending(n = {}) {
          (this.status = Dr),
            !1 !== n.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !n.onlySelf && this._parent.markAsPending(n);
        }
        disable(n = {}) {
          const t = this._parentMarkedDirty(n.onlySelf);
          (this.status = Mo),
            (this.errors = null),
            this._forEachChild((i) => {
              i.disable(Object.assign(Object.assign({}, n), { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== n.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._updateAncestors(Object.assign(Object.assign({}, n), { skipPristineCheck: t })),
            this._onDisabledChange.forEach((i) => i(!0));
        }
        enable(n = {}) {
          const t = this._parentMarkedDirty(n.onlySelf);
          (this.status = Eo),
            this._forEachChild((i) => {
              i.enable(Object.assign(Object.assign({}, n), { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: n.emitEvent }),
            this._updateAncestors(Object.assign(Object.assign({}, n), { skipPristineCheck: t })),
            this._onDisabledChange.forEach((i) => i(!1));
        }
        _updateAncestors(n) {
          this._parent &&
            !n.onlySelf &&
            (this._parent.updateValueAndValidity(n),
            n.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(n) {
          this._parent = n;
        }
        updateValueAndValidity(n = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === Eo || this.status === Dr) && this._runAsyncValidator(n.emitEvent)),
            !1 !== n.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._parent && !n.onlySelf && this._parent.updateValueAndValidity(n);
        }
        _updateTreeValidity(n = { emitEvent: !0 }) {
          this._forEachChild((t) => t._updateTreeValidity(n)),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: n.emitEvent });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? Mo : Eo;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(n) {
          if (this.asyncValidator) {
            (this.status = Dr), (this._hasOwnPendingAsyncValidator = !0);
            const t = c0(this.asyncValidator(this));
            this._asyncValidationSubscription = t.subscribe((i) => {
              (this._hasOwnPendingAsyncValidator = !1), this.setErrors(i, { emitEvent: n });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(), (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(n, t = {}) {
          (this.errors = n), this._updateControlsErrors(!1 !== t.emitEvent);
        }
        get(n) {
          return (function (e, n, t) {
            if (null == n || (Array.isArray(n) || (n = n.split('.')), Array.isArray(n) && 0 === n.length)) return null;
            let i = e;
            return (
              n.forEach((r) => {
                i =
                  i instanceof ya
                    ? i.controls.hasOwnProperty(r)
                      ? i.controls[r]
                      : null
                    : (i instanceof rA && i.at(r)) || null;
              }),
              i
            );
          })(this, n);
        }
        getError(n, t) {
          const i = t ? this.get(t) : this;
          return i && i.errors ? i.errors[n] : null;
        }
        hasError(n, t) {
          return !!this.getError(n, t);
        }
        get root() {
          let n = this;
          for (; n._parent; ) n = n._parent;
          return n;
        }
        _updateControlsErrors(n) {
          (this.status = this._calculateStatus()),
            n && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(n);
        }
        _initObservables() {
          (this.valueChanges = new Q()), (this.statusChanges = new Q());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? Mo
            : this.errors
            ? _a
            : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Dr)
            ? Dr
            : this._anyControlsHaveStatus(_a)
            ? _a
            : Eo;
        }
        _anyControlsHaveStatus(n) {
          return this._anyControls((t) => t.status === n);
        }
        _anyControlsDirty() {
          return this._anyControls((n) => n.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((n) => n.touched);
        }
        _updatePristine(n = {}) {
          (this.pristine = !this._anyControlsDirty()), this._parent && !n.onlySelf && this._parent._updatePristine(n);
        }
        _updateTouched(n = {}) {
          (this.touched = this._anyControlsTouched()), this._parent && !n.onlySelf && this._parent._updateTouched(n);
        }
        _isBoxedValue(n) {
          return 'object' == typeof n && null !== n && 2 === Object.keys(n).length && 'value' in n && 'disabled' in n;
        }
        _registerOnCollectionChange(n) {
          this._onCollectionChange = n;
        }
        _setUpdateStrategy(n) {
          $c(n) && null != n.updateOn && (this._updateOn = n.updateOn);
        }
        _parentMarkedDirty(n) {
          return !n && !(!this._parent || !this._parent.dirty) && !this._parent._anyControlsDirty();
        }
      }
      class ft extends Uc {
        constructor(n = null, t, i) {
          super(jc(t), Gc(i, t)),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(n),
            this._setUpdateStrategy(t),
            this._initObservables(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!this.asyncValidator });
        }
        setValue(n, t = {}) {
          (this.value = this._pendingValue = n),
            this._onChange.length &&
              !1 !== t.emitModelToViewChange &&
              this._onChange.forEach((i) => i(this.value, !1 !== t.emitViewToModelChange)),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          this.setValue(n, t);
        }
        reset(n = null, t = {}) {
          this._applyFormState(n),
            this.markAsPristine(t),
            this.markAsUntouched(t),
            this.setValue(this.value, t),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(n) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(n) {
          this._onChange.push(n);
        }
        _unregisterOnChange(n) {
          ma(this._onChange, n);
        }
        registerOnDisabledChange(n) {
          this._onDisabledChange.push(n);
        }
        _unregisterOnDisabledChange(n) {
          ma(this._onDisabledChange, n);
        }
        _forEachChild(n) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)
          );
        }
        _applyFormState(n) {
          this._isBoxedValue(n)
            ? ((this.value = this._pendingValue = n.value),
              n.disabled ? this.disable({ onlySelf: !0, emitEvent: !1 }) : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = n);
        }
      }
      class ya extends Uc {
        constructor(n, t, i) {
          super(jc(t), Gc(i, t)),
            (this.controls = n),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!this.asyncValidator });
        }
        registerControl(n, t) {
          return this.controls[n]
            ? this.controls[n]
            : ((this.controls[n] = t), t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange), t);
        }
        addControl(n, t, i = {}) {
          this.registerControl(n, t),
            this.updateValueAndValidity({ emitEvent: i.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(n, t = {}) {
          this.controls[n] && this.controls[n]._registerOnCollectionChange(() => {}),
            delete this.controls[n],
            this.updateValueAndValidity({ emitEvent: t.emitEvent }),
            this._onCollectionChange();
        }
        setControl(n, t, i = {}) {
          this.controls[n] && this.controls[n]._registerOnCollectionChange(() => {}),
            delete this.controls[n],
            t && this.registerControl(n, t),
            this.updateValueAndValidity({ emitEvent: i.emitEvent }),
            this._onCollectionChange();
        }
        contains(n) {
          return this.controls.hasOwnProperty(n) && this.controls[n].enabled;
        }
        setValue(n, t = {}) {
          this._checkAllValuesPresent(n),
            Object.keys(n).forEach((i) => {
              this._throwIfControlMissing(i), this.controls[i].setValue(n[i], { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          null != n &&
            (Object.keys(n).forEach((i) => {
              this.controls[i] && this.controls[i].patchValue(n[i], { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t));
        }
        reset(n = {}, t = {}) {
          this._forEachChild((i, r) => {
            i.reset(n[r], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t),
            this._updateTouched(t),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this._reduceChildren({}, (n, t, i) => ((n[i] = t instanceof ft ? t.value : t.getRawValue()), n));
        }
        _syncPendingControls() {
          let n = this._reduceChildren(!1, (t, i) => !!i._syncPendingControls() || t);
          return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
        }
        _throwIfControlMissing(n) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[n]) throw new Error(`Cannot find form control with name: ${n}.`);
        }
        _forEachChild(n) {
          Object.keys(this.controls).forEach((t) => {
            const i = this.controls[t];
            i && n(i, t);
          });
        }
        _setUpControls() {
          this._forEachChild((n) => {
            n.setParent(this), n._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(n) {
          for (const t of Object.keys(this.controls)) {
            const i = this.controls[t];
            if (this.contains(t) && n(i)) return !0;
          }
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren({}, (n, t, i) => ((t.enabled || this.disabled) && (n[i] = t.value), n));
        }
        _reduceChildren(n, t) {
          let i = n;
          return (
            this._forEachChild((r, o) => {
              i = t(i, r, o);
            }),
            i
          );
        }
        _allControlsDisabled() {
          for (const n of Object.keys(this.controls)) if (this.controls[n].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(n) {
          this._forEachChild((t, i) => {
            if (void 0 === n[i]) throw new Error(`Must supply a value for form control with name: '${i}'.`);
          });
        }
      }
      class rA extends Uc {
        constructor(n, t, i) {
          super(jc(t), Gc(i, t)),
            (this.controls = n),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!this.asyncValidator });
        }
        at(n) {
          return this.controls[n];
        }
        push(n, t = {}) {
          this.controls.push(n),
            this._registerControl(n),
            this.updateValueAndValidity({ emitEvent: t.emitEvent }),
            this._onCollectionChange();
        }
        insert(n, t, i = {}) {
          this.controls.splice(n, 0, t),
            this._registerControl(t),
            this.updateValueAndValidity({ emitEvent: i.emitEvent });
        }
        removeAt(n, t = {}) {
          this.controls[n] && this.controls[n]._registerOnCollectionChange(() => {}),
            this.controls.splice(n, 1),
            this.updateValueAndValidity({ emitEvent: t.emitEvent });
        }
        setControl(n, t, i = {}) {
          this.controls[n] && this.controls[n]._registerOnCollectionChange(() => {}),
            this.controls.splice(n, 1),
            t && (this.controls.splice(n, 0, t), this._registerControl(t)),
            this.updateValueAndValidity({ emitEvent: i.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(n, t = {}) {
          this._checkAllValuesPresent(n),
            n.forEach((i, r) => {
              this._throwIfControlMissing(r), this.at(r).setValue(i, { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          null != n &&
            (n.forEach((i, r) => {
              this.at(r) && this.at(r).patchValue(i, { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t));
        }
        reset(n = [], t = {}) {
          this._forEachChild((i, r) => {
            i.reset(n[r], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t),
            this._updateTouched(t),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this.controls.map((n) => (n instanceof ft ? n.value : n.getRawValue()));
        }
        clear(n = {}) {
          this.controls.length < 1 ||
            (this._forEachChild((t) => t._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: n.emitEvent }));
        }
        _syncPendingControls() {
          let n = this.controls.reduce((t, i) => !!i._syncPendingControls() || t, !1);
          return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
        }
        _throwIfControlMissing(n) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(n)) throw new Error(`Cannot find form control at index ${n}`);
        }
        _forEachChild(n) {
          this.controls.forEach((t, i) => {
            n(t, i);
          });
        }
        _updateValue() {
          this.value = this.controls.filter((n) => n.enabled || this.disabled).map((n) => n.value);
        }
        _anyControls(n) {
          return this.controls.some((t) => t.enabled && n(t));
        }
        _setUpControls() {
          this._forEachChild((n) => this._registerControl(n));
        }
        _checkAllValuesPresent(n) {
          this._forEachChild((t, i) => {
            if (void 0 === n[i]) throw new Error(`Must supply a value for form control at index: ${i}.`);
          });
        }
        _allControlsDisabled() {
          for (const n of this.controls) if (n.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(n) {
          n.setParent(this), n._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      let k0 = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵdir = N({
              type: e,
              selectors: [['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', '']],
              hostAttrs: ['novalidate', ''],
            })),
            e
          );
        })(),
        F0 = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({})),
            e
          );
        })();
      const qc = new Y('NgModelWithFormControlWarning'),
        hA = { provide: st, useExisting: J(() => ba) };
      let ba = (() => {
        class e extends st {
          constructor(t, i) {
            super(),
              (this.validators = t),
              (this.asyncValidators = i),
              (this.submitted = !1),
              (this._onCollectionChange = () => this._updateDomValue()),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new Q()),
              this._setValidators(t),
              this._setAsyncValidators(i);
          }
          ngOnChanges(t) {
            this._checkFormPresent(),
              t.hasOwnProperty('form') &&
                (this._updateValidators(),
                this._updateDomValue(),
                this._updateRegistrations(),
                (this._oldForm = this.form));
          }
          ngOnDestroy() {
            this.form &&
              (ga(this.form, this),
              this.form._onCollectionChange === this._onCollectionChange &&
                this.form._registerOnCollectionChange(() => {}));
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(t) {
            const i = this.form.get(t.path);
            return No(i, t), i.updateValueAndValidity({ emitEvent: !1 }), this.directives.push(t), i;
          }
          getControl(t) {
            return this.form.get(t.path);
          }
          removeControl(t) {
            ha(t.control || null, t, !1), ma(this.directives, t);
          }
          addFormGroup(t) {
            this._setUpFormContainer(t);
          }
          removeFormGroup(t) {
            this._cleanUpFormContainer(t);
          }
          getFormGroup(t) {
            return this.form.get(t.path);
          }
          addFormArray(t) {
            this._setUpFormContainer(t);
          }
          removeFormArray(t) {
            this._cleanUpFormContainer(t);
          }
          getFormArray(t) {
            return this.form.get(t.path);
          }
          updateModel(t, i) {
            this.form.get(t.path).setValue(i);
          }
          onSubmit(t) {
            return (
              (this.submitted = !0),
              (function (e, n) {
                e._syncPendingControls(),
                  n.forEach((t) => {
                    const i = t.control;
                    'submit' === i.updateOn &&
                      i._pendingChange &&
                      (t.viewToModelUpdate(i._pendingValue), (i._pendingChange = !1));
                  });
              })(this.form, this.directives),
              this.ngSubmit.emit(t),
              !1
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(t) {
            this.form.reset(t), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach((t) => {
              const i = t.control,
                r = this.form.get(t.path);
              i !== r && (ha(i || null, t), r instanceof ft && (No(r, t), (t.control = r)));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _setUpFormContainer(t) {
            const i = this.form.get(t.path);
            (function (e, n) {
              Bc(e, n);
            })(i, t),
              i.updateValueAndValidity({ emitEvent: !1 });
          }
          _cleanUpFormContainer(t) {
            if (this.form) {
              const i = this.form.get(t.path);
              i &&
                (function (e, n) {
                  return ga(e, n);
                })(i, t) &&
                i.updateValueAndValidity({ emitEvent: !1 });
            }
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
              this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            Bc(this.form, this), this._oldForm && ga(this._oldForm, this);
          }
          _checkFormPresent() {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(_(Ke, 10), _(Jn, 10));
          }),
          (e.ɵdir = N({
            type: e,
            selectors: [['', 'formGroup', '']],
            hostBindings: function (t, i) {
              1 & t &&
                ee('submit', function (o) {
                  return i.onSubmit(o);
                })('reset', function () {
                  return i.onReset();
                });
            },
            inputs: { form: ['formGroup', 'form'] },
            outputs: { ngSubmit: 'ngSubmit' },
            exportAs: ['ngForm'],
            features: [ce([hA]), ae, bt],
          })),
          e
        );
      })();
      const mA = { provide: Xn, useExisting: J(() => Zc) };
      let Zc = (() => {
        class e extends Xn {
          constructor(t, i, r, o, s) {
            super(),
              (this._ngModelWarningConfig = s),
              (this._added = !1),
              (this.update = new Q()),
              (this._ngModelWarningSent = !1),
              (this._parent = t),
              this._setValidators(i),
              this._setAsyncValidators(r),
              (this.valueAccessor = (function (e, n) {
                if (!n) return null;
                let t, i, r;
                return (
                  Array.isArray(n),
                  n.forEach((o) => {
                    o.constructor === ua
                      ? (t = o)
                      : (function (e) {
                          return Object.getPrototypeOf(e.constructor) === gi;
                        })(o)
                      ? (i = o)
                      : (r = o);
                  }),
                  r || i || t || null
                );
              })(0, o));
          }
          set isDisabled(t) {}
          ngOnChanges(t) {
            this._added || this._setUpControl(),
              (function (e, n) {
                if (!e.hasOwnProperty('model')) return !1;
                const t = e.model;
                return !!t.isFirstChange() || !Object.is(n, t.currentValue);
              })(t, this.viewModel) &&
                ((this.viewModel = this.model), this.formDirective.updateModel(this, this.model));
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          viewToModelUpdate(t) {
            (this.viewModel = t), this.update.emit(t);
          }
          get path() {
            return (function (e, n) {
              return [...n.path, e];
            })(null == this.name ? this.name : this.name.toString(), this._parent);
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          _checkParentType() {}
          _setUpControl() {
            this._checkParentType(),
              (this.control = this.formDirective.addControl(this)),
              this.control.disabled && this.valueAccessor.setDisabledState && this.valueAccessor.setDisabledState(!0),
              (this._added = !0);
          }
        }
        return (
          (e._ngModelWarningSentOnce = !1),
          (e.ɵfac = function (t) {
            return new (t || e)(_(st, 13), _(Ke, 10), _(Jn, 10), _(Ft, 10), _(qc, 8));
          }),
          (e.ɵdir = N({
            type: e,
            selectors: [['', 'formControlName', '']],
            inputs: {
              name: ['formControlName', 'name'],
              isDisabled: ['disabled', 'isDisabled'],
              model: ['ngModel', 'model'],
            },
            outputs: { update: 'ngModelChange' },
            features: [ce([mA]), ae, bt],
          })),
          e
        );
      })();
      const _A = { provide: Ft, useExisting: J(() => va), multi: !0 };
      function j0(e, n) {
        return null == e ? `${n}` : (n && 'object' == typeof n && (n = 'Object'), `${e}: ${n}`.slice(0, 50));
      }
      let va = (() => {
          class e extends gi {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(t) {
              this._compareWith = t;
            }
            writeValue(t) {
              this.value = t;
              const i = this._getOptionId(t);
              null == i && this.setProperty('selectedIndex', -1);
              const r = j0(i, t);
              this.setProperty('value', r);
            }
            registerOnChange(t) {
              this.onChange = (i) => {
                (this.value = this._getOptionValue(i)), t(this.value);
              };
            }
            _registerOption() {
              return (this._idCounter++).toString();
            }
            _getOptionId(t) {
              for (const i of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(i), t)) return i;
              return null;
            }
            _getOptionValue(t) {
              const i = (function (e) {
                return e.split(':')[0];
              })(t);
              return this._optionMap.has(i) ? this._optionMap.get(i) : t;
            }
          }
          return (
            (e.ɵfac = (function () {
              let n;
              return function (i) {
                return (n || (n = Dt(e)))(i || e);
              };
            })()),
            (e.ɵdir = N({
              type: e,
              selectors: [
                ['select', 'formControlName', '', 3, 'multiple', ''],
                ['select', 'formControl', '', 3, 'multiple', ''],
                ['select', 'ngModel', '', 3, 'multiple', ''],
              ],
              hostBindings: function (t, i) {
                1 & t &&
                  ee('change', function (o) {
                    return i.onChange(o.target.value);
                  })('blur', function () {
                    return i.onTouched();
                  });
              },
              inputs: { compareWith: 'compareWith' },
              features: [ce([_A]), ae],
            })),
            e
          );
        })(),
        G0 = (() => {
          class e {
            constructor(t, i, r) {
              (this._element = t),
                (this._renderer = i),
                (this._select = r),
                this._select && (this.id = this._select._registerOption());
            }
            set ngValue(t) {
              null != this._select &&
                (this._select._optionMap.set(this.id, t),
                this._setElementValue(j0(this.id, t)),
                this._select.writeValue(this._select.value));
            }
            set value(t) {
              this._setElementValue(t), this._select && this._select.writeValue(this._select.value);
            }
            _setElementValue(t) {
              this._renderer.setProperty(this._element.nativeElement, 'value', t);
            }
            ngOnDestroy() {
              this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(_(_e), _(Mn), _(va, 9));
            }),
            (e.ɵdir = N({ type: e, selectors: [['option']], inputs: { ngValue: 'ngValue', value: 'value' } })),
            e
          );
        })();
      const bA = { provide: Ft, useExisting: J(() => Kc), multi: !0 };
      function $0(e, n) {
        return null == e
          ? `${n}`
          : ('string' == typeof n && (n = `'${n}'`),
            n && 'object' == typeof n && (n = 'Object'),
            `${e}: ${n}`.slice(0, 50));
      }
      let Kc = (() => {
          class e extends gi {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(t) {
              this._compareWith = t;
            }
            writeValue(t) {
              let i;
              if (((this.value = t), Array.isArray(t))) {
                const r = t.map((o) => this._getOptionId(o));
                i = (o, s) => {
                  o._setSelected(r.indexOf(s.toString()) > -1);
                };
              } else
                i = (r, o) => {
                  r._setSelected(!1);
                };
              this._optionMap.forEach(i);
            }
            registerOnChange(t) {
              this.onChange = (i) => {
                const r = [],
                  o = i.selectedOptions;
                if (void 0 !== o) {
                  const s = o;
                  for (let a = 0; a < s.length; a++) {
                    const u = this._getOptionValue(s[a].value);
                    r.push(u);
                  }
                } else {
                  const s = i.options;
                  for (let a = 0; a < s.length; a++) {
                    const l = s[a];
                    if (l.selected) {
                      const u = this._getOptionValue(l.value);
                      r.push(u);
                    }
                  }
                }
                (this.value = r), t(r);
              };
            }
            _registerOption(t) {
              const i = (this._idCounter++).toString();
              return this._optionMap.set(i, t), i;
            }
            _getOptionId(t) {
              for (const i of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(i)._value, t)) return i;
              return null;
            }
            _getOptionValue(t) {
              const i = (function (e) {
                return e.split(':')[0];
              })(t);
              return this._optionMap.has(i) ? this._optionMap.get(i)._value : t;
            }
          }
          return (
            (e.ɵfac = (function () {
              let n;
              return function (i) {
                return (n || (n = Dt(e)))(i || e);
              };
            })()),
            (e.ɵdir = N({
              type: e,
              selectors: [
                ['select', 'multiple', '', 'formControlName', ''],
                ['select', 'multiple', '', 'formControl', ''],
                ['select', 'multiple', '', 'ngModel', ''],
              ],
              hostBindings: function (t, i) {
                1 & t &&
                  ee('change', function (o) {
                    return i.onChange(o.target);
                  })('blur', function () {
                    return i.onTouched();
                  });
              },
              inputs: { compareWith: 'compareWith' },
              features: [ce([bA]), ae],
            })),
            e
          );
        })(),
        U0 = (() => {
          class e {
            constructor(t, i, r) {
              (this._element = t),
                (this._renderer = i),
                (this._select = r),
                this._select && (this.id = this._select._registerOption(this));
            }
            set ngValue(t) {
              null != this._select &&
                ((this._value = t), this._setElementValue($0(this.id, t)), this._select.writeValue(this._select.value));
            }
            set value(t) {
              this._select
                ? ((this._value = t),
                  this._setElementValue($0(this.id, t)),
                  this._select.writeValue(this._select.value))
                : this._setElementValue(t);
            }
            _setElementValue(t) {
              this._renderer.setProperty(this._element.nativeElement, 'value', t);
            }
            _setSelected(t) {
              this._renderer.setProperty(this._element.nativeElement, 'selected', t);
            }
            ngOnDestroy() {
              this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(_(_e), _(Mn), _(Kc, 9));
            }),
            (e.ɵdir = N({ type: e, selectors: [['option']], inputs: { ngValue: 'ngValue', value: 'value' } })),
            e
          );
        })(),
        ey = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ imports: [[F0]] })),
            e
          );
        })(),
        ty = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ imports: [ey] })),
            e
          );
        })(),
        SA = (() => {
          class e {
            static withConfig(t) {
              return { ngModule: e, providers: [{ provide: qc, useValue: t.warnOnNgModelWithFormControl }] };
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ imports: [ey] })),
            e
          );
        })();
      const VA = ['*'],
        tO = ['dialog'];
      function mi(e) {
        return null != e;
      }
      function wr(e) {
        return (e || document.body).getBoundingClientRect();
      }
      'undefined' != typeof Element &&
        !Element.prototype.closest &&
        (Element.prototype.closest = function (e) {
          let n = this;
          if (!document.documentElement.contains(n)) return null;
          do {
            if (n.matches(e)) return n;
            n = n.parentElement || n.parentNode;
          } while (null !== n && 1 === n.nodeType);
          return null;
        });
      const iy = { animation: !0, transitionTimerDelayMs: 5 },
        KO = () => {},
        { transitionTimerDelayMs: QO } = iy,
        To = new Map(),
        at = (e, n, t, i) => {
          let r = i.context || {};
          const o = To.get(n);
          if (o)
            switch (i.runningTransition) {
              case 'continue':
                return L_;
              case 'stop':
                e.run(() => o.transition$.complete()), (r = Object.assign(o.context, r)), To.delete(n);
            }
          const s = t(n, i.animation, r) || KO;
          if (!i.animation || 'none' === window.getComputedStyle(n).transitionProperty)
            return (
              e.run(() => s()),
              wo(void 0).pipe(
                (function (e) {
                  return (n) =>
                    new ge((t) =>
                      n.subscribe({
                        next: (s) => e.run(() => t.next(s)),
                        error: (s) => e.run(() => t.error(s)),
                        complete: () => e.run(() => t.complete()),
                      })
                    );
                })(e)
              )
            );
          const a = new $e(),
            l = new $e(),
            u = a.pipe(
              (function (...e) {
                return (n) =>
                  (function (...e) {
                    return Id(1)(wo(...e));
                  })(n, wo(...e));
              })(!0)
            );
          To.set(n, {
            transition$: a,
            complete: () => {
              l.next(), l.complete();
            },
            context: r,
          });
          const c = (function (e) {
            const { transitionDelay: n, transitionDuration: t } = window.getComputedStyle(e);
            return 1e3 * (parseFloat(n) + parseFloat(t));
          })(n);
          return (
            e.runOutsideAngular(() => {
              const d = dt(n, 'transitionend').pipe(
                He(u),
                vr(({ target: h }) => h === n)
              );
              (function (...e) {
                if (1 === e.length) {
                  if (!Bt(e[0])) return e[0];
                  e = e[0];
                }
                return Ir(e, void 0).lift(new oS());
              })(
                (function (e = 0, n, t) {
                  let i = -1;
                  return (
                    U_(n) ? (i = Number(n) < 1 ? 1 : Number(n)) : Ni(n) && (t = n),
                    Ni(t) || (t = $_),
                    new ge((r) => {
                      const o = U_(e) ? e : +e - t.now();
                      return t.schedule(iS, o, { index: 0, period: i, subscriber: r });
                    })
                  );
                })(c + QO).pipe(He(u)),
                d,
                l
              )
                .pipe(He(u))
                .subscribe(() => {
                  To.delete(n),
                    e.run(() => {
                      s(), a.next(), a.complete();
                    });
                });
            }),
            a.asObservable()
          );
        };
      let Ca = (() => {
          class e {
            constructor() {
              this.animation = iy.animation;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = X({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        uy = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ imports: [[Et]] })),
            e
          );
        })(),
        cy = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ imports: [[Et]] })),
            e
          );
        })(),
        fy = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({})),
            e
          );
        })(),
        gy = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ imports: [[Et]] })),
            e
          );
        })(),
        my = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({})),
            e
          );
        })();
      var je = (() => (
        (function (e) {
          (e[(e.Tab = 9)] = 'Tab'),
            (e[(e.Enter = 13)] = 'Enter'),
            (e[(e.Escape = 27)] = 'Escape'),
            (e[(e.Space = 32)] = 'Space'),
            (e[(e.PageUp = 33)] = 'PageUp'),
            (e[(e.PageDown = 34)] = 'PageDown'),
            (e[(e.End = 35)] = 'End'),
            (e[(e.Home = 36)] = 'Home'),
            (e[(e.ArrowLeft = 37)] = 'ArrowLeft'),
            (e[(e.ArrowUp = 38)] = 'ArrowUp'),
            (e[(e.ArrowRight = 39)] = 'ArrowRight'),
            (e[(e.ArrowDown = 40)] = 'ArrowDown');
        })(je || (je = {})),
        je
      ))();
      'undefined' != typeof navigator &&
        navigator.userAgent &&
        (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
          (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) ||
          /Android/.test(navigator.userAgent));
      const yy = [
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled]):not([type="hidden"])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[contenteditable]',
        '[tabindex]:not([tabindex="-1"])',
      ].join(', ');
      function by(e) {
        const n = Array.from(e.querySelectorAll(yy)).filter((t) => -1 !== t.tabIndex);
        return [n[0], n[n.length - 1]];
      }
      new (class {
        getAllStyles(n) {
          return window.getComputedStyle(n);
        }
        getStyle(n, t) {
          return this.getAllStyles(n)[t];
        }
        isStaticPositioned(n) {
          return 'static' === (this.getStyle(n, 'position') || 'static');
        }
        offsetParent(n) {
          let t = n.offsetParent || document.documentElement;
          for (; t && t !== document.documentElement && this.isStaticPositioned(t); ) t = t.offsetParent;
          return t || document.documentElement;
        }
        position(n, t = !0) {
          let i,
            r = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
          if ('fixed' === this.getStyle(n, 'position'))
            (i = n.getBoundingClientRect()),
              (i = { top: i.top, bottom: i.bottom, left: i.left, right: i.right, height: i.height, width: i.width });
          else {
            const o = this.offsetParent(n);
            (i = this.offset(n, !1)),
              o !== document.documentElement && (r = this.offset(o, !1)),
              (r.top += o.clientTop),
              (r.left += o.clientLeft);
          }
          return (
            (i.top -= r.top),
            (i.bottom -= r.top),
            (i.left -= r.left),
            (i.right -= r.left),
            t &&
              ((i.top = Math.round(i.top)),
              (i.bottom = Math.round(i.bottom)),
              (i.left = Math.round(i.left)),
              (i.right = Math.round(i.right))),
            i
          );
        }
        offset(n, t = !0) {
          const i = n.getBoundingClientRect(),
            r_top = window.scrollY - document.documentElement.clientTop,
            r_left = window.scrollX - document.documentElement.clientLeft;
          let o = {
            height: i.height || n.offsetHeight,
            width: i.width || n.offsetWidth,
            top: i.top + r_top,
            bottom: i.bottom + r_top,
            left: i.left + r_left,
            right: i.right + r_left,
          };
          return (
            t &&
              ((o.height = Math.round(o.height)),
              (o.width = Math.round(o.width)),
              (o.top = Math.round(o.top)),
              (o.bottom = Math.round(o.bottom)),
              (o.left = Math.round(o.left)),
              (o.right = Math.round(o.right))),
            o
          );
        }
        positionElements(n, t, i, r) {
          const [o = 'top', s = 'center'] = i.split('-'),
            a = r ? this.offset(n, !1) : this.position(n, !1),
            l = this.getAllStyles(t),
            u = parseFloat(l.marginTop),
            c = parseFloat(l.marginBottom),
            d = parseFloat(l.marginLeft),
            f = parseFloat(l.marginRight);
          let h = 0,
            m = 0;
          switch (o) {
            case 'top':
              h = a.top - (t.offsetHeight + u + c);
              break;
            case 'bottom':
              h = a.top + a.height;
              break;
            case 'left':
              m = a.left - (t.offsetWidth + d + f);
              break;
            case 'right':
              m = a.left + a.width;
          }
          switch (s) {
            case 'top':
              h = a.top;
              break;
            case 'bottom':
              h = a.top + a.height - t.offsetHeight;
              break;
            case 'left':
              m = a.left;
              break;
            case 'right':
              m = a.left + a.width - t.offsetWidth;
              break;
            case 'center':
              'top' === o || 'bottom' === o
                ? (m = a.left + a.width / 2 - t.offsetWidth / 2)
                : (h = a.top + a.height / 2 - t.offsetHeight / 2);
          }
          t.style.transform = `translate(${Math.round(m)}px, ${Math.round(h)}px)`;
          const b = t.getBoundingClientRect(),
            v = document.documentElement,
            w = window.innerHeight || v.clientHeight,
            y = window.innerWidth || v.clientWidth;
          return b.left >= 0 && b.top >= 0 && b.right <= y && b.bottom <= w;
        }
      })(),
        new Date(1882, 10, 12),
        new Date(2174, 10, 25);
      let My = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ imports: [[Et, ty]] })),
            e
          );
        })(),
        sd = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵdir = N({ type: e, selectors: [['', 8, 'navbar']] })),
            e
          );
        })(),
        Sy = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({})),
            e
          );
        })();
      class vi {
        constructor(n, t, i) {
          (this.nodes = n), (this.viewRef = t), (this.componentRef = i);
        }
      }
      let xR = (() => {
        class e {
          constructor(t, i) {
            (this._el = t), (this._zone = i);
          }
          ngOnInit() {
            this._zone.onStable
              .asObservable()
              .pipe(An(1))
              .subscribe(() => {
                at(
                  this._zone,
                  this._el.nativeElement,
                  (t, i) => {
                    i && wr(t), t.classList.add('show');
                  },
                  { animation: this.animation, runningTransition: 'continue' }
                );
              });
          }
          hide() {
            return at(this._zone, this._el.nativeElement, ({ classList: t }) => t.remove('show'), {
              animation: this.animation,
              runningTransition: 'stop',
            });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(_(_e), _(ve));
          }),
          (e.ɵcmp = Ue({
            type: e,
            selectors: [['ngb-modal-backdrop']],
            hostAttrs: [2, 'z-index', '1050'],
            hostVars: 6,
            hostBindings: function (t, i) {
              2 & t &&
                (ui('modal-backdrop' + (i.backdropClass ? ' ' + i.backdropClass : '')),
                W('show', !i.animation)('fade', i.animation));
            },
            inputs: { animation: 'animation', backdropClass: 'backdropClass' },
            decls: 0,
            vars: 0,
            template: function (t, i) {},
            encapsulation: 2,
          })),
          e
        );
      })();
      class Ay {
        close(n) {}
        dismiss(n) {}
      }
      class kR {
        constructor(n, t, i, r) {
          (this._windowCmptRef = n),
            (this._contentRef = t),
            (this._backdropCmptRef = i),
            (this._beforeDismiss = r),
            (this._closed = new $e()),
            (this._dismissed = new $e()),
            (this._hidden = new $e()),
            n.instance.dismissEvent.subscribe((o) => {
              this.dismiss(o);
            }),
            (this.result = new Promise((o, s) => {
              (this._resolve = o), (this._reject = s);
            })),
            this.result.then(null, () => {});
        }
        get componentInstance() {
          if (this._contentRef && this._contentRef.componentRef) return this._contentRef.componentRef.instance;
        }
        get closed() {
          return this._closed.asObservable().pipe(He(this._hidden));
        }
        get dismissed() {
          return this._dismissed.asObservable().pipe(He(this._hidden));
        }
        get hidden() {
          return this._hidden.asObservable();
        }
        get shown() {
          return this._windowCmptRef.instance.shown.asObservable();
        }
        close(n) {
          this._windowCmptRef && (this._closed.next(n), this._resolve(n), this._removeModalElements());
        }
        _dismiss(n) {
          this._dismissed.next(n), this._reject(n), this._removeModalElements();
        }
        dismiss(n) {
          if (this._windowCmptRef)
            if (this._beforeDismiss) {
              const t = this._beforeDismiss();
              !(function (e) {
                return e && e.then;
              })(t)
                ? !1 !== t && this._dismiss(n)
                : t.then(
                    (i) => {
                      !1 !== i && this._dismiss(n);
                    },
                    () => {}
                  );
            } else this._dismiss(n);
        }
        _removeModalElements() {
          const n = this._windowCmptRef.instance.hide(),
            t = this._backdropCmptRef ? this._backdropCmptRef.instance.hide() : wo(void 0);
          n.subscribe(() => {
            const { nativeElement: i } = this._windowCmptRef.location;
            i.parentNode.removeChild(i),
              this._windowCmptRef.destroy(),
              this._contentRef && this._contentRef.viewRef && this._contentRef.viewRef.destroy(),
              (this._windowCmptRef = null),
              (this._contentRef = null);
          }),
            t.subscribe(() => {
              if (this._backdropCmptRef) {
                const { nativeElement: i } = this._backdropCmptRef.location;
                i.parentNode.removeChild(i), this._backdropCmptRef.destroy(), (this._backdropCmptRef = null);
              }
            }),
            aa(n, t).subscribe(() => {
              this._hidden.next(), this._hidden.complete();
            });
        }
      }
      var Ro = (() => (
        (function (e) {
          (e[(e.BACKDROP_CLICK = 0)] = 'BACKDROP_CLICK'), (e[(e.ESC = 1)] = 'ESC');
        })(Ro || (Ro = {})),
        Ro
      ))();
      let PR = (() => {
        class e {
          constructor(t, i, r) {
            (this._document = t),
              (this._elRef = i),
              (this._zone = r),
              (this._closed$ = new $e()),
              (this._elWithFocus = null),
              (this.backdrop = !0),
              (this.keyboard = !0),
              (this.dismissEvent = new Q()),
              (this.shown = new $e()),
              (this.hidden = new $e());
          }
          dismiss(t) {
            this.dismissEvent.emit(t);
          }
          ngOnInit() {
            (this._elWithFocus = this._document.activeElement),
              this._zone.onStable
                .asObservable()
                .pipe(An(1))
                .subscribe(() => {
                  this._show();
                });
          }
          ngOnDestroy() {
            this._disableEventHandling();
          }
          hide() {
            const { nativeElement: t } = this._elRef,
              i = { animation: this.animation, runningTransition: 'stop' },
              s = aa(
                at(this._zone, t, () => t.classList.remove('show'), i),
                at(this._zone, this._dialogEl.nativeElement, () => {}, i)
              );
            return (
              s.subscribe(() => {
                this.hidden.next(), this.hidden.complete();
              }),
              this._disableEventHandling(),
              this._restoreFocus(),
              s
            );
          }
          _show() {
            const t = { animation: this.animation, runningTransition: 'continue' };
            aa(
              at(
                this._zone,
                this._elRef.nativeElement,
                (o, s) => {
                  s && wr(o), o.classList.add('show');
                },
                t
              ),
              at(this._zone, this._dialogEl.nativeElement, () => {}, t)
            ).subscribe(() => {
              this.shown.next(), this.shown.complete();
            }),
              this._enableEventHandling(),
              this._setFocus();
          }
          _enableEventHandling() {
            const { nativeElement: t } = this._elRef;
            this._zone.runOutsideAngular(() => {
              dt(t, 'keydown')
                .pipe(
                  He(this._closed$),
                  vr((r) => r.which === je.Escape)
                )
                .subscribe((r) => {
                  this.keyboard
                    ? requestAnimationFrame(() => {
                        r.defaultPrevented || this._zone.run(() => this.dismiss(Ro.ESC));
                      })
                    : 'static' === this.backdrop && this._bumpBackdrop();
                });
              let i = !1;
              dt(this._dialogEl.nativeElement, 'mousedown')
                .pipe(
                  He(this._closed$),
                  (function (e, n, t) {
                    return function (r) {
                      return r.lift(new IS(e, n, t));
                    };
                  })(() => (i = !1)),
                  Ac(() => dt(t, 'mouseup').pipe(He(this._closed$), An(1))),
                  vr(({ target: r }) => t === r)
                )
                .subscribe(() => {
                  i = !0;
                }),
                dt(t, 'click')
                  .pipe(He(this._closed$))
                  .subscribe(({ target: r }) => {
                    t === r &&
                      ('static' === this.backdrop
                        ? this._bumpBackdrop()
                        : !0 === this.backdrop && !i && this._zone.run(() => this.dismiss(Ro.BACKDROP_CLICK))),
                      (i = !1);
                  });
            });
          }
          _disableEventHandling() {
            this._closed$.next();
          }
          _setFocus() {
            const { nativeElement: t } = this._elRef;
            if (!t.contains(document.activeElement)) {
              const i = t.querySelector('[ngbAutofocus]'),
                r = by(t)[0];
              (i || r || t).focus();
            }
          }
          _restoreFocus() {
            const t = this._document.body,
              i = this._elWithFocus;
            let r;
            (r = i && i.focus && t.contains(i) ? i : t),
              this._zone.runOutsideAngular(() => {
                setTimeout(() => r.focus()), (this._elWithFocus = null);
              });
          }
          _bumpBackdrop() {
            'static' === this.backdrop &&
              at(
                this._zone,
                this._elRef.nativeElement,
                ({ classList: t }) => (t.add('modal-static'), () => t.remove('modal-static')),
                { animation: this.animation, runningTransition: 'continue' }
              );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(_(ot), _(_e), _(ve));
          }),
          (e.ɵcmp = Ue({
            type: e,
            selectors: [['ngb-modal-window']],
            viewQuery: function (t, i) {
              if ((1 & t && Gu(tO, 7), 2 & t)) {
                let r;
                Ie(
                  (r = (function (e, n) {
                    return e[19].queries[n].queryList;
                  })(D(), Jd()))
                ) && (i._dialogEl = r.first);
              }
            },
            hostAttrs: ['role', 'dialog', 'tabindex', '-1'],
            hostVars: 7,
            hostBindings: function (t, i) {
              2 & t &&
                (le('aria-modal', !0)('aria-labelledby', i.ariaLabelledBy)('aria-describedby', i.ariaDescribedBy),
                ui('modal d-block' + (i.windowClass ? ' ' + i.windowClass : '')),
                W('fade', i.animation));
            },
            inputs: {
              animation: 'animation',
              ariaLabelledBy: 'ariaLabelledBy',
              ariaDescribedBy: 'ariaDescribedBy',
              backdrop: 'backdrop',
              centered: 'centered',
              keyboard: 'keyboard',
              scrollable: 'scrollable',
              size: 'size',
              windowClass: 'windowClass',
              modalDialogClass: 'modalDialogClass',
            },
            outputs: { dismissEvent: 'dismiss' },
            ngContentSelectors: VA,
            decls: 4,
            vars: 2,
            consts: [
              ['role', 'document'],
              ['dialog', ''],
              [1, 'modal-content'],
            ],
            template: function (t, i) {
              1 & t &&
                ((function (e) {
                  const n = D()[16][6];
                  if (!n.projection) {
                    const i = (n.projection = Hr(e ? e.length : 1, null)),
                      r = i.slice();
                    let o = n.child;
                    for (; null !== o; ) {
                      const s = e ? lC(o, e) : 0;
                      null !== s && (r[s] ? (r[s].projectionNext = o) : (i[s] = o), (r[s] = o)), (o = o.next);
                    }
                  }
                })(),
                p(0, 'div', 0, 1),
                p(2, 'div', 2),
                (function (e, n = 0, t) {
                  const i = D(),
                    r = K(),
                    o = qi(r, 20 + e, 16, null, t || null);
                  null === o.projection && (o.projection = n),
                    Ja(),
                    64 != (64 & o.flags) &&
                      (function (e, n, t) {
                        gh(n[L], 0, n, t, oh(e, t, n), uh(t.parent || n[6], t, n));
                      })(r, i, o);
                })(3),
                g(),
                g()),
                2 & t &&
                  ui(
                    'modal-dialog' +
                      (i.size ? ' modal-' + i.size : '') +
                      (i.centered ? ' modal-dialog-centered' : '') +
                      (i.scrollable ? ' modal-dialog-scrollable' : '') +
                      (i.modalDialogClass ? ' ' + i.modalDialogClass : '')
                  );
            },
            styles: [
              'ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n',
            ],
            encapsulation: 2,
          })),
          e
        );
      })();
      const FR = () => {};
      let VR = (() => {
          class e {
            constructor(t) {
              this._document = t;
            }
            compensate() {
              const t = this._getWidth();
              return this._isPresent(t) ? this._adjustBody(t) : FR;
            }
            _adjustBody(t) {
              const i = this._document.body,
                r = i.style.paddingRight,
                o = parseFloat(window.getComputedStyle(i)['padding-right']);
              return (i.style['padding-right'] = `${o + t}px`), () => (i.style['padding-right'] = r);
            }
            _isPresent(t) {
              const i = this._document.body.getBoundingClientRect();
              return window.innerWidth - (i.left + i.right) >= t - 0.1 * t;
            }
            _getWidth() {
              const t = this._document.createElement('div');
              t.className = 'modal-scrollbar-measure';
              const i = this._document.body;
              i.appendChild(t);
              const r = t.getBoundingClientRect().width - t.clientWidth;
              return i.removeChild(t), r;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(H(ot));
            }),
            (e.ɵprov = X({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        BR = (() => {
          class e {
            constructor(t, i, r, o, s, a) {
              (this._applicationRef = t),
                (this._injector = i),
                (this._document = r),
                (this._scrollBar = o),
                (this._rendererFactory = s),
                (this._ngZone = a),
                (this._activeWindowCmptHasChanged = new $e()),
                (this._ariaHiddenValues = new Map()),
                (this._backdropAttributes = ['animation', 'backdropClass']),
                (this._modalRefs = []),
                (this._windowAttributes = [
                  'animation',
                  'ariaLabelledBy',
                  'ariaDescribedBy',
                  'backdrop',
                  'centered',
                  'keyboard',
                  'scrollable',
                  'size',
                  'windowClass',
                  'modalDialogClass',
                ]),
                (this._windowCmpts = []),
                (this._activeInstances = new Q()),
                this._activeWindowCmptHasChanged.subscribe(() => {
                  if (this._windowCmpts.length) {
                    const l = this._windowCmpts[this._windowCmpts.length - 1];
                    ((e, n, t, i = !1) => {
                      this._ngZone.runOutsideAngular(() => {
                        const r = dt(n, 'focusin').pipe(
                          He(t),
                          pt((o) => o.target)
                        );
                        dt(n, 'keydown')
                          .pipe(
                            He(t),
                            vr((o) => o.which === je.Tab),
                            Oc(r)
                          )
                          .subscribe(([o, s]) => {
                            const [a, l] = by(n);
                            (s === a || s === n) && o.shiftKey && (l.focus(), o.preventDefault()),
                              s === l && !o.shiftKey && (a.focus(), o.preventDefault());
                          }),
                          i &&
                            dt(n, 'click')
                              .pipe(
                                He(t),
                                Oc(r),
                                pt((o) => o[1])
                              )
                              .subscribe((o) => o.focus());
                      });
                    })(0, l.location.nativeElement, this._activeWindowCmptHasChanged),
                      this._revertAriaHidden(),
                      this._setAriaHidden(l.location.nativeElement);
                  }
                });
            }
            open(t, i, r, o) {
              const s =
                  o.container instanceof HTMLElement
                    ? o.container
                    : mi(o.container)
                    ? this._document.querySelector(o.container)
                    : this._document.body,
                a = this._rendererFactory.createRenderer(null, null),
                l = this._scrollBar.compensate(),
                u = () => {
                  this._modalRefs.length ||
                    (a.removeClass(this._document.body, 'modal-open'), this._revertAriaHidden());
                };
              if (!s)
                throw new Error(`The specified modal container "${o.container || 'body'}" was not found in the DOM.`);
              const c = new Ay(),
                d = this._getContentRef(t, o.injector || i, r, c, o);
              let f = !1 !== o.backdrop ? this._attachBackdrop(t, s) : void 0,
                h = this._attachWindowComponent(t, s, d),
                m = new kR(h, d, f, o.beforeDismiss);
              return (
                this._registerModalRef(m),
                this._registerWindowCmpt(h),
                m.result.then(l, l),
                m.result.then(u, u),
                (c.close = (b) => {
                  m.close(b);
                }),
                (c.dismiss = (b) => {
                  m.dismiss(b);
                }),
                this._applyWindowOptions(h.instance, o),
                1 === this._modalRefs.length && a.addClass(this._document.body, 'modal-open'),
                f && f.instance && (this._applyBackdropOptions(f.instance, o), f.changeDetectorRef.detectChanges()),
                h.changeDetectorRef.detectChanges(),
                m
              );
            }
            get activeInstances() {
              return this._activeInstances;
            }
            dismissAll(t) {
              this._modalRefs.forEach((i) => i.dismiss(t));
            }
            hasOpenModals() {
              return this._modalRefs.length > 0;
            }
            _attachBackdrop(t, i) {
              let o = t.resolveComponentFactory(xR).create(this._injector);
              return this._applicationRef.attachView(o.hostView), i.appendChild(o.location.nativeElement), o;
            }
            _attachWindowComponent(t, i, r) {
              let s = t.resolveComponentFactory(PR).create(this._injector, r.nodes);
              return this._applicationRef.attachView(s.hostView), i.appendChild(s.location.nativeElement), s;
            }
            _applyWindowOptions(t, i) {
              this._windowAttributes.forEach((r) => {
                mi(i[r]) && (t[r] = i[r]);
              });
            }
            _applyBackdropOptions(t, i) {
              this._backdropAttributes.forEach((r) => {
                mi(i[r]) && (t[r] = i[r]);
              });
            }
            _getContentRef(t, i, r, o, s) {
              return r
                ? r instanceof Ee
                  ? this._createFromTemplateRef(r, o)
                  : (function (e) {
                      return 'string' == typeof e;
                    })(r)
                  ? this._createFromString(r)
                  : this._createFromComponent(t, i, r, o, s)
                : new vi([]);
            }
            _createFromTemplateRef(t, i) {
              const o = t.createEmbeddedView({
                $implicit: i,
                close(s) {
                  i.close(s);
                },
                dismiss(s) {
                  i.dismiss(s);
                },
              });
              return this._applicationRef.attachView(o), new vi([o.rootNodes], o);
            }
            _createFromString(t) {
              const i = this._document.createTextNode(`${t}`);
              return new vi([[i]]);
            }
            _createFromComponent(t, i, r, o, s) {
              const a = t.resolveComponentFactory(r),
                l = Ye.create({ providers: [{ provide: Ay, useValue: o }], parent: i }),
                u = a.create(l),
                c = u.location.nativeElement;
              return (
                s.scrollable && c.classList.add('component-host-scrollable'),
                this._applicationRef.attachView(u.hostView),
                new vi([[c]], u.hostView, u)
              );
            }
            _setAriaHidden(t) {
              const i = t.parentElement;
              i &&
                t !== this._document.body &&
                (Array.from(i.children).forEach((r) => {
                  r !== t &&
                    'SCRIPT' !== r.nodeName &&
                    (this._ariaHiddenValues.set(r, r.getAttribute('aria-hidden')),
                    r.setAttribute('aria-hidden', 'true'));
                }),
                this._setAriaHidden(i));
            }
            _revertAriaHidden() {
              this._ariaHiddenValues.forEach((t, i) => {
                t ? i.setAttribute('aria-hidden', t) : i.removeAttribute('aria-hidden');
              }),
                this._ariaHiddenValues.clear();
            }
            _registerModalRef(t) {
              const i = () => {
                const r = this._modalRefs.indexOf(t);
                r > -1 && (this._modalRefs.splice(r, 1), this._activeInstances.emit(this._modalRefs));
              };
              this._modalRefs.push(t), this._activeInstances.emit(this._modalRefs), t.result.then(i, i);
            }
            _registerWindowCmpt(t) {
              this._windowCmpts.push(t),
                this._activeWindowCmptHasChanged.next(),
                t.onDestroy(() => {
                  const i = this._windowCmpts.indexOf(t);
                  i > -1 && (this._windowCmpts.splice(i, 1), this._activeWindowCmptHasChanged.next());
                });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(H(go), H(Ye), H(ot), H(VR), H(Su), H(ve));
            }),
            (e.ɵprov = X({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        LR = (() => {
          class e {
            constructor(t) {
              (this._ngbConfig = t), (this.backdrop = !0), (this.keyboard = !0);
            }
            get animation() {
              return void 0 === this._animation ? this._ngbConfig.animation : this._animation;
            }
            set animation(t) {
              this._animation = t;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(H(Ca));
            }),
            (e.ɵprov = X({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        HR = (() => {
          class e {
            constructor(t, i, r, o) {
              (this._moduleCFR = t), (this._injector = i), (this._modalStack = r), (this._config = o);
            }
            open(t, i = {}) {
              const r = Object.assign(
                Object.assign(Object.assign({}, this._config), { animation: this._config.animation }),
                i
              );
              return this._modalStack.open(this._moduleCFR, this._injector, t, r);
            }
            get activeInstances() {
              return this._modalStack.activeInstances;
            }
            dismissAll(t) {
              this._modalStack.dismissAll(t);
            }
            hasOpenModals() {
              return this._modalStack.hasOpenModals();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(H(dr), H(Ye), H(BR), H(LR));
            }),
            (e.ɵprov = X({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        Oy = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ providers: [HR] })),
            e
          );
        })(),
        Py = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ imports: [[Et]] })),
            e
          );
        })(),
        $y = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ imports: [[Et]] })),
            e
          );
        })(),
        Wy = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ imports: [[Et]] })),
            e
          );
        })(),
        qy = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ imports: [[Et]] })),
            e
          );
        })(),
        zy = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ imports: [[Et]] })),
            e
          );
        })(),
        Yy = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ imports: [[Et]] })),
            e
          );
        })(),
        Zy = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ imports: [[Et]] })),
            e
          );
        })(),
        Ky = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({})),
            e
          );
        })();
      new Y('live announcer delay', {
        providedIn: 'root',
        factory: function () {
          return 100;
        },
      });
      let Qy = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = se({ type: e })),
          (e.ɵinj = ne({ imports: [[Et]] })),
          e
        );
      })();
      const nx = [uy, cy, fy, gy, my, My, Sy, Oy, Py, $y, Wy, qy, zy, Yy, Zy, Ky, Qy];
      let ix = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e })),
            (e.ɵinj = ne({ imports: [nx, uy, cy, fy, gy, my, My, Sy, Oy, Py, $y, Wy, qy, zy, Yy, Zy, Ky, Qy] })),
            e
          );
        })(),
        rx = (() => {
          class e {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = Ue({
              type: e,
              selectors: [['app-intro-section']],
              decls: 15,
              vars: 0,
              consts: [
                [1, 'container'],
                [1, 'd-flex', 'justify-content-center', 'text-center', 'flex-rowflex-wrap', 'header-margin'],
                ['src', 'assets/media/header-boorgundy.jpg', 1, 'img-responsive-margin'],
                [1, 'row', 'mt-3', 'text-center'],
                [1, 'row', 'text-center'],
              ],
              template: function (t, i) {
                1 & t &&
                  (p(0, 'div', 0),
                  p(1, 'div', 1),
                  G(2, 'img', 2),
                  g(),
                  p(3, 'div', 3),
                  p(4, 'p'),
                  R(
                    5,
                    ' Boorgundy is a unique all-in-one service that provides your brand with high-quality editorial content without the hassle. '
                  ),
                  g(),
                  g(),
                  p(6, 'div', 4),
                  p(7, 'p'),
                  R(
                    8,
                    ' London-based and internationally connected, we work as a dynamic duo to offer you the only service you\u2019ll need for top-notch content for your websites and other medias. '
                  ),
                  g(),
                  g(),
                  p(9, 'div', 4),
                  p(10, 'p'),
                  R(
                    11,
                    ' We know how hard it is for brands to find a team of people who share the same vision for your perfect campaign: stylist, model, photographer, make-up artist, retoucher. We deliver all of that in one serving. '
                  ),
                  g(),
                  g(),
                  p(12, 'div', 4),
                  p(13, 'p'),
                  R(
                    14,
                    ' We work in collaboration with you to bring your vision to life: from moodboards and ideation to vibrant, artful pieces of content that will push your brand forward. '
                  ),
                  g(),
                  g(),
                  g());
              },
              styles: [
                '.img-responsive-margin[_ngcontent-%COMP%]{max-width:90%;min-width:auto;min-height:auto;height:auto;object-fit:scale-down;display:block}@media only screen and (max-width: 500px){.img-responsive-margin[_ngcontent-%COMP%]{max-height:150px;margin-top:-3rem}}.header-margin[_ngcontent-%COMP%]{margin-top:10rem}',
              ],
            })),
            e
          );
        })(),
        ox = (() => {
          class e {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = Ue({
              type: e,
              selectors: [['app-our-approach']],
              decls: 23,
              vars: 0,
              consts: [
                [1, 'row', 'g-0', 'text-start', 'mt-3'],
                [1, 'col-sm'],
                ['src', 'assets/media/our-approach.svg', 1, 'img-responsive'],
                [1, 'container'],
                [1, 'row', 'text-center', 'mt-3'],
                [1, 'd-flex', 'justify-content-start', 'flex-row', 'mt-5', 'flex-wrap'],
                [1, 'p-2'],
                ['src', 'assets/media/understanding.svg', 1, 'img-responsive'],
                ['src', 'assets/media/visualising.svg', 1, 'img-responsive'],
                [1, 'd-flex', 'flex-wrap', 'justify-content-end', 'mb-3'],
                ['src', 'assets/media/creating.svg', 1, 'img-responsive'],
                ['src', 'assets/media/delivering.svg', 1, 'img-responsive'],
                [1, 'row', 'text-center', 'mt-5'],
                [1, 'row', 'text-center'],
              ],
              template: function (t, i) {
                1 & t &&
                  (p(0, 'div', 0),
                  p(1, 'div', 1),
                  G(2, 'img', 2),
                  g(),
                  g(),
                  p(3, 'div', 3),
                  p(4, 'div', 4),
                  p(5, 'p'),
                  R(
                    6,
                    ' Creating unique concepts is at the forefront of what we do and we understand that every business has its own needs and goals. Our approach is focused on collaboration and creativity, without taking away your vision your unique business goals. '
                  ),
                  g(),
                  g(),
                  p(7, 'div', 5),
                  p(8, 'div', 6),
                  G(9, 'img', 7),
                  g(),
                  p(10, 'div', 6),
                  G(11, 'img', 8),
                  g(),
                  g(),
                  p(12, 'div', 9),
                  p(13, 'div', 6),
                  G(14, 'img', 10),
                  g(),
                  p(15, 'div', 6),
                  G(16, 'img', 11),
                  g(),
                  g(),
                  p(17, 'div', 12),
                  p(18, 'p'),
                  R(
                    19,
                    ' Boorgundy isn\u2019t just to create assets for your brand. Our goal is to give you a sense of confidence in your business and help you feel more prepared to take your brand to the next level. '
                  ),
                  g(),
                  g(),
                  p(20, 'div', 13),
                  p(21, 'p'),
                  R(
                    22,
                    ' These steps structure how we work and help us produce the best work for you but they are not set in stone; our main goal is to serve your business so our approach is flexible. If you feel that our packages are not a perfect fit, they can be tailored to meet your unique requirements - we\u2019d love to have a chat! '
                  ),
                  g(),
                  g(),
                  g());
              },
              styles: [
                '.img-responsive[_ngcontent-%COMP%]{max-width:90%;height:auto}.img-responsive-margin[_ngcontent-%COMP%]{max-width:90%;margin-left:20px}.custom-justify-start[_ngcontent-%COMP%]{margin-left:5%}.custom-justify-end[_ngcontent-%COMP%]{margin-left:10%}',
              ],
            })),
            e
          );
        })(),
        sx = (() => {
          class e {
            constructor() {
              this.text = 'SEE OUR PACKAGES';
            }
            ngOnInit() {}
            scrollToPackages() {
              document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = Ue({
              type: e,
              selectors: [['app-see-packages']],
              decls: 2,
              vars: 1,
              consts: [['type', 'button', 1, 'btn', 'btn-social', 'px-custom', 3, 'click']],
              template: function (t, i) {
                1 & t &&
                  (p(0, 'button', 0),
                  ee('click', function () {
                    return i.scrollToPackages();
                  }),
                  R(1),
                  g()),
                  2 & t && (M(1), Wn(' ', i.text, '\n'));
              },
              encapsulation: 2,
            })),
            e
          );
        })(),
        ax = (() => {
          class e {
            constructor() {
              (this.text = 'SEND US A MESSAGE'), (this.email = 'boorgundy@gmail.com');
            }
            ngOnInit() {}
            sendEmail() {
              location.href = `mailto:${this.email}`;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = Ue({
              type: e,
              selectors: [['app-email-us']],
              decls: 2,
              vars: 1,
              consts: [['type', 'button', 1, 'btn', 'btn-social', 3, 'click']],
              template: function (t, i) {
                1 & t &&
                  (p(0, 'button', 0),
                  ee('click', function () {
                    return i.sendEmail();
                  }),
                  R(1),
                  g()),
                  2 & t && (M(1), Wn(' ', i.text, '\n'));
              },
              encapsulation: 2,
            })),
            e
          );
        })(),
        lx = (() => {
          class e {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = Ue({
              type: e,
              selectors: [['app-our-work']],
              decls: 8,
              vars: 0,
              consts: [
                [1, 'row', 'text-end', 'mb-5', 'mt-5', 'g-0'],
                [1, 'col-sm'],
                ['src', 'assets/media/our-work.svg', 1, 'img-responsive-headline'],
                [1, 'container-sm'],
                [1, 'd-flex', 'justify-content-start', 'flex-row', 'flex-wrap', 'mb-5'],
                ['src', 'assets/media/colaj1-site.jpeg', 1, 'img-responsive-start'],
                [1, 'd-flex', 'justify-content-end', 'flex-wrap', 'mb-5'],
                ['src', 'assets/media/colaj2-site.jpeg', 1, 'img-responsive-end'],
              ],
              template: function (t, i) {
                1 & t &&
                  (p(0, 'div', 0),
                  p(1, 'div', 1),
                  G(2, 'img', 2),
                  g(),
                  g(),
                  p(3, 'div', 3),
                  p(4, 'div', 4),
                  G(5, 'img', 5),
                  g(),
                  p(6, 'div', 6),
                  G(7, 'img', 7),
                  g(),
                  g());
              },
              styles: [
                '.img-responsive-start[_ngcontent-%COMP%], .img-responsive-end[_ngcontent-%COMP%]{max-width:80%;min-width:auto;min-height:auto;height:auto;object-fit:scale-down;display:block}.img-responsive-headline[_ngcontent-%COMP%]{max-width:90%;height:auto}@media only screen and (max-width: 500px){.img-responsive-start[_ngcontent-%COMP%]{max-height:200px;margin-left:2rem}.img-responsive-end[_ngcontent-%COMP%]{max-height:200px;margin-right:2rem}}.img-responsive-margin[_ngcontent-%COMP%]{max-width:90%;margin-left:20px}',
              ],
            })),
            e
          );
        })(),
        ux = (() => {
          class e {
            constructor() {
              (this.instaUrl = 'https://www.instagram.com/boorgundy/'), (this.text = 'SEE MORE ON INSTAGRAM');
            }
            ngOnInit() {}
            seeInsta() {
              window.open(this.instaUrl);
            }
            seeWork(t) {
              t.scrollIntoView();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = Ue({
              type: e,
              selectors: [['app-see-insta']],
              decls: 2,
              vars: 1,
              consts: [['type', 'button', 1, 'btn', 'btn-social', 3, 'click']],
              template: function (t, i) {
                1 & t &&
                  (p(0, 'button', 0),
                  ee('click', function () {
                    return i.seeInsta();
                  }),
                  R(1),
                  g()),
                  2 & t && (M(1), Wn(' ', i.text, '\n'));
              },
              encapsulation: 2,
            })),
            e
          );
        })(),
        cx = (() => {
          class e {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = Ue({
              type: e,
              selectors: [['app-package-overview']],
              decls: 32,
              vars: 0,
              consts: [
                [1, 'container'],
                [1, 'd-flex', 'justify-content-center', 'flex-row', 'flex-wrap', 'mt-5'],
                ['src', 'assets/media/lets-work-together.svg', 1, 'img-responsive-margin'],
                [1, 'row', 'text-center'],
                ['id', 'packages'],
                [1, 'd-flex', 'justify-content-center', 'text-center', 'flex-row', 'flex-wrap', 'margin-custom'],
                ['src', 'assets/media/our-packages.svg', 1, 'img-responsive-margin'],
                [1, 'd-flex', 'justify-content-center', 'flex-row', 'flex-wrap'],
                ['src', 'assets/media/the-burgundy.svg', 1, 'img-responsive-margin'],
                ['src', 'assets/media/the-crimson.svg', 1, 'img-responsive-margin'],
                [1, 'd-flex', 'justify-content-center', 'flex-row', 'flex-wrap', 'margin-packages-end'],
                ['src', 'assets/media/the-tangerine.svg', 1, 'img-responsive-margin'],
                ['src', 'assets/media/the-rose.svg', 1, 'img-responsive-margin'],
                [1, 'row', 'justify-content-center', 'text-center'],
                ['href', 'mailto:boorgundy@gmail.com'],
              ],
              template: function (t, i) {
                1 & t &&
                  (p(0, 'div', 0),
                  p(1, 'div', 1),
                  G(2, 'img', 2),
                  g(),
                  p(3, 'div', 3),
                  p(4, 'p'),
                  R(
                    5,
                    ' Think of Boorgundy as your one stop shop for your business: stylist, model, makeup artist, creative director, photographer and retoucher in one. More often than not, putting together a creative team that is on the same page with you comes with unnecessary stress, time and struggles. '
                  ),
                  g(),
                  g(),
                  p(6, 'div', 3),
                  p(7, 'p'),
                  R(
                    8,
                    ' Having us on board allows you to focus on other aspects of your business, while we work collaboratively and transparently to organise, produce and deliver the best visuals for your brand. '
                  ),
                  g(),
                  g(),
                  p(9, 'div', 3),
                  p(10, 'p'),
                  R(
                    11,
                    ' Growing your business doesn\u2019t feel as overwhelming when you have us to deliver fun, high-quality content for your brand, from A to Z. '
                  ),
                  g(),
                  g(),
                  p(12, 'div', 4),
                  p(13, 'div', 5),
                  G(14, 'img', 6),
                  g(),
                  p(15, 'div', 7),
                  G(16, 'img', 8),
                  G(17, 'img', 9),
                  g(),
                  p(18, 'div', 10),
                  G(19, 'img', 11),
                  G(20, 'img', 12),
                  g(),
                  g(),
                  p(21, 'div', 3),
                  p(22, 'p'),
                  R(
                    23,
                    ' The way we see it, branding isn\u2019t one size fits all. You\u2019re one-of-a-kind, and your brand deserves to be one-of-a-kind, too. Let\u2019s build a custom brand that conveys your vision through a carefully-crafted voice and striking visuals. '
                  ),
                  g(),
                  g(),
                  p(24, 'div', 13),
                  p(25, 'p'),
                  R(
                    26,
                    ' It\u2019s easy to get in touch - the form below offers us all the information we need to get started, if you fill in the required fields. '
                  ),
                  g(),
                  p(27, 'p'),
                  R(28, ' For any other information (or just to say hi!) you can contact us via email at '),
                  p(29, 'a', 14),
                  R(30, 'boorgundy@gmail.com'),
                  g(),
                  R(31, ' - we\u2019re happy to hear from you either way. '),
                  g(),
                  g(),
                  g());
              },
              styles: [
                '.img-responsive[_ngcontent-%COMP%]{max-width:90%}.img-container[_ngcontent-%COMP%]{text-align:center;display:block}.margin-custom[_ngcontent-%COMP%]{margin-top:7rem;margin-bottom:3.5rem}.margin-packages-end[_ngcontent-%COMP%]{margin-top:3rem;margin-bottom:7rem}.img-responsive-margin[_ngcontent-%COMP%]{max-width:90%;margin-left:20px}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff0040}.text-div[_ngcontent-%COMP%]{min-width:100%}',
              ],
            })),
            e
          );
        })();
      var dx = mn(731);
      function fx(e, n) {
        1 & e &&
          (p(0, 'div', 48),
          Ko(),
          p(1, 'svg', 49),
          G(2, 'use', 50),
          g(),
          Qo(),
          p(3, 'div'),
          R(4, "Thanks for the inquiry, we'll get back to you shortly!"),
          g(),
          g());
      }
      function hx(e, n) {
        1 & e &&
          (p(0, 'div', 51),
          Ko(),
          p(1, 'svg', 52),
          G(2, 'use', 53),
          g(),
          Qo(),
          p(3, 'div', 54),
          R(4, 'Something went wrong with sending your inquiry! Please reach out to '),
          p(5, 'a', 55),
          R(6, 'boorgundy@gmail.com'),
          g(),
          g(),
          g());
      }
      function px(e, n) {
        1 & e && (p(0, 'div', 56), R(1, 'Name required'), g());
      }
      function gx(e, n) {
        1 & e && (p(0, 'div', 56), R(1, 'Email required'), g());
      }
      function mx(e, n) {
        1 & e && (p(0, 'div', 56), R(1, ' Wrong format, please try again '), g());
      }
      function _x(e, n) {
        1 & e && (p(0, 'div', 56), R(1, ' Business name required '), g());
      }
      function yx(e, n) {
        1 & e && (p(0, 'div', 56), R(1, ' Website and/or Instagram handle required '), g());
      }
      function bx(e, n) {
        if ((1 & e && (p(0, 'option'), R(1), g()), 2 & e)) {
          const t = n.$implicit;
          M(1), Os(t);
        }
      }
      function vx(e, n) {
        1 & e && (p(0, 'div', 56), R(1, ' Brand information required '), g());
      }
      function Dx(e, n) {
        if ((1 & e && (p(0, 'option'), R(1), g()), 2 & e)) {
          const t = n.$implicit;
          M(1), Os(t);
        }
      }
      function wx(e, n) {
        1 & e && (p(0, 'div', 56), R(1, ' Budget estimate required '), g());
      }
      function Cx(e, n) {
        1 & e && (p(0, 'div', 56), R(1, ' Tentative time frame required '), g());
      }
      let Nx = (() => {
          class e {
            constructor() {
              (this.mailServiceId = 'boorgundy_mail_service'),
                (this.mailTemplateId = 'template_9jsvubo'),
                (this.mailUserId = 'user_MB34gpowffdtFKV4qCfPe'),
                (this.shouldShowSuccessAlert = !1),
                (this.shouldShowFailureAlert = !1),
                (this.businessTimeOptions = ['NOT LAUNCHED YET', 'LESS THAN A YEAR', '1-3 YEARS', '5+ YEARS']),
                (this.packageOptions = [
                  'NOT SURE',
                  'THE BURGUNDY',
                  'THE CRIMSON',
                  'THE TANGERINE',
                  'THE ROSE',
                  'PERSONALIZED PACKAGE',
                ]),
                (this.name = new ft('', hn.required)),
                (this.email = new ft('', [hn.required, hn.email])),
                (this.businessName = new ft('', hn.required)),
                (this.website = new ft('', hn.required)),
                (this.businessTime = new ft(this.businessTimeOptions[0], hn.required)),
                (this.aboutYou = new ft('', hn.required)),
                (this.package = new ft(this.packageOptions[0], hn.required)),
                (this.budget = new ft('', hn.required)),
                (this.targetDate = new ft('', hn.required)),
                (this.additionalInfo = new ft('')),
                (this.inquiryForm = new ya({
                  name: this.name,
                  email: this.email,
                  businessName: this.businessName,
                  website: this.website,
                  businessTime: this.businessTime,
                  aboutYou: this.aboutYou,
                  package: this.package,
                  budget: this.budget,
                  targetDate: this.targetDate,
                  additionalInfo: this.additionalInfo,
                }));
            }
            ngOnInit() {}
            submit() {
              dx.ZP.send(this.mailServiceId, this.mailTemplateId, this.inquiryForm.value, this.mailUserId).then(
                (t) => {
                  this.handleEmailSuccess(), console.log(t.text);
                },
                (t) => {
                  this.handleEmailFailure(), console.log(t.text);
                }
              );
            }
            handleEmailSuccess() {
              (this.shouldShowSuccessAlert = !0), (this.shouldShowFailureAlert = !1), this.inquiryForm.disable();
            }
            handleEmailFailure() {
              (this.shouldShowFailureAlert = !0), (this.shouldShowSuccessAlert = !1), this.inquiryForm.disable();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = Ue({
              type: e,
              selectors: [['app-inquiry-form']],
              decls: 96,
              vars: 44,
              consts: [
                ['xmlns', 'http://www.w3.org/2000/svg', 2, 'display', 'none'],
                ['id', 'check-circle-fill', 'fill', 'currentColor', 'viewBox', '0 0 16 16'],
                [
                  'd',
                  'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z',
                ],
                ['id', 'info-fill', 'fill', 'currentColor', 'viewBox', '0 0 16 16'],
                [
                  'd',
                  'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z',
                ],
                ['id', 'exclamation-triangle-fill', 'fill', 'currentColor', 'viewBox', '0 0 16 16'],
                [
                  'd',
                  'M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z',
                ],
                [1, 'container'],
                [3, 'formGroup', 'ngSubmit'],
                ['class', 'alert alert-success d-flex align-items-center', 'role', 'alert', 4, 'ngIf'],
                ['class', 'alert alert-danger d-flex align-items-center', 'role', 'alert', 4, 'ngIf'],
                [1, 'form-group', 'row', 'name'],
                [1, 'col-xs-8'],
                [1, 'mb-3'],
                ['for', 'name'],
                ['type', 'text', 'formControlName', 'name', 'name', 'name', 'id', 'name', 1, 'form-control'],
                ['class', 'my-2 form-error-prompt', 4, 'ngIf'],
                [1, 'form-group', 'row', 'email'],
                ['for', 'email'],
                ['type', 'text', 'formControlName', 'email', 'name', 'email', 'id', 'email', 1, 'form-control'],
                [1, 'form-group', 'row', 'businessName'],
                ['for', 'businessName'],
                [
                  'type',
                  'text',
                  'formControlName',
                  'businessName',
                  'name',
                  'businessName',
                  'id',
                  'businessName',
                  1,
                  'form-control',
                ],
                [1, 'form-group', 'row', 'website'],
                ['for', 'website'],
                ['type', 'text', 'formControlName', 'website', 'name', 'website', 'id', 'website', 1, 'form-control'],
                [1, 'form-group', 'row', 'businessTime'],
                ['for', 'businessTime'],
                ['formControlName', 'businessTime', 'name', 'businessTime', 'id', 'businessTime', 1, 'form-control'],
                [4, 'ngFor', 'ngForOf'],
                [1, 'form-group', 'row', 'aboutYou'],
                ['for', 'aboutYou'],
                [
                  'type',
                  'text',
                  'formControlName',
                  'aboutYou',
                  'name',
                  'aboutYou',
                  'id',
                  'aboutYou',
                  1,
                  'form-control',
                ],
                [1, 'form-group', 'row', 'package'],
                ['for', 'package'],
                ['formControlName', 'package', 'name', 'package', 'id', 'package', 1, 'form-control', 'minimal'],
                [1, 'form-group', 'row', 'budget'],
                ['for', 'budget'],
                ['type', 'text', 'formControlName', 'budget', 'name', 'budget', 'id', 'budget', 1, 'form-control'],
                [1, 'form-group', 'row', 'targetDate'],
                ['for', 'targetDate'],
                [
                  'type',
                  'text',
                  'formControlName',
                  'targetDate',
                  'name',
                  'targetDate',
                  'id',
                  'targetDate',
                  1,
                  'form-control',
                ],
                [1, 'form-group', 'row', 'additionalInfo'],
                ['for', 'additionalInfo'],
                [
                  'type',
                  'text',
                  'formControlName',
                  'additionalInfo',
                  'name',
                  'additionalInfo',
                  'id',
                  'additionalInfo',
                  1,
                  'form-control',
                ],
                [1, 'form-group', 'row'],
                ['id', 'button-container', 1, 'col-xs-8'],
                ['type', 'submit', 1, 'btn', 'btn-inquiry-submit', 3, 'disabled'],
                ['role', 'alert', 1, 'alert', 'alert-success', 'd-flex', 'align-items-center'],
                [
                  'width',
                  '24',
                  'height',
                  '24',
                  'role',
                  'img',
                  'aria-label',
                  'Success:',
                  1,
                  'bi',
                  'flex-shrink-0',
                  'me-2',
                ],
                [0, 'xlink', 'href', '#check-circle-fill'],
                ['role', 'alert', 1, 'alert', 'alert-danger', 'd-flex', 'align-items-center'],
                [
                  'width',
                  '24',
                  'height',
                  '24',
                  'role',
                  'img',
                  'aria-label',
                  'Danger:',
                  1,
                  'bi',
                  'flex-shrink-0',
                  'me-2',
                ],
                [0, 'xlink', 'href', '#exclamation-triangle-fill'],
                [1, 'alert-text'],
                ['href', 'mailto:boorgundy@gmail.com'],
                [1, 'my-2', 'form-error-prompt'],
              ],
              template: function (t, i) {
                1 & t &&
                  (Ko(),
                  p(0, 'svg', 0),
                  p(1, 'symbol', 1),
                  G(2, 'path', 2),
                  g(),
                  p(3, 'symbol', 3),
                  G(4, 'path', 4),
                  g(),
                  p(5, 'symbol', 5),
                  G(6, 'path', 6),
                  g(),
                  g(),
                  Qo(),
                  p(7, 'div', 7),
                  p(8, 'form', 8),
                  ee('ngSubmit', function () {
                    return i.inquiryForm.valid && i.submit();
                  }),
                  S(9, fx, 5, 0, 'div', 9),
                  S(10, hx, 7, 0, 'div', 10),
                  p(11, 'div', 11),
                  p(12, 'div', 12),
                  p(13, 'div', 12),
                  p(14, 'div', 13),
                  p(15, 'label', 14),
                  R(16, 'NAME'),
                  g(),
                  G(17, 'input', 15),
                  S(18, px, 2, 0, 'div', 16),
                  g(),
                  g(),
                  g(),
                  g(),
                  p(19, 'div', 17),
                  p(20, 'div', 12),
                  p(21, 'div', 12),
                  p(22, 'div', 13),
                  p(23, 'label', 18),
                  R(24, 'EMAIL'),
                  g(),
                  G(25, 'input', 19),
                  S(26, gx, 2, 0, 'div', 16),
                  S(27, mx, 2, 0, 'div', 16),
                  g(),
                  g(),
                  g(),
                  g(),
                  p(28, 'div', 20),
                  p(29, 'div', 12),
                  p(30, 'div', 12),
                  p(31, 'div', 13),
                  p(32, 'label', 21),
                  R(33, 'BUSINESS NAME'),
                  g(),
                  G(34, 'input', 22),
                  S(35, _x, 2, 0, 'div', 16),
                  g(),
                  g(),
                  g(),
                  g(),
                  p(36, 'div', 23),
                  p(37, 'div', 12),
                  p(38, 'div', 12),
                  p(39, 'div', 13),
                  p(40, 'label', 24),
                  R(41, 'WEBSITE AND/OR INSTAGRAM HANDLE'),
                  g(),
                  G(42, 'input', 25),
                  S(43, yx, 2, 0, 'div', 16),
                  g(),
                  g(),
                  g(),
                  g(),
                  p(44, 'div', 26),
                  p(45, 'div', 12),
                  p(46, 'div', 12),
                  p(47, 'div', 13),
                  p(48, 'label', 27),
                  R(49, 'HOW LONG HAVE YOU BEEN IN BUSINESS?'),
                  g(),
                  p(50, 'select', 28),
                  S(51, bx, 2, 1, 'option', 29),
                  g(),
                  g(),
                  g(),
                  g(),
                  g(),
                  p(52, 'div', 30),
                  p(53, 'div', 12),
                  p(54, 'div', 12),
                  p(55, 'div', 13),
                  p(56, 'label', 31),
                  R(57, 'TELL US ABOUT YOUR BRAND & WHAT YOU ARE LOOKING FOR'),
                  g(),
                  G(58, 'input', 32),
                  S(59, vx, 2, 0, 'div', 16),
                  g(),
                  g(),
                  g(),
                  g(),
                  p(60, 'div', 33),
                  p(61, 'div', 12),
                  p(62, 'div', 12),
                  p(63, 'div', 13),
                  p(64, 'label', 34),
                  R(65, 'WHAT PACKAGE ARE YOU INTERESTED IN?'),
                  g(),
                  p(66, 'select', 35),
                  S(67, Dx, 2, 1, 'option', 29),
                  g(),
                  g(),
                  g(),
                  g(),
                  g(),
                  p(68, 'div', 36),
                  p(69, 'div', 12),
                  p(70, 'div', 12),
                  p(71, 'div', 13),
                  p(72, 'label', 37),
                  R(73, 'DO YOU HAVE A BUDGET IN MIND?'),
                  g(),
                  G(74, 'input', 38),
                  S(75, wx, 2, 0, 'div', 16),
                  g(),
                  g(),
                  g(),
                  g(),
                  p(76, 'div', 39),
                  p(77, 'div', 12),
                  p(78, 'div', 12),
                  p(79, 'div', 13),
                  p(80, 'label', 40),
                  R(81, 'WHEN ARE YOU HOPING TO HAVE YOUR PROJECT COMPLETED BY?'),
                  g(),
                  G(82, 'input', 41),
                  S(83, Cx, 2, 0, 'div', 16),
                  g(),
                  g(),
                  g(),
                  g(),
                  p(84, 'div', 42),
                  p(85, 'div', 12),
                  p(86, 'div', 12),
                  p(87, 'div', 13),
                  p(88, 'label', 43),
                  R(89, 'ADDITIONAL INFO (OPTIONAL)'),
                  g(),
                  G(90, 'input', 44),
                  g(),
                  g(),
                  g(),
                  g(),
                  p(91, 'div', 45),
                  p(92, 'div', 46),
                  p(93, 'div', 13),
                  p(94, 'button', 47),
                  R(95, 'SUBMIT'),
                  g(),
                  g(),
                  g(),
                  g(),
                  g(),
                  g()),
                  2 & t &&
                    (M(8),
                    O('formGroup', i.inquiryForm),
                    M(1),
                    O('ngIf', i.shouldShowSuccessAlert),
                    M(1),
                    O('ngIf', i.shouldShowFailureAlert),
                    M(1),
                    W('has-errors', i.name.touched && i.name.invalid),
                    M(6),
                    W('is-invalid', i.name.touched && i.name.invalid),
                    M(1),
                    O('ngIf', i.name.touched && (null == i.name.errors ? null : i.name.errors.required)),
                    M(1),
                    W('has-errors', i.email.touched && i.email.invalid),
                    M(6),
                    W('is-invalid', i.email.touched && i.email.invalid),
                    M(1),
                    O('ngIf', i.email.touched && (null == i.email.errors ? null : i.email.errors.required)),
                    M(1),
                    O('ngIf', i.email.touched && (null == i.email.errors ? null : i.email.errors.email)),
                    M(1),
                    W('has-errors', i.businessName.touched && i.businessName.invalid),
                    M(6),
                    W('is-invalid', i.businessName.touched && i.businessName.invalid),
                    M(1),
                    O(
                      'ngIf',
                      i.businessName.touched && (null == i.businessName.errors ? null : i.businessName.errors.required)
                    ),
                    M(1),
                    W('has-errors', i.website.touched && i.website.invalid),
                    M(6),
                    W('is-invalid', i.website.touched && i.website.invalid),
                    M(1),
                    O('ngIf', i.website.touched && (null == i.website.errors ? null : i.website.errors.required)),
                    M(8),
                    O('ngForOf', i.businessTimeOptions),
                    M(1),
                    W('has-errors', i.aboutYou.touched && i.aboutYou.invalid),
                    M(6),
                    W('is-invalid', i.aboutYou.touched && i.aboutYou.invalid),
                    M(1),
                    O('ngIf', i.aboutYou.touched && (null == i.aboutYou.errors ? null : i.aboutYou.errors.required)),
                    M(8),
                    O('ngForOf', i.packageOptions),
                    M(1),
                    W('has-errors', i.budget.touched && i.budget.invalid),
                    M(6),
                    W('is-invalid', i.budget.touched && i.budget.invalid),
                    M(1),
                    O('ngIf', i.budget.touched && (null == i.budget.errors ? null : i.budget.errors.required)),
                    M(1),
                    W('has-errors', i.targetDate.touched && i.targetDate.invalid),
                    M(6),
                    W('is-invalid', i.targetDate.touched && i.targetDate.invalid),
                    M(1),
                    O(
                      'ngIf',
                      i.targetDate.touched && (null == i.targetDate.errors ? null : i.targetDate.errors.required)
                    ),
                    M(11),
                    W('btn-highlight', i.inquiryForm.valid),
                    O('disabled', i.inquiryForm.invalid));
              },
              directives: [k0, N0, ba, br, ua, C0, Zc, va, yr, G0, U0],
              styles: [
                'label[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%], .form-error-prompt[_ngcontent-%COMP%]{font-family:Forum}.alert-text[_ngcontent-%COMP%]{font-family:Lato}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff0040}input.form-control[_ngcontent-%COMP%]{border:0;border-bottom:1px solid black;border-radius:0}input.form-control[_ngcontent-%COMP%]:disabled{background-color:transparent}input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active{-webkit-box-shadow:0 0 0 30px white inset!important}select.form-control[_ngcontent-%COMP%]{border:1px solid black;border-radius:0;-webkit-appearance:menulist-button!important;width:-moz-fit-content;width:fit-content;margin-top:1vh}.form-control[_ngcontent-%COMP%]:focus{box-shadow:none}#button-container[_ngcontent-%COMP%]{text-align:center}.btn-inquiry-submit[_ngcontent-%COMP%]{border-color:#000;font-family:Forum;color:#000;background-color:transparent;border-radius:0}.btn-highlight[_ngcontent-%COMP%]:hover, .btn-highlight[_ngcontent-%COMP%]:focus, .btn-highlight[_ngcontent-%COMP%]:active, .btn-highlight.active[_ngcontent-%COMP%], .open[_ngcontent-%COMP%] > .dropdown-toggle.btn-highlight[_ngcontent-%COMP%]{color:#ff0040;border-color:#ff0040}.has-errors[_ngcontent-%COMP%], .has-errors[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%]{color:#dc3545}',
              ],
            })),
            e
          );
        })(),
        Ex = (() => {
          class e {
            constructor() {
              (this.logo = 'boorgundy'), (this.isCollapsed = !0);
            }
            onRightClick(t) {
              t.preventDefault();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = Ue({
              type: e,
              selectors: [['app-root']],
              hostBindings: function (t, i) {
                1 & t &&
                  ee('contextmenu', function (o) {
                    return i.onRightClick(o);
                  });
              },
              decls: 17,
              vars: 0,
              consts: [
                [1, 'navbar', 'navbar-expand-lg', 'navbar-light'],
                [1, 'container-fluid'],
                ['href', '.', 1, 'nav-logo'],
                ['src', '../assets/icons/logo-pink.svg', 'alt', '', 'width', '', 'height', '24', 1, 'logo-image'],
                [1, 'container'],
                [1, 'row', 'mt-2', 'text-center'],
                [1, 'row', 'mt-2', 'mb-3', 'text-center'],
                [1, 'row', 'text-center', 'mb-5'],
              ],
              template: function (t, i) {
                1 & t &&
                  (p(0, 'nav', 0),
                  p(1, 'div', 1),
                  p(2, 'a', 2),
                  G(3, 'img', 3),
                  g(),
                  g(),
                  g(),
                  G(4, 'app-intro-section'),
                  G(5, 'app-our-approach'),
                  p(6, 'div', 4),
                  p(7, 'div', 5),
                  G(8, 'app-see-packages'),
                  g(),
                  p(9, 'div', 6),
                  G(10, 'app-email-us'),
                  g(),
                  g(),
                  G(11, 'app-our-work'),
                  p(12, 'div', 4),
                  p(13, 'div', 7),
                  G(14, 'app-see-insta'),
                  g(),
                  g(),
                  G(15, 'app-package-overview'),
                  G(16, 'app-inquiry-form'));
              },
              directives: [sd, rx, ox, sx, ax, lx, ux, cx, Nx],
              styles: [
                ".nav-logo[_ngcontent-%COMP%]{padding-top:5%;position:absolute;left:50%;transform:translate(-50%);text-decoration:none}.logo-image[_ngcontent-%COMP%]{margin-top:4rem;height:9rem}.navbar[_ngcontent-%COMP%]{margin-bottom:10vmin}.navbar-menu[_ngcontent-%COMP%]{color:#6e1423}.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:#6e1423;font-family:Forum;font-weight:400;padding-top:20px;padding-right:20px;font-size:26px}.navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#f9104e}.navbar-toggler[_ngcontent-%COMP%]{color:transparent;border-color:transparent}.navbar-light[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%]{background-color:red;-webkit-mask-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");mask-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}",
              ],
            })),
            e
          );
        })(),
        Mx = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = se({ type: e, bootstrap: [Ex] })),
            (e.ɵinj = ne({ providers: [], imports: [[HT, ix, ty, SA]] })),
            e
          );
        })();
      (Jm = !1),
        BT()
          .bootstrapModule(Mx)
          .catch((e) => console.error(e));
    },
    731: (Di, Mt, mn) => {
      var be = mn(436),
        Je = mn(95),
        en = null,
        Rn = 'https://api.emailjs.com';
      function Bt(Ae, ht, $) {
        return (
          void 0 === $ && ($ = {}),
          new Promise(function (xn, It) {
            var Lt = new XMLHttpRequest();
            for (var kn in (Lt.addEventListener('load', function (wi) {
              var Mr = new be.EmailJSResponseStatus(wi.target);
              200 === Mr.status || 'OK' === Mr.text ? xn(Mr) : It(Mr);
            }),
            Lt.addEventListener('error', function (wi) {
              It(new be.EmailJSResponseStatus(wi.target));
            }),
            Lt.open('POST', Ae, !0),
            $))
              Lt.setRequestHeader(kn, $[kn]);
            Lt.send(ht);
          })
        );
      }
      function Nr(Ae) {
        var ht = document && document.getElementById('g-recaptcha-response');
        return ht && ht.value && (Ae['g-recaptcha-response'] = ht.value), (ht = null), Ae;
      }
      Mt.ZP = {
        init: function (Ae, ht) {
          (en = Ae), (Rn = ht || 'https://api.emailjs.com');
        },
        send: function (Ae, ht, $, xn) {
          var It = { lib_version: '2.6.4', user_id: xn || en, service_id: Ae, template_id: ht, template_params: Nr($) };
          return Bt(Rn + '/api/v1.0/email/send', JSON.stringify(It), { 'Content-type': 'application/json' });
        },
        sendForm: function (Ae, ht, $, xn) {
          if (
            ('string' == typeof $ &&
              ($ = document.querySelector(
                (function (Ae) {
                  return '#' !== Ae[0] && '.' !== Ae[0] ? '#' + Ae : Ae;
                })($)
              )),
            !$ || 'FORM' !== $.nodeName)
          )
            throw 'Expected the HTML form element or the style selector of form';
          Je.UI.progressState($);
          var It = new FormData($);
          return (
            It.append('lib_version', '2.6.4'),
            It.append('service_id', Ae),
            It.append('template_id', ht),
            It.append('user_id', xn || en),
            Bt(Rn + '/api/v1.0/email/send-form', It).then(
              function (Lt) {
                return Je.UI.successState($), Lt;
              },
              function (Lt) {
                return Je.UI.errorState($), Promise.reject(Lt);
              }
            )
          );
        },
      };
    },
    436: (Di, Mt) => {
      Object.defineProperty(Mt, '__esModule', { value: !0 }),
        (Mt.EmailJSResponseStatus = void 0),
        (Mt.EmailJSResponseStatus = function (be) {
          (this.status = be.status), (this.text = be.responseText);
        });
    },
    95: (Di, Mt) => {
      Object.defineProperty(Mt, '__esModule', { value: !0 }), (Mt.UI = void 0);
      var mn = (function () {
        function te() {}
        return (
          (te.clearAll = function (be) {
            be.classList.remove(this.PROGRESS), be.classList.remove(this.DONE), be.classList.remove(this.ERROR);
          }),
          (te.progressState = function (be) {
            this.clearAll(be), be.classList.add(this.PROGRESS);
          }),
          (te.successState = function (be) {
            be.classList.remove(this.PROGRESS), be.classList.add(this.DONE);
          }),
          (te.errorState = function (be) {
            be.classList.remove(this.PROGRESS), be.classList.add(this.ERROR);
          }),
          (te.PROGRESS = 'emailjs-sending'),
          (te.DONE = 'emailjs-success'),
          (te.ERROR = 'emailjs-error'),
          te
        );
      })();
      Mt.UI = mn;
    },
  },
  (Di) => {
    Di((Di.s = 914));
  },
]);
