"use strict";
(globalThis["rspackChunkexamples"] ||= []).push([[523], {
3101(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C5: () => (/* binding */ Navigate),
  qh: () => (/* binding */ Route),
  Ix: () => (/* binding */ Router),
  BV: () => (/* binding */ Routes)
});

// UNUSED EXPORTS: Await, DataRoutes, MemoryRouter, Outlet, RouterProvider, WithComponentProps, WithErrorBoundaryProps, WithHydrateFallbackProps, createMemoryRouter, createRoutesFromChildren, createRoutesFromElements, hydrationRouteProperties, renderMatches, withComponentProps, withErrorBoundaryProps, withHydrateFallbackProps

// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/router/history.js
var router_history = __webpack_require__(470);
// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/router/utils.js
var utils = __webpack_require__(3907);
// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/router/navigation.js
var navigation = __webpack_require__(2582);
// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/context.js
var context = __webpack_require__(9189);
;// CONCATENATED MODULE: ./node_modules/react-router/dist/production/lib/await.js
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//#region lib/await.ts
function getPromiseResult(promise) {
	if (promise.status === "fulfilled") return {
		status: "fulfilled",
		value: promise.value
	};
	if (promise.status === "rejected") return {
		status: "rejected",
		reason: promise.reason
	};
}
let awaitPromises = /* @__PURE__ */ (/* unused pure expression or super */ null && (new WeakMap()));
function await_getAwaitPromise(source, onError) {
	let cached = awaitPromises.get(source);
	if (!cached) {
		cached = {
			promise: Promise.resolve(source).then((value) => settle({
				status: "fulfilled",
				value
			}), (reason) => {
				let result = settle({
					status: "rejected",
					reason
				});
				try {
					cached.onError(reason);
				} catch (error) {
					console.error("<Await> caught the following error in onError", error);
				}
				return result;
			}),
			onError
		};
		awaitPromises.set(source, cached);
	} else cached.onError = onError;
	function settle(result) {
		Object.assign(cached.promise, {
			status: "fulfilled",
			value: result
		});
		return result;
	}
	let result = getPromiseResult(source);
	if (result) settle(result);
	return cached.promise;
}
//#endregion


// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/hooks.js + 2 modules
var hooks = __webpack_require__(537);
// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/dom/ssr/components.js + 4 modules
var components = __webpack_require__(1364);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
;// CONCATENATED MODULE: ./node_modules/react-router/dist/production/lib/components.js
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */











//#region lib/components.tsx
const hydrationRouteProperties = (/* unused pure expression or super */ null && (["HydrateFallback", "hydrateFallbackElement"]));
/**
* Create a new {@link DataRouter} that manages the application path using an
* in-memory [`History`](https://developer.mozilla.org/en-US/docs/Web/API/History)
* stack. Useful for non-browser environments without a DOM API.
*
* Data Routers should not be held in React state. You should create your router
* once outside of the React tree and pass it to {@link RouterProvider | `<RouterProvider>`}.
* You can use `patchRoutesOnNavigation` to add additional routes programmatically.
*
* @public
* @category Data Routers
* @mode data
* @param routes Application routes
* @param opts Options
* @param {MemoryRouterOpts.basename} opts.basename n/a
* @param {MemoryRouterOpts.dataStrategy} opts.dataStrategy n/a
* @param {MemoryRouterOpts.future} opts.future n/a
* @param {MemoryRouterOpts.getContext} opts.getContext n/a
* @param {MemoryRouterOpts.hydrationData} opts.hydrationData n/a
* @param {MemoryRouterOpts.initialEntries} opts.initialEntries n/a
* @param {MemoryRouterOpts.initialIndex} opts.initialIndex n/a
* @param {MemoryRouterOpts.instrumentations} opts.instrumentations n/a
* @param {MemoryRouterOpts.patchRoutesOnNavigation} opts.patchRoutesOnNavigation n/a
* @returns An initialized {@link DataRouter} to pass to {@link RouterProvider | `<RouterProvider>`}
*/
function createMemoryRouter(routes, opts) {
	return createRouter({
		basename: opts?.basename,
		getContext: opts?.getContext,
		future: opts?.future,
		history: createMemoryHistory({
			initialEntries: opts?.initialEntries,
			initialIndex: opts?.initialIndex
		}),
		hydrationData: opts?.hydrationData,
		routes,
		mapRouteProperties: defaultMapRouteProperties,
		hydrationRouteProperties,
		dataStrategy: opts?.dataStrategy,
		patchRoutesOnNavigation: opts?.patchRoutesOnNavigation,
		instrumentations: opts?.instrumentations
	}).initialize();
}
var Deferred = class {
	status = "pending";
	promise;
	resolve;
	reject;
	constructor() {
		this.promise = new Promise((resolve, reject) => {
			this.resolve = (value) => {
				if (this.status === "pending") {
					this.status = "resolved";
					resolve(value);
				}
			};
			this.reject = (reason) => {
				if (this.status === "pending") {
					this.status = "rejected";
					reject(reason);
				}
			};
		});
	}
};
function handleSkippedViewTransition(transition, document) {
	transition.ready.catch((reason) => {
		if (!(document.visibilityState === "hidden" || typeof reason === "object" && reason !== null && "name" in reason && reason.name === "AbortError")) throw reason;
	});
}
/**
* Render the UI for the given {@link DataRouter}. This component should
* typically be at the top of an app's element tree. The router prop should
* be a single router instance created outside of the React tree. Avoid
* creating new routers during React renders/re-renders.
*
* ```tsx
* import { createBrowserRouter } from "react-router";
* import { RouterProvider } from "react-router/dom";
* import { createRoot } from "react-dom/client";
*
* const router = createBrowserRouter(routes);
* createRoot(document.getElementById("root")).render(
*   <RouterProvider router={router} />
* );
* ```
*
* <docs-info>Please note that this component is exported both from
* `react-router` and `react-router/dom` with the only difference being that the
* latter automatically wires up `react-dom`'s [`flushSync`](https://react.dev/reference/react-dom/flushSync)
* implementation. You _almost always_ want to use the version from
* `react-router/dom` unless you're running in a non-DOM environment.</docs-info>
*
*
* @public
* @category Data Routers
* @mode data
* @param props Props
* @param {RouterProviderProps.flushSync} props.flushSync n/a
* @param {RouterProviderProps.onError} props.onError n/a
* @param {RouterProviderProps.router} props.router n/a
* @param {RouterProviderProps.useTransitions} props.useTransitions n/a
* @returns React element for the rendered router
*/
function RouterProvider({ router, flushSync: reactDomFlushSyncImpl, onError, useTransitions }) {
	useTransitions = useIsRSCRouterContext() || useTransitions;
	let [_state, setStateImpl] = React$1.useState(router.state);
	let [state, setOptimisticState] = useOptimistic(_state);
	let lastState = React$1.useRef(state);
	let [pendingState, setPendingState] = React$1.useState();
	let [vtContext, setVtContext] = React$1.useState({ isTransitioning: false });
	let [renderDfd, setRenderDfd] = React$1.useState();
	let [transition, setTransition] = React$1.useState();
	let [interruption, setInterruption] = React$1.useState();
	let fetcherData = React$1.useRef(/* @__PURE__ */ new Map());
	let handledErrors = React$1.useRef(/* @__PURE__ */ new WeakSet());
	let setState = React$1.useCallback((newState, { deletedFetchers, newErrors, flushSync, viewTransitionOpts }) => {
		lastState.current = newState;
		if (newErrors && newState.errors && clientErrors.has(newState.errors)) if (handledErrors.current.has(newState.errors)) newErrors = null;
		else handledErrors.current.add(newState.errors);
		if (newErrors && onError) Object.values(newErrors).forEach((error) => onError(error, {
			location: newState.location,
			params: newState.matches[0]?.params ?? {},
			pattern: getRoutePattern(newState.matches)
		}));
		newState.fetchers.forEach((fetcher, key) => {
			if (fetcher.data !== void 0) fetcherData.current.set(key, fetcher.data);
		});
		deletedFetchers.forEach((key) => fetcherData.current.delete(key));
		warnOnce(flushSync === false || reactDomFlushSyncImpl != null, "You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from \"react-router/dom\"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.");
		let isViewTransitionAvailable = router.window != null && router.window.document != null && typeof router.window.document.startViewTransition === "function";
		warnOnce(viewTransitionOpts == null || isViewTransitionAvailable, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.");
		if (!viewTransitionOpts || !isViewTransitionAvailable) {
			if (reactDomFlushSyncImpl && flushSync) reactDomFlushSyncImpl(() => setStateImpl(newState));
			else if (useTransitions === false) setStateImpl(newState);
			else React$1.startTransition(() => {
				if (useTransitions === true) setOptimisticState((s) => getOptimisticRouterState(s, newState));
				setStateImpl(newState);
			});
			return;
		}
		if (reactDomFlushSyncImpl && flushSync) {
			reactDomFlushSyncImpl(() => {
				if (transition) {
					renderDfd?.resolve();
					transition.skipTransition();
				}
				setVtContext({
					isTransitioning: true,
					flushSync: true,
					currentLocation: viewTransitionOpts.currentLocation,
					nextLocation: viewTransitionOpts.nextLocation
				});
			});
			let t = router.window.document.startViewTransition(() => {
				reactDomFlushSyncImpl(() => setStateImpl(newState));
			});
			handleSkippedViewTransition(t, router.window.document);
			t.finished.finally(() => {
				reactDomFlushSyncImpl(() => {
					setRenderDfd(void 0);
					setTransition(void 0);
					setPendingState(void 0);
					setVtContext({ isTransitioning: false });
				});
			});
			reactDomFlushSyncImpl(() => setTransition(t));
			return;
		}
		if (transition) {
			renderDfd?.resolve();
			transition.skipTransition();
			setInterruption({
				state: newState,
				currentLocation: viewTransitionOpts.currentLocation,
				nextLocation: viewTransitionOpts.nextLocation
			});
		} else {
			setPendingState(newState);
			setVtContext({
				isTransitioning: true,
				flushSync: false,
				currentLocation: viewTransitionOpts.currentLocation,
				nextLocation: viewTransitionOpts.nextLocation
			});
		}
	}, [
		router.window,
		reactDomFlushSyncImpl,
		transition,
		renderDfd,
		useTransitions,
		setOptimisticState,
		onError
	]);
	React$1.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
	React$1.useLayoutEffect(() => {
		let errors = router.state.errors;
		let newErrors = errors ? clientErrors.get(errors) : null;
		if (lastState.current !== router.state || errors && newErrors && !handledErrors.current.has(errors)) setState(router.state, {
			deletedFetchers: [],
			flushSync: false,
			newErrors: newErrors ?? null
		});
	}, [router, setState]);
	React$1.useEffect(() => {
		if (vtContext.isTransitioning && !vtContext.flushSync) setRenderDfd(new Deferred());
	}, [vtContext]);
	React$1.useEffect(() => {
		if (renderDfd && pendingState && router.window) {
			let newState = pendingState;
			let renderPromise = renderDfd.promise;
			let transition = router.window.document.startViewTransition(async () => {
				if (useTransitions === false) setStateImpl(newState);
				else React$1.startTransition(() => {
					if (useTransitions === true) setOptimisticState((s) => getOptimisticRouterState(s, newState));
					setStateImpl(newState);
				});
				await renderPromise;
			});
			handleSkippedViewTransition(transition, router.window.document);
			transition.finished.finally(() => {
				setRenderDfd(void 0);
				setTransition(void 0);
				setPendingState(void 0);
				setVtContext({ isTransitioning: false });
			});
			setTransition(transition);
		}
	}, [
		pendingState,
		renderDfd,
		router.window,
		useTransitions,
		setOptimisticState
	]);
	React$1.useEffect(() => {
		if (renderDfd && pendingState && state.location.key === pendingState.location.key) renderDfd.resolve();
	}, [
		renderDfd,
		transition,
		state.location,
		pendingState
	]);
	React$1.useEffect(() => {
		if (!vtContext.isTransitioning && interruption) {
			setPendingState(interruption.state);
			setVtContext({
				isTransitioning: true,
				flushSync: false,
				currentLocation: interruption.currentLocation,
				nextLocation: interruption.nextLocation
			});
			setInterruption(void 0);
		}
	}, [vtContext.isTransitioning, interruption]);
	let navigator = React$1.useMemo(() => {
		return {
			createHref: router.createHref,
			createURL: router.createURL,
			encodeLocation: router.encodeLocation,
			go: (n) => router.navigate(n),
			push: (to, state, opts) => router.navigate(to, {
				state,
				preventScrollReset: opts?.preventScrollReset
			}),
			replace: (to, state, opts) => router.navigate(to, {
				replace: true,
				state,
				preventScrollReset: opts?.preventScrollReset
			})
		};
	}, [router]);
	let basename = router.basename || "/";
	let dataRouterContext = React$1.useMemo(() => ({
		router,
		navigator,
		static: false,
		basename,
		onError
	}), [
		router,
		navigator,
		basename,
		onError
	]);
	let dataRouterState = React$1.useMemo(() => ({
		historyAction: state.historyAction,
		location: state.location,
		matches: state.matches,
		initialized: state.initialized,
		renderFallback: state.renderFallback,
		restoreScrollPosition: state.restoreScrollPosition,
		preventScrollReset: state.preventScrollReset,
		blockers: state.blockers
	}), [
		state.historyAction,
		state.location,
		state.matches,
		state.initialized,
		state.renderFallback,
		state.restoreScrollPosition,
		state.preventScrollReset,
		state.blockers
	]);
	let dataRouterNavigation = React$1.useMemo(() => ({
		navigation: state.navigation,
		revalidation: state.revalidation
	}), [state.navigation, state.revalidation]);
	let dataRouterData = React$1.useMemo(() => ({
		loaderData: state.loaderData,
		actionData: state.actionData,
		errors: state.errors
	}), [
		state.loaderData,
		state.actionData,
		state.errors
	]);
	let fetchersContext = React$1.useMemo(() => ({
		fetchers: state.fetchers,
		fetcherData: fetcherData.current
	}), [state.fetchers]);
	return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, /* @__PURE__ */ React$1.createElement(DataRouterContext.Provider, { value: dataRouterContext }, /* @__PURE__ */ React$1.createElement(DataRouterStateContext.Provider, { value: dataRouterState }, /* @__PURE__ */ React$1.createElement(DataRouterNavigationContext.Provider, { value: dataRouterNavigation }, /* @__PURE__ */ React$1.createElement(DataRouterDataContext.Provider, { value: dataRouterData }, /* @__PURE__ */ React$1.createElement(FetchersContext.Provider, { value: fetchersContext }, /* @__PURE__ */ React$1.createElement(ViewTransitionContext.Provider, { value: vtContext }, /* @__PURE__ */ React$1.createElement(Router, {
		basename,
		location: state.location,
		navigationType: state.historyAction,
		navigator,
		useTransitions
	}, /* @__PURE__ */ React$1.createElement(MemoizedDataRoutes, {
		routes: router.routes,
		manifest: router.manifest,
		state,
		isStatic: false,
		onError
	})))))))), null);
}
function getOptimisticRouterState(currentState, newState) {
	return {
		...currentState,
		navigation: newState.navigation.state !== "idle" ? newState.navigation : currentState.navigation,
		revalidation: newState.revalidation !== "idle" ? newState.revalidation : currentState.revalidation,
		actionData: newState.navigation.state !== "submitting" ? newState.actionData : currentState.actionData,
		fetchers: newState.fetchers
	};
}
const MemoizedDataRoutes = react.memo(DataRoutes);
function DataRoutes({ routes, manifest, state, isStatic, onError }) {
	let dataRouterContext = react.useContext(context/* .DataRouterContext */.hf);
	(0,router_history/* .invariant */.V1)(dataRouterContext, "You must render this element inside a <DataRouterContext.Provider> element");
	let discoveryRuntime = react_namespaceObject.useContext(components/* .FrameworkContext */.yL)?.routeDiscoveryRuntime;
	react.useEffect(() => {
		if (state.initialized) discoveryRuntime?.markReady();
	}, [state.initialized, discoveryRuntime]);
	return (0,hooks/* .useRoutesImpl */.uG)(routes, void 0, {
		router: dataRouterContext.router,
		manifest,
		state,
		isStatic,
		onError
	});
}
/**
* A declarative {@link Router | `<Router>`} that stores all entries in memory.
*
* @public
* @category Declarative Routers
* @mode declarative
* @param props Props
* @param {MemoryRouterProps.basename} props.basename n/a
* @param {MemoryRouterProps.children} props.children n/a
* @param {MemoryRouterProps.initialEntries} props.initialEntries n/a
* @param {MemoryRouterProps.initialIndex} props.initialIndex n/a
* @param {MemoryRouterProps.useTransitions} props.useTransitions n/a
* @returns A declarative in-memory {@link Router | `<Router>`} for client-side
* routing.
*/
function MemoryRouter({ basename, children, initialEntries, initialIndex, useTransitions }) {
	let historyRef = React$1.useRef(null);
	if (historyRef.current == null) historyRef.current = createMemoryHistory({
		initialEntries,
		initialIndex,
		v5Compat: true
	});
	let history = historyRef.current;
	let [state, setStateImpl] = React$1.useState({
		action: history.action,
		location: history.location
	});
	let setState = React$1.useCallback((newState) => {
		if (useTransitions === false) setStateImpl(newState);
		else React$1.startTransition(() => setStateImpl(newState));
	}, [useTransitions]);
	React$1.useLayoutEffect(() => history.listen(setState), [history, setState]);
	return /* @__PURE__ */ React$1.createElement(Router, {
		basename,
		children,
		location: state.location,
		navigationType: state.action,
		navigator: history,
		useTransitions
	});
}
/**
* A component-based version of {@link useNavigate} to use in a
* [`React.Component` class](https://react.dev/reference/react/Component) where
* hooks cannot be used.
*
* It's recommended to avoid using this component in favor of {@link useNavigate}.
*
* @example
* <Navigate to="/tasks" />
*
* @public
* @category Components
* @param props Props
* @param {NavigateProps.relative} props.relative n/a
* @param {NavigateProps.replace} props.replace n/a
* @param {NavigateProps.state} props.state n/a
* @param {NavigateProps.to} props.to n/a
* @returns {void}
*
*/
function Navigate({ to, replace, state, relative }) {
	(0,router_history/* .invariant */.V1)((0,hooks/* .useInRouterContext */.Ri)(), `<Navigate> may be used only in the context of a <Router> component.`);
	let { static: isStatic, navigator } = react.useContext(context/* .NavigationContext */._3);
	(0,router_history/* .warning */.$e)(!isStatic, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
	let { matches } = react.useContext(context/* .RouteContext */.Pl);
	let { pathname: locationPathname } = (0,hooks/* .useLocation */.zy)();
	let navigate = (0,hooks/* .useNavigate */.Zp)();
	let path = (0,utils/* .resolveTo */.Gh)(to, (0,utils/* .getResolveToMatches */.PD)(matches), locationPathname, relative === "path");
	(0,navigation/* .validateNavigationTarget */.c)(typeof to === "string" ? to : (0,router_history/* .createPath */.AO)(to), navigator.createHref(path), (0,navigation/* .getNavigatorCurrentUrl */.Y)(navigator), "reject");
	let jsonPath = JSON.stringify(path);
	react.useEffect(() => {
		navigate(JSON.parse(jsonPath), {
			replace,
			state,
			relative
		});
	}, [
		navigate,
		jsonPath,
		relative,
		replace,
		state
	]);
	return null;
}
/**
* Renders the matching child route of a parent route or nothing if no child
* route matches.
*
* @example
* import { Outlet } from "react-router";
*
* export default function SomeParent() {
*   return (
*     <div>
*       <h1>Parent Content</h1>
*       <Outlet />
*     </div>
*   );
* }
*
* @public
* @category Components
* @param props Props
* @param {OutletProps.context} props.context n/a
* @returns React element for the rendered outlet or `null` if no child route matches.
*/
function Outlet(props) {
	return useOutlet(props.context);
}
/**
* Configures an element to render when a pattern matches the current location.
* It must be rendered within a {@link Routes} element. Note that these routes
* do not participate in data loading, actions, code splitting, or any other
* route module features.
*
* @example
* // Usually used in a declarative router
* function App() {
*   return (
*     <BrowserRouter>
*       <Routes>
*         <Route index element={<StepOne />} />
*         <Route path="step-2" element={<StepTwo />} />
*         <Route path="step-3" element={<StepThree />} />
*       </Routes>
*    </BrowserRouter>
*   );
* }
*
* // But can be used with a data router as well if you prefer the JSX notation
* const routes = createRoutesFromElements(
*   <>
*     <Route index loader={step1Loader} Component={StepOne} />
*     <Route path="step-2" loader={step2Loader} Component={StepTwo} />
*     <Route path="step-3" loader={step3Loader} Component={StepThree} />
*   </>
* );
*
* const router = createBrowserRouter(routes);
*
* function App() {
*   return <RouterProvider router={router} />;
* }
*
* @public
* @category Components
* @param props Props
* @param {PathRouteProps.action} props.action n/a
* @param {PathRouteProps.caseSensitive} props.caseSensitive n/a
* @param {PathRouteProps.Component} props.Component n/a
* @param {PathRouteProps.children} props.children n/a
* @param {PathRouteProps.element} props.element n/a
* @param {PathRouteProps.ErrorBoundary} props.ErrorBoundary n/a
* @param {PathRouteProps.errorElement} props.errorElement n/a
* @param {PathRouteProps.handle} props.handle n/a
* @param {PathRouteProps.HydrateFallback} props.HydrateFallback n/a
* @param {PathRouteProps.hydrateFallbackElement} props.hydrateFallbackElement n/a
* @param {PathRouteProps.id} props.id n/a
* @param {PathRouteProps.index} props.index n/a
* @param {PathRouteProps.lazy} props.lazy n/a
* @param {PathRouteProps.loader} props.loader n/a
* @param {PathRouteProps.path} props.path n/a
* @param {PathRouteProps.shouldRevalidate} props.shouldRevalidate n/a
* @returns {void}
*/
function Route(props) {
	(0,router_history/* .invariant */.V1)(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
/**
* Provides location context for the rest of the app.
*
* Note: You usually won't render a `<Router>` directly. Instead, you'll render a
* router that is more specific to your environment such as a {@link BrowserRouter}
* in web browsers or a {@link ServerRouter} for server rendering.
*
* @public
* @category Declarative Routers
* @mode declarative
* @param props Props
* @param {RouterProps.basename} props.basename n/a
* @param {RouterProps.children} props.children n/a
* @param {RouterProps.location} props.location n/a
* @param {RouterProps.navigationType} props.navigationType n/a
* @param {RouterProps.navigator} props.navigator n/a
* @param {RouterProps.static} props.static n/a
* @param {RouterProps.useTransitions} props.useTransitions n/a
* @returns React element for the rendered router or `null` if the location does
* not match the {@link props.basename}
*/
function Router({ basename: basenameProp = "/", children = null, location: locationProp, navigationType = "POP", navigator, static: staticProp = false, useTransitions }) {
	(0,router_history/* .invariant */.V1)(!(0,hooks/* .useInRouterContext */.Ri)(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
	let basename = basenameProp.replace(/^\/*/, "/");
	let navigationContext = react.useMemo(() => ({
		basename,
		navigator,
		static: staticProp,
		useTransitions,
		future: {}
	}), [
		basename,
		navigator,
		staticProp,
		useTransitions
	]);
	if (typeof locationProp === "string") locationProp = (0,router_history/* .parsePath */.Rr)(locationProp);
	let { pathname = "/", search = "", hash = "", state = null, key = "default", mask } = locationProp;
	let locationContext = react.useMemo(() => {
		let trailingPathname = (0,utils/* .stripBasename */.pb)(pathname, basename);
		if (trailingPathname == null) return null;
		return {
			location: {
				pathname: trailingPathname,
				search,
				hash,
				state,
				key,
				mask
			},
			navigationType
		};
	}, [
		basename,
		pathname,
		search,
		hash,
		state,
		key,
		navigationType,
		mask
	]);
	(0,router_history/* .warning */.$e)(locationContext != null, `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`);
	if (locationContext == null) return null;
	return /* @__PURE__ */ react.createElement(context/* .NavigationContext.Provider */._3.Provider, { value: navigationContext }, /* @__PURE__ */ react.createElement(context/* .LocationContext.Provider */.di.Provider, {
		children,
		value: locationContext
	}));
}
/**
* Renders a branch of {@link Route | `<Route>`s} that best matches the current
* location. Note that these routes do not participate in [data loading](../../start/framework/route-module#loader),
* [`action`](../../start/framework/route-module#action), code splitting, or
* any other [route module](../../start/framework/route-module) features.
*
* @example
* import { Route, Routes } from "react-router";
*
* <Routes>
*   <Route index element={<StepOne />} />
*   <Route path="step-2" element={<StepTwo />} />
*   <Route path="step-3" element={<StepThree />} />
* </Routes>
*
* @public
* @category Components
* @param props Props
* @param {RoutesProps.children} props.children n/a
* @param {RoutesProps.location} props.location n/a
* @returns React element for the rendered routes or `null` if no route matches
*/
function Routes({ children, location }) {
	return (0,hooks/* .useRoutes */.Ye)(createRoutesFromChildren(children), location);
}
/**
* Used to render promise values with automatic error handling.
*
* **Note:** `<Await>` expects to be rendered inside a [`<React.Suspense>`](https://react.dev/reference/react/Suspense)
*
* Pass `unstable_promise` instead of `resolve` to opt into React's
* [`use()`](https://react.dev/reference/react/use) implementation. With
* `unstable_promise`, `errorElement` handles promise rejections, while errors
* thrown by children bubble to the nearest React error boundary.
*
* In React Server Components, `resolve` already has this error-handling behavior:
* `errorElement` handles only input rejections, while child render errors
* propagate to the surrounding error boundary. Both props accept promise-like
* values without modifying the source promise. Both props treat a falsy
* `errorElement` as absent and propagate the rejection. Pass an empty fragment
* to handle a rejection without rendering any content.
*
* <docs-warning>The `unstable_promise` prop is experimental and may change in
* minor or patch releases.</docs-warning>
*
* @example
* import { Await, useLoaderData } from "react-router";
*
* export async function loader() {
*   // not awaited
*   const reviews = getReviews();
*   // awaited (blocks the transition)
*   const book = await fetch("/api/book").then((res) => res.json());
*   return { book, reviews };
* }
*
* function Book() {
*   const { book, reviews } = useLoaderData();
*   return (
*     <div>
*       <h1>{book.title}</h1>
*       <p>{book.description}</p>
*       <React.Suspense fallback={<ReviewsSkeleton />}>
*         <Await
*           resolve={reviews}
*           errorElement={
*             <div>Could not load reviews 😬</div>
*           }
*           children={(resolvedReviews) => (
*             <Reviews items={resolvedReviews} />
*           )}
*         />
*       </React.Suspense>
*     </div>
*   );
* }
*
* @public
* @category Components
* @mode framework
* @mode data
* @param props Props
* @param {AwaitProps.children} props.children n/a
* @param {AwaitProps.errorElement} props.errorElement n/a
* @param {AwaitProps.resolve} props.resolve n/a
* @param props.unstable_promise A promise (or value) to read using React's `use()`
* API in client components. Accepts promise-like values without modifying the
* source promise. Pass exactly one of `unstable_promise` or `resolve`.
* @returns React element for the rendered awaited value
*/
function Await(props) {
	invariant("resolve" in props !== "unstable_promise" in props, "<Await> requires exactly one of `resolve` or `unstable_promise`");
	let { children, errorElement } = props;
	let dataRouterContext = React$1.useContext(DataRouterContext);
	let dataRouterStateContext = React$1.useContext(DataRouterStateContext);
	let onError = React$1.useCallback((error, errorInfo) => {
		if (dataRouterContext && dataRouterContext.onError && dataRouterStateContext) dataRouterContext.onError(error, {
			location: dataRouterStateContext.location,
			params: dataRouterStateContext.matches[0]?.params || {},
			pattern: getRoutePattern(dataRouterStateContext.matches),
			errorInfo
		});
	}, [dataRouterContext, dataRouterStateContext]);
	if ("unstable_promise" in props) return /* @__PURE__ */ React$1.createElement(AwaitPromise, {
		value: props.unstable_promise,
		errorElement,
		onError
	}, children);
	return /* @__PURE__ */ React$1.createElement(AwaitErrorBoundary, {
		resolve: props.resolve,
		errorElement,
		onError
	}, /* @__PURE__ */ React$1.createElement(ResolveAwait, null, children));
}
function AwaitPromise({ value, children, errorElement, onError }) {
	let result = value != null && (typeof value === "object" || typeof value === "function") && "then" in value && typeof value.then === "function" ? React$1.use(getAwaitPromise(value, onError)) : {
		status: "fulfilled",
		value
	};
	if (result.status === "rejected" && !errorElement) throw result.reason;
	return /* @__PURE__ */ React$1.createElement(AwaitContext.Provider, { value: result }, result.status === "rejected" ? errorElement : /* @__PURE__ */ React$1.createElement(ResolveAwait, null, children));
}
var AwaitErrorBoundary = class extends react.Component {
	constructor(props) {
		super(props);
		this.state = { error: null };
	}
	static getDerivedStateFromError(error) {
		return { error };
	}
	componentDidCatch(error, errorInfo) {
		if (this.props.onError) this.props.onError(error, errorInfo);
		else console.error("<Await> caught the following error during render", error, errorInfo);
	}
	render() {
		let { children, errorElement, resolve } = this.props;
		let promise = null;
		let status = 0;
		if (!(resolve instanceof Promise)) {
			status = 1;
			promise = Promise.resolve();
			Object.defineProperty(promise, "_tracked", { get: () => true });
			Object.defineProperty(promise, "_data", { get: () => resolve });
		} else if (this.state.error) {
			status = 2;
			let renderError = this.state.error;
			promise = Promise.reject().catch(() => {});
			Object.defineProperty(promise, "_tracked", { get: () => true });
			Object.defineProperty(promise, "_error", { get: () => renderError });
		} else if (resolve._tracked) {
			promise = resolve;
			status = "_error" in promise ? 2 : "_data" in promise ? 1 : 0;
		} else {
			status = 0;
			Object.defineProperty(resolve, "_tracked", { get: () => true });
			let result = getPromiseResult(resolve);
			if (result) {
				promise = resolve;
				if (result.status === "fulfilled") {
					status = 1;
					Object.defineProperty(resolve, "_data", { get: () => result.value });
				} else {
					status = 2;
					Object.defineProperty(resolve, "_error", { get: () => result.reason });
					Promise.resolve(resolve).catch((reason) => {
						try {
							this.props.onError?.(reason);
						} catch (error) {
							console.error("<Await> caught the following error in onError", error);
						}
					});
				}
			} else promise = Promise.resolve(resolve).then((data) => Object.defineProperty(resolve, "_data", { get: () => data }), (error) => {
				this.props.onError?.(error);
				Object.defineProperty(resolve, "_error", { get: () => error });
			});
		}
		if (status === 2 && !errorElement) throw promise._error;
		if (status === 2) return /* @__PURE__ */ react.createElement(context/* .AwaitContext.Provider */.m4.Provider, {
			value: promise,
			children: errorElement
		});
		if (status === 1) return /* @__PURE__ */ react.createElement(context/* .AwaitContext.Provider */.m4.Provider, {
			value: promise,
			children
		});
		throw promise;
	}
};
function ResolveAwait({ children }) {
	let data = useAsyncValue();
	let toRender = typeof children === "function" ? children(data) : children;
	return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, toRender);
}
/**
* Creates a route config from a React "children" object, which is usually
* either a `<Route>` element or an array of them. Used internally by
* `<Routes>` to create a route config from its children.
*
* @category Utils
* @mode data
* @param children The React children to convert into a route config
* @param parentPath The path of the parent route, used to generate unique IDs.
* @returns An array of {@link RouteObject}s that can be used with a {@link DataRouter}
*/
function createRoutesFromChildren(children, parentPath = []) {
	let routes = [];
	react.Children.forEach(children, (element, index) => {
		if (!react.isValidElement(element)) return;
		let treePath = [...parentPath, index];
		if (element.type === react.Fragment) {
			routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
			return;
		}
		(0,router_history/* .invariant */.V1)(element.type === Route, `[${typeof element.type === "string" ? element.type : element.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`);
		let props = element.props;
		(0,router_history/* .invariant */.V1)(!props.index || !props.children, "An index route cannot have child routes.");
		let route = {
			id: props.id || treePath.join("-"),
			caseSensitive: props.caseSensitive,
			element: props.element,
			Component: props.Component,
			index: props.index,
			path: props.path,
			middleware: props.middleware,
			loader: props.loader,
			action: props.action,
			hydrateFallbackElement: props.hydrateFallbackElement,
			HydrateFallback: props.HydrateFallback,
			errorElement: props.errorElement,
			ErrorBoundary: props.ErrorBoundary,
			shouldRevalidate: props.shouldRevalidate,
			handle: props.handle,
			lazy: props.lazy
		};
		if (props.children) route.children = createRoutesFromChildren(props.children, treePath);
		routes.push(route);
	});
	return routes;
}
/**
* Create route objects from JSX elements instead of arrays of objects.
*
* @example
* const routes = createRoutesFromElements(
*   <>
*     <Route index loader={step1Loader} Component={StepOne} />
*     <Route path="step-2" loader={step2Loader} Component={StepTwo} />
*     <Route path="step-3" loader={step3Loader} Component={StepThree} />
*   </>
* );
*
* const router = createBrowserRouter(routes);
*
* function App() {
*   return <RouterProvider router={router} />;
* }
*
* @name createRoutesFromElements
* @public
* @category Utils
* @mode data
* @param children The React children to convert into a route config
* @param parentPath The path of the parent route, used to generate unique IDs.
* This is used for internal recursion and is not intended to be used by the
* application developer.
* @returns An array of {@link RouteObject}s that can be used with a {@link DataRouter}
*/
const createRoutesFromElements = (/* unused pure expression or super */ null && (createRoutesFromChildren));
/**
* Renders the result of {@link matchRoutes} into a React element.
*
* @public
* @category Utils
* @param matches The array of {@link RouteMatch | route matches} to render
* @returns A React element that renders the matched routes or `null` if no matches
*/
function renderMatches(matches) {
	return _renderMatches(matches);
}
function useRouteComponentProps() {
	return {
		params: useParams(),
		loaderData: useLoaderData(),
		actionData: useActionData(),
		matches: useMatches()
	};
}
function components_WithComponentProps({ children }) {
	const props = useRouteComponentProps();
	return React$1.cloneElement(children, props);
}
function withComponentProps(Component) {
	return function WithComponentProps() {
		const props = useRouteComponentProps();
		return React$1.createElement(Component, props);
	};
}
function useHydrateFallbackProps() {
	return {
		params: useParams(),
		loaderData: useLoaderData(),
		actionData: useActionData()
	};
}
function components_WithHydrateFallbackProps({ children }) {
	const props = useHydrateFallbackProps();
	return React$1.cloneElement(children, props);
}
function withHydrateFallbackProps(HydrateFallback) {
	return function WithHydrateFallbackProps() {
		const props = useHydrateFallbackProps();
		return React$1.createElement(HydrateFallback, props);
	};
}
function useErrorBoundaryProps() {
	return {
		params: useParams(),
		loaderData: useLoaderData(),
		actionData: useActionData(),
		error: useRouteError()
	};
}
function components_WithErrorBoundaryProps({ children }) {
	const props = useErrorBoundaryProps();
	return React$1.cloneElement(children, props);
}
function withErrorBoundaryProps(ErrorBoundary) {
	return function WithErrorBoundaryProps() {
		const props = useErrorBoundaryProps();
		return React$1.createElement(ErrorBoundary, props);
	};
}
//#endregion



},
9189(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

//#region lib/context.ts
const DataRouterContext = react__rspack_import_0.createContext(null);
DataRouterContext.displayName = "DataRouter";
const DataRouterStateContext = react__rspack_import_0.createContext(null);
DataRouterStateContext.displayName = "DataRouterState";
const DataRouterDataContext = react__rspack_import_0.createContext(null);
DataRouterDataContext.displayName = "DataRouterData";
const DataRouterNavigationContext = react__rspack_import_0.createContext(null);
DataRouterNavigationContext.displayName = "DataRouterNavigation";
const RSCRouterContext = react__rspack_import_0.createContext(false);
function useIsRSCRouterContext() {
	return react__rspack_import_0.useContext(RSCRouterContext);
}
const ViewTransitionContext = react__rspack_import_0.createContext({ isTransitioning: false });
ViewTransitionContext.displayName = "ViewTransition";
const FetchersContext = react__rspack_import_0.createContext(null);
FetchersContext.displayName = "Fetchers";
const AwaitContext = react__rspack_import_0.createContext(null);
AwaitContext.displayName = "Await";
const AwaitContextProvider = (props) => React$1.createElement(AwaitContext.Provider, props);
const NavigationContext = react__rspack_import_0.createContext(null);
NavigationContext.displayName = "Navigation";
const LocationContext = react__rspack_import_0.createContext(null);
LocationContext.displayName = "Location";
const RouteContext = react__rspack_import_0.createContext({
	outlet: null,
	matches: [],
	isDataRoute: false
});
RouteContext.displayName = "Route";
const IsDataRouteContext = react__rspack_import_0.createContext(false);
IsDataRouteContext.displayName = "IsDataRoute";
const RouteIdContext = react__rspack_import_0.createContext(void 0);
RouteIdContext.displayName = "RouteId";
const RouteErrorContext = react__rspack_import_0.createContext(null);
RouteErrorContext.displayName = "RouteError";
//#endregion


__webpack_require__.d(__webpack_exports__, {
}, {
  Bu: RSCRouterContext,
  Fw: DataRouterNavigationContext,
  HV: IsDataRouteContext,
  K$: RouteIdContext,
  KZ: ViewTransitionContext,
  OA: useIsRSCRouterContext,
  Pl: RouteContext,
  _3: NavigationContext,
  ay: DataRouterStateContext,
  di: LocationContext,
  hf: DataRouterContext,
  m4: AwaitContext,
  nW: DataRouterDataContext,
  xN: RouteErrorContext
});


},
9526(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Kd: () => (/* binding */ BrowserRouter),
  N_: () => (/* binding */ Link)
});

// UNUSED EXPORTS: Form, HashRouter, HistoryRouter, NavLink, ScrollRestoration, createBrowserRouter, createHashRouter, useBeforeUnload, useFetcher, useFetchers, useFormAction, useLinkClickHandler, usePrompt, useScrollRestoration, useSearchParams, useSubmit, useViewTransitionState

// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/router/url.js
var url = __webpack_require__(3411);
// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/router/history.js
var router_history = __webpack_require__(470);
// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/router/utils.js
var utils = __webpack_require__(3907);
// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/context.js
var context = __webpack_require__(9189);
// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/hooks.js + 2 modules
var hooks = __webpack_require__(537);
;// CONCATENATED MODULE: ./node_modules/react-router/dist/production/lib/dom/ssr/markup.js
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//#region lib/dom/ssr/markup.ts
const ESCAPE_LOOKUP = {
	"&": "\\u0026",
	">": "\\u003e",
	"<": "\\u003c",
	"\u2028": "\\u2028",
	"\u2029": "\\u2029"
};
const ESCAPE_REGEX = /[&><\u2028\u2029]/g;
function escapeHtml(html) {
	return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
function escapeAttribute(value) {
	return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
//#endregion


// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/dom/ssr/components.js + 4 modules
var components = __webpack_require__(1364);
// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/components.js + 1 modules
var lib_components = __webpack_require__(3101);
;// CONCATENATED MODULE: ./node_modules/react-router/dist/production/lib/dom/dom.js
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */


const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
	return typeof HTMLElement !== "undefined" && object instanceof HTMLElement;
}
function isButtonElement(object) {
	return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
	return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
	return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
	return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
	return event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event);
}
/**
* Creates a URLSearchParams object using the given initializer.
*
* This is identical to `new URLSearchParams(init)` except it also supports
* arrays as values in the object form of the initializer instead of just
* strings. This is convenient when you need multiple values for a given key,
* but don't want to use an array initializer.
*
* @example
* // Instead of:
* let searchParams = new URLSearchParams([
*   ["sort", "name"],
*   ["sort", "price"],
* ]);
*
* // You can do:
* let searchParams = createSearchParams({
*   sort: ["name", "price"],
* });
*
* @public
* @category Utils
* @param init The value used to initialize the URL search parameters.
* @returns A URLSearchParams object containing the initialized search
* parameters.
*/
function dom_createSearchParams(init = "") {
	return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
		let value = init[key];
		return memo.concat(Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]);
	}, []));
}
function dom_getSearchParamsForLocation(locationSearch, defaultSearchParams) {
	let searchParams = dom_createSearchParams(locationSearch);
	if (defaultSearchParams) defaultSearchParams.forEach((_, key) => {
		if (!searchParams.has(key)) defaultSearchParams.getAll(key).forEach((value) => {
			searchParams.append(key, value);
		});
	});
	return searchParams;
}
let _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
	if (_formDataSupportsSubmitter === null) try {
		new FormData(document.createElement("form"), 0);
		_formDataSupportsSubmitter = false;
	} catch {
		_formDataSupportsSubmitter = true;
	}
	return _formDataSupportsSubmitter;
}
const supportedFormEncTypes = new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain"
]);
function getFormEncType(encType) {
	if (encType != null && !supportedFormEncTypes.has(encType)) {
		(0,router_history/* .warning */.$e)(false, `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`);
		return null;
	}
	return encType;
}
function getFormSubmissionInfo(target, basename) {
	let method;
	let action;
	let encType;
	let formData;
	let body;
	if (isFormElement(target)) {
		let attr = target.getAttribute("action");
		action = attr ? (0,utils/* .stripBasename */.pb)(attr, basename) : null;
		method = target.getAttribute("method") || "get";
		encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
		formData = new FormData(target);
	} else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
		let form = target.form;
		if (form == null) throw new Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);
		let attr = target.getAttribute("formaction") || form.getAttribute("action");
		action = attr ? (0,utils/* .stripBasename */.pb)(attr, basename) : null;
		method = target.getAttribute("formmethod") || form.getAttribute("method") || "get";
		encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
		formData = new FormData(form, target);
		if (!isFormDataSubmitterSupported()) {
			let { name, type, value } = target;
			if (type === "image") {
				let prefix = name ? `${name}.` : "";
				formData.append(`${prefix}x`, "0");
				formData.append(`${prefix}y`, "0");
			} else if (name) formData.append(name, value);
		}
	} else if (isHtmlElement(target)) throw new Error("Cannot submit element that is not <form>, <button>, or <input type=\"submit|image\">");
	else {
		method = "get";
		action = null;
		encType = defaultEncType;
		body = target;
	}
	if (formData && encType === "text/plain") {
		body = formData;
		formData = void 0;
	}
	return {
		action,
		method: method.toLowerCase(),
		encType,
		formData,
		body
	};
}
//#endregion


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// CONCATENATED MODULE: ./node_modules/react-router/dist/production/lib/dom/lib.js
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */











//#region lib/dom/lib.tsx
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
try {
	if (isBrowser) window.__reactRouterVersion = "8";
} catch {}
/**
* Create a new {@link DataRouter| data router} that manages the application
* path via [`history.pushState`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState)
* and [`history.replaceState`](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState).
*
* Data Routers should not be held in React state. You should create your router
* once outside of the React tree and pass it to {@link RouterProvider | `<RouterProvider>`}.
* You can use `patchRoutesOnNavigation` to add additional routes programmatically.
*
* @public
* @category Data Routers
* @mode data
* @param routes Application routes
* @param opts Options
* @param {DOMRouterOpts.basename} opts.basename n/a
* @param {DOMRouterOpts.dataStrategy} opts.dataStrategy n/a
* @param {DOMRouterOpts.future} opts.future n/a
* @param {DOMRouterOpts.getContext} opts.getContext n/a
* @param {DOMRouterOpts.hydrationData} opts.hydrationData n/a
* @param {DOMRouterOpts.instrumentations} opts.instrumentations n/a
* @param {DOMRouterOpts.patchRoutesOnNavigation} opts.patchRoutesOnNavigation n/a
* @param {DOMRouterOpts.window} opts.window n/a
* @returns An initialized {@link DataRouter| data router} to pass to {@link RouterProvider | `<RouterProvider>`}
*/
function createBrowserRouter(routes, opts) {
	return createRouter({
		basename: opts?.basename,
		getContext: opts?.getContext,
		future: opts?.future,
		history: createBrowserHistory({ window: opts?.window }),
		hydrationData: opts?.hydrationData || parseHydrationData(),
		routes,
		mapRouteProperties: defaultMapRouteProperties,
		hydrationRouteProperties,
		dataStrategy: opts?.dataStrategy,
		patchRoutesOnNavigation: opts?.patchRoutesOnNavigation,
		window: opts?.window,
		instrumentations: opts?.instrumentations
	}).initialize();
}
/**
* Create a new {@link DataRouter| data router} that manages the application
* path via the URL [`hash`](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash).
*
* Data Routers should not be held in React state. You should create your router
* once outside of the React tree and pass it to {@link RouterProvider | `<RouterProvider>`}.
* You can use `patchRoutesOnNavigation` to add additional routes programmatically.
*
* @public
* @category Data Routers
* @mode data
* @param routes Application routes
* @param opts Options
* @param {DOMRouterOpts.basename} opts.basename n/a
* @param {DOMRouterOpts.future} opts.future n/a
* @param {DOMRouterOpts.getContext} opts.getContext n/a
* @param {DOMRouterOpts.hydrationData} opts.hydrationData n/a
* @param {DOMRouterOpts.instrumentations} opts.instrumentations n/a
* @param {DOMRouterOpts.dataStrategy} opts.dataStrategy n/a
* @param {DOMRouterOpts.patchRoutesOnNavigation} opts.patchRoutesOnNavigation n/a
* @param {DOMRouterOpts.window} opts.window n/a
* @returns An initialized {@link DataRouter| data router} to pass to {@link RouterProvider | `<RouterProvider>`}
*/
function createHashRouter(routes, opts) {
	return createRouter({
		basename: opts?.basename,
		getContext: opts?.getContext,
		future: opts?.future,
		history: createHashHistory({ window: opts?.window }),
		hydrationData: opts?.hydrationData || parseHydrationData(),
		routes,
		mapRouteProperties: defaultMapRouteProperties,
		hydrationRouteProperties,
		dataStrategy: opts?.dataStrategy,
		patchRoutesOnNavigation: opts?.patchRoutesOnNavigation,
		window: opts?.window,
		instrumentations: opts?.instrumentations
	}).initialize();
}
function parseHydrationData() {
	let state = window?.__staticRouterHydrationData;
	if (state && state.errors) state = {
		...state,
		errors: deserializeErrors(state.errors)
	};
	return state;
}
function deserializeErrors(errors) {
	if (!errors) return null;
	let entries = Object.entries(errors);
	let serialized = {};
	for (let [key, val] of entries) if (val && val.__type === "RouteErrorResponse") serialized[key] = new ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
	else if (val && val.__type === "Error") {
		if (typeof val.__subType === "string" && SUPPORTED_ERROR_TYPES.includes(val.__subType)) {
			let ErrorConstructor = window[val.__subType];
			if (typeof ErrorConstructor === "function") try {
				let error = new ErrorConstructor(val.message);
				error.stack = "";
				serialized[key] = error;
			} catch {}
		}
		if (serialized[key] == null) {
			let error = new Error(val.message);
			error.stack = "";
			serialized[key] = error;
		}
	} else serialized[key] = val;
	return serialized;
}
/**
* A declarative {@link Router | `<Router>`} using the browser [`History`](https://developer.mozilla.org/en-US/docs/Web/API/History)
* API for client-side routing.
*
* @public
* @category Declarative Routers
* @mode declarative
* @param props Props
* @param {BrowserRouterProps.basename} props.basename n/a
* @param {BrowserRouterProps.children} props.children n/a
* @param {BrowserRouterProps.useTransitions} props.useTransitions n/a
* @param {BrowserRouterProps.window} props.window n/a
* @returns A declarative {@link Router | `<Router>`} using the browser [`History`](https://developer.mozilla.org/en-US/docs/Web/API/History)
* API for client-side routing.
*/
function BrowserRouter({ basename, children, useTransitions, window }) {
	let historyRef = react.useRef(null);
	if (historyRef.current == null) historyRef.current = (0,router_history/* .createBrowserHistory */.zR)({
		window,
		v5Compat: true
	});
	let history = historyRef.current;
	let [state, setStateImpl] = react.useState({
		action: history.action,
		location: history.location
	});
	let setState = react.useCallback((newState) => {
		if (useTransitions === false) setStateImpl(newState);
		else react.startTransition(() => setStateImpl(newState));
	}, [useTransitions]);
	react.useLayoutEffect(() => history.listen(setState), [history, setState]);
	return /* @__PURE__ */ react.createElement(lib_components/* .Router */.Ix, {
		basename,
		children,
		location: state.location,
		navigationType: state.action,
		navigator: history,
		useTransitions
	});
}
/**
* A declarative {@link Router | `<Router>`} that stores the location in the
* [`hash`](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash) portion
* of the URL so it is not sent to the server.
*
* @public
* @category Declarative Routers
* @mode declarative
* @param props Props
* @param {HashRouterProps.basename} props.basename n/a
* @param {HashRouterProps.children} props.children n/a
* @param {HashRouterProps.useTransitions} props.useTransitions n/a
* @param {HashRouterProps.window} props.window n/a
* @returns A declarative {@link Router | `<Router>`} using the URL [`hash`](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash)
* for client-side routing.
*/
function HashRouter({ basename, children, useTransitions, window }) {
	let historyRef = React$1.useRef(null);
	if (historyRef.current == null) historyRef.current = createHashHistory({
		window,
		v5Compat: true
	});
	let history = historyRef.current;
	let [state, setStateImpl] = React$1.useState({
		action: history.action,
		location: history.location
	});
	let setState = React$1.useCallback((newState) => {
		if (useTransitions === false) setStateImpl(newState);
		else React$1.startTransition(() => setStateImpl(newState));
	}, [useTransitions]);
	React$1.useLayoutEffect(() => history.listen(setState), [history, setState]);
	return /* @__PURE__ */ React$1.createElement(Router, {
		basename,
		children,
		location: state.location,
		navigationType: state.action,
		navigator: history,
		useTransitions
	});
}
/**
* A declarative {@link Router | `<Router>`} that accepts a pre-instantiated
* `history` object.
* It's important to note that using your own `history` object is highly discouraged
* and may add two versions of the `history` library to your bundles unless you use
* the same version of the `history` library that React Router uses internally.
*
* @name unstable_HistoryRouter
* @public
* @category Declarative Routers
* @mode declarative
* @param props Props
* @param {HistoryRouterProps.basename} props.basename n/a
* @param {HistoryRouterProps.children} props.children n/a
* @param {HistoryRouterProps.history} props.history n/a
* @param {HistoryRouterProps.useTransitions} props.useTransitions n/a
* @returns A declarative {@link Router | `<Router>`} using the provided history
* implementation for client-side routing.
*/
function HistoryRouter({ basename, children, history, useTransitions }) {
	let [state, setStateImpl] = react.useState({
		action: history.action,
		location: history.location
	});
	let setState = react.useCallback((newState) => {
		if (useTransitions === false) setStateImpl(newState);
		else react.startTransition(() => setStateImpl(newState));
	}, [useTransitions]);
	react.useLayoutEffect(() => history.listen(setState), [history, setState]);
	return /* @__PURE__ */ react.createElement(lib_components/* .Router */.Ix, {
		basename,
		children,
		location: state.location,
		navigationType: state.action,
		navigator: history,
		useTransitions
	});
}
HistoryRouter.displayName = "unstable_HistoryRouter";
/**
* A progressively enhanced [`<a href>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
* wrapper to enable navigation with client-side routing.
*
* @example
* import { Link } from "react-router";
*
* <Link to="/dashboard">Dashboard</Link>;
*
* <Link
*   to={{
*     pathname: "/some/path",
*     search: "?query=string",
*     hash: "#hash",
*   }}
* />;
*
* @public
* @category Components
* @param {LinkProps.discover} props.discover [modes: framework] n/a
* @param {LinkProps.prefetch} props.prefetch [modes: framework] n/a
* @param {LinkProps.preventScrollReset} props.preventScrollReset [modes: framework, data] n/a
* @param {LinkProps.relative} props.relative n/a
* @param {LinkProps.reloadDocument} props.reloadDocument n/a
* @param {LinkProps.replace} props.replace n/a
* @param {LinkProps.state} props.state n/a
* @param {LinkProps.to} props.to n/a
* @param {LinkProps.viewTransition} props.viewTransition [modes: framework, data] n/a
* @param {LinkProps.defaultShouldRevalidate} props.defaultShouldRevalidate n/a
* @param {LinkProps.mask} props.mask [modes: framework, data] n/a
*/
const Link = react.forwardRef(function LinkWithRef({ onClick, discover = "render", prefetch = "none", relative, reloadDocument, replace, mask, state, target, to, preventScrollReset, viewTransition, defaultShouldRevalidate, ...rest }, forwardedRef) {
	let { basename, navigator, useTransitions } = react.useContext(context/* .NavigationContext */._3);
	let isAbsolute = typeof to === "string" && url/* .ABSOLUTE_URL_REGEX.test */.E6.test(to);
	let parsed = (0,utils/* .parseToInfo */.X9)(to, basename);
	to = parsed.to;
	let href = (0,hooks/* .useHref */.$P)(to, { relative });
	let location = (0,hooks/* .useLocation */.zy)();
	let maskedHref = null;
	if (mask) {
		let resolved = (0,utils/* .resolveTo */.Gh)(mask, [], location.mask ? location.mask.pathname : "/", true);
		if (basename !== "/") resolved.pathname = resolved.pathname === "/" ? basename : (0,utils/* .joinPaths */.HS)([basename, resolved.pathname]);
		maskedHref = navigator.createHref(resolved);
	}
	let [shouldPrefetch, prefetchRef, prefetchHandlers] = (0,components/* .usePrefetchBehavior */.Fe)(prefetch, rest);
	let internalOnClick = useLinkClickHandler(to, {
		replace,
		mask,
		state,
		target,
		preventScrollReset,
		relative,
		viewTransition,
		defaultShouldRevalidate,
		useTransitions
	});
	function handleClick(event) {
		if (onClick) onClick(event);
		if (!event.defaultPrevented) internalOnClick(event);
	}
	let isSpaLink = !(parsed.isExternal || reloadDocument);
	let link = /* @__PURE__ */ react.createElement("a", {
		...rest,
		...prefetchHandlers,
		href: (isSpaLink ? maskedHref : void 0) || parsed.absoluteURL || href,
		onClick: isSpaLink ? handleClick : onClick,
		ref: (0,components/* .mergeRefs */.Px)(forwardedRef, prefetchRef),
		target,
		"data-discover": !isAbsolute && discover === "render" ? "true" : void 0
	});
	return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ react.createElement(react.Fragment, null, link, /* @__PURE__ */ react.createElement(components/* .PrefetchPageLinks */.cM, { page: href })) : link;
});
Link.displayName = "Link";
/**
* Wraps {@link Link | `<Link>`} with additional props for styling active and
* pending states.
*
* - Automatically applies classes to the link based on its `active` and `pending`
* states, see {@link NavLinkProps.className}
*   - Note that `pending` is only available with Framework and Data modes.
* - Automatically applies `aria-current="page"` to the link when the link is active.
* See [`aria-current`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current)
* on MDN.
* - States are additionally available through the className, style, and children
* render props. See {@link NavLinkRenderProps}.
*
* @example
* <NavLink to="/message">Messages</NavLink>
*
* // Using render props
* <NavLink
*   to="/messages"
*   className={({ isActive, isPending }) =>
*     isPending ? "pending" : isActive ? "active" : ""
*   }
* >
*   Messages
* </NavLink>
*
* @public
* @category Components
* @param {NavLinkProps.caseSensitive} props.caseSensitive n/a
* @param {NavLinkProps.children} props.children n/a
* @param {NavLinkProps.className} props.className n/a
* @param {NavLinkProps.discover} props.discover [modes: framework] n/a
* @param {NavLinkProps.end} props.end n/a
* @param {NavLinkProps.prefetch} props.prefetch [modes: framework] n/a
* @param {NavLinkProps.preventScrollReset} props.preventScrollReset [modes: framework, data] n/a
* @param {NavLinkProps.relative} props.relative n/a
* @param {NavLinkProps.reloadDocument} props.reloadDocument n/a
* @param {NavLinkProps.replace} props.replace n/a
* @param {NavLinkProps.state} props.state n/a
* @param {NavLinkProps.style} props.style n/a
* @param {NavLinkProps.to} props.to n/a
* @param {NavLinkProps.viewTransition} props.viewTransition [modes: framework, data] n/a
*/
const NavLink = react.forwardRef(function NavLinkWithRef({ "aria-current": ariaCurrentProp = "page", caseSensitive = false, className: classNameProp = "", end = false, style: styleProp, to, viewTransition, children, ...rest }, ref) {
	let path = (0,hooks/* .useResolvedPath */.x$)(to, { relative: rest.relative });
	let location = (0,hooks/* .useLocation */.zy)();
	let routerNavigation = react.useContext(context/* .DataRouterNavigationContext */.Fw);
	let { navigator, basename } = react.useContext(context/* .NavigationContext */._3);
	let isTransitioning = routerNavigation != null && useViewTransitionState(path) && viewTransition === true;
	let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
	let locationPathname = location.pathname;
	let nextLocationPathname = routerNavigation?.navigation.location ? routerNavigation.navigation.location.pathname : null;
	if (!caseSensitive) {
		locationPathname = locationPathname.toLowerCase();
		nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
		toPathname = toPathname.toLowerCase();
	}
	if (nextLocationPathname && basename) nextLocationPathname = (0,utils/* .stripBasename */.pb)(nextLocationPathname, basename) || nextLocationPathname;
	const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
	let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
	let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(endSlashPosition) === "/");
	let renderProps = {
		isActive,
		isPending,
		isTransitioning
	};
	let ariaCurrent = isActive ? ariaCurrentProp : void 0;
	let className;
	if (typeof classNameProp === "function") className = classNameProp(renderProps);
	else className = [
		classNameProp,
		isActive ? "active" : null,
		isPending ? "pending" : null,
		isTransitioning ? "transitioning" : null
	].filter(Boolean).join(" ");
	let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
	return /* @__PURE__ */ react.createElement(Link, {
		...rest,
		"aria-current": ariaCurrent,
		className,
		ref,
		style,
		to,
		viewTransition
	}, typeof children === "function" ? children(renderProps) : children);
});
NavLink.displayName = "NavLink";
/**
* A progressively enhanced HTML [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
* that submits data to actions via [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/fetch),
* activating pending states in {@link useNavigation} which enables advanced
* user interfaces beyond a basic HTML [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form).
* After a form's `action` completes, all data on the page is automatically
* revalidated to keep the UI in sync with the data.
*
* Because it uses the HTML form API, server rendered pages are interactive at a
* basic level before JavaScript loads. Instead of React Router managing the
* submission, the browser manages the submission as well as the pending states
* (like the spinning favicon). After JavaScript loads, React Router takes over
* enabling web application user experiences.
*
* `Form` is most useful for submissions that should also change the URL or
* otherwise add an entry to the browser history stack. For forms that shouldn't
* manipulate the browser [`History`](https://developer.mozilla.org/en-US/docs/Web/API/History)
* stack, use {@link FetcherWithComponents.Form | `<fetcher.Form>`}.
*
* @example
* import { Form } from "react-router";
*
* function NewEvent() {
*   return (
*     <Form action="/events" method="post">
*       <input name="title" type="text" />
*       <input name="description" type="text" />
*     </Form>
*   );
* }
*
* @public
* @category Components
* @mode framework
* @mode data
* @param {FormProps.action} action n/a
* @param {FormProps.discover} discover n/a
* @param {FormProps.encType} encType n/a
* @param {FormProps.fetcherKey} fetcherKey n/a
* @param {FormProps.method} method n/a
* @param {FormProps.navigate} navigate n/a
* @param {FormProps.preventScrollReset} preventScrollReset n/a
* @param {FormProps.relative} relative n/a
* @param {FormProps.reloadDocument} reloadDocument n/a
* @param {FormProps.replace} replace n/a
* @param {FormProps.state} state n/a
* @param {FormProps.viewTransition} viewTransition n/a
* @param {FormProps.defaultShouldRevalidate} defaultShouldRevalidate n/a
* @returns A progressively enhanced [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) component
*/
const Form = react.forwardRef(({ discover = "render", fetcherKey, navigate, reloadDocument, replace, state, method = "get", action, onSubmit, relative, preventScrollReset, viewTransition, defaultShouldRevalidate, ...props }, forwardedRef) => {
	let { useTransitions } = react.useContext(context/* .NavigationContext */._3);
	let submit = useSubmit();
	let formAction = useFormAction(action, { relative });
	let formMethod = method.toLowerCase() === "get" ? "get" : "post";
	let isAbsolute = typeof action === "string" && url/* .ABSOLUTE_URL_REGEX.test */.E6.test(action);
	let submitHandler = (event) => {
		onSubmit && onSubmit(event);
		if (event.defaultPrevented) return;
		event.preventDefault();
		let submitter = event.nativeEvent.submitter;
		let submitMethod = submitter?.getAttribute("formmethod") || method;
		let doSubmit = () => submit(submitter || event.currentTarget, {
			fetcherKey,
			method: submitMethod,
			navigate,
			replace,
			state,
			relative,
			preventScrollReset,
			viewTransition,
			defaultShouldRevalidate
		});
		if (useTransitions && navigate !== false) react.startTransition(() => doSubmit());
		else doSubmit();
	};
	return /* @__PURE__ */ react.createElement("form", {
		ref: forwardedRef,
		method: formMethod,
		action: formAction,
		onSubmit: reloadDocument ? onSubmit : submitHandler,
		...props,
		"data-discover": !isAbsolute && discover === "render" ? "true" : void 0
	});
});
Form.displayName = "Form";
/**
* Emulates the browser's scroll restoration on location changes. Apps should only render one of these, right before the {@link Scripts} component.
*
* ```tsx
* import { ScrollRestoration } from "react-router";
*
* export default function Root() {
*   return (
*     <html>
*       <body>
*         <ScrollRestoration />
*         <Scripts />
*       </body>
*     </html>
*   );
* }
* ```
*
* This component renders an inline `<script>` to prevent scroll flashing. The
* `nonce` prop will be passed down to the script tag to allow CSP nonce usage.
* If not provided in Framework Mode, it will default to any
* {@link ServerRouter | `<ServerRouter nonce>`} prop.
*
* ```tsx
* <ScrollRestoration nonce={cspNonce} />
* ```
*
* @public
* @category Components
* @mode framework
* @mode data
* @param props Props
* @param {ScrollRestorationProps.getKey} props.getKey n/a
* @param {ScriptsProps.nonce} props.nonce n/a
* @param {ScrollRestorationProps.storageKey} props.storageKey n/a
* @returns A [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
* tag that restores scroll positions on navigation.
*/
function ScrollRestoration({ getKey, storageKey, ...props }) {
	let remixContext = react.useContext(components/* .FrameworkContext */.yL);
	let { basename } = react.useContext(context/* .NavigationContext */._3);
	let location = (0,hooks/* .useLocation */.zy)();
	let matches = (0,hooks/* .useMatches */.FE)();
	useScrollRestoration({
		getKey,
		storageKey
	});
	let ssrKey = react.useMemo(() => {
		if (!remixContext || !getKey) return null;
		let userKey = getScrollRestorationKey(location, matches, basename, getKey);
		return userKey !== location.key ? userKey : null;
	}, []);
	if (!remixContext || remixContext.isSpaMode) return null;
	let restoreScroll = ((storageKey, restoreKey) => {
		if (!window.history.state || !window.history.state.key) {
			let key = Math.random().toString(32).slice(2);
			window.history.replaceState({ key }, "");
		}
		try {
			let storedY = JSON.parse(sessionStorage.getItem(storageKey) || "{}")[restoreKey || window.history.state.key];
			if (typeof storedY === "number") window.scrollTo(0, storedY);
		} catch (error) {
			console.error(error);
			sessionStorage.removeItem(storageKey);
		}
	}).toString();
	if (props.nonce == null && remixContext?.nonce) props.nonce = remixContext.nonce;
	return /* @__PURE__ */ react.createElement("script", {
		...props,
		suppressHydrationWarning: true,
		dangerouslySetInnerHTML: { __html: `(${restoreScroll})(${escapeHtml(JSON.stringify(storageKey || SCROLL_RESTORATION_STORAGE_KEY))}, ${escapeHtml(JSON.stringify(ssrKey))})` }
	});
}
ScrollRestoration.displayName = "ScrollRestoration";
/**
* Handles the click behavior for router {@link Link | `<Link>`} components.This
* is useful if you need to create custom {@link Link | `<Link>`} components with
* the same click behavior we use in our exported {@link Link | `<Link>`}.
*
* @public
* @category Hooks
* @param to The URL to navigate to, can be a string or a partial {@link Path}.
* @param options Options
* @param options.preventScrollReset Whether to prevent the scroll position from
* being reset to the top of the viewport on completion of the navigation when
* using the {@link ScrollRestoration} component. Defaults to `false`.
* @param options.relative The {@link RelativeRoutingType | relative routing type}
* to use for the link. Defaults to `"route"`.
* @param options.replace Whether to replace the current [`History`](https://developer.mozilla.org/en-US/docs/Web/API/History)
* entry instead of pushing a new one. Defaults to `false`.
* @param options.state The state to add to the [`History`](https://developer.mozilla.org/en-US/docs/Web/API/History)
* entry for this navigation. Defaults to `undefined`.
* @param options.target The target attribute for the link. Defaults to `undefined`.
* @param options.viewTransition **Deprecated.** Use React's
* [`<ViewTransition>`](https://react.dev/reference/react/ViewTransition) component
* instead. See the [migration guide](../../how-to/view-transitions).
* @param options.defaultShouldRevalidate Specify the default revalidation
* behavior for the navigation. When not specified, loaders revalidate
* according to the router's standard revalidation behavior.
* @param options.mask Masked location to display in the browser instead
* of the router location. Defaults to `undefined`.
* @param options.useTransitions Wraps the navigation in
* [`React.startTransition`](https://react.dev/reference/react/startTransition)
* for concurrent rendering. Defaults to `false`.
* @returns A click handler function that can be used in a custom {@link Link} component.
*/
function useLinkClickHandler(to, { target, replace: replaceProp, mask, state, preventScrollReset, relative, viewTransition, defaultShouldRevalidate, useTransitions } = {}) {
	let navigate = (0,hooks/* .useNavigate */.Zp)();
	let location = (0,hooks/* .useLocation */.zy)();
	let path = (0,hooks/* .useResolvedPath */.x$)(to, { relative });
	return react.useCallback((event) => {
		if (shouldProcessLinkClick(event, target)) {
			event.preventDefault();
			let replace = replaceProp !== void 0 ? replaceProp : (0,router_history/* .createPath */.AO)(location) === (0,router_history/* .createPath */.AO)(path);
			let doNavigate = () => navigate(to, {
				replace,
				mask,
				state,
				preventScrollReset,
				relative,
				viewTransition,
				defaultShouldRevalidate
			});
			if (useTransitions) react.startTransition(() => doNavigate());
			else doNavigate();
		}
	}, [
		location,
		navigate,
		path,
		replaceProp,
		mask,
		state,
		target,
		to,
		preventScrollReset,
		relative,
		viewTransition,
		defaultShouldRevalidate,
		useTransitions
	]);
}
/**
* Returns a tuple of the current URL's [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
* and a function to update them. Setting the search params causes a navigation.
*
* ```tsx
* import { useSearchParams } from "react-router";
*
* export function SomeComponent() {
*   const [searchParams, setSearchParams] = useSearchParams();
*   // ...
* }
* ```
*
* ### `setSearchParams` function
*
* The second element of the tuple is a function that can be used to update the
* search params. It accepts the same types as `defaultInit` and will cause a
* navigation to the new URL.
*
* ```tsx
* let [searchParams, setSearchParams] = useSearchParams();
*
* // a search param string
* setSearchParams("?tab=1");
*
* // a shorthand object
* setSearchParams({ tab: "1" });
*
* // object keys can be arrays for multiple values on the key
* setSearchParams({ brand: ["nike", "reebok"] });
*
* // an array of tuples
* setSearchParams([["tab", "1"]]);
*
* // a `URLSearchParams` object
* setSearchParams(new URLSearchParams("?tab=1"));
* ```
*
* It also supports a function callback like React's
* [`setState`](https://react.dev/reference/react/useState#setstate):
*
* ```tsx
* setSearchParams((searchParams) => {
*   searchParams.set("tab", "2");
*   return searchParams;
* });
* ```
*
* <docs-warning>The function callback version of `setSearchParams` does not support
* the [queueing](https://react.dev/reference/react/useState#setstate-parameters)
* logic that React's `setState` implements.  Multiple calls to `setSearchParams`
* in the same tick will not build on the prior value.  If you need this behavior,
* you can use `setState` manually.</docs-warning>
*
* ### Notes
*
* Note that `searchParams` is a stable reference, so you can reliably use it
* as a dependency in React's [`useEffect`](https://react.dev/reference/react/useEffect)
* hooks.
*
* ```tsx
* useEffect(() => {
*   console.log(searchParams.get("tab"));
* }, [searchParams]);
* ```
*
* However, this also means it's mutable. If you change the object without
* calling `setSearchParams`, its values will change between renders if some
* other state causes the component to re-render and URL will not reflect the
* values.
*
* @public
* @category Hooks
* @param defaultInit
* You can initialize the search params with a default value, though it **will
* not** change the URL on the first render.
*
* ```tsx
* // a search param string
* useSearchParams("?tab=1");
*
* // a shorthand object
* useSearchParams({ tab: "1" });
*
* // object keys can be arrays for multiple values on the key
* useSearchParams({ brand: ["nike", "reebok"] });
*
* // an array of tuples
* useSearchParams([["tab", "1"]]);
*
* // a `URLSearchParams` object
* useSearchParams(new URLSearchParams("?tab=1"));
* ```
* @returns A tuple of the current [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
* and a function to update them.
*/
function useSearchParams(defaultInit) {
	warning(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
	let defaultSearchParamsRef = React$1.useRef(createSearchParams(defaultInit));
	let hasSetSearchParamsRef = React$1.useRef(false);
	let location = useLocation();
	let searchParams = React$1.useMemo(() => getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location.search]);
	let navigate = useNavigate();
	return [searchParams, React$1.useCallback((nextInit, navigateOptions) => {
		const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(new URLSearchParams(searchParams)) : nextInit);
		hasSetSearchParamsRef.current = true;
		navigate("?" + newSearchParams, navigateOptions);
	}, [navigate, searchParams])];
}
let fetcherId = 0;
let getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
/**
* The imperative version of {@link Form | `<Form>`} that lets you submit a form
* from code instead of a user interaction.
*
* The `viewTransition` submission option is deprecated. Use React's
* [`<ViewTransition>`](https://react.dev/reference/react/ViewTransition) component
* instead. See the [migration guide](../../how-to/view-transitions).
*
* @example
* import { useSubmit } from "react-router";
*
* function SomeComponent() {
*   const submit = useSubmit();
*   return (
*     <Form onChange={(event) => submit(event.currentTarget)} />
*   );
* }
*
* @public
* @category Hooks
* @mode framework
* @mode data
* @returns A function that can be called to submit a {@link Form} imperatively.
*/
function useSubmit() {
	let { router } = (0,hooks/* .useDataRouterContext */.ek)("useSubmit");
	let { basename } = react.useContext(context/* .NavigationContext */._3);
	let currentRouteId = (0,hooks/* .useCurrentRouteId */.nq)("useSubmit");
	let routerFetch = router.fetch;
	let routerNavigate = router.navigate;
	return react.useCallback(async (target, options = {}) => {
		let { action, method, encType, formData, body } = getFormSubmissionInfo(target, basename);
		if (options.navigate === false) await routerFetch(options.fetcherKey || getUniqueFetcherId(), currentRouteId, options.action || action, {
			defaultShouldRevalidate: options.defaultShouldRevalidate,
			preventScrollReset: options.preventScrollReset,
			relative: options.relative,
			formData,
			body,
			formMethod: options.method || method,
			formEncType: options.encType || encType,
			flushSync: options.flushSync
		});
		else await routerNavigate(options.action || action, {
			defaultShouldRevalidate: options.defaultShouldRevalidate,
			preventScrollReset: options.preventScrollReset,
			relative: options.relative,
			formData,
			body,
			formMethod: options.method || method,
			formEncType: options.encType || encType,
			replace: options.replace,
			state: options.state,
			fromRouteId: currentRouteId,
			flushSync: options.flushSync,
			viewTransition: options.viewTransition
		});
	}, [
		routerFetch,
		routerNavigate,
		basename,
		currentRouteId
	]);
}
/**
* Resolves the URL to the closest route in the component hierarchy instead of
* the current URL of the app.
*
* This is used internally by {@link Form} to resolve the `action` to the closest
* route, but can be used generically as well.
*
* ```ts
* import { useFormAction } from "react-router";
*
* function SomeComponent() {
*   // closest route URL
*   let action = useFormAction();
*
*   // closest route URL + "destroy"
*   let destroyAction = useFormAction("destroy");
* }
* ```
*
* <docs-info>This hook adds a `basename` if your app specifies one, so that it
* can be used with raw `<form>` elements in a progressively enhanced way.  If
* you are using this to provide an `action` to `<Form>` or `fetcher.submit`, you
* will need to remove the `basename` since both of those will prepend it
* internally.</docs-info>
*
*
* @public
* @category Hooks
* @mode framework
* @mode data
* @param action The action to append to the closest route URL. Defaults to the
* closest route URL.
* @param options Options
* @param options.relative The relative routing type to use when resolving the
* action. Defaults to `"route"`.
* @returns The resolved action URL.
*/
function useFormAction(action, { relative } = {}) {
	let { basename } = react.useContext(context/* .NavigationContext */._3);
	let routeContext = react.useContext(context/* .RouteContext */.Pl);
	(0,router_history/* .invariant */.V1)(routeContext, "useFormAction must be used inside a RouteContext");
	let [match] = routeContext.matches.slice(-1);
	let path = { ...(0,hooks/* .useResolvedPath */.x$)(action ? action : ".", { relative }) };
	let location = (0,hooks/* .useLocation */.zy)();
	if (action == null) {
		path.search = location.search;
		let params = new URLSearchParams(path.search);
		let indexValues = params.getAll("index");
		if (indexValues.some((v) => v === "")) {
			params.delete("index");
			indexValues.filter((v) => v).forEach((v) => params.append("index", v));
			let qs = params.toString();
			path.search = qs ? `?${qs}` : "";
		}
	}
	if ((!action || action === ".") && match.route.index) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
	if (basename !== "/") path.pathname = path.pathname === "/" ? basename : (0,utils/* .joinPaths */.HS)([basename, path.pathname]);
	return (0,router_history/* .createPath */.AO)(path);
}
/**
* Useful for creating complex, dynamic user interfaces that require multiple,
* concurrent data interactions without causing a navigation.
*
* Fetchers track their own, independent state and can be used to load data, submit
* forms, and generally interact with [`action`](../../start/framework/route-module#action)
* and [`loader`](../../start/framework/route-module#loader) functions.
*
* @example
* import { useFetcher } from "react-router"
*
* function SomeComponent() {
*   let fetcher = useFetcher()
*
*   // states are available on the fetcher
*   fetcher.state // "idle" | "loading" | "submitting"
*   fetcher.data // the data returned from the action or loader
*
*   // render a form
*   <fetcher.Form method="post" />
*
*   // load data
*   fetcher.load("/some/route")
*
*   // submit data
*   fetcher.submit(someFormRef, { method: "post" })
*   fetcher.submit(someData, {
*     method: "post",
*     encType: "application/json"
*   })
*
*   // reset fetcher
*   fetcher.reset()
* }
*
* @public
* @category Hooks
* @mode framework
* @mode data
* @param options Options
* @param options.key A unique key to identify the fetcher.
*
*
* By default, `useFetcher` generates a unique fetcher scoped to that component.
* If you want to identify a fetcher with your own key such that you can access
* it from elsewhere in your app, you can do that with the `key` option:
*
* ```tsx
* function SomeComp() {
*   let fetcher = useFetcher({ key: "my-key" })
*   // ...
* }
*
* // Somewhere else
* function AnotherComp() {
*   // this will be the same fetcher, sharing the state across the app
*   let fetcher = useFetcher({ key: "my-key" });
*   // ...
* }
* ```
* @returns A {@link FetcherWithComponents} object that contains the fetcher's state, data, and components for submitting forms and loading data.
*/
function useFetcher({ key } = {}) {
	let { router } = useDataRouterContext("useFetcher");
	let fetchersContext = useDataRouterFetchers("useFetcher");
	let routeId = useCurrentRouteId("useFetcher");
	let defaultKey = React$1.useId();
	let [fetcherKey, setFetcherKey] = React$1.useState(key || defaultKey);
	if (key && key !== fetcherKey) setFetcherKey(key);
	let { deleteFetcher, getFetcher, resetFetcher, fetch: routerFetch } = router;
	React$1.useEffect(() => {
		getFetcher(fetcherKey);
		return () => deleteFetcher(fetcherKey);
	}, [
		deleteFetcher,
		getFetcher,
		fetcherKey
	]);
	let load = React$1.useCallback(async (href, opts) => {
		invariant(routeId, "No routeId available for fetcher.load()");
		await routerFetch(fetcherKey, routeId, href, opts);
	}, [
		fetcherKey,
		routeId,
		routerFetch
	]);
	let submitImpl = useSubmit();
	let submit = React$1.useCallback(async (target, opts) => {
		await submitImpl(target, {
			...opts,
			navigate: false,
			fetcherKey
		});
	}, [fetcherKey, submitImpl]);
	let reset = React$1.useCallback((opts) => resetFetcher(fetcherKey, opts), [resetFetcher, fetcherKey]);
	let FetcherForm = React$1.useMemo(() => {
		let FetcherForm = React$1.forwardRef((props, ref) => {
			return /* @__PURE__ */ React$1.createElement(Form, {
				...props,
				navigate: false,
				fetcherKey,
				ref
			});
		});
		FetcherForm.displayName = "fetcher.Form";
		return FetcherForm;
	}, [fetcherKey]);
	let fetcher = fetchersContext.fetchers.get(fetcherKey) || IDLE_FETCHER;
	let data = fetchersContext.fetcherData.get(fetcherKey);
	return React$1.useMemo(() => ({
		Form: FetcherForm,
		submit,
		load,
		reset,
		...fetcher,
		data
	}), [
		FetcherForm,
		submit,
		load,
		reset,
		fetcher,
		data
	]);
}
/**
* Returns an array of all in-flight {@link Fetcher}s. This is useful for components
* throughout the app that didn't create the fetchers but want to use their submissions
* to participate in optimistic UI.
*
* @example
* import { useFetchers } from "react-router";
*
* function SomeComponent() {
*   const fetchers = useFetchers();
*   fetchers[0].formData; // FormData
*   fetchers[0].state; // etc.
*   // ...
* }
*
* @public
* @category Hooks
* @mode framework
* @mode data
* @returns An array of all in-flight {@link Fetcher}s, each with a unique `key`
* property.
*/
function useFetchers() {
	let { fetchers } = useDataRouterFetchers("useFetchers");
	return React$1.useMemo(() => Array.from(fetchers.entries()).map(([key, fetcher]) => ({
		...fetcher,
		key
	})), [fetchers]);
}
const SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let savedScrollPositions = {};
function getScrollRestorationKey(location, matches, basename, getKey) {
	let key = null;
	if (getKey) if (basename !== "/") key = getKey({
		...location,
		pathname: (0,utils/* .stripBasename */.pb)(location.pathname, basename) || location.pathname
	}, matches);
	else key = getKey(location, matches);
	if (key == null) key = location.key;
	return key;
}
/**
* When rendered inside a {@link RouterProvider}, will restore scroll positions
* on navigations
*
* <!--
* Not marked `@public` because we only export as UNSAFE_ and therefore we don't
* maintain an .md file for this hook
* -->
*
* @name UNSAFE_useScrollRestoration
* @category Hooks
* @mode framework
* @mode data
* @param options Options
* @param options.getKey A function that returns a key to use for scroll restoration.
* This is useful for custom scroll restoration logic, such as using only the pathname
* so that subsequent navigations to prior paths will restore the scroll. Defaults
* to `location.key`.
* @param options.storageKey The key to use for storing scroll positions in
* `sessionStorage`. Defaults to `"react-router-scroll-positions"`.
* @returns {void}
*/
function useScrollRestoration({ getKey, storageKey } = {}) {
	let { router } = (0,hooks/* .useDataRouterContext */.ek)("useScrollRestoration");
	let { restoreScrollPosition, preventScrollReset } = (0,hooks/* .useDataRouterState */.CB)("useScrollRestoration");
	let { basename } = react.useContext(context/* .NavigationContext */._3);
	let location = (0,hooks/* .useLocation */.zy)();
	let matches = (0,hooks/* .useMatches */.FE)();
	let navigation = (0,hooks/* .useNavigation */.cq)();
	react.useEffect(() => {
		window.history.scrollRestoration = "manual";
		return () => {
			window.history.scrollRestoration = "auto";
		};
	}, []);
	usePageShow(react.useCallback((event) => {
		if (event.persisted) window.history.scrollRestoration = "manual";
	}, []));
	usePageHide(react.useCallback(() => {
		if (navigation.state === "idle") {
			let key = getScrollRestorationKey(location, matches, basename, getKey);
			savedScrollPositions[key] = window.scrollY;
		}
		try {
			sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
		} catch (error) {
			(0,router_history/* .warning */.$e)(false, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`);
		}
		window.history.scrollRestoration = "auto";
	}, [
		navigation.state,
		getKey,
		basename,
		location,
		matches,
		storageKey
	]));
	if (typeof document !== "undefined") {
		react.useLayoutEffect(() => {
			try {
				let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
				if (sessionPositions) savedScrollPositions = JSON.parse(sessionPositions);
			} catch {}
		}, [storageKey]);
		react.useLayoutEffect(() => {
			let disableScrollRestoration = router?.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKey ? (location, matches) => getScrollRestorationKey(location, matches, basename, getKey) : void 0);
			return () => disableScrollRestoration && disableScrollRestoration();
		}, [
			router,
			basename,
			getKey
		]);
		react.useLayoutEffect(() => {
			if (restoreScrollPosition === false) return;
			if (typeof restoreScrollPosition === "number") {
				window.scrollTo(0, restoreScrollPosition);
				return;
			}
			try {
				if (location.hash) {
					let el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
					if (el) {
						el.scrollIntoView();
						return;
					}
				}
			} catch {
				(0,router_history/* .warning */.$e)(false, `"${location.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
			}
			if (preventScrollReset === true) return;
			window.scrollTo(0, 0);
		}, [
			location,
			restoreScrollPosition,
			preventScrollReset
		]);
	}
}
/**
* Set up a callback to be fired on [Window's `beforeunload` event](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event).
*
* @public
* @category Hooks
* @param callback The callback to be called when the [`beforeunload` event](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event)
* is fired.
* @param options Options
* @param options.capture If `true`, the event will be captured during the capture
* phase. Defaults to `false`.
* @returns {void}
*/
function useBeforeUnload(callback, options) {
	let { capture } = options || {};
	React$1.useEffect(() => {
		let opts = capture != null ? { capture } : void 0;
		window.addEventListener("beforeunload", callback, opts);
		return () => {
			window.removeEventListener("beforeunload", callback, opts);
		};
	}, [callback, capture]);
}
function usePageHide(callback, options) {
	let { capture } = options || {};
	react.useEffect(() => {
		let opts = capture != null ? { capture } : void 0;
		window.addEventListener("pagehide", callback, opts);
		return () => {
			window.removeEventListener("pagehide", callback, opts);
		};
	}, [callback, capture]);
}
function usePageShow(callback, options) {
	let { capture } = options || {};
	react.useEffect(() => {
		let opts = capture != null ? { capture } : void 0;
		window.addEventListener("pageshow", callback, opts);
		return () => {
			window.removeEventListener("pageshow", callback, opts);
		};
	}, [callback, capture]);
}
/**
* Wrapper around {@link useBlocker} to show a [`window.confirm`](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
* prompt to users instead of building a custom UI with {@link useBlocker}.
*
* The `unstable_` flag will not be removed because this technique has a lot of
* rough edges and behaves very differently (and incorrectly sometimes) across
* browsers if users click addition back/forward navigations while the
* confirmation is open. Use at your own risk.
*
* @example
* function ImportantForm() {
*   let [value, setValue] = React.useState("");
*
*   // Block navigating elsewhere when data has been entered into the input
*   unstable_usePrompt({
*     message: "Are you sure?",
*     when: ({ currentLocation, nextLocation }) =>
*       value !== "" &&
*       currentLocation.pathname !== nextLocation.pathname,
*   });
*
*   return (
*     <Form method="post">
*       <label>
*         Enter some important data:
*         <input
*           name="data"
*           value={value}
*           onChange={(e) => setValue(e.target.value)}
*         />
*       </label>
*       <button type="submit">Save</button>
*     </Form>
*   );
* }
*
* @name unstable_usePrompt
* @public
* @category Hooks
* @mode framework
* @mode data
* @param options Options
* @param options.message The message to show in the confirmation dialog.
* @param options.when A boolean or a function that returns a boolean indicating
* whether to block the navigation. If a function is provided, it will receive an
* object with `currentLocation` and `nextLocation` properties.
* @returns {void}
*/
function usePrompt({ when, message }) {
	let blocker = useBlocker(when);
	React$1.useEffect(() => {
		if (blocker.state === "blocked") if (window.confirm(message)) setTimeout(blocker.proceed, 0);
		else blocker.reset();
	}, [blocker, message]);
	React$1.useEffect(() => {
		if (blocker.state === "blocked" && !when) blocker.reset();
	}, [blocker, when]);
}
/**
* **Deprecated.** Use React's [`<ViewTransition>`](https://react.dev/reference/react/ViewTransition)
* component to style transitions instead. This hook only tracks React Router's
* legacy view transitions, not transitions started by React. See the
* [migration guide](../../how-to/view-transitions).
*
* This hook returns `true` when there is an active [View Transition](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
* and the specified location matches either side of the navigation (the URL you are
* navigating **to** or the URL you are navigating **from**). This can be used to apply finer-grained styles to
* elements to further customize the view transition. This requires that view
* transitions have been enabled for the given navigation via {@link LinkProps.viewTransition}
* (or the `Form`, `submit`, or `navigate` call)
*
* @public
* @category Hooks
* @mode framework
* @mode data
* @param to The {@link To} location to compare against the active transition's current
* and next URLs.
* @param options Options
* @param options.relative The relative routing type to use when resolving the
* `to` location, defaults to `"route"`. See {@link RelativeRoutingType} for
* more details.
* @returns `true` if there is an active [View Transition](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
* and the resolved path matches the transition's destination or source pathname, otherwise `false`.
*
* @deprecated Use React's `<ViewTransition>` component instead.
*/
function useViewTransitionState(to, { relative } = {}) {
	let vtContext = react.useContext(context/* .ViewTransitionContext */.KZ);
	(0,router_history/* .invariant */.V1)(vtContext != null, "`useViewTransitionState` must be used within `react-router/dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let { basename } = (0,hooks/* .useDataRouterContext */.ek)("useViewTransitionState");
	let path = (0,hooks/* .useResolvedPath */.x$)(to, { relative });
	if (!vtContext.isTransitioning) return false;
	let currentPath = (0,utils/* .stripBasename */.pb)(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
	let nextPath = (0,utils/* .stripBasename */.pb)(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
	return (0,utils/* .matchPath */.B6)(path.pathname, nextPath) != null || (0,utils/* .matchPath */.B6)(path.pathname, currentPath) != null;
}
//#endregion



},
1364(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  yL: () => (/* binding */ FrameworkContext),
  cM: () => (/* binding */ PrefetchPageLinks),
  Px: () => (/* binding */ mergeRefs),
  Fe: () => (/* binding */ usePrefetchBehavior)
});

// UNUSED EXPORTS: CRITICAL_CSS_DATA_ATTRIBUTE, Links, Meta, Scripts, setIsHydrated, useFrameworkContext

// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/context.js
var lib_context = __webpack_require__(9189);
// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/hooks.js + 2 modules
var hooks = __webpack_require__(537);
;// CONCATENATED MODULE: ./node_modules/react-router/dist/production/lib/dom/ssr/invariant.js
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//#region lib/dom/ssr/invariant.ts
function invariant_invariant(value, message) {
	if (value === false || value === null || typeof value === "undefined") throw new Error(message);
}
//#endregion


;// CONCATENATED MODULE: ./node_modules/react-router/dist/production/lib/dom/ssr/routeModules.js
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//#region lib/dom/ssr/routeModules.ts
async function loadRouteModule(route, routeModulesCache) {
	if (route.id in routeModulesCache) return routeModulesCache[route.id];
	try {
		let routeModule = await import(
			/* @vite-ignore */
			/* webpackIgnore: true */
			route.module
);
		routeModulesCache[route.id] = routeModule;
		return routeModule;
	} catch (error) {
		console.error(`Error loading route module \`${route.module}\`, reloading page...`);
		console.error(error);
		if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && /* unsupported import.meta.hot */ undefined) {}
		window.location.reload();
		return new Promise(() => {});
	}
}
//#endregion


;// CONCATENATED MODULE: ./node_modules/react-router/dist/production/lib/dom/ssr/links.js
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

//#region lib/dom/ssr/links.ts
/**
* Gets all the links for a set of matches. The modules are assumed to have been
* loaded already.
*/
function links_getKeyedLinksForMatches(matches, routeModules, manifest) {
	return dedupeLinkDescriptors(matches.map((match) => {
		let module = routeModules[match.route.id];
		let route = manifest.routes[match.route.id];
		return [route && route.css ? route.css.map((href) => ({
			rel: "stylesheet",
			href
		})) : [], module?.links?.() || []];
	}).flat(2), links_getModuleLinkHrefs(matches, manifest));
}
function getRouteCssDescriptors(route) {
	if (!route.css) return [];
	return route.css.map((href) => ({
		rel: "stylesheet",
		href
	}));
}
async function prefetchRouteCss(route) {
	if (!route.css) return;
	let descriptors = getRouteCssDescriptors(route);
	await Promise.all(descriptors.map(prefetchStyleLink));
}
async function prefetchStyleLinks(route, routeModule) {
	if (!route.css && !routeModule.links || !isPreloadSupported()) return;
	let descriptors = [];
	if (route.css) descriptors.push(...getRouteCssDescriptors(route));
	if (routeModule.links) descriptors.push(...routeModule.links());
	if (descriptors.length === 0) return;
	let styleLinks = [];
	for (let descriptor of descriptors) if (!links_isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet") styleLinks.push({
		...descriptor,
		rel: "preload",
		as: "style"
	});
	await Promise.all(styleLinks.map(prefetchStyleLink));
}
async function prefetchStyleLink(descriptor) {
	return new Promise((resolve) => {
		if (descriptor.media && !window.matchMedia(descriptor.media).matches || document.querySelector(`link[rel="stylesheet"][href="${descriptor.href}"]`)) return resolve();
		let link = document.createElement("link");
		Object.assign(link, descriptor);
		function removeLink() {
			if (document.head.contains(link)) document.head.removeChild(link);
		}
		link.onload = () => {
			removeLink();
			resolve();
		};
		link.onerror = () => {
			removeLink();
			resolve();
		};
		document.head.appendChild(link);
	});
}
function links_isPageLinkDescriptor(object) {
	return object != null && typeof object.page === "string";
}
function isHtmlLinkDescriptor(object) {
	if (object == null) return false;
	if (object.href == null) return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
	return typeof object.rel === "string" && typeof object.href === "string";
}
async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
	return dedupeLinkDescriptors((await Promise.all(matches.map(async (match) => {
		let route = manifest.routes[match.route.id];
		if (route) {
			let mod = await loadRouteModule(route, routeModules);
			return mod.links ? mod.links() : [];
		}
		return [];
	}))).flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map((link) => link.rel === "stylesheet" ? {
		...link,
		rel: "prefetch",
		as: "style"
	} : {
		...link,
		rel: "prefetch"
	}));
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
	let isNew = (match, index) => {
		if (!currentMatches[index]) return true;
		return match.route.id !== currentMatches[index].route.id;
	};
	let matchPathChanged = (match, index) => {
		return currentMatches[index].pathname !== match.pathname || currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"];
	};
	if (mode === "assets") return nextMatches.filter((match, index) => isNew(match, index) || matchPathChanged(match, index));
	if (mode === "data") return nextMatches.filter((match, index) => {
		let manifestRoute = manifest.routes[match.route.id];
		if (!manifestRoute || !manifestRoute.hasLoader) return false;
		if (isNew(match, index) || matchPathChanged(match, index)) return true;
		if (match.route.shouldRevalidate) {
			let routeChoice = match.route.shouldRevalidate({
				currentUrl: new URL(location.pathname + location.search + location.hash, window.origin),
				currentParams: currentMatches[0]?.params || {},
				nextUrl: new URL(page, window.origin),
				nextParams: match.params,
				defaultShouldRevalidate: true
			});
			if (typeof routeChoice === "boolean") return routeChoice;
		}
		return true;
	});
	return [];
}
function links_getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
	return dedupeHrefs(matches.map((match) => {
		let route = manifest.routes[match.route.id];
		if (!route) return [];
		let hrefs = [route.module];
		if (route.clientActionModule) hrefs = hrefs.concat(route.clientActionModule);
		if (route.clientLoaderModule) hrefs = hrefs.concat(route.clientLoaderModule);
		if (includeHydrateFallback && route.hydrateFallbackModule) hrefs = hrefs.concat(route.hydrateFallbackModule);
		if (route.imports) hrefs = hrefs.concat(route.imports);
		return hrefs;
	}).flat(1));
}
function dedupeHrefs(hrefs) {
	return [...new Set(hrefs)];
}
function sortKeys(obj) {
	let sorted = {};
	let keys = Object.keys(obj).sort();
	for (let key of keys) sorted[key] = obj[key];
	return sorted;
}
function dedupeLinkDescriptors(descriptors, preloads) {
	let set = /* @__PURE__ */ new Set();
	let preloadsSet = new Set(preloads);
	return descriptors.reduce((deduped, descriptor) => {
		if (preloads && !links_isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href)) return deduped;
		let key = JSON.stringify(sortKeys(descriptor));
		if (!set.has(key)) {
			set.add(key);
			deduped.push({
				key,
				link: descriptor
			});
		}
		return deduped;
	}, []);
}
let _isPreloadSupported;
function isPreloadSupported() {
	if (_isPreloadSupported !== void 0) return _isPreloadSupported;
	let el = document.createElement("link");
	_isPreloadSupported = el.relList.supports("preload");
	el = null;
	return _isPreloadSupported;
}
//#endregion


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// CONCATENATED MODULE: ./node_modules/react-router/dist/production/lib/dom/ssr/single-fetch.js
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */







//#region lib/dom/ssr/single-fetch.tsx
const SingleFetchRedirectSymbol = Symbol("SingleFetchRedirect");
var SingleFetchNoResultError = class extends (/* unused pure expression or super */ null && (Error)) {};
const NO_BODY_STATUS_CODES = new Set([
	100,
	101,
	204,
	205
]);
function StreamTransfer({ context, identifier, reader, textDecoder, nonce }) {
	if (!context.renderMeta || !context.renderMeta.didRenderScripts) return null;
	if (!context.renderMeta.streamCache) context.renderMeta.streamCache = {};
	let { streamCache } = context.renderMeta;
	let promise = streamCache[identifier];
	if (!promise) promise = streamCache[identifier] = reader.read().then((result) => {
		streamCache[identifier].result = {
			done: result.done,
			value: textDecoder.decode(result.value, { stream: true })
		};
	}).catch((e) => {
		streamCache[identifier].error = e;
	});
	if (promise.error) throw promise.error;
	if (promise.result === void 0) throw promise;
	let { done, value } = promise.result;
	let scriptTag = value ? /* @__PURE__ */ React$1.createElement("script", {
		nonce,
		dangerouslySetInnerHTML: { __html: `window.__reactRouterContext.streamController.enqueue(${escapeHtml(JSON.stringify(value))});` }
	}) : null;
	if (done) return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, scriptTag, /* @__PURE__ */ React$1.createElement("script", {
		nonce,
		dangerouslySetInnerHTML: { __html: `window.__reactRouterContext.streamController.close();` }
	}));
	else return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, scriptTag, /* @__PURE__ */ React$1.createElement(React$1.Suspense, null, /* @__PURE__ */ React$1.createElement(StreamTransfer, {
		context,
		identifier: identifier + 1,
		reader,
		textDecoder,
		nonce
	})));
}
function getTurboStreamSingleFetchDataStrategy(getRouter, manifest, routeModules, ssr, fetchImplementation = (request) => fetch(request), isApiOnly = false, serverOrigin, isSpaMode = false) {
	let dataStrategy = getSingleFetchDataStrategyImpl(getRouter, (match) => {
		let manifestRoute = manifest.routes[match.route.id];
		invariant(manifestRoute, "Route not found in manifest");
		return {
			hasLoader: manifestRoute.hasLoader,
			hasClientLoader: manifestRoute.hasClientLoader
		};
	}, fetchAndDecodeViaTurboStream(fetchImplementation, serverOrigin), ssr, void 0, isApiOnly, isSpaMode);
	return async (args) => args.runClientMiddleware(dataStrategy);
}
function getSingleFetchDataStrategyImpl(getRouter, getRouteInfo, fetchAndDecode, ssr, shouldAllowOptOut = () => true, isApiOnly = false, isSpaMode = false) {
	return async (args) => {
		let { request, matches, fetcherKey } = args;
		let router = getRouter();
		if (request.method !== "GET") return singleFetchActionStrategy(args, fetchAndDecode);
		let foundRevalidatingServerLoader = matches.some((m) => {
			let { hasLoader, hasClientLoader } = getRouteInfo(m);
			return m.shouldCallHandler() && hasLoader && !hasClientLoader;
		});
		if (!ssr && !foundRevalidatingServerLoader) return nonSsrStrategy(args, getRouteInfo, fetchAndDecode);
		if (fetcherKey) return singleFetchLoaderFetcherStrategy(args, fetchAndDecode);
		return singleFetchLoaderNavigationStrategy(args, router, getRouteInfo, fetchAndDecode, ssr, shouldAllowOptOut, isApiOnly, isSpaMode);
	};
}
async function singleFetchActionStrategy(args, fetchAndDecode) {
	let actionMatch = args.matches.find((m) => m.shouldCallHandler());
	invariant(actionMatch, "No action match found");
	let actionStatus = void 0;
	let result = await actionMatch.resolve(async (handler) => {
		return await handler(async () => {
			let { data, status } = await fetchAndDecode(args, [actionMatch.route.id]);
			actionStatus = status;
			return unwrapSingleFetchResult(data, actionMatch.route.id);
		});
	});
	if (isResponse(result.result) || isRouteErrorResponse(result.result) || isDataWithResponseInit(result.result)) return { [actionMatch.route.id]: result };
	return { [actionMatch.route.id]: {
		type: result.type,
		result: data(result.result, actionStatus)
	} };
}
async function nonSsrStrategy(args, getRouteInfo, fetchAndDecode) {
	let matchesToLoad = args.matches.filter((m) => m.shouldCallHandler());
	let results = {};
	await Promise.all(matchesToLoad.map(async (m) => {
		let routeId = m.route.id;
		results[routeId] = await m.resolve(async (handler) => {
			let { hasClientLoader } = getRouteInfo(m);
			return hasClientLoader ? handler(async () => {
				let { data } = await fetchAndDecode(args, [routeId]);
				return unwrapSingleFetchResult(data, routeId);
			}) : handler();
		});
	}));
	return results;
}
async function singleFetchLoaderNavigationStrategy(args, router, getRouteInfo, fetchAndDecode, ssr, shouldAllowOptOut = () => true, isApiOnly = false, isSpaMode = false) {
	let routesParams = /* @__PURE__ */ new Set();
	let foundOptOutRoute = false;
	let routeDfds = args.matches.map(() => createDeferred());
	let singleFetchDfd = createDeferred();
	let results = {};
	let resolvePromise = Promise.all(args.matches.map(async (m, i) => m.resolve(async (handler) => {
		routeDfds[i].resolve();
		let routeId = m.route.id;
		let { hasLoader, hasClientLoader } = getRouteInfo(m);
		let defaultShouldRevalidate = !m.shouldRevalidateArgs || m.shouldRevalidateArgs.actionStatus == null || m.shouldRevalidateArgs.actionStatus < 400;
		if (!m.shouldCallHandler(defaultShouldRevalidate)) {
			foundOptOutRoute ||= m.shouldRevalidateArgs != null && hasLoader;
			return;
		}
		if (shouldAllowOptOut(m) && hasClientLoader) {
			if (hasLoader) foundOptOutRoute = true;
			try {
				results[routeId] = {
					type: "data",
					result: await handler(async () => {
						let { data } = await fetchAndDecode(args, [routeId]);
						return unwrapSingleFetchResult(data, routeId);
					})
				};
			} catch (e) {
				results[routeId] = {
					type: "error",
					result: e
				};
			}
			return;
		}
		if (hasLoader) routesParams.add(routeId);
		try {
			results[routeId] = {
				type: "data",
				result: await handler(async () => {
					return unwrapSingleFetchResult(await singleFetchDfd.promise, routeId);
				})
			};
		} catch (e) {
			results[routeId] = {
				type: "error",
				result: e
			};
		}
	})));
	await Promise.all(routeDfds.map((d) => d.promise));
	if ((!router.state.initialized && router.state.navigation.state === "idle" && !isApiOnly && !isSpaMode || routesParams.size === 0) && !window.__reactRouterHdrActive) singleFetchDfd.resolve({ routes: {} });
	else {
		let targetRoutes = ssr && foundOptOutRoute && routesParams.size > 0 ? [...routesParams.keys()] : void 0;
		try {
			let data = await fetchAndDecode(args, targetRoutes);
			singleFetchDfd.resolve(data.data);
		} catch (e) {
			singleFetchDfd.reject(e);
		}
	}
	await resolvePromise;
	await bubbleMiddlewareErrors(singleFetchDfd.promise, args.matches, routesParams, results);
	return results;
}
async function bubbleMiddlewareErrors(singleFetchPromise, matches, routesParams, results) {
	try {
		let middlewareError;
		let fetchedData = await singleFetchPromise;
		if ("routes" in fetchedData) {
			for (let match of matches) if (match.route.id in fetchedData.routes) {
				let routeResult = fetchedData.routes[match.route.id];
				if ("error" in routeResult) {
					middlewareError = routeResult.error;
					if (results[match.route.id]?.result == null) results[match.route.id] = {
						type: "error",
						result: middlewareError
					};
					break;
				}
			}
		}
		if (middlewareError !== void 0) Array.from(routesParams.values()).forEach((routeId) => {
			if (results[routeId].result instanceof SingleFetchNoResultError) results[routeId].result = middlewareError;
		});
	} catch {}
}
async function singleFetchLoaderFetcherStrategy(args, fetchAndDecode) {
	let fetcherMatch = args.matches.find((m) => m.shouldCallHandler());
	invariant(fetcherMatch, "No fetcher match found");
	let routeId = fetcherMatch.route.id;
	let result = await fetcherMatch.resolve(async (handler) => handler(async () => {
		let { data } = await fetchAndDecode(args, [routeId]);
		return unwrapSingleFetchResult(data, routeId);
	}));
	return { [fetcherMatch.route.id]: result };
}
function stripIndexParam(url) {
	let indexValues = url.searchParams.getAll("index");
	url.searchParams.delete("index");
	let indexValuesToKeep = [];
	for (let indexValue of indexValues) if (indexValue) indexValuesToKeep.push(indexValue);
	for (let toKeep of indexValuesToKeep) url.searchParams.append("index", toKeep);
	return url;
}
function singleFetchUrl(reqUrl, extension, serverOrigin) {
	let url = typeof reqUrl === "string" ? new URL(reqUrl, serverOrigin ?? (typeof window === "undefined" ? "server://singlefetch/" : window.location.origin)) : new URL(reqUrl);
	if (serverOrigin && url.origin !== serverOrigin) url = new URL(url.pathname + url.search + url.hash, serverOrigin);
	if (url.pathname.endsWith("/")) url.pathname = `${url.pathname}_.${extension}`;
	else url.pathname = `${url.pathname}.${extension}`;
	return url;
}
function fetchAndDecodeViaTurboStream(fetchImplementation, serverOrigin) {
	return async (args, targetRoutes) => {
		let { request } = args;
		let url = singleFetchUrl(request.url, "data", serverOrigin);
		if (request.method === "GET") {
			url = stripIndexParam(url);
			if (targetRoutes) url.searchParams.set("_routes", targetRoutes.join(","));
		}
		let req = new Request(url, await createRequestInit(request));
		invariant(args.unstable_initiator !== "static", "Static data strategy initiator used for a client data request");
		let fetchContext;
		if (args.unstable_initiator === "navigation") {
			invariant(args.unstable_navigationType !== null, "Missing navigation type for a navigation data request");
			fetchContext = {
				type: "navigation",
				fetcherKey: args.fetcherKey,
				navigationType: args.unstable_navigationType
			};
		} else fetchContext = {
			type: args.unstable_initiator,
			fetcherKey: args.fetcherKey,
			navigationType: null
		};
		let res = await fetchImplementation(req, fetchContext);
		if (res.status >= 400 && !res.headers.has("X-Remix-Response")) throw new ErrorResponseImpl(res.status, res.statusText, await res.text());
		if (res.status === 204 && res.headers.has("X-Remix-Redirect")) return {
			status: 202,
			data: { redirect: {
				redirect: res.headers.get("X-Remix-Redirect"),
				status: Number(res.headers.get("X-Remix-Status") || "302"),
				revalidate: res.headers.get("X-Remix-Revalidate") === "true",
				reload: res.headers.get("X-Remix-Reload-Document") === "true",
				replace: res.headers.get("X-Remix-Replace") === "true"
			} }
		};
		if (NO_BODY_STATUS_CODES.has(res.status)) {
			let routes = {};
			if (targetRoutes && request.method !== "GET") routes[targetRoutes[0]] = { data: void 0 };
			return {
				status: res.status,
				data: { routes }
			};
		}
		invariant(res.body, "No response body to decode");
		try {
			let decoded = await decodeViaTurboStream(res.body, window);
			let data;
			if (request.method === "GET") {
				let typed = decoded.value;
				if (SingleFetchRedirectSymbol in typed) data = { redirect: typed[SingleFetchRedirectSymbol] };
				else data = { routes: typed };
			} else {
				let typed = decoded.value;
				let routeId = targetRoutes?.[0];
				invariant(routeId, "No routeId found for single fetch call decoding");
				if ("redirect" in typed) data = { redirect: typed };
				else data = { routes: { [routeId]: typed } };
			}
			return {
				status: res.status,
				data
			};
		} catch (cause) {
			throw new Error("Unable to decode turbo-stream response", { cause });
		}
	};
}
function decodeViaTurboStream(body, global) {
	return decode(body, { plugins: [(type, ...rest) => {
		if (type === "SanitizedError") {
			let [name, message, stack] = rest;
			let Constructor = Error;
			if (name && SUPPORTED_ERROR_TYPES.includes(name) && name in global && typeof global[name] === "function") Constructor = global[name];
			let error = new Constructor(message);
			error.stack = stack;
			return { value: error };
		}
		if (type === "ErrorResponse") {
			let [data, status, statusText] = rest;
			return { value: new ErrorResponseImpl(status, statusText, data) };
		}
		if (type === "SingleFetchRedirect") return { value: { [SingleFetchRedirectSymbol]: rest[0] } };
		if (type === "SingleFetchClassInstance") return { value: rest[0] };
		if (type === "SingleFetchFallback") return { value: void 0 };
	}] });
}
function unwrapSingleFetchResult(result, routeId) {
	if ("redirect" in result) {
		let { redirect: location, revalidate, reload, replace, status } = result.redirect;
		throw redirect(location, {
			status,
			headers: {
				...revalidate ? { "X-Remix-Revalidate": "yes" } : null,
				...reload ? { "X-Remix-Reload-Document": "yes" } : null,
				...replace ? { "X-Remix-Replace": "yes" } : null
			}
		});
	}
	let routeResult = result.routes[routeId];
	if (routeResult == null) throw new SingleFetchNoResultError(`No result found for routeId "${routeId}"`);
	else if ("error" in routeResult) throw routeResult.error;
	else if ("data" in routeResult) return routeResult.data;
	else throw new Error(`Invalid response found for routeId "${routeId}"`);
}
function createDeferred() {
	let resolve;
	let reject;
	let promise = new Promise((res, rej) => {
		resolve = async (val) => {
			res(val);
			try {
				await promise;
			} catch {}
		};
		reject = async (error) => {
			rej(error);
			try {
				await promise;
			} catch {}
		};
	});
	return {
		promise,
		resolve,
		reject
	};
}
//#endregion


;// CONCATENATED MODULE: ./node_modules/react-router/dist/production/lib/dom/ssr/components.js
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */









//#region lib/dom/ssr/components.tsx
const FrameworkContext = react.createContext(void 0);
FrameworkContext.displayName = "FrameworkContext";
function useFrameworkContext() {
	let context = react.useContext(FrameworkContext);
	invariant_invariant(context, "You must render this element inside a <HydratedRouter> element");
	return context;
}
function usePrefetchBehavior(prefetch, theirElementProps) {
	let frameworkContext = react.useContext(FrameworkContext);
	let [maybePrefetch, setMaybePrefetch] = react.useState(false);
	let [shouldPrefetch, setShouldPrefetch] = react.useState(false);
	let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
	let ref = react.useRef(null);
	react.useEffect(() => {
		if (prefetch === "render") setShouldPrefetch(true);
		if (prefetch === "viewport") {
			let callback = (entries) => {
				entries.forEach((entry) => {
					setShouldPrefetch(entry.isIntersecting);
				});
			};
			let observer = new IntersectionObserver(callback, { threshold: .5 });
			if (ref.current) observer.observe(ref.current);
			return () => {
				observer.disconnect();
			};
		}
	}, [prefetch]);
	react.useEffect(() => {
		if (maybePrefetch) {
			let id = setTimeout(() => {
				setShouldPrefetch(true);
			}, 100);
			return () => {
				clearTimeout(id);
			};
		}
	}, [maybePrefetch]);
	let setIntent = () => {
		setMaybePrefetch(true);
	};
	let cancelIntent = () => {
		setMaybePrefetch(false);
		setShouldPrefetch(false);
	};
	if (!frameworkContext) return [
		false,
		ref,
		{}
	];
	if (prefetch !== "intent") return [
		shouldPrefetch,
		ref,
		{}
	];
	return [
		shouldPrefetch,
		ref,
		{
			onFocus: composeEventHandlers(onFocus, setIntent),
			onBlur: composeEventHandlers(onBlur, cancelIntent),
			onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
			onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
			onTouchStart: composeEventHandlers(onTouchStart, setIntent)
		}
	];
}
function composeEventHandlers(theirHandler, ourHandler) {
	return (event) => {
		theirHandler && theirHandler(event);
		if (!event.defaultPrevented) ourHandler(event);
	};
}
function getActiveMatches(matches, errors, isSpaMode) {
	if (isSpaMode && !isHydrated) return [matches[0]];
	if (errors) {
		let errorIdx = matches.findIndex((m) => errors[m.route.id] !== void 0);
		return matches.slice(0, errorIdx + 1);
	}
	return matches;
}
const CRITICAL_CSS_DATA_ATTRIBUTE = "data-react-router-critical-css";
/**
* Renders all the [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
* tags created by the route module's [`links`](../../start/framework/route-module#links)
* export. You should render it inside the [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
* of your document.
*
* @example
* import { Links } from "react-router";
*
* export default function Root() {
*   return (
*     <html>
*       <head>
*         <Links />
*       </head>
*       <body></body>
*     </html>
*   );
* }
*
* @public
* @category Components
* @mode framework
* @param props Props
* @param {LinksProps.nonce} props.nonce n/a
* @param {LinksProps.crossOrigin} props.crossOrigin n/a
* @returns A collection of React elements for [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
* tags
*/
function Links({ nonce, crossOrigin }) {
	let { isSpaMode, manifest, routeModules, criticalCss, nonce: contextNonce } = useFrameworkContext();
	let { matches: routerMatches } = useDataRouterState("Links");
	let { errors } = useDataRouterData("Links");
	let matches = getActiveMatches(routerMatches, errors, isSpaMode);
	let keyedLinks = React$1.useMemo(() => getKeyedLinksForMatches(matches, routeModules, manifest), [
		matches,
		routeModules,
		manifest
	]);
	if (nonce == null && contextNonce) nonce = contextNonce;
	return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, typeof criticalCss === "string" ? /* @__PURE__ */ React$1.createElement("style", {
		[CRITICAL_CSS_DATA_ATTRIBUTE]: "",
		nonce,
		dangerouslySetInnerHTML: { __html: criticalCss }
	}) : null, typeof criticalCss === "object" ? /* @__PURE__ */ React$1.createElement("link", {
		[CRITICAL_CSS_DATA_ATTRIBUTE]: "",
		rel: "stylesheet",
		href: criticalCss.href,
		nonce,
		crossOrigin
	}) : null, keyedLinks.map(({ key, link }) => isPageLinkDescriptor(link) ? /* @__PURE__ */ React$1.createElement(PrefetchPageLinks, {
		key,
		nonce,
		...link,
		crossOrigin: link.crossOrigin ?? crossOrigin
	}) : /* @__PURE__ */ React$1.createElement("link", {
		key,
		nonce,
		...link,
		crossOrigin: link.crossOrigin ?? crossOrigin
	})));
}
/**
* Renders [`<link rel=prefetch|modulepreload>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/rel)
* tags for modules and data of another page to enable an instant navigation to
* that page. [`<Link prefetch>`](./Link#prefetch) uses this internally, but you
* can render it to prefetch a page for any other reason.
*
* For example, you may render one of this as the user types into a search field
* to prefetch search results before they click through to their selection.
*
* @example
* import { PrefetchPageLinks } from "react-router";
*
* <PrefetchPageLinks page="/absolute/path" />
*
* @public
* @category Components
* @mode framework
* @param props Props
* @param {PageLinkDescriptor.page} props.page n/a
* @param props.linkProps Additional props to spread onto the [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
* tags, such as [`crossOrigin`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/crossOrigin),
* [`integrity`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/integrity),
* [`rel`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/rel),
* etc.
* @returns A collection of React elements for [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
* tags
*/
function PrefetchPageLinks({ page, ...linkProps }) {
	let rsc = (0,lib_context/* .useIsRSCRouterContext */.OA)();
	let { nonce: contextNonce } = useFrameworkContext();
	let { router } = (0,hooks/* .useDataRouterContext */.ek)("PrefetchPageLinks");
	let matches = react.useMemo(() => router.match(page), [
		router,
		router.routes,
		page
	]);
	if (!matches) return null;
	if (linkProps.nonce == null && contextNonce) linkProps = {
		...linkProps,
		nonce: contextNonce
	};
	if (rsc) return /* @__PURE__ */ react.createElement(RSCPrefetchPageLinksImpl, {
		page,
		matches,
		...linkProps
	});
	return /* @__PURE__ */ react.createElement(PrefetchPageLinksImpl, {
		page,
		matches,
		...linkProps
	});
}
function useKeyedPrefetchLinks(matches) {
	let { manifest, routeModules } = useFrameworkContext();
	let [keyedPrefetchLinks, setKeyedPrefetchLinks] = react.useState([]);
	react.useEffect(() => {
		let interrupted = false;
		getKeyedPrefetchLinks(matches, manifest, routeModules).then((links) => {
			if (!interrupted) setKeyedPrefetchLinks(links);
		});
		return () => {
			interrupted = true;
		};
	}, [
		matches,
		manifest,
		routeModules
	]);
	return keyedPrefetchLinks;
}
function RSCPrefetchPageLinksImpl({ page, matches: nextMatches, ...linkProps }) {
	let location = (0,hooks/* .useLocation */.zy)();
	let { unstable_apiServerOrigin } = useFrameworkContext();
	let dataHrefs = react.useMemo(() => {
		if (page === location.pathname + location.search + location.hash) return [];
		let url = singleFetchUrl(page, "rsc", unstable_apiServerOrigin);
		let hasSomeRoutesWithShouldRevalidate = false;
		let targetRoutes = [];
		for (let match of nextMatches) if (typeof match.route.shouldRevalidate === "function") hasSomeRoutesWithShouldRevalidate = true;
		else targetRoutes.push(match.route.id);
		if (hasSomeRoutesWithShouldRevalidate && targetRoutes.length > 0) url.searchParams.set("_routes", targetRoutes.join(","));
		return [unstable_apiServerOrigin ? url.toString() : url.pathname + url.search];
	}, [
		page,
		location,
		nextMatches,
		unstable_apiServerOrigin
	]);
	return /* @__PURE__ */ react.createElement(react.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ react.createElement("link", {
		key: href,
		rel: "prefetch",
		as: "fetch",
		href,
		...linkProps
	})));
}
function PrefetchPageLinksImpl({ page, matches: nextMatches, ...linkProps }) {
	let location = (0,hooks/* .useLocation */.zy)();
	let { manifest, routeModules, unstable_apiServerOrigin } = useFrameworkContext();
	let { matches } = (0,hooks/* .useDataRouterState */.CB)("PrefetchPageLinks");
	let { loaderData } = (0,hooks/* .useDataRouterData */.hg)("PrefetchPageLinks");
	let newMatchesForData = react.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, manifest, location, "data"), [
		page,
		nextMatches,
		matches,
		manifest,
		location
	]);
	let newMatchesForAssets = react.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, manifest, location, "assets"), [
		page,
		nextMatches,
		matches,
		manifest,
		location
	]);
	let dataHrefs = react.useMemo(() => {
		if (page === location.pathname + location.search + location.hash) return [];
		let routesParams = /* @__PURE__ */ new Set();
		let foundOptOutRoute = false;
		nextMatches.forEach((m) => {
			let manifestRoute = manifest.routes[m.route.id];
			if (!manifestRoute || !manifestRoute.hasLoader) return;
			if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && routeModules[m.route.id]?.shouldRevalidate) foundOptOutRoute = true;
			else if (manifestRoute.hasClientLoader) foundOptOutRoute = true;
			else routesParams.add(m.route.id);
		});
		if (routesParams.size === 0) return [];
		let url = singleFetchUrl(page, "data", unstable_apiServerOrigin);
		if (foundOptOutRoute && routesParams.size > 0) url.searchParams.set("_routes", nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(","));
		return [unstable_apiServerOrigin ? url.toString() : url.pathname + url.search];
	}, [
		loaderData,
		location,
		manifest,
		newMatchesForData,
		nextMatches,
		page,
		routeModules,
		unstable_apiServerOrigin
	]);
	let moduleHrefs = react.useMemo(() => links_getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]);
	let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
	return /* @__PURE__ */ react.createElement(react.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ react.createElement("link", {
		key: href,
		rel: "prefetch",
		as: "fetch",
		href,
		...linkProps
	})), moduleHrefs.map((href) => /* @__PURE__ */ react.createElement("link", {
		key: href,
		rel: "modulepreload",
		href,
		...linkProps
	})), keyedPrefetchLinks.map(({ key, link }) => /* @__PURE__ */ react.createElement("link", {
		key,
		nonce: linkProps.nonce,
		...link,
		crossOrigin: link.crossOrigin ?? linkProps.crossOrigin
	})));
}
/**
* Renders all the [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
* tags created by the route module's [`meta`](../../start/framework/route-module#meta)
* export. You should render it inside the [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
* of your document.
*
* @example
* import { Meta } from "react-router";
*
* export default function Root() {
*   return (
*     <html>
*       <head>
*         <Meta />
*       </head>
*     </html>
*   );
* }
*
* @public
* @category Components
* @mode framework
* @returns A collection of React elements for [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
* tags
*/
function Meta() {
	let { isSpaMode, routeModules } = useFrameworkContext();
	let { matches: routerMatches } = useDataRouterState("Meta");
	let { errors, loaderData } = useDataRouterData("Meta");
	let location = useLocation();
	let _matches = getActiveMatches(routerMatches, errors, isSpaMode);
	let error = null;
	if (errors) error = errors[_matches[_matches.length - 1].route.id];
	let meta = [];
	let leafMeta = null;
	let matches = [];
	for (let i = 0; i < _matches.length; i++) {
		let _match = _matches[i];
		let routeId = _match.route.id;
		let data = loaderData[routeId];
		let params = _match.params;
		let routeModule = routeModules[routeId];
		let routeMeta = [];
		let match = {
			id: routeId,
			loaderData: data,
			meta: [],
			params: _match.params,
			pathname: _match.pathname,
			handle: _match.route.handle,
			error
		};
		matches[i] = match;
		if (routeModule?.meta) routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
			loaderData: data,
			params,
			location,
			matches,
			error
		}) : Array.isArray(routeModule.meta) ? [...routeModule.meta] : routeModule.meta;
		else if (leafMeta) routeMeta = [...leafMeta];
		routeMeta = routeMeta || [];
		if (!Array.isArray(routeMeta)) throw new Error("The route at " + _match.route.path + " returns an invalid value. All route meta functions must return an array of meta objects.\n\nTo reference the meta function API, see https://reactrouter.com/start/framework/route-module#meta");
		match.meta = routeMeta;
		matches[i] = match;
		meta = [...routeMeta];
		leafMeta = meta;
	}
	return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, meta.flat().map((metaProps) => {
		if (!metaProps) return null;
		if ("tagName" in metaProps) {
			let { tagName, ...rest } = metaProps;
			if (!isValidMetaTag(tagName)) {
				console.warn(`A meta object uses an invalid tagName: ${tagName}. Expected either 'link' or 'meta'`);
				return null;
			}
			let Comp = tagName;
			return /* @__PURE__ */ React$1.createElement(Comp, {
				key: JSON.stringify(rest),
				...rest
			});
		}
		if ("title" in metaProps) return /* @__PURE__ */ React$1.createElement("title", { key: "title" }, String(metaProps.title));
		if ("charset" in metaProps) {
			metaProps.charSet ??= metaProps.charset;
			delete metaProps.charset;
		}
		if ("charSet" in metaProps && metaProps.charSet != null) return typeof metaProps.charSet === "string" ? /* @__PURE__ */ React$1.createElement("meta", {
			key: "charSet",
			charSet: metaProps.charSet
		}) : null;
		if ("script:ld+json" in metaProps) try {
			let json = JSON.stringify(metaProps["script:ld+json"]);
			return /* @__PURE__ */ React$1.createElement("script", {
				key: `script:ld+json:${json}`,
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: escapeHtml(json) }
			});
		} catch {
			return null;
		}
		return /* @__PURE__ */ React$1.createElement("meta", {
			key: JSON.stringify(metaProps),
			...metaProps
		});
	}));
}
function isValidMetaTag(tagName) {
	return typeof tagName === "string" && /^(meta|link)$/.test(tagName);
}
/**
* Tracks whether hydration is finished, so scripts can be skipped
* during client-side updates.
*/
let isHydrated = false;
function setIsHydrated() {
	isHydrated = true;
}
/**
* Renders the client runtime of your app. It should be rendered inside the
* [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)
*  of the document.
*
* If server rendering, you can omit `<Scripts/>` and the app will work as a
* traditional web app without JavaScript, relying solely on HTML and browser
* behaviors.
*
* @example
* import { Scripts } from "react-router";
*
* export default function Root() {
*   return (
*     <html>
*       <head />
*       <body>
*         <Scripts />
*       </body>
*     </html>
*   );
* }
*
* @public
* @category Components
* @mode framework
* @param scriptProps Additional props to spread onto the [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
* tags, such as [`crossOrigin`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement/crossOrigin),
* [`nonce`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/nonce),
* etc.
* @returns A collection of React elements for [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
* tags
*/
function Scripts(scriptProps) {
	let { manifest, serverHandoffString, isSpaMode, renderMeta, routeDiscovery, ssr, nonce: contextNonce } = useFrameworkContext();
	let { router, static: isStatic, staticContext } = useDataRouterContext("Scripts");
	let { matches: routerMatches } = useDataRouterState("Scripts");
	let isRSCRouterContext = useIsRSCRouterContext();
	let enableFogOfWar = isFogOfWarEnabled(routeDiscovery, ssr);
	if (scriptProps.nonce == null && contextNonce) scriptProps = {
		...scriptProps,
		nonce: contextNonce
	};
	if (renderMeta) renderMeta.didRenderScripts = true;
	let matches = getActiveMatches(routerMatches, null, isSpaMode);
	React$1.useEffect(() => {
		setIsHydrated();
	}, []);
	let initialScripts = React$1.useMemo(() => {
		if (isRSCRouterContext) return null;
		let contextScript = staticContext ? `window.__reactRouterContext = ${serverHandoffString};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());` : " ";
		let routeModulesScript = !isStatic ? " " : `${manifest.hmr?.runtime ? `import ${JSON.stringify(manifest.hmr.runtime)};` : ""}${!enableFogOfWar ? `import ${JSON.stringify(manifest.url)}` : ""};
${matches.map((match, routeIndex) => {
			let routeVarName = `route${routeIndex}`;
			let manifestEntry = manifest.routes[match.route.id];
			invariant(manifestEntry, `Route ${match.route.id} not found in manifest`);
			let { clientActionModule, clientLoaderModule, clientMiddlewareModule, hydrateFallbackModule, module } = manifestEntry;
			let chunks = [
				...clientActionModule ? [{
					module: clientActionModule,
					varName: `${routeVarName}_clientAction`
				}] : [],
				...clientLoaderModule ? [{
					module: clientLoaderModule,
					varName: `${routeVarName}_clientLoader`
				}] : [],
				...clientMiddlewareModule ? [{
					module: clientMiddlewareModule,
					varName: `${routeVarName}_clientMiddleware`
				}] : [],
				...hydrateFallbackModule ? [{
					module: hydrateFallbackModule,
					varName: `${routeVarName}_HydrateFallback`
				}] : [],
				{
					module,
					varName: `${routeVarName}_main`
				}
			];
			if (chunks.length === 1) return `import * as ${routeVarName} from ${JSON.stringify(module)};`;
			return [chunks.map((chunk) => `import * as ${chunk.varName} from "${chunk.module}";`).join("\n"), `const ${routeVarName} = {${chunks.map((chunk) => `...${chunk.varName}`).join(",")}};`].join("\n");
		}).join("\n")}
  ${enableFogOfWar ? `window.__reactRouterManifest = ${JSON.stringify(getPartialManifest(manifest, router), null, 2)};` : ""}
  window.__reactRouterRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};

import(${JSON.stringify(manifest.entry.module)});`;
		return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, /* @__PURE__ */ React$1.createElement("script", {
			...scriptProps,
			suppressHydrationWarning: true,
			dangerouslySetInnerHTML: { __html: contextScript },
			type: void 0
		}), /* @__PURE__ */ React$1.createElement("script", {
			...scriptProps,
			suppressHydrationWarning: true,
			dangerouslySetInnerHTML: { __html: routeModulesScript },
			type: "module",
			async: true
		}));
	}, []);
	let preloads = isHydrated || isRSCRouterContext ? [] : [...new Set(manifest.entry.imports.concat(getModuleLinkHrefs(matches, manifest, { includeHydrateFallback: true })))];
	let sri = typeof manifest.sri === "object" ? manifest.sri : {};
	warnOnce(!isRSCRouterContext, "The <Scripts /> element is a no-op when using RSC and can be safely removed.");
	return isHydrated || isRSCRouterContext ? null : /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, typeof manifest.sri === "object" ? /* @__PURE__ */ React$1.createElement("script", {
		...scriptProps,
		"rr-importmap": "",
		type: "importmap",
		suppressHydrationWarning: true,
		dangerouslySetInnerHTML: { __html: JSON.stringify({ integrity: sri }) }
	}) : null, !enableFogOfWar ? /* @__PURE__ */ React$1.createElement("link", {
		rel: "modulepreload",
		href: manifest.url,
		crossOrigin: scriptProps.crossOrigin,
		integrity: sri[manifest.url],
		nonce: scriptProps.nonce,
		suppressHydrationWarning: true
	}) : null, /* @__PURE__ */ React$1.createElement("link", {
		rel: "modulepreload",
		href: manifest.entry.module,
		crossOrigin: scriptProps.crossOrigin,
		integrity: sri[manifest.entry.module],
		nonce: scriptProps.nonce,
		suppressHydrationWarning: true
	}), preloads.map((path) => /* @__PURE__ */ React$1.createElement("link", {
		key: path,
		rel: "modulepreload",
		href: path,
		crossOrigin: scriptProps.crossOrigin,
		integrity: sri[path],
		nonce: scriptProps.nonce,
		suppressHydrationWarning: true
	})), initialScripts);
}
function mergeRefs(...refs) {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") ref(value);
			else if (ref != null) ref.current = value;
		});
	};
}
//#endregion



},
537(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  nq: () => (/* binding */ useCurrentRouteId),
  ek: () => (/* binding */ useDataRouterContext),
  hg: () => (/* binding */ useDataRouterData),
  CB: () => (/* binding */ useDataRouterState),
  $P: () => (/* binding */ useHref),
  Ri: () => (/* binding */ useInRouterContext),
  zy: () => (/* binding */ useLocation),
  FE: () => (/* binding */ useMatches),
  Zp: () => (/* binding */ useNavigate),
  cq: () => (/* binding */ useNavigation),
  x$: () => (/* binding */ useResolvedPath),
  Ye: () => (/* binding */ useRoutes),
  uG: () => (/* binding */ useRoutesImpl)
});

// UNUSED EXPORTS: _renderMatches, useActionData, useAsyncError, useAsyncValue, useBlocker, useDataRouterFetchers, useLoaderData, useMatch, useNavigationType, useOutlet, useOutletContext, useParams, useRevalidator, useRoute, useRouteError, useRouteLoaderData, useRouterState

// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/router/history.js
var router_history = __webpack_require__(470);
// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/router/utils.js
var utils = __webpack_require__(3907);
// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/router/navigation.js
var router_navigation = __webpack_require__(2582);
;// CONCATENATED MODULE: ./node_modules/react-router/dist/production/lib/router/router.js
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */







//#region lib/router/router.ts
const validMutationMethodsArr = [
	"POST",
	"PUT",
	"PATCH",
	"DELETE"
];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["GET", ...validMutationMethodsArr];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = new Set([
	301,
	302,
	303,
	307,
	308
]);
const redirectPreserveMethodStatusCodes = new Set([307, 308]);
const IDLE_NAVIGATION = (/* unused pure expression or super */ null && ({
	state: "idle",
	location: void 0,
	matches: void 0,
	historyAction: void 0,
	formMethod: void 0,
	formAction: void 0,
	formEncType: void 0,
	formData: void 0,
	json: void 0,
	text: void 0
}));
const IDLE_FETCHER = (/* unused pure expression or super */ null && ({
	state: "idle",
	data: void 0,
	formMethod: void 0,
	formAction: void 0,
	formEncType: void 0,
	formData: void 0,
	json: void 0,
	text: void 0
}));
const router_IDLE_BLOCKER = (/* unused pure expression or super */ null && ({
	state: "unblocked",
	proceed: void 0,
	reset: void 0,
	location: void 0
}));
const TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
const ResetLoaderDataSymbol = Symbol("ResetLoaderData");
function createDataRouteMatcher(future, basename) {
	if (future.unstable_routePatternMatching) {
		let RoutePatternMatcher = getRoutePatternMatcher();
		invariant(RoutePatternMatcher, "You must call unstable_preloadRoutePattern() from \"react-router/route-pattern\" before enabling future.unstable_routePatternMatching.");
		return new RoutePatternMatcher(basename);
	}
	return new V6RegExMatcher(basename);
}
/**
* Encapsulates the stable and in-flight route trees together with their
* pre-computed branch caches so the structures always stay in sync.
*/
var DataRoutes = class {
	#routes;
	#hmrRoutes;
	#matcher;
	constructor(routes, matcher) {
		this.#routes = routes;
		this.#matcher = matcher;
		this.#matcher.update(routes);
	}
	/** The stable route tree */
	get stableRoutes() {
		return this.#routes;
	}
	/** The in-flight route tree if one is active, otherwise the stable tree */
	get activeRoutes() {
		return this.#hmrRoutes ?? this.#routes;
	}
	get hasHMRRoutes() {
		return this.#hmrRoutes != null;
	}
	/** Replace the stable route tree and recompute its branches */
	setRoutes(routes) {
		this.#routes = routes;
		if (!this.#hmrRoutes) this.#matcher.update(routes);
	}
	/** Set a new in-flight route tree and recompute its branches */
	setHmrRoutes(routes) {
		this.#hmrRoutes = routes;
		this.#matcher.update(routes);
	}
	/** Commit in-flight routes/branches to the stable slot and clear in-flight */
	commitHmrRoutes() {
		if (this.#hmrRoutes) {
			this.#routes = this.#hmrRoutes;
			this.#hmrRoutes = void 0;
			this.#matcher.update(this.#routes);
		}
	}
};
const clientErrors = /* @__PURE__ */ (/* unused pure expression or super */ null && (new WeakMap()));
/**
* Create a router and listen to history POP navigations
*/
function createRouter(init) {
	const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : void 0;
	const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
	invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
	let hydrationRouteProperties = init.hydrationRouteProperties || [];
	let _mapRouteProperties = init.mapRouteProperties;
	let mapRouteProperties = _mapRouteProperties ? _mapRouteProperties : () => ({});
	if (init.instrumentations) {
		let instrumentations = init.instrumentations;
		mapRouteProperties = (route) => {
			return {
				..._mapRouteProperties?.(route),
				...getRouteInstrumentationUpdates(instrumentations.map((i) => i.route).filter(Boolean), route)
			};
		};
	}
	let future = { ...init.future };
	let basename = init.basename || "/";
	if (!basename.startsWith("/")) basename = `/${basename}`;
	let dataRouteMatcher = createDataRouteMatcher(future, basename);
	let manifest = {};
	let dataRoutes = new DataRoutes(convertRoutesToDataRoutes(init.routes, mapRouteProperties, void 0, manifest), dataRouteMatcher);
	let dataStrategyImpl = init.dataStrategy || defaultDataStrategyWithMiddleware;
	let unlistenHistory = null;
	let subscribers = /* @__PURE__ */ new Set();
	let savedScrollPositions = null;
	let getScrollRestorationKey = null;
	let getScrollPosition = null;
	let initialScrollRestored = init.hydrationData != null;
	let initialMatches = dataRouteMatcher.match(init.history.location);
	let initialMatchesIsFOW = false;
	let initialErrors = null;
	let initialized;
	let renderFallback;
	if (initialMatches == null && !init.patchRoutesOnNavigation) {
		let error = getInternalRouterError(404, { pathname: init.history.location.pathname });
		let { matches, route } = getShortCircuitMatches(dataRoutes.activeRoutes);
		initialized = true;
		renderFallback = !initialized;
		initialMatches = matches;
		initialErrors = { [route.id]: error };
	} else {
		if (initialMatches && !init.hydrationData) {
			if (checkFogOfWar(initialMatches, init.history.location.pathname).active) initialMatches = null;
		}
		if (!initialMatches) {
			initialized = false;
			renderFallback = !initialized;
			initialMatches = [];
			let fogOfWar = checkFogOfWar(null, init.history.location.pathname);
			if (fogOfWar.active && fogOfWar.matches) {
				initialMatchesIsFOW = true;
				initialMatches = fogOfWar.matches;
			}
		} else if (initialMatches.some((m) => m.route.lazy)) {
			initialized = false;
			renderFallback = !initialized;
		} else if (!initialMatches.some((m) => routeHasLoaderOrMiddleware(m.route))) {
			initialized = true;
			renderFallback = !initialized;
		} else {
			let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
			let errors = init.hydrationData ? init.hydrationData.errors : null;
			let relevantMatches = initialMatches;
			if (errors) {
				let idx = initialMatches.findIndex((m) => errors[m.route.id] !== void 0);
				relevantMatches = relevantMatches.slice(0, idx + 1);
			}
			renderFallback = false;
			initialized = true;
			relevantMatches.forEach((m) => {
				let status = getRouteHydrationStatus(m.route, loaderData, errors);
				renderFallback = renderFallback || status.renderFallback;
				initialized = initialized && !status.shouldLoad;
			});
		}
	}
	let router;
	let state = {
		historyAction: init.history.action,
		location: init.history.location,
		matches: initialMatches,
		initialized,
		renderFallback,
		navigation: IDLE_NAVIGATION,
		restoreScrollPosition: init.hydrationData != null ? false : null,
		preventScrollReset: false,
		revalidation: "idle",
		loaderData: init.hydrationData && init.hydrationData.loaderData || {},
		actionData: init.hydrationData && init.hydrationData.actionData || null,
		errors: init.hydrationData && init.hydrationData.errors || initialErrors,
		fetchers: /* @__PURE__ */ new Map(),
		blockers: /* @__PURE__ */ new Map()
	};
	let pendingAction = "POP";
	let pendingPopstateDelta = 0;
	let pendingDiscoveryCancellation;
	let pendingPopstateNavigationDfd = null;
	let pendingPreventScrollReset = false;
	let pendingNavigationController;
	let pendingViewTransitionEnabled = false;
	let appliedViewTransitions = /* @__PURE__ */ new Map();
	let removePageHideEventListener = null;
	let isUninterruptedRevalidation = false;
	let isRevalidationRequired = false;
	let cancelledFetcherLoads = /* @__PURE__ */ new Set();
	let fetchControllers = /* @__PURE__ */ new Map();
	let incrementingLoadId = 0;
	let pendingNavigationLoadId = -1;
	let fetchReloadIds = /* @__PURE__ */ new Map();
	let fetchRedirectIds = /* @__PURE__ */ new Set();
	let fetchLoadMatches = /* @__PURE__ */ new Map();
	let activeFetchers = /* @__PURE__ */ new Map();
	let fetchersQueuedForDeletion = /* @__PURE__ */ new Set();
	let blockerFunctions = /* @__PURE__ */ new Map();
	let unblockBlockerHistoryUpdate = void 0;
	let pendingRevalidationDfd = null;
	function initialize() {
		unlistenHistory = init.history.listen(({ action: historyAction, location, delta }) => {
			if (unblockBlockerHistoryUpdate) {
				unblockBlockerHistoryUpdate();
				unblockBlockerHistoryUpdate = void 0;
				return;
			}
			warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
			let blockerKey = shouldBlockNavigation({
				currentLocation: state.location,
				nextLocation: location,
				historyAction
			});
			if (blockerKey && delta != null) {
				let nextHistoryUpdatePromise = new Promise((resolve) => {
					unblockBlockerHistoryUpdate = resolve;
				});
				init.history.go(delta * -1);
				updateBlocker(blockerKey, {
					state: "blocked",
					location,
					proceed() {
						updateBlocker(blockerKey, {
							state: "proceeding",
							proceed: void 0,
							reset: void 0,
							location
						});
						nextHistoryUpdatePromise.then(() => init.history.go(delta));
					},
					reset() {
						let blockers = new Map(state.blockers);
						blockers.set(blockerKey, router_IDLE_BLOCKER);
						updateState({ blockers });
					}
				});
				pendingPopstateNavigationDfd?.resolve();
				pendingPopstateNavigationDfd = null;
				return;
			}
			if (future.unstable_customRouteDiscovery) pendingPopstateDelta += delta || 0;
			return startNavigation(historyAction, location);
		});
		if (isBrowser) {
			restoreAppliedTransitions(routerWindow, appliedViewTransitions);
			let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
			routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
			removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
		}
		if (!state.initialized) startNavigation("POP", state.location, { initialHydration: true });
		return router;
	}
	function dispose() {
		if (unlistenHistory) unlistenHistory();
		if (removePageHideEventListener) removePageHideEventListener();
		subscribers.clear();
		pendingNavigationController && pendingNavigationController.abort();
		state.fetchers.forEach((_, key) => deleteFetcher(state.fetchers, key));
		state.blockers.forEach((_, key) => deleteBlocker(key));
	}
	function subscribe(fn) {
		subscribers.add(fn);
		return () => subscribers.delete(fn);
	}
	function updateState(newState, opts = {}) {
		let newErrors = newState.errors ?? null;
		let cachedErrors = newErrors ? clientErrors.get(newErrors) : void 0;
		if (cachedErrors !== void 0) newErrors = cachedErrors;
		if (newState.errors !== void 0 || newState.initialized) {
			if (state.errors) clientErrors.delete(state.errors);
			if (newState.errors) clientErrors.set(newState.errors, newErrors);
		}
		if (newState.matches) newState.matches = newState.matches.map((m) => {
			let route = manifest[m.route.id];
			let matchRoute = m.route;
			if (matchRoute.element !== route.element || matchRoute.errorElement !== route.errorElement || matchRoute.hydrateFallbackElement !== route.hydrateFallbackElement) return {
				...m,
				route
			};
			return m;
		});
		state = {
			...state,
			...newState
		};
		let unmountedFetchers = [];
		let mountedFetchers = [];
		state.fetchers.forEach((fetcher, key) => {
			if (fetcher.state === "idle") if (fetchersQueuedForDeletion.has(key)) unmountedFetchers.push(key);
			else mountedFetchers.push(key);
		});
		fetchersQueuedForDeletion.forEach((key) => {
			if (!state.fetchers.has(key) && !fetchControllers.has(key)) unmountedFetchers.push(key);
		});
		[...subscribers].forEach((subscriber) => subscriber(state, {
			deletedFetchers: unmountedFetchers,
			newErrors,
			viewTransitionOpts: opts.viewTransitionOpts,
			flushSync: opts.flushSync === true
		}));
		unmountedFetchers.forEach((key) => deleteFetcher(state.fetchers, key));
		mountedFetchers.forEach((key) => state.fetchers.delete(key));
	}
	function completeNavigation(location, newState, { flushSync } = {}) {
		let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && location.state?._isRedirect !== true;
		let actionData;
		if (newState.actionData) if (Object.keys(newState.actionData).length > 0) actionData = newState.actionData;
		else actionData = null;
		else if (isActionReload) actionData = state.actionData;
		else actionData = null;
		let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
		let blockers = state.blockers;
		if (blockers.size > 0 && !isUninterruptedRevalidation) {
			blockers = new Map(blockers);
			blockers.forEach((_, k) => blockers.set(k, router_IDLE_BLOCKER));
		}
		let restoreScrollPosition = isUninterruptedRevalidation ? false : getSavedScrollPosition(location, newState.matches || state.matches);
		let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && location.state?._isRedirect !== true;
		dataRoutes.commitHmrRoutes();
		if (isUninterruptedRevalidation) {} else if (pendingAction === "POP") {} else if (pendingAction === "PUSH") init.history.push(location, location.state);
		else if (pendingAction === "REPLACE") init.history.replace(location, location.state);
		let viewTransitionOpts;
		if (pendingAction === "POP" && !isUninterruptedRevalidation && location !== state.location) {
			let priorPaths = appliedViewTransitions.get(state.location.pathname);
			if (priorPaths && priorPaths.has(location.pathname)) viewTransitionOpts = {
				currentLocation: state.location,
				nextLocation: location
			};
			else if (appliedViewTransitions.has(location.pathname)) viewTransitionOpts = {
				currentLocation: location,
				nextLocation: state.location
			};
		} else if (pendingViewTransitionEnabled) {
			let toPaths = appliedViewTransitions.get(state.location.pathname);
			if (toPaths) toPaths.add(location.pathname);
			else {
				toPaths = new Set([location.pathname]);
				appliedViewTransitions.set(state.location.pathname, toPaths);
			}
			viewTransitionOpts = {
				currentLocation: state.location,
				nextLocation: location
			};
		}
		updateState({
			...newState,
			actionData,
			loaderData,
			historyAction: pendingAction,
			location,
			initialized: true,
			renderFallback: false,
			navigation: IDLE_NAVIGATION,
			revalidation: "idle",
			restoreScrollPosition,
			preventScrollReset,
			blockers
		}, {
			viewTransitionOpts,
			flushSync: flushSync === true
		});
		resetPendingNavigation();
		pendingPopstateNavigationDfd?.resolve();
		pendingPopstateNavigationDfd = null;
		pendingRevalidationDfd?.resolve();
		pendingRevalidationDfd = null;
	}
	function resetPendingNavigation() {
		pendingPopstateDelta = 0;
		pendingAction = "POP";
		pendingPreventScrollReset = false;
		pendingViewTransitionEnabled = false;
		isUninterruptedRevalidation = false;
		isRevalidationRequired = fetchReloadIds.size > 0;
	}
	async function navigate(to, opts) {
		if (pendingDiscoveryCancellation) await pendingDiscoveryCancellation;
		pendingPopstateNavigationDfd?.resolve();
		pendingPopstateNavigationDfd = null;
		if (typeof to === "number") {
			if (!pendingPopstateNavigationDfd) pendingPopstateNavigationDfd = createDeferred();
			let promise = pendingPopstateNavigationDfd.promise;
			init.history.go(to);
			return promise;
		}
		let instrumentationNavigateMetaReceiver = consumeInstrumentationClientResultMetaReceiver(router);
		let { path, submission, error } = normalizeNavigateOptions(false, normalizeTo(state.location, state.matches, basename, to, opts?.fromRouteId, opts?.relative), opts);
		let maskPath;
		if (opts?.mask) {
			let partialPath = typeof opts.mask === "string" ? parsePath(opts.mask) : {
				...state.location.mask,
				...opts.mask
			};
			maskPath = {
				pathname: partialPath.pathname ?? "",
				search: partialPath.search ?? "",
				hash: partialPath.hash ?? ""
			};
			if (PROTOCOL_RELATIVE_URL_REGEX.test(maskPath.pathname)) throw new Error("External navigation is not allowed");
			else if (maskPath.pathname.startsWith("\\")) maskPath.pathname = maskPath.pathname.replace(/^\\+/, "/");
			validateNavigationTarget(typeof opts.mask === "string" ? opts.mask : createPath(opts.mask), createPath(maskPath), init.history.createURL("/"), "reject");
		}
		let currentLocation = state.location;
		let nextLocation = createLocation(currentLocation, path, opts && opts.state, void 0, maskPath);
		nextLocation = {
			...nextLocation,
			...init.history.encodeLocation(nextLocation)
		};
		validateNavigationTarget(to == null ? init.history.createHref(state.location) : typeof to === "string" ? to : createPath(to), init.history.createHref(nextLocation.mask || nextLocation), init.history.createURL("/"), "reject");
		let userReplace = opts && opts.replace != null ? opts.replace : void 0;
		let historyAction = "PUSH";
		let currentPath = state.location.pathname + state.location.search;
		if (userReplace === true) historyAction = "REPLACE";
		else if (userReplace === false) {} else if (submission != null && isMutationMethod(submission.formMethod) && (submission.formAction === currentPath || nextLocation.pathname + nextLocation.search === currentPath)) historyAction = "REPLACE";
		let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : void 0;
		let flushSync = (opts && opts.flushSync) === true;
		let blockerKey = shouldBlockNavigation({
			currentLocation,
			nextLocation,
			historyAction
		});
		if (blockerKey) {
			updateBlocker(blockerKey, {
				state: "blocked",
				location: nextLocation,
				proceed() {
					updateBlocker(blockerKey, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: nextLocation
					});
					navigate(to, opts);
				},
				reset() {
					let blockers = new Map(state.blockers);
					blockers.set(blockerKey, router_IDLE_BLOCKER);
					updateState({ blockers });
				}
			});
			return;
		}
		await startNavigation(historyAction, nextLocation, {
			submission,
			pendingError: error,
			preventScrollReset,
			replace: opts && opts.replace,
			enableViewTransition: opts && opts.viewTransition,
			flushSync,
			callSiteDefaultShouldRevalidate: opts && opts.defaultShouldRevalidate,
			instrumentationNavigateMetaReceiver
		});
	}
	function revalidate() {
		if (pendingDiscoveryCancellation) return pendingDiscoveryCancellation.then(revalidate);
		if (!pendingRevalidationDfd) pendingRevalidationDfd = createDeferred();
		interruptActiveLoads();
		updateState({ revalidation: "loading" });
		let promise = pendingRevalidationDfd.promise;
		if (state.navigation.state === "submitting") return promise;
		if (state.navigation.state === "idle") {
			startNavigation(state.historyAction, state.location, {
				startUninterruptedRevalidation: true,
				dataStrategyInitiator: "revalidation"
			});
			return promise;
		}
		startNavigation(pendingAction || state.historyAction, state.navigation.location, {
			overrideNavigation: state.navigation,
			dataStrategyInitiator: "revalidation",
			enableViewTransition: pendingViewTransitionEnabled === true
		});
		return promise;
	}
	async function startNavigation(historyAction, location, opts) {
		if (pendingDiscoveryCancellation) await pendingDiscoveryCancellation;
		pendingNavigationController && pendingNavigationController.abort();
		pendingNavigationController = null;
		pendingAction = historyAction;
		isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
		saveScrollPosition(state.location, state.matches);
		pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
		pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
		let matches = opts?.initialHydration && state.matches && state.matches.length > 0 && !initialMatchesIsFOW ? state.matches : dataRouteMatcher.match(location);
		let flushSync = (opts && opts.flushSync) === true;
		if (matches && state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
			completeNavigation(location, { matches }, { flushSync });
			return;
		}
		let fogOfWar = checkFogOfWar(matches, location.pathname);
		if (fogOfWar.active && fogOfWar.matches) matches = fogOfWar.matches;
		if (opts?.instrumentationNavigateMetaReceiver) {
			let meta = getInstrumentationNavigateMeta(init.history, location, matches);
			opts.instrumentationNavigateMetaReceiver(meta);
		}
		if (!matches) {
			let { error, notFoundMatches, route } = handleNavigational404(location.pathname);
			completeNavigation(location, {
				matches: notFoundMatches,
				loaderData: {},
				errors: { [route.id]: error }
			}, { flushSync });
			return;
		}
		let loadingNavigation = opts && opts.overrideNavigation ? {
			...opts.overrideNavigation,
			matches,
			historyAction
		} : void 0;
		pendingNavigationController = new AbortController();
		let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
		let dataStrategyInitiator = opts?.initialHydration ? "initialization" : opts?.dataStrategyInitiator ?? "navigation";
		let scopedContext = init.getContext ? await init.getContext() : new RouterContextProvider();
		let pendingActionResult;
		if (opts && opts.pendingError) pendingActionResult = [findNearestBoundary(matches).route.id, {
			type: "error",
			error: opts.pendingError
		}];
		else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
			let actionResult = await handleAction(request, dataStrategyInitiator, location, opts.submission, matches, historyAction, scopedContext, fogOfWar.active, opts && opts.initialHydration === true, {
				replace: opts.replace,
				flushSync
			});
			if (actionResult.shortCircuited) return;
			if (actionResult.pendingActionResult) {
				let [routeId, result] = actionResult.pendingActionResult;
				if (isErrorResult(result) && isRouteErrorResponse(result.error) && result.error.status === 404) {
					pendingNavigationController = null;
					completeNavigation(location, {
						matches: actionResult.matches,
						loaderData: {},
						errors: { [routeId]: result.error }
					});
					return;
				}
			}
			matches = actionResult.matches || matches;
			pendingActionResult = actionResult.pendingActionResult;
			loadingNavigation = getLoadingNavigation(location, matches, historyAction, opts.submission);
			flushSync = false;
			fogOfWar.active = false;
			request = createClientSideRequest(init.history, request.url, request.signal);
		}
		let { shortCircuited, matches: updatedMatches, loaderData, errors, workingFetchers } = await handleLoaders(request, dataStrategyInitiator, location, matches, historyAction, scopedContext, fogOfWar.active, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionResult, opts && opts.callSiteDefaultShouldRevalidate);
		if (shortCircuited) return;
		pendingNavigationController = null;
		completeNavigation(location, {
			matches: updatedMatches || matches,
			...getActionDataForCommit(pendingActionResult),
			loaderData,
			errors,
			...workingFetchers ? { fetchers: workingFetchers } : {}
		});
	}
	function cancelDiscoveryNavigation() {
		let cancellation = createDeferred();
		pendingDiscoveryCancellation = cancellation.promise;
		let delta = pendingPopstateDelta;
		let popstateNavigationDfd = pendingPopstateNavigationDfd;
		pendingPopstateNavigationDfd = null;
		pendingNavigationController?.abort();
		pendingNavigationController = null;
		resetPendingNavigation();
		pendingRevalidationDfd?.resolve();
		pendingRevalidationDfd = null;
		let blockers = new Map(state.blockers);
		blockers.forEach((blocker, key) => {
			if (blocker.state === "proceeding") blockers.set(key, router_IDLE_BLOCKER);
		});
		let fetchers = new Map(state.fetchers);
		let didUpdateFetchers = markFetchRedirectsDone(fetchers);
		fetchers.forEach((fetcher, key) => {
			if (fetcher.state === "loading" && !fetchControllers.has(key)) {
				fetchers.set(key, getDoneFetcher(fetcher.data));
				didUpdateFetchers = true;
			}
		});
		cancelledFetcherLoads.clear();
		updateState({
			navigation: IDLE_NAVIGATION,
			revalidation: "idle",
			blockers,
			...didUpdateFetchers ? { fetchers } : {}
		});
		function finishCancellation() {
			pendingDiscoveryCancellation = void 0;
			popstateNavigationDfd?.resolve();
			cancellation.resolve();
		}
		if (delta) {
			unblockBlockerHistoryUpdate = finishCancellation;
			init.history.go(-delta);
		} else finishCancellation();
		return cancellation.promise;
	}
	async function handleAction(request, dataStrategyInitiator, location, submission, matches, historyAction, scopedContext, isFogOfWar, initialHydration, opts = {}) {
		if (!future.unstable_customRouteDiscovery) interruptActiveLoads();
		updateState({ navigation: getSubmittingNavigation(location, matches, historyAction, submission) }, { flushSync: opts.flushSync === true });
		if (isFogOfWar) {
			let discoverResult = await discoverRoutes(matches, location.pathname, request.signal);
			if (future.unstable_customRouteDiscovery && request.signal.aborted || discoverResult.type === "aborted") return { shortCircuited: true };
			else if (discoverResult.type === "cancelled") {
				await cancelDiscoveryNavigation();
				return { shortCircuited: true };
			} else if (discoverResult.type === "error") {
				if (discoverResult.partialMatches.length === 0) {
					let { matches, route } = getShortCircuitMatches(dataRoutes.activeRoutes);
					return {
						matches,
						pendingActionResult: [route.id, {
							type: "error",
							error: discoverResult.error
						}]
					};
				}
				let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
				return {
					matches: discoverResult.partialMatches,
					pendingActionResult: [boundaryId, {
						type: "error",
						error: discoverResult.error
					}]
				};
			} else if (!discoverResult.matches) {
				let { notFoundMatches, error, route } = handleNavigational404(location.pathname);
				return {
					matches: notFoundMatches,
					pendingActionResult: [route.id, {
						type: "error",
						error
					}]
				};
			} else matches = discoverResult.matches;
		}
		if (future.unstable_customRouteDiscovery) interruptActiveLoads();
		let result;
		let actionMatch = getTargetMatch(matches, location);
		if (!actionMatch.route.action && !actionMatch.route.lazy) result = {
			type: "error",
			error: getInternalRouterError(405, {
				method: request.method,
				pathname: location.pathname,
				routeId: actionMatch.route.id
			})
		};
		else {
			let results = await callDataStrategy(request, location, getTargetedDataStrategyMatches(mapRouteProperties, manifest, request, location, matches, actionMatch, initialHydration ? [] : hydrationRouteProperties, scopedContext), scopedContext, null, dataStrategyInitiator, historyAction);
			result = results[actionMatch.route.id];
			if (!result) {
				for (let match of matches) if (results[match.route.id]) {
					result = results[match.route.id];
					break;
				}
			}
			if (request.signal.aborted) return { shortCircuited: true };
		}
		if (isRedirectResult(result)) {
			let replace;
			if (opts && opts.replace != null) replace = opts.replace;
			else replace = normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename, init.history) === state.location.pathname + state.location.search;
			await startRedirectNavigation(request, result, true, dataStrategyInitiator, {
				submission,
				replace
			});
			return { shortCircuited: true };
		}
		if (isErrorResult(result)) {
			let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
			if ((opts && opts.replace) !== true) pendingAction = "PUSH";
			return {
				matches,
				pendingActionResult: [
					boundaryMatch.route.id,
					result,
					actionMatch.route.id
				]
			};
		}
		return {
			matches,
			pendingActionResult: [actionMatch.route.id, result]
		};
	}
	async function handleLoaders(request, dataStrategyInitiator, location, matches, historyAction, scopedContext, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace, initialHydration, flushSync, pendingActionResult, callSiteDefaultShouldRevalidate) {
		let loadingNavigation = overrideNavigation || getLoadingNavigation(location, matches, historyAction, submission);
		let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
		let shouldUpdateNavigationState = !isUninterruptedRevalidation && !initialHydration;
		if (isFogOfWar) {
			if (shouldUpdateNavigationState) {
				let actionData = getUpdatedActionData(pendingActionResult);
				updateState({
					navigation: loadingNavigation,
					...actionData !== void 0 ? { actionData } : {}
				}, { flushSync });
			}
			let discoverResult = await discoverRoutes(matches, location.pathname, request.signal);
			if (future.unstable_customRouteDiscovery && request.signal.aborted || discoverResult.type === "aborted") return { shortCircuited: true };
			else if (discoverResult.type === "cancelled") {
				await cancelDiscoveryNavigation();
				return { shortCircuited: true };
			} else if (discoverResult.type === "error") {
				if (discoverResult.partialMatches.length === 0) {
					let { matches, route } = getShortCircuitMatches(dataRoutes.activeRoutes);
					return {
						matches,
						loaderData: {},
						errors: { [route.id]: discoverResult.error }
					};
				}
				let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
				return {
					matches: discoverResult.partialMatches,
					loaderData: {},
					errors: { [boundaryId]: discoverResult.error }
				};
			} else if (!discoverResult.matches) {
				let { error, notFoundMatches, route } = handleNavigational404(location.pathname);
				return {
					matches: notFoundMatches,
					loaderData: {},
					errors: { [route.id]: error }
				};
			} else {
				matches = discoverResult.matches;
				if (initialHydration && !request.signal.aborted) updateState({ matches });
			}
		}
		let { dsMatches, revalidatingFetchers } = getMatchesToLoad(request, scopedContext, mapRouteProperties, manifest, init.history, state, matches, activeSubmission, location, initialHydration ? [] : hydrationRouteProperties, initialHydration === true, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, dataRouteMatcher, pendingActionResult, callSiteDefaultShouldRevalidate);
		pendingNavigationLoadId = ++incrementingLoadId;
		if (!init.dataStrategy && !dsMatches.some((m) => m.shouldLoad) && !dsMatches.some((m) => m.route.middleware && m.route.middleware.length > 0) && revalidatingFetchers.length === 0) {
			let workingFetchers = new Map(state.fetchers);
			let didUpdateFetcherRedirects = markFetchRedirectsDone(workingFetchers);
			completeNavigation(location, {
				matches,
				loaderData: {},
				errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? { [pendingActionResult[0]]: pendingActionResult[1].error } : null,
				...getActionDataForCommit(pendingActionResult),
				...didUpdateFetcherRedirects ? { fetchers: workingFetchers } : {}
			}, { flushSync });
			return { shortCircuited: true };
		}
		if (shouldUpdateNavigationState) {
			let updates = {};
			if (!isFogOfWar) {
				updates.navigation = loadingNavigation;
				let actionData = getUpdatedActionData(pendingActionResult);
				if (actionData !== void 0) updates.actionData = actionData;
			}
			if (revalidatingFetchers.length > 0) updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
			updateState(updates, { flushSync });
		}
		revalidatingFetchers.forEach((rf) => {
			abortFetcher(rf.key);
			if (rf.controller) fetchControllers.set(rf.key, rf.controller);
		});
		let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((rf) => {
			if (fetchControllers.get(rf.key) === rf.controller) abortFetcher(rf.key);
		});
		if (pendingNavigationController) pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
		let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(dsMatches, revalidatingFetchers, request, location, scopedContext, dataStrategyInitiator, historyAction);
		if (request.signal.aborted) return { shortCircuited: true };
		if (pendingNavigationController) pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
		revalidatingFetchers.forEach((rf) => {
			if (fetchControllers.get(rf.key) === rf.controller) fetchControllers.delete(rf.key);
		});
		let redirect = findRedirect(loaderResults);
		if (redirect) {
			await startRedirectNavigation(request, redirect.result, true, dataStrategyInitiator, { replace });
			return { shortCircuited: true };
		}
		redirect = findRedirect(fetcherResults);
		if (redirect) {
			fetchRedirectIds.add(redirect.key);
			await startRedirectNavigation(request, redirect.result, true, dataStrategyInitiator, { replace });
			return { shortCircuited: true };
		}
		let workingFetchers = new Map(state.fetchers);
		let { loaderData, errors } = processLoaderData(state, matches, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults, workingFetchers);
		if (initialHydration && state.errors) {
			let newClientErrors = errors ?? null;
			errors = {
				...state.errors,
				...errors
			};
			clientErrors.set(errors, newClientErrors);
		}
		let didUpdateFetcherRedirects = markFetchRedirectsDone(workingFetchers);
		let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId, workingFetchers);
		let shouldUpdateFetchers = didUpdateFetcherRedirects || didAbortFetchLoads || revalidatingFetchers.length > 0;
		return {
			matches,
			loaderData,
			errors,
			...shouldUpdateFetchers ? { workingFetchers } : {}
		};
	}
	function getUpdatedActionData(pendingActionResult) {
		if (pendingActionResult && !isErrorResult(pendingActionResult[1])) return { [pendingActionResult[0]]: pendingActionResult[1].data };
		else if (state.actionData) if (Object.keys(state.actionData).length === 0) return null;
		else return state.actionData;
	}
	function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
		let workingFetchers = new Map(state.fetchers);
		revalidatingFetchers.forEach((rf) => {
			let fetcher = workingFetchers.get(rf.key);
			let revalidatingFetcher = getLoadingFetcher(void 0, fetcher ? fetcher.data : void 0);
			workingFetchers.set(rf.key, revalidatingFetcher);
		});
		return workingFetchers;
	}
	async function fetch(key, routeId, href, opts) {
		if (pendingDiscoveryCancellation) await pendingDiscoveryCancellation;
		abortFetcher(key);
		let flushSync = (opts && opts.flushSync) === true;
		let instrumentationResultMetaReceiver = consumeInstrumentationClientResultMetaReceiver(router);
		let normalizedPath = normalizeTo(state.location, state.matches, basename, href, routeId, opts?.relative);
		let matches = dataRouteMatcher.match(normalizedPath);
		let fogOfWar = checkFogOfWar(matches, normalizedPath);
		if (fogOfWar.active && fogOfWar.matches) matches = fogOfWar.matches;
		if (instrumentationResultMetaReceiver) instrumentationResultMetaReceiver(getInstrumentationNavigateMeta(init.history, normalizedPath, matches));
		if (!matches) {
			setFetcherError(key, routeId, getInternalRouterError(404, { pathname: normalizedPath }), { flushSync });
			return;
		}
		let { path, submission, error } = normalizeNavigateOptions(true, normalizedPath, opts);
		if (error) {
			setFetcherError(key, routeId, error, { flushSync });
			return;
		}
		let scopedContext = init.getContext ? await init.getContext() : new RouterContextProvider();
		let preventScrollReset = (opts && opts.preventScrollReset) === true;
		if (submission && isMutationMethod(submission.formMethod)) {
			await handleFetcherAction(key, routeId, path, matches, scopedContext, fogOfWar.active, flushSync, preventScrollReset, submission, opts && opts.defaultShouldRevalidate);
			return;
		}
		let loadMatch = {
			routeId,
			path,
			isDiscovering: fogOfWar.active
		};
		fetchLoadMatches.set(key, loadMatch);
		await handleFetcherLoader(key, loadMatch, matches, scopedContext, flushSync, preventScrollReset, submission);
	}
	async function handleFetcherAction(key, routeId, path, requestMatches, scopedContext, isFogOfWar, flushSync, preventScrollReset, submission, callSiteDefaultShouldRevalidate) {
		if (!future.unstable_customRouteDiscovery) interruptActiveLoads();
		fetchLoadMatches.delete(key);
		let existingFetcher = state.fetchers.get(key);
		updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), { flushSync });
		let abortController = new AbortController();
		if (future.unstable_customRouteDiscovery) fetchControllers.set(key, abortController);
		let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
		if (isFogOfWar) {
			let discoverResult = await discoverRoutes(requestMatches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
			if (future.unstable_customRouteDiscovery && fetchRequest.signal.aborted || discoverResult.type === "aborted") return;
			else if (discoverResult.type === "cancelled") {
				fetchControllers.delete(key);
				fetchLoadMatches.delete(key);
				updateFetcherState(key, getDoneFetcher(existingFetcher?.data), { flushSync });
				return;
			} else if (discoverResult.type === "error") {
				setFetcherError(key, routeId, discoverResult.error, { flushSync });
				return;
			} else if (!discoverResult.matches) {
				setFetcherError(key, routeId, getInternalRouterError(404, { pathname: path }), { flushSync });
				return;
			} else requestMatches = discoverResult.matches;
		}
		let match = getTargetMatch(requestMatches, path);
		if (!match.route.action && !match.route.lazy) {
			setFetcherError(key, routeId, getInternalRouterError(405, {
				method: submission.formMethod,
				pathname: path,
				routeId
			}), { flushSync });
			return;
		}
		if (future.unstable_customRouteDiscovery) interruptActiveLoads();
		fetchControllers.set(key, abortController);
		let originatingLoadId = incrementingLoadId;
		let fetchMatches = getTargetedDataStrategyMatches(mapRouteProperties, manifest, fetchRequest, path, requestMatches, match, hydrationRouteProperties, scopedContext);
		let actionResults = await callDataStrategy(fetchRequest, path, fetchMatches, scopedContext, key, "fetcher");
		let actionResult = actionResults[match.route.id];
		if (!actionResult) {
			for (let match of fetchMatches) if (actionResults[match.route.id]) {
				actionResult = actionResults[match.route.id];
				break;
			}
		}
		if (fetchRequest.signal.aborted) {
			if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
			return;
		}
		if (fetchersQueuedForDeletion.has(key)) {
			if (isErrorResult(actionResult)) {
				updateFetcherState(key, getDoneFetcher(void 0));
				return;
			}
			if (isRedirectResult(actionResult)) {
				isRevalidationRequired = true;
				actionResult = {
					type: "data",
					data: void 0
				};
			}
		} else {
			if (isRedirectResult(actionResult)) if (pendingNavigationLoadId > originatingLoadId) {
				isRevalidationRequired = true;
				actionResult = {
					type: "data",
					data: void 0
				};
			} else {
				fetchControllers.delete(key);
				fetchRedirectIds.add(key);
				updateFetcherState(key, getLoadingFetcher(submission));
				return startRedirectNavigation(fetchRequest, actionResult, false, "fetcher", {
					fetcherSubmission: submission,
					preventScrollReset
				});
			}
			if (isErrorResult(actionResult)) {
				setFetcherError(key, routeId, actionResult.error);
				return;
			}
		}
		isRevalidationRequired = true;
		let nextLocation = state.navigation.location || state.location;
		let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
		let matches = state.navigation.state !== "idle" ? dataRouteMatcher.match(state.navigation.location) : state.matches;
		invariant(matches, "Didn't find any matches after fetcher action");
		let loadId = ++incrementingLoadId;
		fetchReloadIds.set(key, loadId);
		let { dsMatches, revalidatingFetchers } = getMatchesToLoad(revalidationRequest, scopedContext, mapRouteProperties, manifest, init.history, state, matches, submission, nextLocation, hydrationRouteProperties, false, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, dataRouteMatcher, [match.route.id, actionResult], callSiteDefaultShouldRevalidate);
		let loadFetcher = getLoadingFetcher(submission, actionResult.data);
		let workingFetchers = new Map(state.fetchers);
		workingFetchers.set(key, loadFetcher);
		revalidatingFetchers.filter((rf) => rf.key !== key).forEach((rf) => {
			let staleKey = rf.key;
			let existingFetcher = workingFetchers.get(staleKey);
			let revalidatingFetcher = getLoadingFetcher(void 0, existingFetcher ? existingFetcher.data : void 0);
			workingFetchers.set(staleKey, revalidatingFetcher);
			abortFetcher(staleKey);
			if (rf.controller) fetchControllers.set(staleKey, rf.controller);
		});
		updateState({ fetchers: workingFetchers });
		let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((rf) => {
			if (fetchControllers.get(rf.key) === rf.controller) abortFetcher(rf.key);
		});
		abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
		let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(dsMatches, revalidatingFetchers, revalidationRequest, nextLocation, scopedContext, "fetcher");
		if (abortController.signal.aborted) {
			if (fetchReloadIds.get(key) === loadId) fetchReloadIds.delete(key);
			return;
		}
		abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
		fetchReloadIds.delete(key);
		fetchControllers.delete(key);
		revalidatingFetchers.forEach((r) => {
			if (fetchControllers.get(r.key) === r.controller) fetchControllers.delete(r.key);
		});
		let fetcherIsMounted = state.fetchers.has(key);
		let getRedirectStateWithDoneFetcher = (s) => {
			if (!fetcherIsMounted) return s;
			let workingFetchers = new Map(s.fetchers);
			workingFetchers.set(key, getDoneFetcher(actionResult.data));
			return {
				...s,
				fetchers: workingFetchers
			};
		};
		let redirect = findRedirect(loaderResults);
		if (redirect) {
			state = getRedirectStateWithDoneFetcher(state);
			return startRedirectNavigation(revalidationRequest, redirect.result, false, "fetcher", { preventScrollReset });
		}
		redirect = findRedirect(fetcherResults);
		if (redirect) {
			fetchRedirectIds.add(redirect.key);
			state = getRedirectStateWithDoneFetcher(state);
			return startRedirectNavigation(revalidationRequest, redirect.result, false, "fetcher", { preventScrollReset });
		}
		let finalFetchers = new Map(state.fetchers);
		if (fetcherIsMounted) finalFetchers.set(key, getDoneFetcher(actionResult.data));
		let { loaderData, errors } = processLoaderData(state, matches, loaderResults, void 0, revalidatingFetchers, fetcherResults, finalFetchers);
		abortStaleFetchLoads(loadId, finalFetchers);
		if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
			invariant(pendingAction, "Expected pending action");
			pendingNavigationController && pendingNavigationController.abort();
			markFetchRedirectsDone(finalFetchers);
			completeNavigation(state.navigation.location, {
				matches,
				loaderData,
				errors,
				fetchers: finalFetchers
			});
		} else {
			updateState({
				errors,
				loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
				fetchers: finalFetchers
			});
			isRevalidationRequired = fetchReloadIds.size > 0;
		}
	}
	async function handleFetcherLoader(key, loadMatch, matches, scopedContext, flushSync, preventScrollReset, submission) {
		let { routeId, path } = loadMatch;
		let existingFetcher = state.fetchers.get(key);
		updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : void 0), { flushSync });
		let abortController = new AbortController();
		if (future.unstable_customRouteDiscovery) fetchControllers.set(key, abortController);
		let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
		if (loadMatch.isDiscovering) {
			let discoverResult = await discoverRoutes(matches, new URL(fetchRequest.url).pathname, fetchRequest.signal, key);
			if (future.unstable_customRouteDiscovery && fetchRequest.signal.aborted || discoverResult.type === "aborted") return;
			else if (discoverResult.type === "cancelled") {
				fetchControllers.delete(key);
				fetchLoadMatches.delete(key);
				updateFetcherState(key, getDoneFetcher(existingFetcher?.data), { flushSync });
				return;
			} else if (discoverResult.type === "error") {
				setFetcherError(key, routeId, discoverResult.error, { flushSync });
				return;
			} else if (!discoverResult.matches) {
				setFetcherError(key, routeId, getInternalRouterError(404, { pathname: path }), { flushSync });
				return;
			} else {
				matches = discoverResult.matches;
				loadMatch.isDiscovering = false;
			}
		}
		let match = getTargetMatch(matches, path);
		fetchControllers.set(key, abortController);
		let originatingLoadId = incrementingLoadId;
		let results = await callDataStrategy(fetchRequest, path, getTargetedDataStrategyMatches(mapRouteProperties, manifest, fetchRequest, path, matches, match, hydrationRouteProperties, scopedContext), scopedContext, key, "fetcher");
		let result = results[match.route.id];
		if (!result) {
			for (let match of matches) if (results[match.route.id]) {
				result = results[match.route.id];
				break;
			}
		}
		if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
		if (fetchRequest.signal.aborted) return;
		if (fetchersQueuedForDeletion.has(key)) {
			updateFetcherState(key, getDoneFetcher(void 0));
			return;
		}
		if (isRedirectResult(result)) if (pendingNavigationLoadId > originatingLoadId) {
			updateFetcherState(key, getDoneFetcher(void 0));
			return;
		} else {
			fetchRedirectIds.add(key);
			await startRedirectNavigation(fetchRequest, result, false, "fetcher", { preventScrollReset });
			return;
		}
		if (isErrorResult(result)) {
			setFetcherError(key, routeId, result.error);
			return;
		}
		updateFetcherState(key, getDoneFetcher(result.data));
	}
	/**
	* Utility function to handle redirects returned from an action or loader.
	* Normally, a redirect "replaces" the navigation that triggered it.  So, for
	* example:
	*
	*  - user is on /a
	*  - user clicks a link to /b
	*  - loader for /b redirects to /c
	*
	* In a non-JS app the browser would track the in-flight navigation to /b and
	* then replace it with /c when it encountered the redirect response.  In
	* the end it would only ever update the URL bar with /c.
	*
	* In client-side routing using pushState/replaceState, we aim to emulate
	* this behavior and we also do not update history until the end of the
	* navigation (including processed redirects).  This means that we never
	* actually touch history until we've processed redirects, so we just use
	* the history action from the original navigation (PUSH or REPLACE).
	*/
	async function startRedirectNavigation(request, redirect, isNavigation, dataStrategyInitiator, { submission, fetcherSubmission, preventScrollReset, replace } = {}) {
		if (!isNavigation) {
			pendingPopstateNavigationDfd?.resolve();
			pendingPopstateNavigationDfd = null;
		}
		if (redirect.response.headers.has("X-Remix-Revalidate")) isRevalidationRequired = true;
		let location = redirect.response.headers.get("Location");
		invariant(location, "Expected a Location header on the redirect Response");
		let originalLocation = location;
		let currentUrl = new URL(request.url);
		location = normalizeRedirectLocation(location, currentUrl, basename, init.history);
		validateNavigationTarget(originalLocation, location, currentUrl, "allow-explicit");
		let redirectLocation = createLocation(state.location, location, { _isRedirect: true });
		if (isBrowser) {
			let isDocumentReload = false;
			if (redirect.response.headers.has("X-Remix-Reload-Document")) isDocumentReload = true;
			else if (isAbsoluteUrl(location)) {
				const url = createBrowserURLImpl(routerWindow, location, true);
				isDocumentReload = url.origin !== routerWindow.location.origin || stripBasename(url.pathname, basename) == null;
			}
			if (isDocumentReload) {
				if (replace) routerWindow.location.replace(location);
				else routerWindow.location.assign(location);
				return;
			}
		}
		pendingNavigationController = null;
		let redirectNavigationType = replace === true || redirect.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH";
		let { formMethod, formAction, formEncType } = state.navigation;
		if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) submission = getSubmissionFromNavigation(state.navigation);
		let activeSubmission = submission || fetcherSubmission;
		if (redirectPreserveMethodStatusCodes.has(redirect.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) await startNavigation(redirectNavigationType, redirectLocation, {
			submission: {
				...activeSubmission,
				formAction: location
			},
			preventScrollReset: preventScrollReset || pendingPreventScrollReset,
			enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0,
			dataStrategyInitiator
		});
		else await startNavigation(redirectNavigationType, redirectLocation, {
			overrideNavigation: getLoadingNavigation(redirectLocation, [], redirectNavigationType, submission),
			fetcherSubmission,
			preventScrollReset: preventScrollReset || pendingPreventScrollReset,
			enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0,
			dataStrategyInitiator
		});
	}
	async function callDataStrategy(request, path, matches, scopedContext, fetcherKey, initiator, navigationType = null) {
		let results;
		let dataResults = {};
		try {
			results = await callDataStrategyImpl(dataStrategyImpl, request, path, matches, fetcherKey, initiator, scopedContext, false, navigationType);
		} catch (e) {
			matches.filter((m) => m.shouldLoad).forEach((m) => {
				dataResults[m.route.id] = {
					type: "error",
					error: e
				};
			});
			return dataResults;
		}
		if (request.signal.aborted) return dataResults;
		if (!isMutationMethod(request.method)) for (let match of matches) {
			if (results[match.route.id]?.type === "error") break;
			if (!results.hasOwnProperty(match.route.id) && !state.loaderData.hasOwnProperty(match.route.id) && (!state.errors || !state.errors.hasOwnProperty(match.route.id)) && match.shouldCallHandler()) results[match.route.id] = {
				type: "error",
				result: /* @__PURE__ */ new Error(`No result returned from dataStrategy for route ${match.route.id}`)
			};
		}
		for (let [routeId, result] of Object.entries(results)) if (isRedirectDataStrategyResult(result)) {
			let response = result.result;
			dataResults[routeId] = {
				type: "redirect",
				response: normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename)
			};
		} else dataResults[routeId] = await convertDataStrategyResultToDataResult(result);
		return dataResults;
	}
	async function callLoadersAndMaybeResolveData(matches, fetchersToLoad, request, location, scopedContext, initiator, navigationType = null) {
		let loaderResultsPromise = callDataStrategy(request, location, matches, scopedContext, null, initiator, navigationType);
		let fetcherResultsPromise = Promise.all(fetchersToLoad.map(async (f) => {
			if (f.matches && f.match && f.request && f.controller) {
				let result = (await callDataStrategy(f.request, f.path, f.matches, scopedContext, f.key, initiator, navigationType))[f.match.route.id];
				return { [f.key]: result };
			} else return Promise.resolve({ [f.key]: {
				type: "error",
				error: getInternalRouterError(404, { pathname: f.path })
			} });
		}));
		return {
			loaderResults: await loaderResultsPromise,
			fetcherResults: (await fetcherResultsPromise).reduce((acc, r) => Object.assign(acc, r), {})
		};
	}
	function interruptActiveLoads() {
		isRevalidationRequired = true;
		fetchLoadMatches.forEach((loadMatch, key) => {
			if (future.unstable_customRouteDiscovery && loadMatch.isDiscovering) return;
			if (fetchControllers.has(key)) cancelledFetcherLoads.add(key);
			abortFetcher(key);
		});
	}
	function updateFetcherState(key, fetcher, opts = {}) {
		let workingFetchers = new Map(state.fetchers);
		workingFetchers.set(key, fetcher);
		updateState({ fetchers: workingFetchers }, { flushSync: (opts && opts.flushSync) === true });
	}
	function setFetcherError(key, routeId, error, opts = {}) {
		let boundaryMatch = findNearestBoundary(state.matches, routeId);
		let workingFetchers = new Map(state.fetchers);
		deleteFetcher(workingFetchers, key);
		updateState({
			errors: { [boundaryMatch.route.id]: error },
			fetchers: workingFetchers
		}, { flushSync: (opts && opts.flushSync) === true });
	}
	function getFetcher(key) {
		activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
		if (fetchersQueuedForDeletion.has(key)) fetchersQueuedForDeletion.delete(key);
		return state.fetchers.get(key) || IDLE_FETCHER;
	}
	function resetFetcher(key, opts) {
		abortFetcher(key, opts?.reason);
		fetchLoadMatches.delete(key);
		cancelledFetcherLoads.delete(key);
		updateFetcherState(key, getDoneFetcher(null));
	}
	function deleteFetcher(fetchers, key) {
		let fetcher = state.fetchers.get(key);
		if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) abortFetcher(key);
		fetchLoadMatches.delete(key);
		fetchReloadIds.delete(key);
		fetchRedirectIds.delete(key);
		fetchersQueuedForDeletion.delete(key);
		cancelledFetcherLoads.delete(key);
		fetchers.delete(key);
	}
	function queueFetcherForDeletion(key) {
		let count = (activeFetchers.get(key) || 0) - 1;
		if (count <= 0) {
			activeFetchers.delete(key);
			fetchersQueuedForDeletion.add(key);
		} else activeFetchers.set(key, count);
		updateState({ fetchers: new Map(state.fetchers) });
	}
	function abortFetcher(key, reason) {
		let controller = fetchControllers.get(key);
		if (controller) {
			controller.abort(reason);
			fetchControllers.delete(key);
		}
	}
	function markFetchersDone(keys, fetchers) {
		for (let key of keys) {
			let fetcher = fetchers.get(key);
			invariant(fetcher, `Expected fetcher: ${key}`);
			let doneFetcher = getDoneFetcher(fetcher.data);
			fetchers.set(key, doneFetcher);
		}
	}
	function markFetchRedirectsDone(fetchers) {
		let doneKeys = [];
		let didUpdateFetchers = false;
		for (let key of fetchRedirectIds) {
			let fetcher = fetchers.get(key);
			invariant(fetcher, `Expected fetcher: ${key}`);
			if (fetcher.state === "loading") {
				fetchRedirectIds.delete(key);
				doneKeys.push(key);
				didUpdateFetchers = true;
			}
		}
		markFetchersDone(doneKeys, fetchers);
		return didUpdateFetchers;
	}
	function abortStaleFetchLoads(landedId, fetchers) {
		let yeetedKeys = [];
		for (let [key, id] of fetchReloadIds) if (id < landedId) {
			let fetcher = fetchers.get(key);
			invariant(fetcher, `Expected fetcher: ${key}`);
			if (fetcher.state === "loading") {
				abortFetcher(key);
				fetchReloadIds.delete(key);
				yeetedKeys.push(key);
			}
		}
		markFetchersDone(yeetedKeys, fetchers);
		return yeetedKeys.length > 0;
	}
	function getBlocker(key, fn) {
		let blocker = state.blockers.get(key) || router_IDLE_BLOCKER;
		if (blockerFunctions.get(key) !== fn) blockerFunctions.set(key, fn);
		return blocker;
	}
	function deleteBlocker(key) {
		state.blockers.delete(key);
		blockerFunctions.delete(key);
	}
	function updateBlocker(key, newBlocker) {
		let blocker = state.blockers.get(key) || router_IDLE_BLOCKER;
		invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", `Invalid blocker state transition: ${blocker.state} -> ${newBlocker.state}`);
		let blockers = new Map(state.blockers);
		blockers.set(key, newBlocker);
		updateState({ blockers });
	}
	function shouldBlockNavigation({ currentLocation, nextLocation, historyAction }) {
		if (blockerFunctions.size === 0) return;
		if (blockerFunctions.size > 1) warning(false, "A router only supports one blocker at a time");
		let entries = Array.from(blockerFunctions.entries());
		let [blockerKey, blockerFunction] = entries[entries.length - 1];
		let blocker = state.blockers.get(blockerKey);
		if (blocker && blocker.state === "proceeding") return;
		if (blockerFunction({
			currentLocation,
			nextLocation,
			historyAction
		})) return blockerKey;
	}
	function handleNavigational404(pathname) {
		let error = getInternalRouterError(404, { pathname });
		let routesToUse = dataRoutes.activeRoutes;
		let { matches, route } = getShortCircuitMatches(routesToUse);
		return {
			notFoundMatches: matches,
			route,
			error
		};
	}
	function enableScrollRestoration(positions, getPosition, getKey) {
		savedScrollPositions = positions;
		getScrollPosition = getPosition;
		getScrollRestorationKey = getKey || null;
		if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
			initialScrollRestored = true;
			let y = getSavedScrollPosition(state.location, state.matches);
			if (y != null) updateState({ restoreScrollPosition: y });
		}
		return () => {
			savedScrollPositions = null;
			getScrollPosition = null;
			getScrollRestorationKey = null;
		};
	}
	function getScrollKey(location, matches) {
		if (getScrollRestorationKey) return getScrollRestorationKey(location, matches.map((m) => convertRouteMatchToUiMatch(m, state.loaderData))) || location.key;
		return location.key;
	}
	function saveScrollPosition(location, matches) {
		if (savedScrollPositions && getScrollPosition) {
			let key = getScrollKey(location, matches);
			savedScrollPositions[key] = getScrollPosition();
		}
	}
	function getSavedScrollPosition(location, matches) {
		if (savedScrollPositions) {
			let key = getScrollKey(location, matches);
			let y = savedScrollPositions[key];
			if (typeof y === "number") return y;
		}
		return null;
	}
	function checkFogOfWar(matches, pathname) {
		if (init.patchRoutesOnNavigation) {
			if (!matches) return {
				active: true,
				matches: dataRouteMatcher.match(pathname, true) || []
			};
			else if (Object.keys(matches[0].params).length > 0) return {
				active: true,
				matches: dataRouteMatcher.match(pathname, true)
			};
		}
		return {
			active: false,
			matches: null
		};
	}
	async function discoverRoutes(matches, pathname, signal, fetcherKey) {
		if (!init.patchRoutesOnNavigation) return {
			type: "success",
			matches
		};
		let partialMatches = matches;
		while (true) {
			let localManifest = manifest;
			try {
				await init.patchRoutesOnNavigation({
					signal,
					path: pathname,
					matches: partialMatches,
					fetcherKey,
					patch: (routeId, children) => {
						if (signal.aborted) return;
						patchRoutesImpl(routeId, children, dataRoutes, localManifest, mapRouteProperties, false);
					}
				});
			} catch (e) {
				if (future.unstable_customRouteDiscovery) {
					if (signal.aborted) return { type: "aborted" };
					if (e instanceof DiscoveryCancelledError) return { type: "cancelled" };
				}
				return {
					type: "error",
					error: e,
					partialMatches
				};
			}
			if (signal.aborted) return { type: "aborted" };
			let newMatches = dataRouteMatcher.match(pathname);
			let newPartialMatches = null;
			if (newMatches) if (Object.keys(newMatches[0].params).length === 0) return {
				type: "success",
				matches: newMatches
			};
			else {
				newPartialMatches = dataRouteMatcher.match(pathname, true);
				if (!(newPartialMatches && partialMatches.length < newPartialMatches.length && compareMatches(partialMatches, newPartialMatches.slice(0, partialMatches.length)))) return {
					type: "success",
					matches: newMatches
				};
			}
			if (!newPartialMatches) newPartialMatches = dataRouteMatcher.match(pathname, true);
			if (!newPartialMatches || compareMatches(partialMatches, newPartialMatches)) return {
				type: "success",
				matches: null
			};
			partialMatches = newPartialMatches;
		}
	}
	function compareMatches(a, b) {
		return a.length === b.length && a.every((m, i) => m.route.id === b[i].route.id);
	}
	function _internalSetRoutes(newRoutes) {
		manifest = {};
		dataRoutes.setHmrRoutes(convertRoutesToDataRoutes(newRoutes, mapRouteProperties, void 0, manifest));
	}
	function patchRoutes(routeId, children, unstable_allowElementMutations = false) {
		patchRoutesImpl(routeId, children, dataRoutes, manifest, mapRouteProperties, unstable_allowElementMutations);
		if (!dataRoutes.hasHMRRoutes) updateState({});
	}
	router = {
		get basename() {
			return basename;
		},
		get future() {
			return future;
		},
		get state() {
			return state;
		},
		get routes() {
			return dataRoutes.stableRoutes;
		},
		match(locationArg) {
			return dataRouteMatcher.match(locationArg);
		},
		get manifest() {
			return manifest;
		},
		get window() {
			return routerWindow;
		},
		initialize,
		subscribe,
		enableScrollRestoration,
		navigate,
		fetch,
		revalidate,
		createHref: (to) => init.history.createHref(to),
		createURL: (to) => init.history.createURL(to),
		encodeLocation: (to) => init.history.encodeLocation(to),
		getFetcher,
		resetFetcher,
		deleteFetcher: queueFetcherForDeletion,
		dispose,
		getBlocker,
		deleteBlocker,
		patchRoutes,
		_internalFetchControllers: fetchControllers,
		_internalSetRoutes,
		_internalSetStateDoNotUseOrYouWillBreakYourApp(newState) {
			updateState(newState);
		}
	};
	if (init.instrumentations) router = instrumentClientSideRouter(router, init.instrumentations.map((i) => i.router).filter(Boolean));
	return router;
}
/**
* Create a static handler to perform server-side data loading
*
* @example
* export async function handleRequest(request: Request) {
*   let { query, dataRoutes } = createStaticHandler(routes);
*   let context = await query(request);
*
*   if (context instanceof Response) {
*     return context;
*   }
*
*   let router = createStaticRouter(dataRoutes, context);
*   return new Response(
*     ReactDOMServer.renderToString(<StaticRouterProvider ... />),
*     { headers: { "Content-Type": "text/html" } }
*   );
* }
*
* @public
* @category Data Routers
* @mode data
* @param routes The {@link RouteObject | route objects} to create a static
* handler for
* @param opts Options
* @param opts.basename The base URL for the static handler (default: `/`)
* @param opts.future Future flags for the static handler
* @returns A static handler that can be used to query data for the provided
* routes
*/
function createStaticHandler(routes, opts) {
	invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
	let manifest = {};
	let basename = (opts ? opts.basename : null) || "/";
	let _mapRouteProperties = opts?.mapRouteProperties;
	let mapRouteProperties = _mapRouteProperties ? _mapRouteProperties : () => ({});
	let dataRouteMatcher = createDataRouteMatcher({ ...opts?.future }, basename);
	if (opts?.instrumentations) {
		let instrumentations = opts.instrumentations;
		mapRouteProperties = (route) => {
			return {
				..._mapRouteProperties?.(route),
				...getRouteInstrumentationUpdates(instrumentations.map((i) => i.route).filter(Boolean), route)
			};
		};
	}
	let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, void 0, manifest);
	dataRouteMatcher.update(dataRoutes);
	let match = (locationArg) => dataRouteMatcher.match(locationArg);
	/**
	* The query() method is intended for document requests, in which we want to
	* call an optional action and potentially multiple loaders for all nested
	* routes.  It returns a StaticHandlerContext object, which is very similar
	* to the router state (location, loaderData, actionData, errors, etc.) and
	* also adds SSR-specific information such as the statusCode and headers
	* from action/loaders Responses.
	*
	* It _should_ never throw and should report all errors through the
	* returned handlerContext.errors object, properly associating errors to
	* their error boundary.  Additionally, it tracks _deepestRenderedBoundaryId
	* which can be used to emulate React error boundaries during SSR by performing
	* a second pass only down to the boundaryId.
	*
	* The one exception where we do not return a StaticHandlerContext is when a
	* redirect response is returned or thrown from any action/loader.  We
	* propagate that out and return the raw Response so the HTTP server can
	* return it directly.
	*
	* - `opts.requestContext` is an optional server context that will be passed
	*   to actions/loaders in the `context` parameter
	* - `opts.skipLoaderErrorBubbling` is an optional parameter that will prevent
	*   the bubbling of errors which allows single-fetch-type implementations
	*   where the client will handle the bubbling and we may need to return data
	*   for the handling route
	*/
	async function query(request, { requestContext, filterMatchesToLoad, skipLoaderErrorBubbling, skipRevalidation, dataStrategy, generateMiddlewareResponse, normalizePath } = {}) {
		let normalizePathImpl = normalizePath || defaultNormalizePath;
		let method = request.method;
		let location = createLocation("", normalizePathImpl(request), null, "default");
		let matches = dataRouteMatcher.match(location);
		requestContext = requestContext != null ? requestContext : new RouterContextProvider();
		if (!isValidMethod(method) && method !== "HEAD") {
			let error = getInternalRouterError(405, { method });
			let { matches: methodNotAllowedMatches, route } = getShortCircuitMatches(dataRoutes);
			let staticContext = {
				basename,
				location,
				matches: methodNotAllowedMatches,
				loaderData: {},
				actionData: null,
				errors: { [route.id]: error },
				statusCode: error.status,
				loaderHeaders: {},
				actionHeaders: {},
				_match: match
			};
			return generateMiddlewareResponse ? generateMiddlewareResponse(() => Promise.resolve(staticContext)) : staticContext;
		} else if (!matches) {
			let error = getInternalRouterError(404, { pathname: location.pathname });
			let { matches: notFoundMatches, route } = getShortCircuitMatches(dataRoutes);
			let staticContext = {
				basename,
				location,
				matches: notFoundMatches,
				loaderData: {},
				actionData: null,
				errors: { [route.id]: error },
				statusCode: error.status,
				loaderHeaders: {},
				actionHeaders: {},
				_match: match
			};
			return generateMiddlewareResponse ? generateMiddlewareResponse(() => Promise.resolve(staticContext)) : staticContext;
		}
		if (generateMiddlewareResponse) {
			invariant(requestContext instanceof RouterContextProvider, "When using middleware in `staticHandler.query()`, any provided `requestContext` must be an instance of `RouterContextProvider`");
			try {
				await loadLazyMiddlewareForMatches(matches, manifest, mapRouteProperties);
				let renderedStaticContext;
				let response = await runServerMiddlewarePipeline({
					request,
					url: createDataFunctionUrl(request, location),
					pattern: getRoutePattern(matches),
					matches,
					params: matches[0].params,
					context: requestContext
				}, async () => {
					return await generateMiddlewareResponse(async (revalidationRequest, opts = {}) => {
						let result = await queryImpl(revalidationRequest, location, matches, requestContext, dataStrategy || null, skipLoaderErrorBubbling === true, null, "filterMatchesToLoad" in opts ? opts.filterMatchesToLoad ?? null : filterMatchesToLoad ?? null, skipRevalidation === true);
						if (isResponse(result)) return result;
						renderedStaticContext = {
							location,
							basename,
							...result,
							_match: match
						};
						return renderedStaticContext;
					});
				}, async (error, routeId) => {
					if (isRedirectResponse(error)) return error;
					if (isResponse(error)) try {
						error = new ErrorResponseImpl(error.status, error.statusText, await parseResponseBody(error));
					} catch (e) {
						error = e;
					}
					if (isDataWithResponseInit(error)) error = dataWithResponseInitToErrorResponse(error);
					if (renderedStaticContext) {
						if (routeId in renderedStaticContext.loaderData) renderedStaticContext.loaderData[routeId] = void 0;
						let staticContext = getStaticContextFromError(dataRoutes, renderedStaticContext, error, skipLoaderErrorBubbling ? routeId : findNearestBoundary(matches, routeId).route.id);
						return generateMiddlewareResponse(() => Promise.resolve(staticContext));
					} else {
						let staticContext = {
							matches,
							location,
							basename,
							loaderData: {},
							actionData: null,
							errors: { [skipLoaderErrorBubbling ? routeId : findNearestBoundary(matches, matches.find((m) => m.route.id === routeId || m.route.loader)?.route.id || routeId).route.id]: error },
							statusCode: isRouteErrorResponse(error) ? error.status : 500,
							actionHeaders: {},
							loaderHeaders: {},
							_match: match
						};
						return generateMiddlewareResponse(() => Promise.resolve(staticContext));
					}
				});
				invariant(isResponse(response), "Expected a response in query()");
				return response;
			} catch (e) {
				if (isResponse(e)) return e;
				throw e;
			}
		}
		let result = await queryImpl(request, location, matches, requestContext, dataStrategy || null, skipLoaderErrorBubbling === true, null, filterMatchesToLoad || null, skipRevalidation === true);
		if (isResponse(result)) return result;
		return {
			location,
			basename,
			...result,
			_match: match
		};
	}
	/**
	* The queryRoute() method is intended for targeted route requests, either
	* for fetch ?_data requests or resource route requests.  In this case, we
	* are only ever calling a single action or loader, and we are returning the
	* returned value directly.  In most cases, this will be a Response returned
	* from the action/loader, but it may be a primitive or other value as well -
	* and in such cases the calling context should handle that accordingly.
	*
	* We do respect the throw/return differentiation, so if an action/loader
	* throws, then this method will throw the value.  This is important so we
	* can do proper boundary identification in Remix where a thrown Response
	* must go to the Catch Boundary but a returned Response is happy-path.
	*
	* One thing to note is that any Router-initiated Errors that make sense
	* to associate with a status code will be thrown as an ErrorResponse
	* instance which include the raw Error, such that the calling context can
	* serialize the error as they see fit while including the proper response
	* code.  Examples here are 404 and 405 errors that occur prior to reaching
	* any user-defined loaders.
	*
	* - `opts.routeId` allows you to specify the specific route handler to call.
	*   If not provided the handler will determine the proper route by matching
	*   against `request.url`
	* - `opts.requestContext` is an optional server context that will be passed
	*    to actions/loaders in the `context` parameter
	*/
	async function queryRoute(request, { routeId, requestContext, dataStrategy, generateMiddlewareResponse, normalizePath } = {}) {
		let normalizePathImpl = normalizePath || defaultNormalizePath;
		let method = request.method;
		let location = createLocation("", normalizePathImpl(request), null, "default");
		let matches = dataRouteMatcher.match(location);
		requestContext = requestContext != null ? requestContext : new RouterContextProvider();
		if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") throw getInternalRouterError(405, { method });
		else if (!matches) throw getInternalRouterError(404, { pathname: location.pathname });
		let match = routeId ? matches.find((m) => m.route.id === routeId) : getTargetMatch(matches, location);
		if (routeId && !match) throw getInternalRouterError(403, {
			pathname: location.pathname,
			routeId
		});
		else if (!match) throw getInternalRouterError(404, { pathname: location.pathname });
		if (generateMiddlewareResponse) {
			invariant(requestContext instanceof RouterContextProvider, "When using middleware in `staticHandler.queryRoute()`, any provided `requestContext` must be an instance of `RouterContextProvider`");
			await loadLazyMiddlewareForMatches(matches, manifest, mapRouteProperties);
			return await runServerMiddlewarePipeline({
				request,
				url: createDataFunctionUrl(request, location),
				pattern: getRoutePattern(matches),
				matches,
				params: matches[0].params,
				context: requestContext
			}, async () => {
				return await generateMiddlewareResponse(async (innerRequest) => {
					let processed = handleQueryResult(await queryImpl(innerRequest, location, matches, requestContext, dataStrategy || null, false, match, null, false));
					return isResponse(processed) ? processed : typeof processed === "string" ? new Response(processed) : Response.json(processed);
				});
			}, (error) => {
				if (isDataWithResponseInit(error)) return Promise.resolve(dataWithResponseInitToResponse(error));
				if (isResponse(error)) return Promise.resolve(error);
				throw error;
			});
		}
		return handleQueryResult(await queryImpl(request, location, matches, requestContext, dataStrategy || null, false, match, null, false));
		function handleQueryResult(result) {
			if (isResponse(result)) return result;
			let error = result.errors ? Object.values(result.errors)[0] : void 0;
			if (error !== void 0) throw error;
			if (result.actionData) return Object.values(result.actionData)[0];
			if (result.loaderData) return Object.values(result.loaderData)[0];
		}
	}
	async function queryImpl(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad, skipRevalidation) {
		invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
		try {
			if (isMutationMethod(request.method)) return await submit(request, location, matches, routeMatch || getTargetMatch(matches, location), requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch != null, filterMatchesToLoad, skipRevalidation);
			let result = await loadRouteData(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad);
			return isResponse(result) ? result : {
				...result,
				actionData: null,
				actionHeaders: {}
			};
		} catch (e) {
			if (isDataStrategyResult(e) && isResponse(e.result)) {
				if (e.type === "error") throw e.result;
				return e.result;
			}
			if (isRedirectResponse(e)) return e;
			throw e;
		}
	}
	async function submit(request, location, matches, actionMatch, requestContext, dataStrategy, skipLoaderErrorBubbling, isRouteRequest, filterMatchesToLoad, skipRevalidation) {
		let result;
		if (!actionMatch.route.action && !actionMatch.route.lazy) {
			let error = getInternalRouterError(405, {
				method: request.method,
				pathname: new URL(request.url).pathname,
				routeId: actionMatch.route.id
			});
			if (isRouteRequest) throw error;
			result = {
				type: "error",
				error
			};
		} else {
			result = (await callDataStrategy(request, location, getTargetedDataStrategyMatches(mapRouteProperties, manifest, request, location, matches, actionMatch, [], requestContext), isRouteRequest, requestContext, dataStrategy))[actionMatch.route.id];
			if (request.signal.aborted) throwStaticHandlerAbortedError(request, isRouteRequest);
		}
		if (isRedirectResult(result)) throw new Response(null, {
			status: result.response.status,
			headers: { Location: result.response.headers.get("Location") }
		});
		if (isRouteRequest) {
			if (isErrorResult(result)) throw result.error;
			return {
				matches: [actionMatch],
				loaderData: {},
				actionData: { [actionMatch.route.id]: result.data },
				errors: null,
				statusCode: 200,
				loaderHeaders: {},
				actionHeaders: {}
			};
		}
		if (skipRevalidation) if (isErrorResult(result)) {
			let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
			return {
				statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
				actionData: null,
				actionHeaders: { ...result.headers ? { [actionMatch.route.id]: result.headers } : {} },
				matches,
				loaderData: {},
				errors: { [boundaryMatch.route.id]: result.error },
				loaderHeaders: {}
			};
		} else return {
			actionData: { [actionMatch.route.id]: result.data },
			actionHeaders: result.headers ? { [actionMatch.route.id]: result.headers } : {},
			matches,
			loaderData: {},
			errors: null,
			statusCode: result.statusCode || 200,
			loaderHeaders: {}
		};
		let loaderRequest = new Request(request.url, {
			headers: request.headers,
			redirect: request.redirect,
			signal: request.signal
		});
		if (isErrorResult(result)) return {
			...await loadRouteData(loaderRequest, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null, filterMatchesToLoad, [(skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id)).route.id, result]),
			statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
			actionData: null,
			actionHeaders: { ...result.headers ? { [actionMatch.route.id]: result.headers } : {} }
		};
		return {
			...await loadRouteData(loaderRequest, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null, filterMatchesToLoad),
			actionData: { [actionMatch.route.id]: result.data },
			...result.statusCode ? { statusCode: result.statusCode } : {},
			actionHeaders: result.headers ? { [actionMatch.route.id]: result.headers } : {}
		};
	}
	async function loadRouteData(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad, pendingActionResult) {
		let isRouteRequest = routeMatch != null;
		if (isRouteRequest && !routeMatch?.route.loader && !routeMatch?.route.lazy) throw getInternalRouterError(400, {
			method: request.method,
			pathname: new URL(request.url).pathname,
			routeId: routeMatch?.route.id
		});
		let dsMatches;
		if (routeMatch) dsMatches = getTargetedDataStrategyMatches(mapRouteProperties, manifest, request, location, matches, routeMatch, [], requestContext);
		else {
			let maxIdx = pendingActionResult && isErrorResult(pendingActionResult[1]) ? matches.findIndex((m) => m.route.id === pendingActionResult[0]) - 1 : void 0;
			let pattern = getRoutePattern(matches);
			dsMatches = matches.map((match, index) => {
				if (maxIdx != null && index > maxIdx) return getDataStrategyMatch(mapRouteProperties, manifest, request, location, pattern, match, [], requestContext, false);
				return getDataStrategyMatch(mapRouteProperties, manifest, request, location, pattern, match, [], requestContext, (match.route.loader || match.route.lazy) != null && (!filterMatchesToLoad || filterMatchesToLoad(match)));
			});
		}
		if (!dataStrategy && !dsMatches.some((m) => m.shouldLoad)) return {
			matches,
			loaderData: {},
			errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? { [pendingActionResult[0]]: pendingActionResult[1].error } : null,
			statusCode: 200,
			loaderHeaders: {}
		};
		let results = await callDataStrategy(request, location, dsMatches, isRouteRequest, requestContext, dataStrategy);
		if (request.signal.aborted) throwStaticHandlerAbortedError(request, isRouteRequest);
		return {
			...processRouteLoaderData(matches, results, pendingActionResult, true, skipLoaderErrorBubbling),
			matches
		};
	}
	async function callDataStrategy(request, location, matches, isRouteRequest, requestContext, dataStrategy) {
		let results = await callDataStrategyImpl(dataStrategy || defaultDataStrategy, request, location, matches, null, "static", requestContext, true);
		let dataResults = {};
		await Promise.all(matches.map(async (match) => {
			if (!(match.route.id in results)) return;
			let result = results[match.route.id];
			if (isRedirectDataStrategyResult(result)) {
				let response = result.result;
				throw normalizeRelativeRoutingRedirectResponse(response, request, match.route.id, matches, basename);
			}
			if (isRouteRequest) {
				if (isResponse(result.result)) throw result;
				else if (isDataWithResponseInit(result.result)) throw dataWithResponseInitToResponse(result.result);
			}
			dataResults[match.route.id] = await convertDataStrategyResultToDataResult(result);
		}));
		return dataResults;
	}
	return {
		dataRoutes,
		get _matchCost() {
			return dataRouteMatcher instanceof V6RegExMatcher ? dataRouteMatcher.matchCost : void 0;
		},
		match,
		query,
		queryRoute
	};
}
/**
* Given an existing StaticHandlerContext and an error thrown at render time,
* provide an updated StaticHandlerContext suitable for a second SSR render
*
* @category Utils
*/
function getStaticContextFromError(routes, handlerContext, error, boundaryId) {
	let errorBoundaryId = boundaryId || handlerContext._deepestRenderedBoundaryId || routes[0].id;
	return {
		...handlerContext,
		statusCode: isRouteErrorResponse(error) ? error.status : 500,
		errors: { [errorBoundaryId]: error }
	};
}
function throwStaticHandlerAbortedError(request, isRouteRequest) {
	if (request.signal.reason !== void 0) throw request.signal.reason;
	throw new Error(`${isRouteRequest ? "queryRoute" : "query"}() call aborted without an \`AbortSignal.reason\`: ${request.method} ${request.url}`);
}
function isSubmissionNavigation(opts) {
	return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== void 0);
}
function defaultNormalizePath(request) {
	let url = new URL(request.url);
	return {
		pathname: url.pathname,
		search: url.search,
		hash: url.hash
	};
}
function normalizeTo(location, matches, basename, to, fromRouteId, relative) {
	let contextualMatches;
	let activeRouteMatch;
	if (fromRouteId) {
		contextualMatches = [];
		for (let match of matches) {
			contextualMatches.push(match);
			if (match.route.id === fromRouteId) {
				activeRouteMatch = match;
				break;
			}
		}
	} else {
		contextualMatches = matches;
		activeRouteMatch = matches[matches.length - 1];
	}
	let path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
	if (to == null) {
		path.search = location.search;
		path.hash = location.hash;
	}
	if ((to == null || to === "" || to === ".") && activeRouteMatch) {
		let nakedIndex = hasNakedIndexQuery(path.search);
		if (activeRouteMatch.route.index && !nakedIndex) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
		else if (!activeRouteMatch.route.index && nakedIndex) {
			let params = new URLSearchParams(path.search);
			let indexValues = params.getAll("index");
			params.delete("index");
			indexValues.filter((v) => v).forEach((v) => params.append("index", v));
			let qs = params.toString();
			path.search = qs ? `?${qs}` : "";
		}
	}
	if (basename !== "/") path.pathname = prependBasename({
		basename,
		pathname: path.pathname
	});
	return createPath(path);
}
function normalizeNavigateOptions(isFetcher, path, opts) {
	if (!opts || !isSubmissionNavigation(opts)) return { path };
	if (opts.formMethod && !isValidMethod(opts.formMethod)) return {
		path,
		error: getInternalRouterError(405, { method: opts.formMethod })
	};
	let getInvalidBodyError = () => ({
		path,
		error: getInternalRouterError(400, { type: "invalid-body" })
	});
	let formMethod = (opts.formMethod || "get").toUpperCase();
	let formAction = stripHashFromPath(path);
	if (opts.body !== void 0) {
		if (opts.formEncType === "text/plain") {
			if (!isMutationMethod(formMethod)) return getInvalidBodyError();
			let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? Array.from(opts.body.entries()).reduce((acc, [name, value]) => `${acc}${name}=${value}\n`, "") : String(opts.body);
			return {
				path,
				submission: {
					formMethod,
					formAction,
					formEncType: opts.formEncType,
					formData: void 0,
					json: void 0,
					text
				}
			};
		} else if (opts.formEncType === "application/json") {
			if (!isMutationMethod(formMethod)) return getInvalidBodyError();
			try {
				let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
				return {
					path,
					submission: {
						formMethod,
						formAction,
						formEncType: opts.formEncType,
						formData: void 0,
						json,
						text: void 0
					}
				};
			} catch {
				return getInvalidBodyError();
			}
		}
	}
	invariant(typeof FormData === "function", "FormData is not available in this environment");
	let searchParams;
	let formData;
	if (opts.formData) {
		searchParams = convertFormDataToSearchParams(opts.formData);
		formData = opts.formData;
	} else if (opts.body instanceof FormData) {
		searchParams = convertFormDataToSearchParams(opts.body);
		formData = opts.body;
	} else if (opts.body instanceof URLSearchParams) {
		searchParams = opts.body;
		formData = convertSearchParamsToFormData(searchParams);
	} else if (opts.body == null) {
		searchParams = new URLSearchParams();
		formData = new FormData();
	} else try {
		searchParams = new URLSearchParams(opts.body);
		formData = convertSearchParamsToFormData(searchParams);
	} catch {
		return getInvalidBodyError();
	}
	let submission = {
		formMethod,
		formAction,
		formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
		formData,
		json: void 0,
		text: void 0
	};
	if (isMutationMethod(submission.formMethod)) return {
		path,
		submission
	};
	let parsedPath = parsePath(path);
	if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) searchParams.append("index", "");
	parsedPath.search = `?${searchParams}`;
	return {
		path: createPath(parsedPath),
		submission
	};
}
function getMatchesToLoad(request, scopedContext, mapRouteProperties, manifest, history, state, matches, submission, location, lazyRoutePropertiesToSkip, initialHydration, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, dataRouteMatcher, pendingActionResult, callSiteDefaultShouldRevalidate) {
	let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : void 0;
	let currentUrl = history.createURL(state.location);
	let nextUrl = history.createURL(location);
	let maxIdx;
	if (initialHydration && state.errors) {
		let boundaryId = Object.keys(state.errors)[0];
		maxIdx = matches.findIndex((m) => m.route.id === boundaryId);
	} else if (pendingActionResult && isErrorResult(pendingActionResult[1])) {
		let boundaryId = pendingActionResult[0];
		maxIdx = matches.findIndex((m) => m.route.id === boundaryId) - 1;
	}
	let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : void 0;
	let shouldSkipRevalidation = actionStatus && actionStatus >= 400;
	let baseShouldRevalidateArgs = {
		currentUrl,
		currentParams: state.matches[0]?.params || {},
		nextUrl,
		nextParams: matches[0].params,
		...submission,
		actionResult,
		actionStatus
	};
	let pattern = getRoutePattern(matches);
	let dsMatches = matches.map((match, index) => {
		let { route } = match;
		let forceShouldLoad = null;
		if (maxIdx != null && index > maxIdx) forceShouldLoad = false;
		else if (route.lazy) forceShouldLoad = true;
		else if (!routeHasLoaderOrMiddleware(route)) forceShouldLoad = false;
		else if (initialHydration) {
			let { shouldLoad } = getRouteHydrationStatus(route, state.loaderData, state.errors);
			forceShouldLoad = shouldLoad;
		} else if (isNewLoader(state.loaderData, state.matches[index], match)) forceShouldLoad = true;
		if (forceShouldLoad !== null) return getDataStrategyMatch(mapRouteProperties, manifest, request, location, pattern, match, lazyRoutePropertiesToSkip, scopedContext, forceShouldLoad);
		let defaultShouldRevalidate = false;
		if (typeof callSiteDefaultShouldRevalidate === "boolean") defaultShouldRevalidate = callSiteDefaultShouldRevalidate;
		else if (shouldSkipRevalidation) defaultShouldRevalidate = false;
		else if (isRevalidationRequired) defaultShouldRevalidate = true;
		else if (currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search) defaultShouldRevalidate = true;
		else if (currentUrl.search !== nextUrl.search) defaultShouldRevalidate = true;
		else if (isNewRouteInstance(state.matches[index], match)) defaultShouldRevalidate = true;
		let shouldRevalidateArgs = {
			...baseShouldRevalidateArgs,
			defaultShouldRevalidate
		};
		return getDataStrategyMatch(mapRouteProperties, manifest, request, location, pattern, match, lazyRoutePropertiesToSkip, scopedContext, shouldRevalidateLoader(match, shouldRevalidateArgs), shouldRevalidateArgs, callSiteDefaultShouldRevalidate);
	});
	let revalidatingFetchers = [];
	fetchLoadMatches.forEach((f, key) => {
		if (initialHydration || !matches.some((m) => m.route.id === f.routeId) || fetchersQueuedForDeletion.has(key) || f.isDiscovering) return;
		let fetcher = state.fetchers.get(key);
		let isMidInitialLoad = fetcher && fetcher.state !== "idle" && fetcher.data === void 0;
		let fetcherMatches = dataRouteMatcher.match(f.path);
		if (!fetcherMatches) {
			revalidatingFetchers.push({
				key,
				routeId: f.routeId,
				path: f.path,
				matches: null,
				match: null,
				request: null,
				controller: null
			});
			return;
		}
		if (fetchRedirectIds.has(key)) return;
		let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
		let fetchController = new AbortController();
		let fetchRequest = createClientSideRequest(history, f.path, fetchController.signal);
		let fetcherDsMatches = null;
		if (cancelledFetcherLoads.has(key)) {
			cancelledFetcherLoads.delete(key);
			fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties, manifest, fetchRequest, f.path, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext);
		} else if (isMidInitialLoad) {
			if (isRevalidationRequired) fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties, manifest, fetchRequest, f.path, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext);
		} else {
			let defaultShouldRevalidate;
			if (typeof callSiteDefaultShouldRevalidate === "boolean") defaultShouldRevalidate = callSiteDefaultShouldRevalidate;
			else if (shouldSkipRevalidation) defaultShouldRevalidate = false;
			else defaultShouldRevalidate = isRevalidationRequired;
			let shouldRevalidateArgs = {
				...baseShouldRevalidateArgs,
				defaultShouldRevalidate
			};
			if (shouldRevalidateLoader(fetcherMatch, shouldRevalidateArgs)) fetcherDsMatches = getTargetedDataStrategyMatches(mapRouteProperties, manifest, fetchRequest, f.path, fetcherMatches, fetcherMatch, lazyRoutePropertiesToSkip, scopedContext, shouldRevalidateArgs);
		}
		if (fetcherDsMatches) revalidatingFetchers.push({
			key,
			routeId: f.routeId,
			path: f.path,
			matches: fetcherDsMatches,
			match: fetcherMatch,
			request: fetchRequest,
			controller: fetchController
		});
	});
	return {
		dsMatches,
		revalidatingFetchers
	};
}
function routeHasLoaderOrMiddleware(route) {
	return route.loader != null || route.middleware != null && route.middleware.length > 0;
}
function getRouteHydrationStatus(route, loaderData, errors) {
	if (route.lazy) return {
		shouldLoad: true,
		renderFallback: true
	};
	if (!routeHasLoaderOrMiddleware(route)) return {
		shouldLoad: false,
		renderFallback: false
	};
	let hasData = loaderData != null && route.id in loaderData;
	let hasError = errors != null && errors[route.id] !== void 0;
	if (!hasData && hasError) return {
		shouldLoad: false,
		renderFallback: false
	};
	if (typeof route.loader === "function" && route.loader.hydrate === true) return {
		shouldLoad: true,
		renderFallback: !hasData
	};
	let shouldLoad = !hasData && !hasError;
	return {
		shouldLoad,
		renderFallback: shouldLoad
	};
}
function isNewLoader(currentLoaderData, currentMatch, match) {
	let isNew = !currentMatch || match.route.id !== currentMatch.route.id;
	let isMissingData = !currentLoaderData.hasOwnProperty(match.route.id);
	return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
	let currentPath = currentMatch.route.path;
	return currentMatch.pathname !== match.pathname || currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"];
}
function shouldRevalidateLoader(loaderMatch, arg) {
	if (loaderMatch.route.shouldRevalidate) {
		let routeChoice = loaderMatch.route.shouldRevalidate(arg);
		if (typeof routeChoice === "boolean") return routeChoice;
	}
	return arg.defaultShouldRevalidate;
}
function patchRoutesImpl(routeId, children, dataRoutes, manifest, mapRouteProperties, allowElementMutations) {
	let childrenToPatch;
	if (routeId) {
		let route = manifest[routeId];
		invariant(route, `No route found to patch children into: routeId = ${routeId}`);
		if (!route.children) route.children = [];
		childrenToPatch = route.children;
	} else childrenToPatch = dataRoutes.activeRoutes;
	let uniqueChildren = [];
	let existingChildren = [];
	children.forEach((newRoute) => {
		let existingRoute = childrenToPatch.find((existingRoute) => isSameRoute(newRoute, existingRoute));
		if (existingRoute) existingChildren.push({
			existingRoute,
			newRoute
		});
		else uniqueChildren.push(newRoute);
	});
	if (uniqueChildren.length > 0) {
		let newRoutes = convertRoutesToDataRoutes(uniqueChildren, mapRouteProperties, [
			routeId || "_",
			"patch",
			String(childrenToPatch?.length || "0")
		], manifest);
		childrenToPatch.push(...newRoutes);
	}
	if (allowElementMutations && existingChildren.length > 0) for (let i = 0; i < existingChildren.length; i++) {
		let { existingRoute, newRoute } = existingChildren[i];
		let existingRouteTyped = existingRoute;
		let [newRouteTyped] = convertRoutesToDataRoutes([newRoute], mapRouteProperties, [], {}, true);
		Object.assign(existingRouteTyped, {
			element: newRouteTyped.element ? newRouteTyped.element : existingRouteTyped.element,
			errorElement: newRouteTyped.errorElement ? newRouteTyped.errorElement : existingRouteTyped.errorElement,
			hydrateFallbackElement: newRouteTyped.hydrateFallbackElement ? newRouteTyped.hydrateFallbackElement : existingRouteTyped.hydrateFallbackElement
		});
	}
	if (!dataRoutes.hasHMRRoutes) dataRoutes.setRoutes([...dataRoutes.activeRoutes]);
}
function isSameRoute(newRoute, existingRoute) {
	if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) return true;
	if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) return false;
	if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) return true;
	return newRoute.children?.every((aChild, i) => existingRoute.children?.some((bChild) => isSameRoute(aChild, bChild))) ?? false;
}
const lazyRoutePropertyCache = /* @__PURE__ */ (/* unused pure expression or super */ null && (new WeakMap()));
const loadLazyRouteProperty = ({ key, route, manifest, mapRouteProperties }) => {
	let routeToUpdate = manifest[route.id];
	invariant(routeToUpdate, "No route found in manifest");
	if (!routeToUpdate.lazy || typeof routeToUpdate.lazy !== "object") return;
	let lazyFn = routeToUpdate.lazy[key];
	if (!lazyFn) return;
	let cache = lazyRoutePropertyCache.get(routeToUpdate);
	if (!cache) {
		cache = {};
		lazyRoutePropertyCache.set(routeToUpdate, cache);
	}
	let cachedPromise = cache[key];
	if (cachedPromise) return cachedPromise;
	let propertyPromise = (async () => {
		let isUnsupported = isUnsupportedLazyRouteObjectKey(key);
		let isStaticallyDefined = routeToUpdate[key] !== void 0;
		if (isUnsupported) {
			warning(!isUnsupported, "Route property " + key + " is not a supported lazy route property. This property will be ignored.");
			cache[key] = Promise.resolve();
		} else if (isStaticallyDefined) warning(false, `Route "${routeToUpdate.id}" has a static property "${key}" defined. The lazy property will be ignored.`);
		else {
			let value = await lazyFn();
			if (value != null) {
				Object.assign(routeToUpdate, { [key]: value });
				Object.assign(routeToUpdate, mapRouteProperties(routeToUpdate));
			}
		}
		if (typeof routeToUpdate.lazy === "object") {
			routeToUpdate.lazy[key] = void 0;
			if (Object.values(routeToUpdate.lazy).every((value) => value === void 0)) routeToUpdate.lazy = void 0;
		}
	})();
	cache[key] = propertyPromise;
	propertyPromise.catch(() => {
		if (cache[key] === propertyPromise) delete cache[key];
	});
	return propertyPromise;
};
const lazyRouteFunctionCache = /* @__PURE__ */ (/* unused pure expression or super */ null && (new WeakMap()));
/**
* Execute route.lazy functions to lazily load route modules (loader, action,
* shouldRevalidate) and update the routeManifest in place which shares objects
* with dataRoutes so those get updated as well.
*/
function loadLazyRoute(route, type, manifest, mapRouteProperties, lazyRoutePropertiesToSkip) {
	let routeToUpdate = manifest[route.id];
	invariant(routeToUpdate, "No route found in manifest");
	if (!route.lazy) return {
		lazyRoutePromise: void 0,
		lazyHandlerPromise: void 0
	};
	if (typeof route.lazy === "function") {
		let cachedPromise = lazyRouteFunctionCache.get(routeToUpdate);
		if (cachedPromise) return {
			lazyRoutePromise: cachedPromise,
			lazyHandlerPromise: cachedPromise
		};
		let lazyRoutePromise = (async () => {
			invariant(typeof route.lazy === "function", "No lazy route function found");
			let lazyRoute = await route.lazy();
			let routeUpdates = {};
			for (let lazyRouteProperty in lazyRoute) {
				let lazyValue = lazyRoute[lazyRouteProperty];
				if (lazyValue === void 0) continue;
				let isUnsupported = isUnsupportedLazyRouteFunctionKey(lazyRouteProperty);
				let isStaticallyDefined = routeToUpdate[lazyRouteProperty] !== void 0;
				if (isUnsupported) warning(!isUnsupported, "Route property " + lazyRouteProperty + " is not a supported property to be returned from a lazy route function. This property will be ignored.");
				else if (isStaticallyDefined) warning(!isStaticallyDefined, `Route "${routeToUpdate.id}" has a static property "${lazyRouteProperty}" defined but its lazy function is also returning a value for this property. The lazy route property "${lazyRouteProperty}" will be ignored.`);
				else routeUpdates[lazyRouteProperty] = lazyValue;
			}
			Object.assign(routeToUpdate, routeUpdates);
			Object.assign(routeToUpdate, {
				...mapRouteProperties(routeToUpdate),
				lazy: void 0
			});
		})();
		lazyRouteFunctionCache.set(routeToUpdate, lazyRoutePromise);
		lazyRoutePromise.catch(() => {
			if (lazyRouteFunctionCache.get(routeToUpdate) === lazyRoutePromise) lazyRouteFunctionCache.delete(routeToUpdate);
		});
		return {
			lazyRoutePromise,
			lazyHandlerPromise: lazyRoutePromise
		};
	}
	let lazyKeys = Object.keys(route.lazy);
	let lazyPropertyPromises = [];
	let lazyHandlerPromise = void 0;
	for (let key of lazyKeys) {
		if (lazyRoutePropertiesToSkip && lazyRoutePropertiesToSkip.includes(key)) continue;
		let promise = loadLazyRouteProperty({
			key,
			route,
			manifest,
			mapRouteProperties
		});
		if (promise) {
			lazyPropertyPromises.push(promise);
			if (key === type) lazyHandlerPromise = promise;
		}
	}
	let lazyRoutePromise = lazyPropertyPromises.length > 0 ? Promise.all(lazyPropertyPromises).then(() => {}) : void 0;
	lazyRoutePromise?.catch(() => {});
	lazyHandlerPromise?.catch(() => {});
	return {
		lazyRoutePromise,
		lazyHandlerPromise
	};
}
function isNonNullable(value) {
	return value !== void 0;
}
function loadLazyMiddlewareForMatches(matches, manifest, mapRouteProperties) {
	let promises = matches.map(({ route }) => {
		if (typeof route.lazy !== "object" || !route.lazy.middleware) return;
		return loadLazyRouteProperty({
			key: "middleware",
			route,
			manifest,
			mapRouteProperties
		});
	}).filter(isNonNullable);
	return promises.length > 0 ? Promise.all(promises) : void 0;
}
async function defaultDataStrategy(args) {
	let matchesToLoad = args.matches.filter((m) => m.shouldLoad);
	let keyedResults = {};
	(await Promise.all(matchesToLoad.map((m) => m.resolve()))).forEach((result, i) => {
		keyedResults[matchesToLoad[i].route.id] = result;
	});
	return keyedResults;
}
async function defaultDataStrategyWithMiddleware(args) {
	if (!args.matches.some((m) => m.route.middleware)) return defaultDataStrategy(args);
	return runClientMiddlewarePipeline(args, () => defaultDataStrategy(args));
}
function runServerMiddlewarePipeline(args, handler, errorHandler) {
	return runMiddlewarePipeline(args, handler, processResult, isResponse, errorHandler);
	function processResult(result) {
		return isDataWithResponseInit(result) ? dataWithResponseInitToResponse(result) : result;
	}
}
function runClientMiddlewarePipeline(args, handler) {
	return runMiddlewarePipeline(args, handler, (r) => {
		if (isRedirectResponse(r)) throw r;
		return r;
	}, isDataStrategyResults, errorHandler);
	async function errorHandler(error, routeId, nextResult) {
		if (nextResult) return Object.assign(nextResult.value, { [routeId]: {
			type: "error",
			result: error
		} });
		else {
			let { matches } = args;
			let maxBoundaryIdx = Math.min(Math.max(matches.findIndex((m) => m.route.id === routeId), 0), Math.max(matches.findIndex((m) => m.shouldCallHandler()), 0));
			let deepestRouteId = matches[maxBoundaryIdx].route.id;
			for (let match of matches.slice(0, maxBoundaryIdx + 1)) try {
				await match._lazyPromises?.route;
			} catch {
				deepestRouteId = match.route.id;
				break;
			}
			return { [findNearestBoundary(matches, deepestRouteId).route.id]: {
				type: "error",
				result: error
			} };
		}
	}
}
async function runMiddlewarePipeline(args, handler, processResult, isResult, errorHandler) {
	let { matches, ...dataFnArgs } = args;
	return await callRouteMiddleware(dataFnArgs, matches.flatMap((m) => m.route.middleware ? m.route.middleware.map((fn) => [m.route.id, fn]) : []), handler, processResult, isResult, errorHandler);
}
async function callRouteMiddleware(args, middlewares, handler, processResult, isResult, errorHandler, idx = 0) {
	let { request } = args;
	if (request.signal.aborted) throw request.signal.reason ?? /* @__PURE__ */ new Error(`Request aborted: ${request.method} ${request.url}`);
	let tuple = middlewares[idx];
	if (!tuple) return await handler();
	let [routeId, middleware] = tuple;
	let nextResult;
	let next = async () => {
		if (nextResult) throw new Error("You may only call `next()` once per middleware");
		try {
			nextResult = { value: await callRouteMiddleware(args, middlewares, handler, processResult, isResult, errorHandler, idx + 1) };
			return nextResult.value;
		} catch (error) {
			nextResult = { value: await errorHandler(error, routeId, nextResult) };
			return nextResult.value;
		}
	};
	try {
		let value = await middleware(args, next);
		let result = value != null ? processResult(value) : void 0;
		if (isResult(result)) return result;
		else if (nextResult) return result ?? nextResult.value;
		else {
			nextResult = { value: await next() };
			return nextResult.value;
		}
	} catch (error) {
		return await errorHandler(error, routeId, nextResult);
	}
}
function getDataStrategyMatchLazyPromises(mapRouteProperties, manifest, request, match, lazyRoutePropertiesToSkip) {
	let lazyMiddlewarePromise = loadLazyRouteProperty({
		key: "middleware",
		route: match.route,
		manifest,
		mapRouteProperties
	});
	let lazyRoutePromises = loadLazyRoute(match.route, isMutationMethod(request.method) ? "action" : "loader", manifest, mapRouteProperties, lazyRoutePropertiesToSkip);
	return {
		middleware: lazyMiddlewarePromise,
		route: lazyRoutePromises.lazyRoutePromise,
		handler: lazyRoutePromises.lazyHandlerPromise
	};
}
function getDataStrategyMatch(mapRouteProperties, manifest, request, path, pattern, match, lazyRoutePropertiesToSkip, scopedContext, shouldLoad, shouldRevalidateArgs = null, callSiteDefaultShouldRevalidate) {
	let isUsingNewApi = false;
	let _lazyPromises = getDataStrategyMatchLazyPromises(mapRouteProperties, manifest, request, match, lazyRoutePropertiesToSkip);
	return {
		...match,
		_lazyPromises,
		shouldLoad,
		shouldRevalidateArgs,
		shouldCallHandler(defaultShouldRevalidate) {
			isUsingNewApi = true;
			if (!shouldRevalidateArgs) return shouldLoad;
			if (typeof callSiteDefaultShouldRevalidate === "boolean") return shouldRevalidateLoader(match, {
				...shouldRevalidateArgs,
				defaultShouldRevalidate: callSiteDefaultShouldRevalidate
			});
			if (typeof defaultShouldRevalidate === "boolean") return shouldRevalidateLoader(match, {
				...shouldRevalidateArgs,
				defaultShouldRevalidate
			});
			return shouldRevalidateLoader(match, shouldRevalidateArgs);
		},
		resolve(handlerOverride) {
			let { lazy, loader, middleware } = match.route;
			let callHandler = isUsingNewApi || shouldLoad || handlerOverride && !isMutationMethod(request.method) && (lazy || loader);
			let isMiddlewareOnlyRoute = middleware && middleware.length > 0 && !loader && !lazy;
			if (callHandler && (isMutationMethod(request.method) || !isMiddlewareOnlyRoute)) return callLoaderOrAction({
				request,
				path,
				pattern,
				match,
				lazyHandlerPromise: _lazyPromises?.handler,
				lazyRoutePromise: _lazyPromises?.route,
				handlerOverride,
				scopedContext
			});
			return Promise.resolve({
				type: "data",
				result: void 0
			});
		}
	};
}
function getTargetedDataStrategyMatches(mapRouteProperties, manifest, request, path, matches, targetMatch, lazyRoutePropertiesToSkip, scopedContext, shouldRevalidateArgs = null) {
	return matches.map((match) => {
		if (match.route.id !== targetMatch.route.id) return {
			...match,
			shouldLoad: false,
			shouldRevalidateArgs,
			shouldCallHandler: () => false,
			_lazyPromises: getDataStrategyMatchLazyPromises(mapRouteProperties, manifest, request, match, lazyRoutePropertiesToSkip),
			resolve: () => Promise.resolve({
				type: "data",
				result: void 0
			})
		};
		return getDataStrategyMatch(mapRouteProperties, manifest, request, path, getRoutePattern(matches), match, lazyRoutePropertiesToSkip, scopedContext, true, shouldRevalidateArgs);
	});
}
async function callDataStrategyImpl(dataStrategyImpl, request, path, matches, fetcherKey, initiator, scopedContext, isStaticHandler, navigationType = null) {
	if (matches.some((m) => m._lazyPromises?.middleware)) await Promise.all(matches.map((m) => m._lazyPromises?.middleware));
	let dataStrategyArgs = {
		request,
		url: createDataFunctionUrl(request, path),
		pattern: getRoutePattern(matches),
		params: matches[0].params,
		context: scopedContext,
		matches,
		unstable_initiator: initiator,
		unstable_navigationType: initiator === "navigation" ? navigationType : null
	};
	let runClientMiddleware = isStaticHandler ? () => {
		throw new Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`");
	} : (cb) => {
		let typedDataStrategyArgs = dataStrategyArgs;
		return runClientMiddlewarePipeline(typedDataStrategyArgs, () => {
			return cb({
				...typedDataStrategyArgs,
				fetcherKey,
				runClientMiddleware: () => {
					throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler");
				}
			});
		});
	};
	let results = await dataStrategyImpl({
		...dataStrategyArgs,
		fetcherKey,
		runClientMiddleware
	});
	try {
		await Promise.all(matches.flatMap((m) => [m._lazyPromises?.handler, m._lazyPromises?.route]));
	} catch {}
	return results;
}
async function callLoaderOrAction({ request, path, pattern, match, lazyHandlerPromise, lazyRoutePromise, handlerOverride, scopedContext }) {
	let result;
	let onReject;
	let isAction = isMutationMethod(request.method);
	let type = isAction ? "action" : "loader";
	let runHandler = (handler) => {
		let reject;
		let abortPromise = new Promise((_, r) => reject = r);
		onReject = () => reject();
		request.signal.addEventListener("abort", onReject);
		let actualHandler = (ctx) => {
			if (typeof handler !== "function") return Promise.reject(/* @__PURE__ */ new Error(`You cannot call the handler for a route which defines a boolean "${type}" [routeId: ${match.route.id}]`));
			return handler({
				request,
				url: createDataFunctionUrl(request, path),
				pattern,
				params: match.params,
				context: scopedContext
			}, ...ctx !== void 0 ? [ctx] : []);
		};
		let handlerPromise = (async () => {
			try {
				return {
					type: "data",
					result: await (handlerOverride ? handlerOverride((ctx) => actualHandler(ctx)) : actualHandler())
				};
			} catch (e) {
				return {
					type: "error",
					result: e
				};
			}
		})();
		return Promise.race([handlerPromise, abortPromise]);
	};
	try {
		let handler = isAction ? match.route.action : match.route.loader;
		if (lazyHandlerPromise || lazyRoutePromise) if (handler) {
			let handlerError;
			let [value] = await Promise.all([
				runHandler(handler).catch((e) => {
					handlerError = e;
				}),
				lazyHandlerPromise,
				lazyRoutePromise
			]);
			if (handlerError !== void 0) throw handlerError;
			result = value;
		} else {
			await lazyHandlerPromise;
			let handler = isAction ? match.route.action : match.route.loader;
			if (handler) [result] = await Promise.all([runHandler(handler), lazyRoutePromise]);
			else if (type === "action") {
				let url = new URL(request.url);
				let pathname = url.pathname + url.search;
				throw getInternalRouterError(405, {
					method: request.method,
					pathname,
					routeId: match.route.id
				});
			} else {
				await lazyRoutePromise;
				return {
					type: "data",
					result: void 0
				};
			}
		}
		else if (!handler) {
			let url = new URL(request.url);
			throw getInternalRouterError(404, { pathname: url.pathname + url.search });
		} else result = await runHandler(handler);
	} catch (e) {
		return {
			type: "error",
			result: e
		};
	} finally {
		if (onReject) request.signal.removeEventListener("abort", onReject);
	}
	return result;
}
async function parseResponseBody(response) {
	let contentType = response.headers.get("Content-Type");
	if (contentType && /\bapplication\/json\b/.test(contentType)) return response.body == null ? null : response.json();
	return response.text();
}
async function convertDataStrategyResultToDataResult(dataStrategyResult) {
	let { result, type } = dataStrategyResult;
	if (isResponse(result)) {
		let data;
		try {
			data = await parseResponseBody(result);
		} catch (e) {
			return {
				type: "error",
				error: e
			};
		}
		if (type === "error") return {
			type: "error",
			error: new ErrorResponseImpl(result.status, result.statusText, data),
			statusCode: result.status,
			headers: result.headers
		};
		return {
			type: "data",
			data,
			statusCode: result.status,
			headers: result.headers
		};
	}
	if (type === "error") {
		if (isDataWithResponseInit(result)) {
			if (result.data instanceof Error) return {
				type: "error",
				error: result.data,
				statusCode: result.init?.status,
				headers: result.init?.headers ? new Headers(result.init.headers) : void 0
			};
			return {
				type: "error",
				error: dataWithResponseInitToErrorResponse(result),
				statusCode: isRouteErrorResponse(result) ? result.status : void 0,
				headers: result.init?.headers ? new Headers(result.init.headers) : void 0
			};
		}
		return {
			type: "error",
			error: result,
			statusCode: isRouteErrorResponse(result) ? result.status : void 0
		};
	}
	if (isDataWithResponseInit(result)) return {
		type: "data",
		data: result.data,
		statusCode: result.init?.status,
		headers: result.init?.headers ? new Headers(result.init.headers) : void 0
	};
	return {
		type: "data",
		data: result
	};
}
function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename) {
	let location = response.headers.get("Location");
	invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
	if (!isAbsoluteUrl(location)) {
		let trimmedMatches = matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1);
		location = normalizeTo(new URL(request.url), trimmedMatches, basename, location);
		response.headers.set("Location", location);
	}
	return response;
}
const invalidProtocols = [
	"about:",
	"blob:",
	"chrome:",
	"chrome-untrusted:",
	"content:",
	"data:",
	"devtools:",
	"file:",
	"filesystem:",
	"javascript:"
];
function hasInvalidProtocol(location) {
	try {
		return invalidProtocols.includes(new URL(location).protocol);
	} catch {
		return false;
	}
}
function normalizeRedirectLocation(location, currentUrl, basename, historyInstance) {
	if (isAbsoluteUrl(location)) {
		let normalizedLocation = location;
		let url = PROTOCOL_RELATIVE_URL_REGEX.test(normalizedLocation) ? new URL(normalizeProtocolRelativeUrl(normalizedLocation, currentUrl.protocol)) : new URL(normalizedLocation);
		if (hasInvalidProtocol(url.toString())) throw new Error("Invalid redirect location");
		let isSameBasename = stripBasename(url.pathname, basename) != null;
		if (url.origin === currentUrl.origin && isSameBasename) return removeDoubleSlashes(url.pathname) + url.search + url.hash;
	}
	try {
		if (hasInvalidProtocol(historyInstance.createURL(location).toString())) throw new Error("Invalid redirect location");
	} catch {}
	return location;
}
function createClientSideRequest(history, location, signal, submission) {
	let url = history.createURL(stripHashFromPath(location)).toString();
	let init = { signal };
	if (submission && isMutationMethod(submission.formMethod)) {
		let { formMethod, formEncType } = submission;
		init.method = formMethod.toUpperCase();
		if (formEncType === "application/json") {
			init.headers = new Headers({ "Content-Type": formEncType });
			init.body = JSON.stringify(submission.json);
		} else if (formEncType === "text/plain") init.body = submission.text;
		else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) init.body = convertFormDataToSearchParams(submission.formData);
		else init.body = submission.formData;
	}
	return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
	let searchParams = new URLSearchParams();
	for (let [key, value] of formData.entries()) searchParams.append(key, typeof value === "string" ? value : value.name);
	return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
	let formData = new FormData();
	for (let [key, value] of searchParams.entries()) formData.append(key, value);
	return formData;
}
function processRouteLoaderData(matches, results, pendingActionResult, isStaticHandler = false, skipLoaderErrorBubbling = false) {
	let loaderData = {};
	let errors = null;
	let statusCode;
	let foundError = false;
	let loaderHeaders = {};
	let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : void 0;
	matches.forEach((match) => {
		if (!(match.route.id in results)) return;
		let id = match.route.id;
		let result = results[id];
		invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
		if (isErrorResult(result)) {
			let error = result.error;
			if (pendingError !== void 0) {
				error = pendingError;
				pendingError = void 0;
			}
			errors = errors || {};
			if (skipLoaderErrorBubbling) errors[id] = error;
			else {
				let boundaryMatch = findNearestBoundary(matches, id);
				if (errors[boundaryMatch.route.id] == null) errors[boundaryMatch.route.id] = error;
			}
			if (!isStaticHandler) loaderData[id] = ResetLoaderDataSymbol;
			if (!foundError) {
				foundError = true;
				statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
			}
			if (result.headers) loaderHeaders[id] = result.headers;
		} else {
			loaderData[id] = result.data;
			if (result.statusCode && result.statusCode !== 200 && !foundError) statusCode = result.statusCode;
			if (result.headers) loaderHeaders[id] = result.headers;
		}
	});
	if (pendingError !== void 0 && pendingActionResult) {
		errors = { [pendingActionResult[0]]: pendingError };
		if (pendingActionResult[2]) loaderData[pendingActionResult[2]] = void 0;
	}
	return {
		loaderData,
		errors,
		statusCode: statusCode || 200,
		loaderHeaders
	};
}
function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults, workingFetchers) {
	let { loaderData, errors } = processRouteLoaderData(matches, results, pendingActionResult);
	revalidatingFetchers.filter((f) => !f.matches || f.matches.some((m) => m.shouldLoad)).forEach((rf) => {
		let { key, routeId, controller } = rf;
		if (controller && controller.signal.aborted) return;
		let result = fetcherResults[key];
		invariant(result, "Did not find corresponding fetcher result");
		if (isErrorResult(result)) {
			let boundaryMatch = findNearestBoundary(state.matches, routeId);
			if (!(errors && errors[boundaryMatch.route.id])) errors = {
				...errors,
				[boundaryMatch.route.id]: result.error
			};
			workingFetchers.delete(key);
		} else if (isRedirectResult(result)) invariant(false, "Unhandled fetcher revalidation redirect");
		else {
			let doneFetcher = getDoneFetcher(result.data);
			workingFetchers.set(key, doneFetcher);
		}
	});
	return {
		loaderData,
		errors
	};
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
	let mergedLoaderData = Object.entries(newLoaderData).filter(([, v]) => v !== ResetLoaderDataSymbol).reduce((merged, [k, v]) => {
		merged[k] = v;
		return merged;
	}, {});
	let preservedCount = 0;
	for (let match of matches) {
		let id = match.route.id;
		if (!newLoaderData.hasOwnProperty(id) && loaderData.hasOwnProperty(id) && match.route.loader) {
			mergedLoaderData[id] = loaderData[id];
			preservedCount++;
		}
		if (errors && errors.hasOwnProperty(id)) break;
	}
	return Object.keys(newLoaderData).length === 0 && preservedCount === Object.keys(loaderData).length ? loaderData : mergedLoaderData;
}
function getActionDataForCommit(pendingActionResult) {
	if (!pendingActionResult) return {};
	return isErrorResult(pendingActionResult[1]) ? { actionData: {} } : { actionData: { [pendingActionResult[0]]: pendingActionResult[1].data } };
}
function findNearestBoundary(matches, routeId) {
	return (routeId ? matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1) : [...matches]).reverse().find((m) => m.route.ErrorBoundary != null || m.route.errorElement != null) || matches[0];
}
function getShortCircuitMatches(routes) {
	let route = routes.length === 1 ? routes[0] : routes.find((r) => r.index || !r.path || r.path === "/") || { id: `__shim-error-route__` };
	return {
		matches: [{
			params: {},
			pathname: "",
			pathnameBase: "",
			route
		}],
		route
	};
}
function getInternalRouterError(status, { pathname, routeId, method, type, message } = {}) {
	let statusText = "Unknown Server Error";
	let errorMessage = "Unknown @remix-run/router error";
	if (status === 400) {
		statusText = "Bad Request";
		if (method && pathname && routeId) errorMessage = `You made a ${method} request to "${pathname}" but did not provide a \`loader\` for route "${routeId}", so there is no way to handle the request.`;
		else if (type === "invalid-body") errorMessage = "Unable to encode submission body";
	} else if (status === 403) {
		statusText = "Forbidden";
		errorMessage = `Route "${routeId}" does not match URL "${pathname}"`;
	} else if (status === 404) {
		statusText = "Not Found";
		errorMessage = `No route matches URL "${pathname}"`;
	} else if (status === 405) {
		statusText = "Method Not Allowed";
		if (method && pathname && routeId) errorMessage = `You made a ${method.toUpperCase()} request to "${pathname}" but did not provide an \`action\` for route "${routeId}", so there is no way to handle the request.`;
		else if (method) errorMessage = `Invalid request method "${method.toUpperCase()}"`;
	}
	return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
function findRedirect(results) {
	let entries = Object.entries(results);
	for (let i = entries.length - 1; i >= 0; i--) {
		let [key, result] = entries[i];
		if (isRedirectResult(result)) return {
			key,
			result
		};
	}
}
function stripHashFromPath(path) {
	return createPath({
		...typeof path === "string" ? parsePath(path) : path,
		hash: ""
	});
}
function isHashChangeOnly(a, b) {
	if (a.pathname !== b.pathname || a.search !== b.search) return false;
	if (a.hash === "") return b.hash !== "";
	else if (a.hash === b.hash) return true;
	else if (b.hash !== "") return true;
	return false;
}
function dataWithResponseInitToResponse(data) {
	return Response.json(data.data, data.init ?? void 0);
}
function dataWithResponseInitToErrorResponse(data) {
	return new ErrorResponseImpl(data.init?.status ?? 500, data.init?.statusText ?? "Internal Server Error", data.data);
}
function isDataStrategyResults(result) {
	return result != null && typeof result === "object" && Object.entries(result).every(([key, value]) => typeof key === "string" && isDataStrategyResult(value));
}
function isDataStrategyResult(result) {
	return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === "data" || result.type === "error");
}
function isRedirectDataStrategyResult(result) {
	return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
}
function isErrorResult(result) {
	return result.type === "error";
}
function isRedirectResult(result) {
	return (result && result.type) === "redirect";
}
function isDataWithResponseInit(value) {
	return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
}
function isResponse(value) {
	return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectStatusCode(statusCode) {
	return redirectStatusCodes.has(statusCode);
}
function isRedirectResponse(result) {
	return isResponse(result) && isRedirectStatusCode(result.status) && result.headers.has("Location");
}
function isValidMethod(method) {
	return validRequestMethods.has(method.toUpperCase());
}
function isMutationMethod(method) {
	return validMutationMethods.has(method.toUpperCase());
}
function hasNakedIndexQuery(search) {
	return new URLSearchParams(search).getAll("index").some((v) => v === "");
}
function getTargetMatch(matches, location) {
	let search = typeof location === "string" ? parsePath(location).search : location.search;
	if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) return matches[matches.length - 1];
	let pathMatches = getPathContributingMatches(matches);
	return pathMatches[pathMatches.length - 1];
}
function getInstrumentationNavigateMeta(history, location, matches) {
	return {
		url: createDataFunctionUrl(history.createURL(location), location),
		pattern: matches ? getRoutePattern(matches) : "",
		params: matches?.[0]?.params ? { ...matches[0].params } : {}
	};
}
function getSubmissionFromNavigation(navigation) {
	let { formMethod, formAction, formEncType, text, formData, json } = navigation;
	if (!formMethod || !formAction || !formEncType) return;
	if (text != null) return {
		formMethod,
		formAction,
		formEncType,
		formData: void 0,
		json: void 0,
		text
	};
	else if (formData != null) return {
		formMethod,
		formAction,
		formEncType,
		formData,
		json: void 0,
		text: void 0
	};
	else if (json !== void 0) return {
		formMethod,
		formAction,
		formEncType,
		formData: void 0,
		json,
		text: void 0
	};
}
function getLoadingNavigation(location, matches, historyAction, submission) {
	if (submission) return {
		state: "loading",
		location,
		matches,
		historyAction,
		formMethod: submission.formMethod,
		formAction: submission.formAction,
		formEncType: submission.formEncType,
		formData: submission.formData,
		json: submission.json,
		text: submission.text
	};
	else return {
		state: "loading",
		location,
		matches,
		historyAction,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0
	};
}
function getSubmittingNavigation(location, matches, historyAction, submission) {
	return {
		state: "submitting",
		location,
		matches,
		historyAction,
		formMethod: submission.formMethod,
		formAction: submission.formAction,
		formEncType: submission.formEncType,
		formData: submission.formData,
		json: submission.json,
		text: submission.text
	};
}
function getLoadingFetcher(submission, data) {
	if (submission) return {
		state: "loading",
		formMethod: submission.formMethod,
		formAction: submission.formAction,
		formEncType: submission.formEncType,
		formData: submission.formData,
		json: submission.json,
		text: submission.text,
		data
	};
	else return {
		state: "loading",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data
	};
}
function getSubmittingFetcher(submission, existingFetcher) {
	return {
		state: "submitting",
		formMethod: submission.formMethod,
		formAction: submission.formAction,
		formEncType: submission.formEncType,
		formData: submission.formData,
		json: submission.json,
		text: submission.text,
		data: existingFetcher ? existingFetcher.data : void 0
	};
}
function getDoneFetcher(data) {
	return {
		state: "idle",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data
	};
}
function restoreAppliedTransitions(_window, transitions) {
	try {
		let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
		if (sessionPositions) {
			let json = JSON.parse(sessionPositions);
			for (let [k, v] of Object.entries(json || {})) if (v && Array.isArray(v)) transitions.set(k, new Set(v || []));
		}
	} catch {}
}
function persistAppliedTransitions(_window, transitions) {
	if (transitions.size > 0) {
		let json = {};
		for (let [k, v] of transitions) json[k] = [...v];
		try {
			_window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
		} catch (error) {
			warning(false, `Failed to save applied view transitions in sessionStorage (${error}).`);
		}
	}
}
function createDeferred() {
	let resolve;
	let reject;
	let promise = new Promise((res, rej) => {
		resolve = async (val) => {
			res(val);
			try {
				await promise;
			} catch {}
		};
		reject = async (error) => {
			rej(error);
			try {
				await promise;
			} catch {}
		};
	});
	return {
		promise,
		resolve,
		reject
	};
}
//#endregion


// EXTERNAL MODULE: ./node_modules/react-router/dist/production/lib/context.js
var lib_context = __webpack_require__(9189);
;// CONCATENATED MODULE: ./node_modules/react-router/dist/production/lib/errors.js
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

//#region lib/errors.ts
const ERROR_DIGEST_BASE = "REACT_ROUTER_ERROR";
const ERROR_DIGEST_REDIRECT = "REDIRECT";
const ERROR_DIGEST_ROUTE_ERROR_RESPONSE = "ROUTE_ERROR_RESPONSE";
function decodeRedirectErrorDigest(digest) {
	if (digest.startsWith(`${ERROR_DIGEST_BASE}:${ERROR_DIGEST_REDIRECT}:{`)) try {
		let parsed = JSON.parse(digest.slice(28));
		if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string" && typeof parsed.location === "string" && typeof parsed.reloadDocument === "boolean" && typeof parsed.replace === "boolean") return parsed;
	} catch {}
}
function decodeRouteErrorResponseDigest(digest) {
	if (digest.startsWith(`${ERROR_DIGEST_BASE}:${ERROR_DIGEST_ROUTE_ERROR_RESPONSE}:{`)) try {
		let parsed = JSON.parse(digest.slice(40));
		if (typeof parsed === "object" && parsed && typeof parsed.status === "number" && typeof parsed.statusText === "string") return new utils/* .ErrorResponseImpl */.cj(parsed.status, parsed.statusText, parsed.data);
	} catch {}
}
//#endregion


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// CONCATENATED MODULE: ./node_modules/react-router/dist/production/lib/hooks.js
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */







//#region lib/hooks.tsx
/**
* Resolves a URL against the current {@link Location}.
*
* @example
* import { useHref } from "react-router";
*
* function SomeComponent() {
*   let href = useHref("some/where");
*   // "/resolved/some/where"
* }
*
* @public
* @category Hooks
* @param to The path to resolve
* @param options Options
* @param options.relative Defaults to `"route"` so routing is relative to the
* route tree.
* Set to `"path"` to make relative routing operate against path segments.
* @returns The resolved href string
*/
function useHref(to, { relative } = {}) {
	(0,router_history/* .invariant */.V1)(useInRouterContext(), `useHref() may be used only in the context of a <Router> component.`);
	let { basename, navigator } = react.useContext(lib_context/* .NavigationContext */._3);
	let { hash, pathname, search } = useResolvedPath(to, { relative });
	let joinedPathname = pathname;
	if (basename !== "/") joinedPathname = pathname === "/" ? basename : (0,utils/* .joinPaths */.HS)([basename, pathname]);
	return navigator.createHref({
		pathname: joinedPathname,
		search,
		hash
	});
}
/**
* Returns `true` if this component is a descendant of a {@link Router}, useful
* to ensure a component is used within a {@link Router}.
*
* @public
* @category Hooks
* @mode framework
* @mode data
* @returns Whether the component is within a {@link Router} context
*/
function useInRouterContext() {
	return react.useContext(lib_context/* .LocationContext */.di) != null;
}
/**
* Returns the current {@link Location}. This can be useful if you'd like to
* perform some side effect whenever it changes.
*
* @example
* import * as React from 'react'
* import { useLocation } from 'react-router'
*
* function SomeComponent() {
*   let location = useLocation()
*
*   React.useEffect(() => {
*     // Google Analytics
*     ga('send', 'pageview')
*   }, [location]);
*
*   return (
*     // ...
*   );
* }
*
* @public
* @category Hooks
* @returns The current {@link Location} object
*/
function useLocation() {
	(0,router_history/* .invariant */.V1)(useInRouterContext(), `useLocation() may be used only in the context of a <Router> component.`);
	return react.useContext(lib_context/* .LocationContext */.di).location;
}
/**
* Returns the current {@link Navigation} action which describes how the router
* came to the current {@link Location}, either by a pop, push, or replace on
* the [`History`](https://developer.mozilla.org/en-US/docs/Web/API/History) stack.
*
* @public
* @category Hooks
* @returns The current {@link NavigationType} (`"POP"`, `"PUSH"`, or `"REPLACE"`)
*/
function useNavigationType() {
	return React$1.useContext(LocationContext).navigationType;
}
/**
* Returns a {@link PathMatch} object if the given pattern matches the current URL.
* This is useful for components that need to know "active" state, e.g.
* {@link NavLink | `<NavLink>`}.
*
* @public
* @category Hooks
* @param pattern The pattern to match against the current {@link Location}
* @returns The path match object if the pattern matches, `null` otherwise
*/
function useMatch(pattern) {
	invariant(useInRouterContext(), `useMatch() may be used only in the context of a <Router> component.`);
	let { pathname } = useLocation();
	return React$1.useMemo(() => matchPath(pattern, decodePath(pathname)), [pathname, pattern]);
}
const navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
/**
* Returns a function that lets you navigate programmatically in the browser in
* response to user interactions or effects.
*
* It's often better to use {@link redirect} in [`action`](../../start/framework/route-module#action)/[`loader`](../../start/framework/route-module#loader)
* functions than this hook.
*
* The returned function signature is `navigate(to, options?)`/`navigate(delta)` where:
*
* * `to` can be a string path, a {@link To} object, or a number (delta)
* * `options` contains options for modifying the navigation
*   * These options work in all modes (Framework, Data, and Declarative):
*     * `relative`: `"route"` or `"path"` to control relative routing logic
*     * `replace`: Replace the current entry in the [`History`](https://developer.mozilla.org/en-US/docs/Web/API/History) stack
*     * `state`: Optional [`history.state`](https://developer.mozilla.org/en-US/docs/Web/API/History/state) to include with the new {@link Location}
*   * These options only work in Framework and Data modes:
*     * `flushSync`: Wrap the DOM updates in [`ReactDom.flushSync`](https://react.dev/reference/react-dom/flushSync)
*     * `preventScrollReset`: Do not scroll back to the top of the page after navigation
*     * `viewTransition`: **Deprecated.** Use React's [`<ViewTransition>`](https://react.dev/reference/react/ViewTransition) component instead. See the [migration guide](../../how-to/view-transitions).
*
* @example
* import { useNavigate } from "react-router";
*
* function SomeComponent() {
*   let navigate = useNavigate();
*   return (
*     <button onClick={() => navigate(-1)}>
*       Go Back
*     </button>
*   );
* }
*
* @additionalExamples
* ### Navigate to another path
*
* ```tsx
* navigate("/some/route");
* navigate("/some/route?search=param");
* ```
*
* ### Navigate with a {@link To} object
*
* All properties are optional.
*
* ```tsx
* navigate(
*   {
*     pathname: "/some/route",
*     search: "?search=param",
*     hash: "#hash",
*   },
*   {
*     state: { some: "state" },
*   },
* );
* ```
*
* If you use `state`, that will be available on the {@link Location} object on
* the next page. Access it with `useLocation().state` (see {@link useLocation}).
*
* ### Navigate back or forward in the history stack
*
* ```tsx
* // back
* // often used to close modals
* navigate(-1);
*
* // forward
* // often used in a multistep wizard workflows
* navigate(1);
* ```
*
* Be cautious with `navigate(number)`. If your application can load up to a
* route that has a button that tries to navigate forward/back, there may not be
* a [`History`](https://developer.mozilla.org/en-US/docs/Web/API/History)
* entry to go back or forward to, or it can go somewhere you don't expect
* (like a different domain).
*
* Only use this if you're sure they will have an entry in the [`History`](https://developer.mozilla.org/en-US/docs/Web/API/History)
* stack to navigate to.
*
* ### Replace the current entry in the history stack
*
* This will remove the current entry in the [`History`](https://developer.mozilla.org/en-US/docs/Web/API/History)
* stack, replacing it with a new one, similar to a server side redirect.
*
* ```tsx
* navigate("/some/route", { replace: true });
* ```
*
* ### Prevent Scroll Reset
*
* [MODES: framework, data]
*
* To prevent {@link ScrollRestoration | `<ScrollRestoration>`} from resetting
* the scroll position, use the `preventScrollReset` option.
*
* ```tsx
* navigate("?some-tab=1", { preventScrollReset: true });
* ```
*
* For example, if you have a tab interface connected to search params in the
* middle of a page, and you don't want it to scroll to the top when a tab is
* clicked.
*
* ### Return Type Augmentation
*
* Internally, `useNavigate` uses a separate implementation when you are in
* Declarative mode versus Data/Framework mode - the primary difference being
* that the latter is able to return a stable reference that does not change
* identity across navigations. The implementation in Data/Framework mode also
* returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* that resolves when the navigation is completed. This means the return type of
* `useNavigate` is `void | Promise<void>`. This is accurate, but can lead to
* some red squigglies based on the union in the return value:
*
* - If you're using `typescript-eslint`, you may see errors from
*   [`@typescript-eslint/no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises)
* - In Framework/Data mode, `React.use(navigate())` will show a false-positive
*   `Argument of type 'void | Promise<void>' is not assignable to parameter of
*   type 'Usable<void>'` error
*
* The easiest way to work around these issues is to augment the type based on the
* router you're using:
*
* ```ts
* // If using <BrowserRouter>
* declare module "react-router" {
*   interface NavigateFunction {
*     (to: To, options?: NavigateOptions): void;
*     (delta: number): void;
*   }
* }
*
* // If using <RouterProvider> or Framework mode
* declare module "react-router" {
*   interface NavigateFunction {
*     (to: To, options?: NavigateOptions): Promise<void>;
*     (delta: number): Promise<void>;
*   }
* }
* ```
*
* @public
* @category Hooks
* @returns A navigate function for programmatic navigation
*/
function useNavigate() {
	return react.useContext(lib_context/* .IsDataRouteContext */.HV) ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
	(0,router_history/* .invariant */.V1)(useInRouterContext(), `useNavigate() may be used only in the context of a <Router> component.`);
	let dataRouterContext = react.useContext(lib_context/* .DataRouterContext */.hf);
	let { basename, navigator } = react.useContext(lib_context/* .NavigationContext */._3);
	let { matches } = react.useContext(lib_context/* .RouteContext */.Pl);
	let { pathname: locationPathname } = useLocation();
	let routePathnamesJson = JSON.stringify((0,utils/* .getResolveToMatches */.PD)(matches));
	let activeRef = react.useRef(false);
	react.useLayoutEffect(() => {
		activeRef.current = true;
	});
	return react.useCallback((to, options = {}) => {
		(0,router_history/* .warning */.$e)(activeRef.current, navigateEffectWarning);
		if (!activeRef.current) return;
		if (typeof to === "number") {
			navigator.go(to);
			return;
		}
		let path = (0,utils/* .resolveTo */.Gh)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
		if (dataRouterContext == null && basename !== "/") path.pathname = path.pathname === "/" ? basename : (0,utils/* .joinPaths */.HS)([basename, path.pathname]);
		(0,router_navigation/* .validateNavigationTarget */.c)(typeof to === "string" ? to : (0,router_history/* .createPath */.AO)(to), navigator.createHref(path), (0,router_navigation/* .getNavigatorCurrentUrl */.Y)(navigator), "reject");
		(!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
	}, [
		basename,
		navigator,
		routePathnamesJson,
		locationPathname,
		dataRouterContext
	]);
}
const OutletContext = react.createContext(null);
/**
* Returns the parent route {@link Outlet | `<Outlet context>`}.
*
* Often parent routes manage state or other values you want shared with child
* routes. You can create your own [context provider](https://react.dev/learn/passing-data-deeply-with-context)
* if you like, but this is such a common situation that it's built-into
* {@link Outlet | `<Outlet>`}.
*
* ```tsx
* // Parent route
* function Parent() {
*   const [count, setCount] = React.useState(0);
*   return <Outlet context={[count, setCount]} />;
* }
* ```
*
* ```tsx
* // Child route
* import { useOutletContext } from "react-router";
*
* function Child() {
*   const [count, setCount] = useOutletContext();
*   const increment = () => setCount((c) => c + 1);
*   return <button onClick={increment}>{count}</button>;
* }
* ```
*
* If you're using TypeScript, we recommend the parent component provide a
* custom hook for accessing the context value. This makes it easier for
* consumers to get nice typings, control consumers, and know who's consuming
* the context value.
*
* Here's a more realistic example:
*
* ```tsx filename=src/routes/dashboard.tsx lines=[14,20]
* import { useState } from "react";
* import { Outlet, useOutletContext } from "react-router";
*
* import type { User } from "./types";
*
* type ContextType = { user: User | null };
*
* export default function Dashboard() {
*   const [user, setUser] = useState<User | null>(null);
*
*   return (
*     <div>
*       <h1>Dashboard</h1>
*       <Outlet context={{ user } satisfies ContextType} />
*     </div>
*   );
* }
*
* export function useUser() {
*   return useOutletContext<ContextType>();
* }
* ```
*
* ```tsx filename=src/routes/dashboard/messages.tsx lines=[1,4]
* import { useUser } from "../dashboard";
*
* export default function DashboardMessages() {
*   const { user } = useUser();
*   return (
*     <div>
*       <h2>Messages</h2>
*       <p>Hello, {user.name}!</p>
*     </div>
*   );
* }
* ```
*
* @public
* @category Hooks
* @returns The context value passed to the parent {@link Outlet} component
*/
function useOutletContext() {
	return React$1.useContext(OutletContext);
}
/**
* Returns the element for the child route at this level of the route
* hierarchy. Used internally by {@link Outlet | `<Outlet>`} to render child
* routes.
*
* @public
* @category Hooks
* @param context The context to pass to the outlet
* @returns The child route element or `null` if no child routes match
*/
function useOutlet(context) {
	let outlet = React$1.useContext(RouteContext).outlet;
	return React$1.useMemo(() => outlet && /* @__PURE__ */ React$1.createElement(OutletContext.Provider, { value: context }, outlet), [outlet, context]);
}
/**
* Returns an object of key/value-pairs of the dynamic params from the current
* URL that were matched by the routes. Child routes inherit all params from
* their parent routes.
*
* Assuming a route pattern like `/posts/:postId` is matched by `/posts/123`
* then `params.postId` will be `"123"`.
*
* @example
* import { useParams } from "react-router";
*
* function SomeComponent() {
*   let params = useParams();
*   params.postId;
* }
*
* @additionalExamples
* ### Basic Usage
*
* ```tsx
* import { useParams } from "react-router";
*
* // given a route like:
* <Route path="/posts/:postId" element={<Post />} />;
*
* // or a data route like:
* createBrowserRouter([
*   {
*     path: "/posts/:postId",
*     component: Post,
*   },
* ]);
*
* // or in routes.ts
* route("/posts/:postId", "routes/post.tsx");
* ```
*
* Access the params in a component:
*
* ```tsx
* import { useParams } from "react-router";
*
* export default function Post() {
*   let params = useParams();
*   return <h1>Post: {params.postId}</h1>;
* }
* ```
*
* ### Multiple Params
*
* Patterns can have multiple params:
*
* ```tsx
* "/posts/:postId/comments/:commentId";
* ```
*
* All will be available in the params object:
*
* ```tsx
* import { useParams } from "react-router";
*
* export default function Post() {
*   let params = useParams();
*   return (
*     <h1>
*       Post: {params.postId}, Comment: {params.commentId}
*     </h1>
*   );
* }
* ```
*
* ### Catchall Params
*
* Catchall params are defined with `*`:
*
* ```tsx
* "/files/*";
* ```
*
* The matched value will be available in the params object as follows:
*
* ```tsx
* import { useParams } from "react-router";
*
* export default function File() {
*   let params = useParams();
*   let catchall = params["*"];
*   // ...
* }
* ```
*
* You can destructure the catchall param:
*
* ```tsx
* export default function File() {
*   let { "*": catchall } = useParams();
*   console.log(catchall);
* }
* ```
*
* @public
* @category Hooks
* @returns An object containing the dynamic route parameters
*/
function useParams() {
	let { matches } = React$1.useContext(RouteContext);
	return matches[matches.length - 1]?.params ?? {};
}
/**
* Resolves the pathname of the given `to` value against the current
* {@link Location}. Similar to {@link useHref}, but returns a
* {@link Path} instead of a string.
*
* @example
* import { useResolvedPath } from "react-router";
*
* function SomeComponent() {
*   // if the user is at /dashboard/profile
*   let path = useResolvedPath("../accounts");
*   path.pathname; // "/dashboard/accounts"
*   path.search; // ""
*   path.hash; // ""
* }
*
* @public
* @category Hooks
* @param to The path to resolve
* @param options Options
* @param options.relative Defaults to `"route"` so routing is relative to the route tree.
*                         Set to `"path"` to make relative routing operate against path segments.
* @returns The resolved {@link Path} object with `pathname`, `search`, and `hash`
*/
function useResolvedPath(to, { relative } = {}) {
	let { matches } = react.useContext(lib_context/* .RouteContext */.Pl);
	let { pathname: locationPathname } = useLocation();
	let routePathnamesJson = JSON.stringify((0,utils/* .getResolveToMatches */.PD)(matches));
	return react.useMemo(() => (0,utils/* .resolveTo */.Gh)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [
		to,
		routePathnamesJson,
		locationPathname,
		relative
	]);
}
/**
* Hook version of {@link Routes | `<Routes>`} that uses objects instead of
* components. These objects have the same properties as the component props.
* The return value of `useRoutes` is either a valid React element you can use
* to render the route tree, or `null` if nothing matched.
*
* @example
* import { useRoutes } from "react-router";
*
* function App() {
*   let element = useRoutes([
*     {
*       path: "/",
*       element: <Dashboard />,
*       children: [
*         {
*           path: "messages",
*           element: <DashboardMessages />,
*         },
*         { path: "tasks", element: <DashboardTasks /> },
*       ],
*     },
*     { path: "team", element: <AboutPage /> },
*   ]);
*
*   return element;
* }
*
* @public
* @category Hooks
* @param routes An array of {@link RouteObject}s that define the route hierarchy
* @param locationArg An optional {@link Location} object or pathname string to
* use instead of the current {@link Location}
* @returns A React element to render the matched route, or `null` if no routes matched
*/
function useRoutes(routes, locationArg) {
	return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterOpts) {
	(0,router_history/* .invariant */.V1)(useInRouterContext(), `useRoutes() may be used only in the context of a <Router> component.`);
	let { navigator } = react.useContext(lib_context/* .NavigationContext */._3);
	let { matches: parentMatches } = react.useContext(lib_context/* .RouteContext */.Pl);
	let routeMatch = parentMatches[parentMatches.length - 1];
	let parentParams = routeMatch ? routeMatch.params : {};
	routeMatch && routeMatch.pathname;
	let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
	routeMatch && routeMatch.route;
	let locationFromContext = useLocation();
	let location;
	if (locationArg) {
		let parsedLocationArg = typeof locationArg === "string" ? (0,router_history/* .parsePath */.Rr)(locationArg) : locationArg;
		(0,router_history/* .invariant */.V1)(parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`);
		location = parsedLocationArg;
	} else location = locationFromContext;
	let pathname = location.pathname || "/";
	let remainingPathname = pathname;
	if (parentPathnameBase !== "/") {
		let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
		remainingPathname = "/" + pathname.replace(/^\//, "").split("/").slice(parentSegments.length).join("/");
	}
	let matches;
	if (dataRouterOpts) if (dataRouterOpts.state.matches.length) matches = dataRouterOpts.state.matches.map((m) => Object.assign(m, { route: dataRouterOpts.manifest[m.route.id] || m.route }));
	else matches = dataRouterOpts.router.match(dataRouterOpts.state.location);
	else matches = (0,utils/* .matchRoutes */.ue)(routes, { pathname: remainingPathname });
	let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
		params: Object.assign({}, parentParams, match.params),
		pathname: (0,utils/* .joinPaths */.HS)([parentPathnameBase, navigator.encodeLocation ? navigator.encodeLocation(match.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : match.pathname]),
		pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0,utils/* .joinPaths */.HS)([parentPathnameBase, navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : match.pathnameBase])
	})), parentMatches, dataRouterOpts);
	if (locationArg && renderedMatches) return /* @__PURE__ */ react.createElement(lib_context/* .LocationContext.Provider */.di.Provider, { value: {
		location: {
			pathname: "/",
			search: "",
			hash: "",
			state: null,
			key: "default",
			mask: void 0,
			...location
		},
		navigationType: "POP"
	} }, renderedMatches);
	return renderedMatches;
}
function DefaultErrorComponent() {
	let error = useRouteError();
	let message = (0,utils/* .isRouteErrorResponse */.pX)(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
	let stack = error instanceof Error ? error.stack : null;
	return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ react.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ react.createElement("pre", { style: {
		padding: "0.5rem",
		backgroundColor: "rgba(200,200,200, 0.5)"
	} }, stack) : null, null);
}
const defaultErrorElement = /* @__PURE__ */ react.createElement(DefaultErrorComponent, null);
var RenderErrorBoundary = class extends react.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: props.location,
			revalidation: props.revalidation,
			error: props.error
		};
	}
	static contextType = lib_context/* .RSCRouterContext */.Bu;
	static getDerivedStateFromError(error) {
		return { error };
	}
	static getDerivedStateFromProps(props, state) {
		if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") return {
			error: props.error,
			location: props.location,
			revalidation: props.revalidation
		};
		return {
			error: props.error !== void 0 ? props.error : state.error,
			location: state.location,
			revalidation: props.revalidation || state.revalidation
		};
	}
	componentDidCatch(error, errorInfo) {
		if (this.props.onError) this.props.onError(error, errorInfo);
		else console.error("React Router caught the following error during render", error);
	}
	render() {
		let error = this.state.error;
		if (this.context && typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
			const decoded = decodeRouteErrorResponseDigest(error.digest);
			if (decoded) error = decoded;
		}
		let result = error !== void 0 ? /* @__PURE__ */ react.createElement(lib_context/* .RouteContext.Provider */.Pl.Provider, { value: this.props.routeContext }, /* @__PURE__ */ react.createElement(lib_context/* .IsDataRouteContext.Provider */.HV.Provider, { value: this.props.routeContext.isDataRoute }, /* @__PURE__ */ react.createElement(lib_context/* .RouteIdContext.Provider */.K$.Provider, { value: this.props.routeContext.matches[this.props.routeContext.matches.length - 1]?.route.id }, /* @__PURE__ */ react.createElement(lib_context/* .RouteErrorContext.Provider */.xN.Provider, {
			value: error,
			children: this.props.component
		})))) : this.props.children;
		if (this.context) return /* @__PURE__ */ react.createElement(RSCErrorHandler, { error }, result);
		return result;
	}
};
const errorRedirectHandledMap = /* @__PURE__ */ new WeakMap();
function RSCErrorHandler({ children, error }) {
	let { basename, navigator } = react.useContext(lib_context/* .NavigationContext */._3);
	if (typeof error === "object" && error && "digest" in error && typeof error.digest === "string") {
		let redirect = decodeRedirectErrorDigest(error.digest);
		if (redirect) {
			let existingRedirect = errorRedirectHandledMap.get(error);
			if (existingRedirect) throw existingRedirect;
			let parsed = (0,utils/* .parseToInfo */.X9)(redirect.location, basename);
			let target = parsed.absoluteURL || parsed.to;
			(0,router_navigation/* .validateNavigationTarget */.c)(redirect.location, target, (0,router_navigation/* .getNavigatorCurrentUrl */.Y)(navigator), "allow-explicit");
			if (hasInvalidProtocol(target)) throw new Error("Invalid redirect location");
			if (utils/* .isBrowser */.Bd && !errorRedirectHandledMap.get(error)) if (parsed.isExternal || redirect.reloadDocument) window.location.href = target;
			else {
				const redirectPromise = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(parsed.to, { replace: redirect.replace }));
				errorRedirectHandledMap.set(error, redirectPromise);
				throw redirectPromise;
			}
			return /* @__PURE__ */ react.createElement("meta", {
				httpEquiv: "refresh",
				content: `0;url=${target}`
			});
		}
	}
	return children;
}
function RenderedRoute({ routeContext, match, children }) {
	let dataRouterContext = react.useContext(lib_context/* .DataRouterContext */.hf);
	if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
	return /* @__PURE__ */ react.createElement(lib_context/* .RouteContext.Provider */.Pl.Provider, { value: routeContext }, /* @__PURE__ */ react.createElement(lib_context/* .IsDataRouteContext.Provider */.HV.Provider, { value: routeContext.isDataRoute }, /* @__PURE__ */ react.createElement(lib_context/* .RouteIdContext.Provider */.K$.Provider, { value: match.route.id }, children)));
}
function _renderMatches(matches, parentMatches = [], dataRouterOpts) {
	let dataRouterState = dataRouterOpts?.state;
	if (matches == null) {
		if (!dataRouterState) return null;
		if (dataRouterState.errors) matches = dataRouterState.matches;
		else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) matches = dataRouterState.matches;
		else return null;
	}
	let renderedMatches = matches;
	let errors = dataRouterState?.errors;
	if (errors != null) {
		let errorIndex = renderedMatches.findIndex((m) => m.route.id && errors?.[m.route.id] !== void 0);
		(0,router_history/* .invariant */.V1)(errorIndex >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(errors).join(",")}`);
		renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
	}
	let renderFallback = false;
	let fallbackIndex = -1;
	if (dataRouterOpts && dataRouterState) {
		renderFallback = dataRouterState.renderFallback;
		for (let i = 0; i < renderedMatches.length; i++) {
			let match = renderedMatches[i];
			if (match.route.HydrateFallback || match.route.hydrateFallbackElement) fallbackIndex = i;
			if (match.route.id) {
				let { loaderData, errors } = dataRouterState;
				let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors || errors[match.route.id] === void 0);
				if (match.route.lazy || needsToRunLoader) {
					if (dataRouterOpts.isStatic) renderFallback = true;
					if (fallbackIndex >= 0) renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
					else renderedMatches = [renderedMatches[0]];
					break;
				}
			}
		}
	}
	let onErrorHandler = dataRouterOpts?.onError;
	let onError = dataRouterState && onErrorHandler ? (error, errorInfo) => {
		onErrorHandler(error, {
			location: dataRouterState.location,
			params: dataRouterState.matches?.[0]?.params ?? {},
			pattern: (0,utils/* .getRoutePattern */.gU)(dataRouterState.matches),
			errorInfo
		});
	} : void 0;
	return renderedMatches.reduceRight((outlet, match, index) => {
		let error;
		let shouldRenderHydrateFallback = false;
		let errorElement = null;
		let hydrateFallbackElement = null;
		if (dataRouterState) {
			error = errors && match.route.id ? errors[match.route.id] : void 0;
			errorElement = match.route.errorElement || defaultErrorElement;
			if (renderFallback) {
				if (fallbackIndex < 0 && index === 0) {
					warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
					shouldRenderHydrateFallback = true;
					hydrateFallbackElement = null;
				} else if (fallbackIndex === index) {
					shouldRenderHydrateFallback = true;
					hydrateFallbackElement = match.route.hydrateFallbackElement || null;
				}
			}
		}
		let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
		let getChildren = () => {
			let children;
			if (error) children = errorElement;
			else if (shouldRenderHydrateFallback) children = hydrateFallbackElement;
			else if (match.route.Component) children = /* @__PURE__ */ react.createElement(match.route.Component, null);
			else if (match.route.element) children = match.route.element;
			else children = outlet;
			return /* @__PURE__ */ react.createElement(RenderedRoute, {
				match,
				routeContext: {
					outlet,
					matches,
					isDataRoute: dataRouterState != null
				},
				children
			});
		};
		return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ react.createElement(RenderErrorBoundary, {
			location: dataRouterState.location,
			revalidation: dataRouterState.revalidation,
			component: errorElement,
			error,
			children: getChildren(),
			routeContext: {
				outlet: null,
				matches,
				isDataRoute: true
			},
			onError
		}) : getChildren();
	}, null);
}
function getDataRouterConsoleError(hookName) {
	return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext(hookName) {
	let ctx = react.useContext(lib_context/* .DataRouterContext */.hf);
	(0,router_history/* .invariant */.V1)(ctx, getDataRouterConsoleError(hookName));
	return ctx;
}
function useDataRouterState(hookName) {
	let state = react.useContext(lib_context/* .DataRouterStateContext */.ay);
	(0,router_history/* .invariant */.V1)(state, getDataRouterConsoleError(hookName));
	return state;
}
function useDataRouterFetchers(hookName) {
	let fetchers = React$1.useContext(FetchersContext);
	invariant(fetchers, getDataRouterConsoleError(hookName));
	return fetchers;
}
function useDataRouterData(hookName) {
	let data = react.useContext(lib_context/* .DataRouterDataContext */.nW);
	(0,router_history/* .invariant */.V1)(data, getDataRouterConsoleError(hookName));
	return data;
}
function useDataRouterNavigation(hookName) {
	let navigation = react.useContext(lib_context/* .DataRouterNavigationContext */.Fw);
	(0,router_history/* .invariant */.V1)(navigation, getDataRouterConsoleError(hookName));
	return navigation;
}
function useCurrentRouteId(hookName) {
	let routeId = react.useContext(lib_context/* .RouteIdContext */.K$);
	(0,router_history/* .invariant */.V1)(routeId, `${hookName} can only be used on routes that contain a unique "id"`);
	return routeId;
}
/**
* Returns the current {@link Navigation}, defaulting to an "idle" navigation
* when no navigation is in progress. You can use this to render pending UI
* (like a global spinner) or read [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
* from a form navigation.
*
* @example
* import { useNavigation } from "react-router";
*
* function SomeComponent() {
*   let navigation = useNavigation();
*   navigation.state;
*   navigation.formData;
*   // etc.
* }
*
* @public
* @category Hooks
* @mode framework
* @mode data
* @returns The current {@link Navigation} object
*/
function useNavigation() {
	let { navigation } = useDataRouterNavigation("useNavigation");
	return react.useMemo(() => {
		let { matches, historyAction, ...rest } = navigation;
		return rest;
	}, [navigation]);
}
/**
* Revalidate the data on the page for reasons outside of normal data mutations
* like [`Window` focus](https://developer.mozilla.org/en-US/docs/Web/API/Window/focus_event)
* or polling on an interval.
*
* Note that page data is already revalidated automatically after actions.
* If you find yourself using this for normal CRUD operations on your data in
* response to user interactions, you're probably not taking advantage of the
* other APIs like {@link useFetcher}, {@link Form}, {@link useSubmit} that do
* this automatically.
*
* @example
* import { useRevalidator } from "react-router";
*
* function WindowFocusRevalidator() {
*   const revalidator = useRevalidator();
*
*   useFakeWindowFocus(() => {
*     revalidator.revalidate();
*   });
*
*   return (
*     <div hidden={revalidator.state === "idle"}>
*       Revalidating...
*     </div>
*   );
* }
*
* @public
* @category Hooks
* @mode framework
* @mode data
* @returns An object with a `revalidate` function and the current revalidation
* `state`
*/
function useRevalidator() {
	let dataRouterContext = useDataRouterContext("useRevalidator");
	let { revalidation } = useDataRouterNavigation("useRevalidator");
	let revalidate = React$1.useCallback(async () => {
		await dataRouterContext.router.revalidate();
	}, [dataRouterContext.router]);
	return React$1.useMemo(() => ({
		revalidate,
		state: revalidation
	}), [revalidate, revalidation]);
}
/**
* Returns the active route matches, useful for accessing `loaderData` for
* parent/child routes or the route [`handle`](../../start/framework/route-module#handle)
* property
*
* Pairing the route `handle` with `useMatches` gets very powerful since you can put
* whatever you want on a route handle and have access to `useMatches` anywhere.
* Please see the [handle](../../how-to/using-handle) documentation for an example
* of breadcrumbs via `useMatches`/`handle`.
*
* ```tsx
* import { useMatches } from "react-router";
*
* function SomeComponent() {
*   const matches = useMatches();
*   // matches[i].id          // route id
*   // matches[i].pathname    // the portion of the URL the route matched
*   // matches[i].params      // the parsed params from the URL
*   // matches[i].loaderData  // the data from the loader
*   // matches[i].handle      // the route handle with any app specific data
* }
* ```
*
* <docs-info>useMatches only works with a data router like `createBrowserRouter`,
* since they know the full route tree up front and can provide all of the current
* matches. Additionally, `useMatches` will not match down into any descendant route
* trees since the router isn't aware of the descendant routes.</docs-info>
*
* @public
* @category Hooks
* @mode framework
* @mode data
* @returns An array of {@link UIMatch | UI matches} for the current route hierarchy
*/
function useMatches() {
	let { matches } = useDataRouterState("useMatches");
	let { loaderData } = useDataRouterData("useMatches");
	return react.useMemo(() => matches.map((m) => (0,utils/* .convertRouteMatchToUiMatch */.wy)(m, loaderData)), [matches, loaderData]);
}
/**
* Returns the data from the closest route
* [`loader`](../../start/framework/route-module#loader) or
* [`clientLoader`](../../start/framework/route-module#clientloader).
*
* @example
* import { useLoaderData } from "react-router";
*
* export async function loader() {
*   return await fakeDb.invoices.findAll();
* }
*
* export default function Invoices() {
*   let invoices = useLoaderData<typeof loader>();
*   // ...
* }
*
* @public
* @category Hooks
* @mode framework
* @mode data
* @returns The data returned from the route's [`loader`](../../start/framework/route-module#loader) or [`clientLoader`](../../start/framework/route-module#clientloader) function
*/
function useLoaderData() {
	let data = useDataRouterData("useLoaderData");
	let routeId = useCurrentRouteId("useLoaderData");
	return data.loaderData[routeId];
}
/**
* Returns the [`loader`](../../start/framework/route-module#loader) data for a
* given route by route ID.
*
* Route IDs are created automatically. They are simply the path of the route file
* relative to the app folder without the extension.
*
* | Route Filename               | Route ID               |
* | ---------------------------- | ---------------------- |
* | `app/root.tsx`               | `"root"`               |
* | `app/routes/teams.tsx`       | `"routes/teams"`       |
* | `app/whatever/teams.$id.tsx` | `"whatever/teams.$id"` |
*
* @example
* import { useRouteLoaderData } from "react-router";
*
* function SomeComponent() {
*   const { user } = useRouteLoaderData("root");
* }
*
* // You can also specify your own route ID's manually in your routes.ts file:
* route("/", "containers/app.tsx", { id: "app" })
* useRouteLoaderData("app");
*
* @public
* @category Hooks
* @mode framework
* @mode data
* @param routeId The ID of the route to return loader data from
* @returns The data returned from the specified route's [`loader`](../../start/framework/route-module#loader)
* function, or `undefined` if not found
*/
function useRouteLoaderData(routeId) {
	return useDataRouterData("useRouteLoaderData").loaderData[routeId];
}
/**
* Returns the [`action`](../../start/framework/route-module#action) data from
* the most recent `POST` navigation form submission or `undefined` if there
* hasn't been one.
*
* @example
* import { Form, useActionData } from "react-router";
*
* export async function action({ request }) {
*   const body = await request.formData();
*   const name = body.get("visitorsName");
*   return { message: `Hello, ${name}` };
* }
*
* export default function Invoices() {
*   const data = useActionData();
*   return (
*     <Form method="post">
*       <input type="text" name="visitorsName" />
*       {data ? data.message : "Waiting..."}
*     </Form>
*   );
* }
*
* @public
* @category Hooks
* @mode framework
* @mode data
* @returns The data returned from the route's [`action`](../../start/framework/route-module#action)
* function, or `undefined` if no [`action`](../../start/framework/route-module#action)
* has been called
*/
function useActionData() {
	let data = useDataRouterData("useActionData");
	let routeId = useCurrentRouteId("useActionData");
	return data.actionData ? data.actionData[routeId] : void 0;
}
/**
* Accesses the error thrown during an
* [`action`](../../start/framework/route-module#action),
* [`loader`](../../start/framework/route-module#loader),
* or component render to be used in a route module
* [`ErrorBoundary`](../../start/framework/route-module#errorboundary).
*
* @example
* export function ErrorBoundary() {
*   const error = useRouteError();
*   return <div>{error.message}</div>;
* }
*
* @public
* @category Hooks
* @mode framework
* @mode data
* @returns The error that was thrown during route [loading](../../start/framework/route-module#loader),
* [`action`](../../start/framework/route-module#action) execution, or rendering
*/
function useRouteError() {
	let error = react.useContext(lib_context/* .RouteErrorContext */.xN);
	let data = useDataRouterData("useRouteError");
	let routeId = useCurrentRouteId("useRouteError");
	if (error !== void 0) return error;
	return data.errors?.[routeId];
}
/**
* Returns the resolved promise value from the closest {@link Await | `<Await>`}.
*
* @example
* function SomeDescendant() {
*   const value = useAsyncValue();
*   // ...
* }
*
* // somewhere in your app
* <Await resolve={somePromise}>
*   <SomeDescendant />
* </Await>;
*
* @public
* @category Hooks
* @mode framework
* @mode data
* @returns The resolved value from the nearest {@link Await} component
*/
function useAsyncValue() {
	let value = React$1.useContext(AwaitContext);
	return value && "status" in value && !("_tracked" in value) ? value.status === "fulfilled" ? value.value : void 0 : value?._data;
}
/**
* Returns the rejection value from the closest {@link Await | `<Await>`}.
*
* @example
* import { Await, useAsyncError } from "react-router";
*
* function ErrorElement() {
*   const error = useAsyncError();
*   return (
*     <p>Uh Oh, something went wrong! {error.message}</p>
*   );
* }
*
* // somewhere in your app
* <Await
*   resolve={promiseThatRejects}
*   errorElement={<ErrorElement />}
* />;
*
* @public
* @category Hooks
* @mode framework
* @mode data
* @returns The error that was thrown in the nearest {@link Await} component
*/
function useAsyncError() {
	let value = React$1.useContext(AwaitContext);
	return value && "status" in value && !("_tracked" in value) ? value.status === "rejected" ? value.reason : void 0 : value?._error;
}
let blockerId = 0;
/**
* Allow the application to block navigations within the SPA and present the
* user a confirmation dialog to confirm the navigation. Mostly used to avoid
* using half-filled form data. This does not handle hard-reloads or
* cross-origin navigations.
*
* The {@link Blocker} object returned by the hook has the following properties:
*
* - **`state`**
*   - `unblocked` - the blocker is idle and has not prevented any navigation
*   - `blocked` - the blocker has prevented a navigation
*   - `proceeding` - the blocker is proceeding through from a blocked navigation
* - **`location`**
*   - When in a `blocked` state, this represents the {@link Location} to which
*     we blocked a navigation. When in a `proceeding` state, this is the
*     location being navigated to after a `blocker.proceed()` call.
* - **`proceed()`**
*   - When in a `blocked` state, you may call `blocker.proceed()` to proceed to
*     the blocked location.
* - **`reset()`**
*   - When in a `blocked` state, you may call `blocker.reset()` to return the
*     blocker to an `unblocked` state and leave the user at the current
*     location.
*
* @example
* // Boolean version
* let blocker = useBlocker(value !== "");
*
* // Function version
* let blocker = useBlocker(
*   ({ currentLocation, nextLocation, historyAction }) =>
*     value !== "" &&
*     currentLocation.pathname !== nextLocation.pathname
* );
*
* @additionalExamples
* ```tsx
* import { useCallback, useState } from "react";
* import { BlockerFunction, useBlocker } from "react-router";
*
* export function ImportantForm() {
*   const [value, setValue] = useState("");
*
*   const shouldBlock = useCallback<BlockerFunction>(
*     () => value !== "",
*     [value]
*   );
*   const blocker = useBlocker(shouldBlock);
*
*   return (
*     <form
*       onSubmit={(e) => {
*         e.preventDefault();
*         setValue("");
*         if (blocker.state === "blocked") {
*           blocker.proceed();
*         }
*       }}
*     >
*       <input
*         name="data"
*         value={value}
*         onChange={(e) => setValue(e.target.value)}
*       />
*
*       <button type="submit">Save</button>
*
*       {blocker.state === "blocked" ? (
*         <>
*           <p style={{ color: "red" }}>
*             Blocked the last navigation to
*           </p>
*           <button
*             type="button"
*             onClick={() => blocker.proceed()}
*           >
*             Let me through
*           </button>
*           <button
*             type="button"
*             onClick={() => blocker.reset()}
*           >
*             Keep me here
*           </button>
*         </>
*       ) : blocker.state === "proceeding" ? (
*         <p style={{ color: "orange" }}>
*           Proceeding through blocked navigation
*         </p>
*       ) : (
*         <p style={{ color: "green" }}>
*           Blocker is currently unblocked
*         </p>
*       )}
*     </form>
*   );
* }
* ```
*
* @public
* @category Hooks
* @mode framework
* @mode data
* @param shouldBlock Either a boolean or a function returning a boolean which
* indicates whether the navigation should be blocked. The function format
* receives a single object parameter containing the `currentLocation`,
* `nextLocation`, and `historyAction` of the potential navigation.
* @returns A {@link Blocker} object with state and reset functionality
*/
function useBlocker(shouldBlock) {
	let { router, basename } = useDataRouterContext("useBlocker");
	let state = useDataRouterState("useBlocker");
	let [blockerKey, setBlockerKey] = React$1.useState("");
	let blockerFunction = React$1.useCallback((arg) => {
		if (typeof shouldBlock !== "function") return !!shouldBlock;
		if (basename === "/") return shouldBlock(arg);
		let { currentLocation, nextLocation, historyAction } = arg;
		return shouldBlock({
			currentLocation: {
				...currentLocation,
				pathname: stripBasename(currentLocation.pathname, basename) || currentLocation.pathname
			},
			nextLocation: {
				...nextLocation,
				pathname: stripBasename(nextLocation.pathname, basename) || nextLocation.pathname
			},
			historyAction
		});
	}, [basename, shouldBlock]);
	React$1.useEffect(() => {
		let key = String(++blockerId);
		setBlockerKey(key);
		return () => router.deleteBlocker(key);
	}, [router]);
	React$1.useEffect(() => {
		if (blockerKey !== "") router.getBlocker(blockerKey, blockerFunction);
	}, [
		router,
		blockerKey,
		blockerFunction
	]);
	return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : IDLE_BLOCKER;
}
function useNavigateStable() {
	let { router } = useDataRouterContext("useNavigate");
	let id = useCurrentRouteId("useNavigate");
	let activeRef = react.useRef(false);
	react.useLayoutEffect(() => {
		activeRef.current = true;
	});
	return react.useCallback(async (to, options = {}) => {
		(0,router_history/* .warning */.$e)(activeRef.current, navigateEffectWarning);
		if (!activeRef.current) return;
		if (typeof to === "number") await router.navigate(to);
		else await router.navigate(to, {
			fromRouteId: id,
			...options
		});
	}, [router, id]);
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
	if (!cond && !alreadyWarned[key]) {
		alreadyWarned[key] = true;
		(0,router_history/* .warning */.$e)(false, message);
	}
}
function useRoute(...args) {
	const currentRouteId = useCurrentRouteId("useRoute");
	const id = args[0] ?? currentRouteId;
	const state = useDataRouterState("useRoute");
	const data = useDataRouterData("useRoute");
	const route = state.matches.find(({ route }) => route.id === id);
	if (route === void 0) return void 0;
	return {
		handle: route.route.handle,
		loaderData: data.loaderData[id],
		actionData: data.actionData?.[id]
	};
}
function toRouterStateMatch(match) {
	return {
		id: match.route.id,
		pathname: match.pathname,
		params: match.params,
		handle: match.route.handle
	};
}
/**
* A unified hook for reading router state: current (`active`) and in-flight
* (`pending`) locations, search params, params, matches, and navigation type.
*
* This hook consolidates the information you used to get from {@link useLocation},
* {@link useSearchParams}, {@link useParams}, {@link useMatches}, {@link useNavigation},
* and {@link useNavigationType} into a single hook.
*
*
* @example
* import { unstable_useRouterState as useRouterState } from "react-router";
*
* let { active, pending } = useRouterState();
*
* // Active is always populated with the current location
* active.location; // replaces `useLocation()`
* active.searchParams; // replaces `useSearchParams()[0]`
* active.params; // replaces `useParams()`
* active.matches; // replaces `useMatches()`
* active.type; // replaces `useNavigationType()`
*
* // Pending is only populated during a navigation
* pending.location; // replaces `useNavigation().location`
* pending.searchParams; // equivalent to `new URLSearchParams(useNavigation().search)`
* pending.params; // Not directly accessible today
* pending.matches; // Not directly accessible today
* pending.type; // Not directly accessible today
* pending.state; // replaces `useNavigation().state`
* pending.formMethod; // replaces useNavigation().formMethod
* pending.formAction; // replaces useNavigation().formAction
* pending.formEncType; // replaces useNavigation().formEncType
* pending.formData; // replaces useNavigation().formData
* pending.json; // replaces useNavigation().json
* pending.text; // replaces useNavigation().text
*
* @name unstable_useRouterState
* @public
* @category Hooks
* @mode framework
* @mode data
* @returns The current router state with `active` and `pending` variants
*/
function useRouterState() {
	let { location, historyAction: type, matches } = useDataRouterState("unstable_useRouterState");
	let { navigation } = useDataRouterNavigation("unstable_useRouterState");
	let active = React$1.useMemo(() => ({
		type,
		location,
		searchParams: new URLSearchParams(location.search),
		params: matches[matches.length - 1]?.params ?? {},
		matches: matches.map((m) => toRouterStateMatch(m))
	}), [
		location,
		matches,
		type
	]);
	let pending = React$1.useMemo(() => {
		if (navigation.state === "idle") return null;
		let shared = {
			type: navigation.historyAction,
			location: navigation.location,
			searchParams: new URLSearchParams(navigation.location.search),
			params: navigation.matches[navigation.matches.length - 1]?.params ?? {},
			matches: navigation.matches.map((m) => toRouterStateMatch(m))
		};
		return navigation.state === "loading" ? {
			...shared,
			state: "loading",
			formMethod: navigation.formMethod,
			formAction: navigation.formAction,
			formEncType: navigation.formEncType,
			formData: navigation.formData,
			json: navigation.json,
			text: navigation.text
		} : {
			...shared,
			state: "submitting",
			formMethod: navigation.formMethod,
			formAction: navigation.formAction,
			formEncType: navigation.formEncType,
			formData: navigation.formData,
			json: navigation.json,
			text: navigation.text
		};
	}, [navigation]);
	return React$1.useMemo(() => ({
		active,
		pending
	}), [active, pending]);
}
//#endregion



},
470(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _url_js__rspack_import_0 = __webpack_require__(3411);
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

//#region lib/router/history.ts
/**
* Actions represent the type of change to a location value.
*/
let Action = /* @__PURE__ */ (/* unused pure expression or super */ null && (function(Action) {
	/**
	* A POP indicates a change to an arbitrary index in the history stack, such
	* as a back or forward navigation. It does not describe the direction of the
	* navigation, only that the current index changed.
	*
	* Note: This is the default action for newly created history objects.
	*/
	Action["Pop"] = "POP";
	/**
	* A PUSH indicates a new entry being added to the history stack, such as when
	* a link is clicked and a new page loads. When this happens, all subsequent
	* entries in the stack are lost.
	*/
	Action["Push"] = "PUSH";
	/**
	* A REPLACE indicates the entry at the current index in the history stack
	* being replaced by a new one.
	*/
	Action["Replace"] = "REPLACE";
	return Action;
}({})));
const PopStateEventType = "popstate";
function isLocation(obj) {
	return typeof obj === "object" && obj != null && "pathname" in obj && "search" in obj && "hash" in obj && "state" in obj && "key" in obj;
}
/**
* Memory history stores the current location in memory. It is designed for use
* in stateful non-browser environments like tests and React Native.
*/
function createMemoryHistory(options = {}) {
	let { initialEntries = ["/"], initialIndex, v5Compat = false } = options;
	let entries;
	entries = initialEntries.map((entry, index) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : void 0, typeof entry === "string" ? void 0 : entry.mask));
	let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
	let action = "POP";
	let listener = null;
	function clampIndex(n) {
		return Math.min(Math.max(n, 0), entries.length - 1);
	}
	function getCurrentLocation() {
		return entries[index];
	}
	function createMemoryLocation(to, state = null, key, mask) {
		let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key, mask);
		warning(location.pathname.charAt(0) === "/", `relative pathnames are not supported in memory history: ${JSON.stringify(to)}`);
		return location;
	}
	function createHref(to) {
		return typeof to === "string" ? to : createPath(to);
	}
	return {
		get index() {
			return index;
		},
		get action() {
			return action;
		},
		get location() {
			return getCurrentLocation();
		},
		createHref,
		createURL(to) {
			return new URL(createHref(to), "http://localhost");
		},
		encodeLocation(to) {
			let path = typeof to === "string" ? parsePath(to) : to;
			return {
				pathname: path.pathname || "",
				search: path.search || "",
				hash: path.hash || ""
			};
		},
		push(to, state) {
			action = "PUSH";
			let nextLocation = isLocation(to) ? to : createMemoryLocation(to, state);
			index += 1;
			entries.splice(index, entries.length, nextLocation);
			if (v5Compat && listener) listener({
				action,
				location: nextLocation,
				delta: 1
			});
		},
		replace(to, state) {
			action = "REPLACE";
			let nextLocation = isLocation(to) ? to : createMemoryLocation(to, state);
			entries[index] = nextLocation;
			if (v5Compat && listener) listener({
				action,
				location: nextLocation,
				delta: 0
			});
		},
		go(delta) {
			action = "POP";
			let nextIndex = clampIndex(index + delta);
			let nextLocation = entries[nextIndex];
			index = nextIndex;
			if (listener) listener({
				action,
				location: nextLocation,
				delta
			});
		},
		listen(fn) {
			listener = fn;
			return () => {
				listener = null;
			};
		}
	};
}
/**
* Browser history stores the location in regular URLs. This is the standard for
* most web apps, but it requires some configuration on the server to ensure you
* serve the same app at multiple URLs.
*
* @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
*/
function createBrowserHistory(options = {}) {
	function createBrowserLocation(window, globalHistory) {
		let maskedLocation = globalHistory.state?.masked;
		let { pathname, search, hash } = maskedLocation || window.location;
		return createLocation("", {
			pathname,
			search,
			hash
		}, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default", maskedLocation ? {
			pathname: window.location.pathname,
			search: window.location.search,
			hash: window.location.hash
		} : void 0);
	}
	function createBrowserHref(window, to) {
		return typeof to === "string" ? to : createPath(to);
	}
	return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
* Hash history stores the location in window.location.hash. This makes it ideal
* for situations where you don't want to send the location to the server for
* some reason, either because you do cannot configure it or the URL space is
* reserved for something else.
*
* @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
*/
function createHashHistory(options = {}) {
	function createHashLocation(window, globalHistory) {
		let { pathname = "/", search = "", hash = "" } = parsePath(window.location.hash.substring(1));
		if (!pathname.startsWith("/") && !pathname.startsWith(".")) pathname = "/" + pathname;
		return createLocation("", {
			pathname,
			search,
			hash
		}, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
	}
	function createHashHref(window, to) {
		let base = window.document.querySelector("base");
		let href = "";
		if (base && base.getAttribute("href")) {
			let url = window.location.href;
			let hashIndex = url.indexOf("#");
			href = hashIndex === -1 ? url : url.slice(0, hashIndex);
		}
		return href + "#" + (typeof to === "string" ? to : createPath(to));
	}
	function validateHashLocation(location, to) {
		warning(location.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(to)})`);
	}
	return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
	if (value === false || value === null || typeof value === "undefined") throw new Error(message);
}
function warning(cond, message) {
	if (!cond) {
		if (typeof console !== "undefined") console.warn(message);
		try {
			throw new Error(message);
		} catch {}
	}
}
function createKey() {
	return Math.random().toString(36).substring(2, 10);
}
/**
* For browser-based histories, we combine the state and key into an object
*/
function getHistoryState(location, index) {
	return {
		usr: location.state,
		key: location.key,
		idx: index,
		masked: location.mask ? {
			pathname: location.pathname,
			search: location.search,
			hash: location.hash
		} : void 0
	};
}
/**
* Creates a Location object with a unique key from the given Path
*/
function createLocation(current, to, state = null, key, mask) {
	return {
		pathname: typeof current === "string" ? current : current.pathname,
		search: "",
		hash: "",
		...typeof to === "string" ? parsePath(to) : to,
		state,
		key: to && to.key || key || createKey(),
		mask
	};
}
/**
* Creates a string URL path from the given pathname, search, and hash components.
*
* @public
* @category Utils
* @param path The pathname, search, and hash components to combine.
* @returns The combined URL path.
*/
function createPath({ pathname = "/", search = "", hash = "" }) {
	if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
	if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
	return pathname;
}
/**
* Parses a string URL path into its separate pathname, search, and hash components.
*
* @public
* @category Utils
* @param path The URL path to parse.
* @returns The parsed pathname, search, and hash components.
*/
function parsePath(path) {
	let parsedPath = {};
	if (path) {
		let hashIndex = path.indexOf("#");
		if (hashIndex >= 0) {
			parsedPath.hash = path.substring(hashIndex);
			path = path.substring(0, hashIndex);
		}
		let searchIndex = path.indexOf("?");
		if (searchIndex >= 0) {
			parsedPath.search = path.substring(searchIndex);
			path = path.substring(0, searchIndex);
		}
		if (path) parsedPath.pathname = path;
	}
	return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options = {}) {
	let { window = document.defaultView, v5Compat = false } = options;
	let globalHistory = window.history;
	let action = "POP";
	let listener = null;
	let index = getIndex();
	if (index == null) {
		index = 0;
		globalHistory.replaceState({
			...globalHistory.state,
			idx: index
		}, "");
	}
	function getIndex() {
		return (globalHistory.state || { idx: null }).idx;
	}
	function handlePop() {
		action = "POP";
		let nextIndex = getIndex();
		let delta = nextIndex == null ? null : nextIndex - index;
		index = nextIndex;
		if (listener) listener({
			action,
			location: history.location,
			delta
		});
	}
	function push(to, state) {
		action = "PUSH";
		let location = isLocation(to) ? to : createLocation(history.location, to, state);
		if (validateLocation) validateLocation(location, to);
		index = getIndex() + 1;
		let historyState = getHistoryState(location, index);
		let url = history.createHref(location.mask || location);
		try {
			globalHistory.pushState(historyState, "", url);
		} catch (error) {
			if (error instanceof DOMException && error.name === "DataCloneError") throw error;
			window.location.assign(url);
		}
		if (v5Compat && listener) listener({
			action,
			location: history.location,
			delta: 1
		});
	}
	function replace(to, state) {
		action = "REPLACE";
		let location = isLocation(to) ? to : createLocation(history.location, to, state);
		if (validateLocation) validateLocation(location, to);
		index = getIndex();
		let historyState = getHistoryState(location, index);
		let url = history.createHref(location.mask || location);
		globalHistory.replaceState(historyState, "", url);
		if (v5Compat && listener) listener({
			action,
			location: history.location,
			delta: 0
		});
	}
	function createURL(to) {
		return createBrowserURLImpl(window, to);
	}
	let history = {
		get action() {
			return action;
		},
		get location() {
			return getLocation(window, globalHistory);
		},
		listen(fn) {
			if (listener) throw new Error("A history only accepts one active listener");
			window.addEventListener(PopStateEventType, handlePop);
			listener = fn;
			return () => {
				window.removeEventListener(PopStateEventType, handlePop);
				listener = null;
			};
		},
		createHref(to) {
			return createHref(window, to);
		},
		createURL,
		encodeLocation(to) {
			let url = createURL(to);
			return {
				pathname: url.pathname,
				search: url.search,
				hash: url.hash
			};
		},
		push,
		replace,
		go(n) {
			return globalHistory.go(n);
		}
	};
	return history;
}
function createBrowserURLImpl(windowImpl, to, isAbsolute = false) {
	let base = "http://localhost";
	if (windowImpl) base = windowImpl.location.origin !== "null" ? windowImpl.location.origin : windowImpl.location.href;
	invariant(base, "No window.location.(origin|href) available to create URL");
	let href = typeof to === "string" ? to : createPath(to);
	href = href.replace(/ $/, "%20");
	if (!isAbsolute && _url_js__rspack_import_0/* .PROTOCOL_RELATIVE_URL_REGEX.test */.iA.test(href)) href = base + href;
	return new URL(href, base);
}
//#endregion


__webpack_require__.d(__webpack_exports__, {
}, {
  $e: warning,
  AO: createPath,
  Rr: parsePath,
  V1: invariant,
  zR: createBrowserHistory
});


},
2582(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//#region lib/router/navigation.ts
const DEFAULT_NAVIGATION_URL = new URL("http://localhost");
function getNavigatorCurrentUrl(navigator) {
	if (navigator.createURL) return navigator.createURL("/");
	try {
		return new URL(navigator.createHref("/"), DEFAULT_NAVIGATION_URL);
	} catch {
		return DEFAULT_NAVIGATION_URL;
	}
}
function isSameOrigin(a, b) {
	return a.origin === b.origin && (a.origin !== "null" || a.protocol === b.protocol && a.host === b.host);
}
function isExplicitUrl(destination, target) {
	if (destination.startsWith("//")) return true;
	let protocol = target.protocol.toLowerCase();
	if (!destination.toLowerCase().startsWith(protocol)) return false;
	return target.host === "" || destination.slice(protocol.length).startsWith("//");
}
function validateNavigationTarget(original, resolved, currentUrl, externalPolicy) {
	let originalUrl = null;
	try {
		originalUrl = original == null ? null : new URL(original, currentUrl);
	} catch {}
	let resolvedUrl = new URL(resolved, currentUrl);
	let originalIsExternal = originalUrl != null && !isSameOrigin(originalUrl, currentUrl);
	let resolvedIsExternal = !isSameOrigin(resolvedUrl, currentUrl);
	if (externalPolicy === "reject") {
		if (originalIsExternal || resolvedIsExternal) throw new Error("External navigation is not allowed");
	} else if (resolvedIsExternal) {
		if (originalUrl == null || !isExplicitUrl(original, originalUrl) || !isSameOrigin(originalUrl, resolvedUrl)) throw new Error("External navigation is not allowed");
	}
}
//#endregion


__webpack_require__.d(__webpack_exports__, {
}, {
  Y: getNavigatorCurrentUrl,
  c: validateNavigationTarget
});


},
3411(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//#region lib/router/url.ts
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i;
const PROTOCOL_RELATIVE_URL_REGEX = /^[\\/]{2}/;
function normalizeProtocolRelativeUrl(url, protocol) {
	return protocol + url.replace(/\\/g, "/");
}
//#endregion


__webpack_require__.d(__webpack_exports__, {
}, {
  E6: ABSOLUTE_URL_REGEX,
  iA: PROTOCOL_RELATIVE_URL_REGEX,
  lS: normalizeProtocolRelativeUrl
});


},
3907(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
/* import */ var _url_js__rspack_import_2 = __webpack_require__(3411);
/* import */ var _history_js__rspack_import_1 = __webpack_require__(470);
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
/**
 * react-router v8.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */



//#region lib/router/utils.ts
/**
* Creates a type-safe {@link RouterContext} object that can be used to
* store and retrieve arbitrary values in [`action`](../../start/framework/route-module#action)s,
* [`loader`](../../start/framework/route-module#loader)s, and [middleware](../../how-to/middleware).
* Similar to React's [`createContext`](https://react.dev/reference/react/createContext),
* but specifically designed for React Router's request/response lifecycle.
*
* If a `defaultValue` is provided, it will be returned from `context.get()`
* when no value has been set for the context. Otherwise, reading this context
* when no value has been set will throw an error.
*
* ```tsx filename=app/context.ts
* import { createContext } from "react-router";
*
* // Create a context for user data
* export const userContext =
*   createContext<User | null>(null);
* ```
*
* ```tsx filename=app/middleware/auth.ts
* import { getUserFromSession } from "~/auth.server";
* import { userContext } from "~/context";
*
* export const authMiddleware = async ({
*   context,
*   request,
* }) => {
*   const user = await getUserFromSession(request);
*   context.set(userContext, user);
* };
* ```
*
* ```tsx filename=app/routes/profile.tsx
* import { userContext } from "~/context";
*
* export async function loader({
*   context,
* }: Route.LoaderArgs) {
*   const user = context.get(userContext);
*
*   if (!user) {
*     throw new Response("Unauthorized", { status: 401 });
*   }
*
*   return { user };
* }
* ```
*
* @public
* @category Utils
* @mode framework
* @mode data
* @param defaultValue An optional default value for the context. This value
* will be returned if no value has been set for this context.
* @returns A {@link RouterContext} object that can be used with
* `context.get()` and `context.set()` in [`action`](../../start/framework/route-module#action)s,
* [`loader`](../../start/framework/route-module#loader)s, and [middleware](../../how-to/middleware).
*/
function createContext(defaultValue) {
	return { defaultValue };
}
/**
* Provides methods for writing/reading values in application context in a
* type-safe way. Primarily for usage with [middleware](../../how-to/middleware).
*
* @example
* import {
*   createContext,
*   RouterContextProvider
* } from "react-router";
*
* const userContext = createContext<User | null>(null);
* const contextProvider = new RouterContextProvider();
* contextProvider.set(userContext, getUser());
* //                               ^ Type-safe
* const user = contextProvider.get(userContext);
* //    ^ User
*
* @public
* @category Utils
* @mode framework
* @mode data
*/
var RouterContextProvider = class {
	#map = /* @__PURE__ */ new Map();
	/**
	* Create a new `RouterContextProvider` instance
	* @param init An optional initial context map to populate the provider with
	*/
	constructor(init) {
		if (init) for (let [context, value] of init) this.set(context, value);
	}
	/**
	* Access a value from the context. If no value has been set for the context,
	* it will return the context's `defaultValue` if provided, or throw an error
	* if no `defaultValue` was set.
	* @param context The context to get the value for
	* @returns The value for the context, or the context's `defaultValue` if no
	* value was set
	*/
	get(context) {
		if (this.#map.has(context)) return this.#map.get(context);
		if (context.defaultValue !== void 0) return context.defaultValue;
		throw new Error("No value found for context");
	}
	/**
	* Set a value for the context. If the context already has a value set, this
	* will overwrite it.
	*
	* @param context The context to set the value for
	* @param value The value to set for the context
	* @returns {void}
	*/
	set(context, value) {
		this.#map.set(context, value);
	}
};
var DiscoveryCancelledError = class extends (/* unused pure expression or super */ null && (Error)) {};
const unsupportedLazyRouteObjectKeys = new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"children",
	"unstable_validateParams"
]);
function isUnsupportedLazyRouteObjectKey(key) {
	return unsupportedLazyRouteObjectKeys.has(key);
}
const unsupportedLazyRouteFunctionKeys = new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"middleware",
	"children",
	"unstable_validateParams"
]);
function isUnsupportedLazyRouteFunctionKey(key) {
	return unsupportedLazyRouteFunctionKeys.has(key);
}
function isIndexRoute(route) {
	return route.index === true;
}
function defaultMapRouteProperties(route) {
	let updates = {};
	if (route.Component) Object.assign(updates, {
		element: React$1.createElement(route.Component),
		Component: void 0
	});
	if (route.HydrateFallback) Object.assign(updates, {
		hydrateFallbackElement: React$1.createElement(route.HydrateFallback),
		HydrateFallback: void 0
	});
	if (route.ErrorBoundary) Object.assign(updates, {
		errorElement: React$1.createElement(route.ErrorBoundary),
		ErrorBoundary: void 0
	});
	return updates;
}
function convertRoutesToDataRoutes(routes, mapRouteProperties = defaultMapRouteProperties, parentPath = [], manifest = {}, allowInPlaceMutations = false) {
	return routes.map((route, index) => {
		let treePath = [...parentPath, String(index)];
		let id = typeof route.id === "string" ? route.id : treePath.join("-");
		invariant(route.index !== true || !route.children, `Cannot specify children on an index route`);
		invariant(allowInPlaceMutations || !manifest[id], `Found a route id collision on id "${id}".  Route id's must be globally unique within Data Router usages`);
		if (isIndexRoute(route)) {
			let indexRoute = {
				...route,
				id
			};
			manifest[id] = mergeRouteUpdates(indexRoute, mapRouteProperties(indexRoute));
			return indexRoute;
		} else {
			let pathOrLayoutRoute = {
				...route,
				id,
				children: void 0
			};
			manifest[id] = mergeRouteUpdates(pathOrLayoutRoute, mapRouteProperties(pathOrLayoutRoute));
			if (route.children) pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest, allowInPlaceMutations);
			return pathOrLayoutRoute;
		}
	});
}
function mergeRouteUpdates(route, updates) {
	return Object.assign(route, {
		...updates,
		...typeof updates.lazy === "object" && updates.lazy != null ? { lazy: {
			...route.lazy,
			...updates.lazy
		} } : {}
	});
}
/**
* Matches the given routes to a location and returns the match data.
*
* @example
* import { matchRoutes } from "react-router";
*
* let routes = [{
*   path: "/",
*   Component: Root,
*   children: [{
*     path: "dashboard",
*     Component: Dashboard,
*   }]
* }];
*
* matchRoutes(routes, "/dashboard"); // [rootMatch, dashboardMatch]
*
* @public
* @category Utils
* @param routes The array of route objects to match against.
* @param locationArg The location to match against, either a string path or a
* partial {@link Location} object
* @param basename Optional base path to strip from the location before matching.
* Defaults to `/`.
* @returns An array of matched routes, or `null` if no matches were found.
*/
function matchRoutes(routes, locationArg, basename = "/") {
	return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial, precomputedBranches) {
	let pathname = stripBasename((typeof locationArg === "string" ? (0,_history_js__rspack_import_1/* .parsePath */.Rr)(locationArg) : locationArg).pathname || "/", basename);
	if (pathname == null) return null;
	let branches = precomputedBranches ?? flattenAndRankRoutes(routes);
	let matches = null;
	let decoded = decodePath(pathname);
	for (let i = 0; matches == null && i < branches.length; ++i) matches = matchRouteBranch(branches[i], decoded, allowPartial);
	return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
	let { route, pathname, params } = match;
	return {
		id: route.id,
		pathname,
		params,
		loaderData: loaderData[route.id],
		handle: route.handle
	};
}
function flattenAndRankRoutes(routes) {
	let branches = flattenRoutes(routes);
	rankRouteBranches(branches);
	return branches;
}
function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
	let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath) => {
		let meta = {
			relativePath: relativePath === void 0 ? route.path || "" : relativePath,
			caseSensitive: route.caseSensitive === true,
			childrenIndex: index,
			route
		};
		if (meta.relativePath.startsWith("/")) {
			if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) return;
			(0,_history_js__rspack_import_1/* .invariant */.V1)(meta.relativePath.startsWith(parentPath), `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`);
			meta.relativePath = meta.relativePath.slice(parentPath.length);
		}
		let path = joinPaths([parentPath, meta.relativePath]);
		let routesMeta = parentsMeta.concat(meta);
		if (route.children && route.children.length > 0) {
			(0,_history_js__rspack_import_1/* .invariant */.V1)(route.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${path}".`);
			flattenRoutes(route.children, branches, routesMeta, path, hasParentOptionalSegments);
		}
		if (route.path == null && !route.index) return;
		branches.push({
			path,
			score: computeScore(path, route.index),
			routesMeta: routesMeta.map((meta, i) => {
				let [matcher, params] = compilePath(meta.relativePath, meta.caseSensitive, i === routesMeta.length - 1);
				return {
					...meta,
					matcher,
					compiledParams: params
				};
			})
		});
	};
	routes.forEach((route, index) => {
		if (route.path === "" || !route.path?.includes("?")) flattenRoute(route, index);
		else for (let exploded of explodeOptionalSegments(route.path)) flattenRoute(route, index, true, exploded);
	});
	return branches;
}
function explodeOptionalSegments(path) {
	let segments = path.split("/");
	if (segments.length === 0) return [];
	let [first, ...rest] = segments;
	let isOptional = first.endsWith("?");
	let required = first.replace(/\?$/, "");
	if (rest.length === 0) return isOptional ? [required, ""] : [required];
	let restExploded = explodeOptionalSegments(rest.join("/"));
	let result = [];
	result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
	if (isOptional) result.push(...restExploded);
	return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
	branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:[\w-]+$/;
const partialParamRe = /^:[\w-]+/;
const partialDynamicSegmentValue = 3.5;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s) => s === "*";
function computeScore(path, index) {
	let segments = path.split("/");
	let initialScore = segments.length;
	if (segments.some(isSplat)) initialScore += splatPenalty;
	if (index) initialScore += indexRouteValue;
	return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : partialParamRe.test(segment) ? partialDynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
	return a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]) ? a[a.length - 1] - b[b.length - 1] : 0;
}
function matchRouteBranch(branch, pathname, allowPartial = false) {
	let { routesMeta } = branch;
	let matchedParams = {};
	let matchedPathname = "/";
	let matches = [];
	for (let i = 0; i < routesMeta.length; ++i) {
		let meta = routesMeta[i];
		let end = i === routesMeta.length - 1;
		let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
		let pattern = {
			path: meta.relativePath,
			caseSensitive: meta.caseSensitive,
			end
		};
		let match = meta.matcher && meta.compiledParams ? matchPathImpl(pattern, remainingPathname, meta.matcher, meta.compiledParams) : matchPath(pattern, remainingPathname);
		let route = meta.route;
		if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) match = matchPath({
			path: meta.relativePath,
			caseSensitive: meta.caseSensitive,
			end: false
		}, remainingPathname);
		if (!match) return null;
		Object.assign(matchedParams, match.params);
		matches.push({
			params: matchedParams,
			pathname: joinPaths([matchedPathname, match.pathname]),
			pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
			route
		});
		if (match.pathnameBase !== "/") matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
	}
	return matches;
}
/**
* Characters that `encodeURIComponent` escapes but that are valid literally in
* a URL path segment. Per RFC 3986 §3.3, a path segment is made of `pchar`:
*
* ```
* pchar = unreserved / pct-encoded / sub-delims / ":" / "@"
* sub-delims = "!" / "$" / "&" / "'" / "(" / ")" / "*" / "+" / "," / ";" / "="
* ```
*
* `encodeURIComponent` targets query-string values, where `$ & + , ; = : @`
* are delimiters and must be escaped — but in a path segment they carry no
* special meaning, and browsers keep them literal in `location.pathname`.
* (`! ' ( ) *` and the unreserved set are already left alone by
* `encodeURIComponent`, so they need no restoring.)
*/
const PATH_PARAM_OVERESCAPED = (/* unused pure expression or super */ null && ({
	"%24": "$",
	"%26": "&",
	"%2B": "+",
	"%2C": ",",
	"%3A": ":",
	"%3B": ";",
	"%3D": "=",
	"%40": "@"
}));
/**
* Encodes a param value for interpolation into a single URL path segment.
*
* Escapes characters that would break the path (`/ ? # %`, whitespace,
* non-ASCII, …) while leaving characters that RFC 3986 permits literally in a
* path segment untouched. Escaping those would needlessly rewrite URLs — e.g.
*  a semver build param `1.0.0+1` would become `1.0.0%2B1` even though browsers
* display and match the `+` literally in `location.pathname`.
*
* See [RFC 3986 §3.3](https://datatracker.ietf.org/doc/html/rfc3986#section-3.3))
*
* @param value The param value to encode.
* @returns The encoded value, safe for use as a single path segment.
*/
function encodePathParam(value) {
	return encodeURIComponent(value).replace(/%(?:24|26|2B|2C|3A|3B|3D|40)/g, (match) => PATH_PARAM_OVERESCAPED[match]);
}
/**
* Returns a path with params interpolated.
*
* Param values are percent-encoded for use in a path segment: characters that
* would change the URL structure (`/`, `?`, `#`, `%`, whitespace, non-ASCII)
* are escaped, while characters that RFC 3986 allows literally in a path
* segment (`$ & + , ; = : @`) are kept as-is. Note this differs from query-string
* encoding (`encodeURIComponent`/`URLSearchParams`), where those characters are
* delimiters and must be escaped. Splat (`*`) values are encoded per segment,
* preserving `/` separators.
*
* See [RFC 3986 §3.3](https://datatracker.ietf.org/doc/html/rfc3986#section-3.3)
*
* @example
* import { generatePath } from "react-router";
*
* generatePath("/users/:id", { id: "123" }); // "/users/123"
* generatePath("/files/:name", { name: "a b" }); // "/files/a%20b"
* generatePath("/releases/:v", { v: "1.0.0+1" }); // "/releases/1.0.0+1"
*
* @public
* @category Utils
* @param originalPath The original path to generate.
* @param params The parameters to interpolate into the path.
* @returns The generated path with parameters interpolated.
*/
function generatePath(originalPath, params = {}) {
	let path = originalPath;
	if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
		warning(false, `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`);
		path = path.replace(/\*$/, "/*");
	}
	const prefix = path.startsWith("/") ? "/" : "";
	const stringify = (p) => p == null ? "" : typeof p === "string" ? p : String(p);
	return prefix + path.split(/\/+/).map((segment, index, array) => {
		if (index === array.length - 1 && segment === "*") return stringify(params["*"]);
		const keyMatch = segment.match(/^:([\w-]+)(\??)(.*)/);
		if (keyMatch) {
			const [, key, optional, suffix] = keyMatch;
			let param = params[key];
			invariant(optional === "?" || param != null, `Missing ":${key}" param`);
			return encodePathParam(stringify(param)) + suffix;
		}
		return segment.replace(/\?$/g, "");
	}).filter((segment) => !!segment).join("/");
}
/**
* Performs pattern matching on a URL pathname and returns information about
* the match.
*
* @public
* @category Utils
* @param pattern The pattern to match against the URL pathname. This can be a
* string or a {@link PathPattern} object. If a string is provided, it will be
* treated as a pattern with `caseSensitive` set to `false` and `end` set to
* `true`.
* @param pathname The URL pathname to match against the pattern.
* @returns A path match object if the pattern matches the pathname,
* or `null` if it does not match.
*/
function matchPath(pattern, pathname) {
	if (typeof pattern === "string") pattern = {
		path: pattern,
		caseSensitive: false,
		end: true
	};
	let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
	return matchPathImpl(pattern, pathname, matcher, compiledParams);
}
function matchPathImpl(pattern, pathname, matcher, compiledParams) {
	let match = pathname.match(matcher);
	if (!match) return null;
	let matchedPathname = match[0];
	let pathnameBase = removeTrailingSlash(matchedPathname, 1);
	let captureGroups = match.slice(1);
	return {
		params: compiledParams.reduce((memo, { paramName, isOptional }, index) => {
			if (paramName === "*") {
				let splatValue = captureGroups[index] || "";
				pathnameBase = removeTrailingSlash(matchedPathname.slice(0, matchedPathname.length - splatValue.length), 1);
			}
			const value = captureGroups[index];
			if (isOptional && !value) memo[paramName] = void 0;
			else memo[paramName] = (value || "").replace(/%2F/g, "/");
			return memo;
		}, {}),
		pathname: matchedPathname,
		pathnameBase,
		pattern
	};
}
function compilePath(path, caseSensitive = false, end = true) {
	(0,_history_js__rspack_import_1/* .warning */.$e)(path === "*" || !path.endsWith("*") || path.endsWith("/*"), `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`);
	let params = [];
	let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (match, paramName, isOptional, index, str) => {
		params.push({
			paramName,
			isOptional: isOptional != null
		});
		if (isOptional) {
			let nextChar = str.charAt(index + match.length);
			if (nextChar && nextChar !== "/") return "/([^\\/]*)";
			return "(?:/([^\\/]*))?";
		}
		return "/([^\\/]+)";
	}).replace(/\/((?:[^/?()[\]*^\\]|\\.)+)\?(?=\/|$|\()/g, "(?:/$1)?");
	if (path.endsWith("*")) {
		params.push({ paramName: "*" });
		regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
	} else if (end) regexpSource += "\\/*$";
	else if (path !== "" && path !== "/") regexpSource += "(?:(?=\\/|$))";
	return [new RegExp(regexpSource, caseSensitive ? void 0 : "i"), params];
}
function decodePath(value) {
	try {
		return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
	} catch (error) {
		(0,_history_js__rspack_import_1/* .warning */.$e)(false, `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`);
		return value;
	}
}
function stripBasename(pathname, basename) {
	if (basename === "/") return pathname;
	if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) return null;
	let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
	let nextChar = pathname.charAt(startIndex);
	if (nextChar && nextChar !== "/") return null;
	return pathname.slice(startIndex) || "/";
}
function prependBasename({ basename, pathname }) {
	return pathname === "/" ? basename : joinPaths([basename, pathname]);
}
const isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX.test(url);
/**
* Returns a resolved {@link Path} object relative to the given pathname.
*
* @public
* @category Utils
* @param to The path to resolve, either a string or a partial {@link Path}
* object.
* @param fromPathname The pathname to resolve the path from. Defaults to `/`.
* @returns A {@link Path} object with the resolved pathname, search, and hash.
*/
function resolvePath(to, fromPathname = "/") {
	let { pathname: toPathname, search = "", hash = "" } = typeof to === "string" ? (0,_history_js__rspack_import_1/* .parsePath */.Rr)(to) : to;
	let pathname;
	if (toPathname) {
		toPathname = removeDoubleSlashes(toPathname);
		if (toPathname.startsWith("/") || toPathname.startsWith("\\")) pathname = resolvePathname(toPathname.substring(1), "/");
		else pathname = resolvePathname(toPathname, fromPathname);
	} else pathname = fromPathname;
	return {
		pathname,
		search: normalizeSearch(search),
		hash: normalizeHash(hash)
	};
}
function resolvePathname(relativePath, fromPathname) {
	let segments = removeTrailingSlash(fromPathname).split("/");
	relativePath.split("/").forEach((segment) => {
		if (segment === "..") {
			if (segments.length > 1) segments.pop();
		} else if (segment !== ".") segments.push(segment);
	});
	return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
	return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(path)}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function getPathContributingMatches(matches) {
	return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
function getResolveToMatches(matches) {
	let pathMatches = getPathContributingMatches(matches);
	return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
	let to;
	if (typeof toArg === "string") to = (0,_history_js__rspack_import_1/* .parsePath */.Rr)(toArg);
	else {
		to = { ...toArg };
		(0,_history_js__rspack_import_1/* .invariant */.V1)(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
		(0,_history_js__rspack_import_1/* .invariant */.V1)(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
		(0,_history_js__rspack_import_1/* .invariant */.V1)(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
	}
	let isEmptyPath = toArg === "" || to.pathname === "";
	let toPathname = isEmptyPath ? "/" : to.pathname;
	let from;
	if (toPathname == null) from = locationPathname;
	else {
		let routePathnameIndex = routePathnames.length - 1;
		if (!isPathRelative && toPathname.startsWith("..")) {
			let toSegments = toPathname.split("/");
			while (toSegments[0] === "..") {
				toSegments.shift();
				routePathnameIndex -= 1;
			}
			to.pathname = toSegments.join("/");
		}
		from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
	}
	let path = resolvePath(to, from);
	let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
	let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
	if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) path.pathname += "/";
	return path;
}
const removeDoubleSlashes = (path) => path.replace(/[\\/]{2,}/g, "/");
const joinPaths = (paths) => removeDoubleSlashes(paths.join("/"));
function removeTrailingSlash(path, minLength = 0) {
	let end = path.length;
	while (end > minLength && path.charCodeAt(end - 1) === 47) end--;
	return end === path.length ? path : path.slice(0, end);
}
const normalizePathname = (pathname) => removeTrailingSlash(pathname).replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
var DataWithResponseInit = class {
	type = "DataWithResponseInit";
	data;
	init;
	constructor(data, init) {
		this.data = data;
		this.init = init || null;
	}
};
/**
* Create "responses" that contain `headers`/`status` without forcing
* serialization into an actual [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
*
* @example
* import { data } from "react-router";
*
* export async function action({ request }: Route.ActionArgs) {
*   let formData = await request.formData();
*   let item = await createItem(formData);
*   return data(item, {
*     headers: { "X-Custom-Header": "value" }
*     status: 201,
*   });
* }
*
* @public
* @category Utils
* @mode framework
* @mode data
* @param data The data to be included in the response.
* @param init The status code or a `ResponseInit` object to be included in the
* response.
* @returns A {@link DataWithResponseInit} instance containing the data and
* response init.
*/
function data(data, init) {
	return new DataWithResponseInit(data, typeof init === "number" ? { status: init } : init);
}
/**
* A redirect [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response).
* Sets the status code and the [`Location`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)
* header. Defaults to [`302 Found`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302).
*
* This utility accepts absolute URLs and can navigate to external domains, so
* the application should validate any user-supplied inputs to redirects.
*
* @example
* import { redirect } from "react-router";
*
* export async function loader({ request }: Route.LoaderArgs) {
*   if (!isLoggedIn(request))
*     throw redirect("/login");
*   }
*
*   // ...
* }
*
* @public
* @category Utils
* @mode framework
* @mode data
* @param url The URL to redirect to.
* @param init The status code or a `ResponseInit` object to be included in the
* response.
* @returns A [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
* object with the redirect status and [`Location`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)
* header.
*/
const redirect = (url, init = 302) => {
	let responseInit = init;
	if (typeof responseInit === "number") responseInit = { status: responseInit };
	else if (typeof responseInit.status === "undefined") responseInit.status = 302;
	let headers = new Headers(responseInit.headers);
	headers.set("Location", url);
	return new Response(null, {
		...responseInit,
		headers
	});
};
/**
* A redirect [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
* that will force a document reload to the new location. Sets the status code
* and the [`Location`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)
* header. Defaults to [`302 Found`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302).
*
* This utility accepts absolute URLs and can navigate to external domains, so
* the application should validate any user-supplied inputs to redirects.
*
* ```tsx filename=routes/logout.tsx
* import { redirectDocument } from "react-router";
*
* import { destroySession } from "../sessions.server";
*
* export async function action({ request }: Route.ActionArgs) {
*   let session = await getSession(request.headers.get("Cookie"));
*   return redirectDocument("/", {
*     headers: { "Set-Cookie": await destroySession(session) }
*   });
* }
* ```
*
* @public
* @category Utils
* @mode framework
* @mode data
* @param url The URL to redirect to.
* @param init The status code or a `ResponseInit` object to be included in the
* response.
* @returns A [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
* object with the redirect status and [`Location`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)
* header.
*/
const redirectDocument = (url, init) => {
	let response = redirect(url, init);
	response.headers.set("X-Remix-Reload-Document", "true");
	return response;
};
/**
* A redirect [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
* that will perform a [`history.replaceState`](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState)
* instead of a [`history.pushState`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState)
* for client-side navigation redirects. Sets the status code and the [`Location`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)
* header. Defaults to [`302 Found`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302).
*
* @example
* import { replace } from "react-router";
*
* export async function loader() {
*   return replace("/new-location");
* }
*
* @public
* @category Utils
* @mode framework
* @mode data
* @param url The URL to redirect to.
* @param init The status code or a `ResponseInit` object to be included in the
* response.
* @returns A [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
* object with the redirect status and [`Location`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)
* header.
*/
const replace = (url, init) => {
	let response = redirect(url, init);
	response.headers.set("X-Remix-Replace", "true");
	return response;
};
const SUPPORTED_ERROR_TYPES = (/* unused pure expression or super */ null && ([
	"EvalError",
	"RangeError",
	"ReferenceError",
	"SyntaxError",
	"TypeError",
	"URIError"
]));
var ErrorResponseImpl = class {
	status;
	statusText;
	data;
	error;
	internal;
	constructor(status, statusText, data, internal = false) {
		this.status = status;
		this.statusText = statusText || "";
		this.internal = internal;
		if (data instanceof Error) {
			this.data = data.toString();
			this.error = data;
		} else this.data = data;
	}
};
/**
* Check if the given error is an {@link ErrorResponse} generated from a 4xx/5xx
* [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
* thrown from an [`action`](../../start/framework/route-module#action) or
* [`loader`](../../start/framework/route-module#loader) function.
*
* @example
* import { isRouteErrorResponse } from "react-router";
*
* export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
*   if (isRouteErrorResponse(error)) {
*     return (
*       <>
*         <p>Error: `${error.status}: ${error.statusText}`</p>
*         <p>{error.data}</p>
*       </>
*     );
*   }
*
*   return (
*     <p>Error: {error instanceof Error ? error.message : "Unknown Error"}</p>
*   );
* }
*
* @public
* @category Utils
* @mode framework
* @mode data
* @param error The error to check.
* @returns `true` if the error is an {@link ErrorResponse}, `false` otherwise.
*/
function isRouteErrorResponse(error) {
	return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
function getRoutePattern(matches) {
	return joinPaths(matches.map((m) => m.route.path).filter(Boolean)) || "/";
}
function createDataFunctionUrl(request, path) {
	let url = new URL(typeof request === "string" || request instanceof URL ? request : request.url);
	let parsed = typeof path === "string" ? parsePath(path) : path;
	url.pathname = parsed.pathname || "/";
	if (parsed.search) {
		let searchParams = new URLSearchParams(parsed.search);
		let indexValues = searchParams.getAll("index");
		searchParams.delete("index");
		for (let value of indexValues.filter(Boolean)) searchParams.append("index", value);
		let search = searchParams.toString();
		url.search = search ? `?${search}` : "";
	} else url.search = "";
	url.hash = parsed.hash || "";
	return url;
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
function parseToInfo(_to, basename) {
	let to = _to;
	if (typeof to !== "string" || !_url_js__rspack_import_2/* .ABSOLUTE_URL_REGEX.test */.E6.test(to)) return {
		absoluteURL: void 0,
		isExternal: false,
		to
	};
	let absoluteURL = to;
	let isExternal = false;
	if (isBrowser) try {
		let currentUrl = new URL(window.location.href);
		let targetUrl = _url_js__rspack_import_2/* .PROTOCOL_RELATIVE_URL_REGEX.test */.iA.test(to) ? new URL((0,_url_js__rspack_import_2/* .normalizeProtocolRelativeUrl */.lS)(to, currentUrl.protocol)) : new URL(to);
		let path = stripBasename(targetUrl.pathname, basename);
		if (targetUrl.origin === currentUrl.origin && path != null) to = path + targetUrl.search + targetUrl.hash;
		else isExternal = true;
	} catch {
		(0,_history_js__rspack_import_1/* .warning */.$e)(false, `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
	}
	return {
		absoluteURL,
		isExternal,
		to
	};
}
//#endregion


__webpack_require__.d(__webpack_exports__, {
}, {
  B6: matchPath,
  Bd: isBrowser,
  Gh: resolveTo,
  HS: joinPaths,
  PD: getResolveToMatches,
  X9: parseToInfo,
  cj: ErrorResponseImpl,
  gU: getRoutePattern,
  pX: isRouteErrorResponse,
  pb: stripBasename,
  ue: matchRoutes,
  wy: convertRouteMatchToUiMatch
});


},

}]);