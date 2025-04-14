import { useOpenapi } from "vitepress-openapi/client";
import spec from '../public/openapi.json' with {type: 'json'}

export default {
    load() {
        const openapi = useOpenapi({
            spec,
        })

        const servers = openapi.getServers()

        return {
            info: openapi.spec.info,
            externalDocs: openapi.spec.externalDocs,
            servers,
        }
    },
}
