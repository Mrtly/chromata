/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SchemeImport } from './routes/scheme'
import { Route as RainbowImport } from './routes/rainbow'
import { Route as PostitsImport } from './routes/postits'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const SchemeRoute = SchemeImport.update({
  id: '/scheme',
  path: '/scheme',
  getParentRoute: () => rootRoute,
} as any)

const RainbowRoute = RainbowImport.update({
  id: '/rainbow',
  path: '/rainbow',
  getParentRoute: () => rootRoute,
} as any)

const PostitsRoute = PostitsImport.update({
  id: '/postits',
  path: '/postits',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/postits': {
      id: '/postits'
      path: '/postits'
      fullPath: '/postits'
      preLoaderRoute: typeof PostitsImport
      parentRoute: typeof rootRoute
    }
    '/rainbow': {
      id: '/rainbow'
      path: '/rainbow'
      fullPath: '/rainbow'
      preLoaderRoute: typeof RainbowImport
      parentRoute: typeof rootRoute
    }
    '/scheme': {
      id: '/scheme'
      path: '/scheme'
      fullPath: '/scheme'
      preLoaderRoute: typeof SchemeImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/postits': typeof PostitsRoute
  '/rainbow': typeof RainbowRoute
  '/scheme': typeof SchemeRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/postits': typeof PostitsRoute
  '/rainbow': typeof RainbowRoute
  '/scheme': typeof SchemeRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/postits': typeof PostitsRoute
  '/rainbow': typeof RainbowRoute
  '/scheme': typeof SchemeRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/postits' | '/rainbow' | '/scheme'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/postits' | '/rainbow' | '/scheme'
  id: '__root__' | '/' | '/postits' | '/rainbow' | '/scheme'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PostitsRoute: typeof PostitsRoute
  RainbowRoute: typeof RainbowRoute
  SchemeRoute: typeof SchemeRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PostitsRoute: PostitsRoute,
  RainbowRoute: RainbowRoute,
  SchemeRoute: SchemeRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/postits",
        "/rainbow",
        "/scheme"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/postits": {
      "filePath": "postits.tsx"
    },
    "/rainbow": {
      "filePath": "rainbow.tsx"
    },
    "/scheme": {
      "filePath": "scheme.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
