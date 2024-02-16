// const blogIndexCache = require('../lib/notion/blog-index-cache')
// import blogIndexCache from '../lib/notion/blog-index-cache'

// blogIndexCache.set()
// 名前付きエクスポートされた関数を個別にインポートします
import { set as setBlogIndexCache } from '../lib/notion/blog-index-cache.js'

setBlogIndexCache()
