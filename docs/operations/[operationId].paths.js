import { usePaths } from 'vitepress-openapi'
import spec from '../.vitepress/spec.js'

export default {
    paths() {
        return usePaths({ spec })
            .getPathsByVerbs()
            .map(({ operationId, summary }) => {
                return {
                    params: {
                        operationId,
                        pageTitle: `${summary} - vitepress-openapi`,
                    },
                }
            })
    },
}
