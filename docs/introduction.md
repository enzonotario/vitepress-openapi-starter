---
title: vitepress-openapi
---

<script setup>
import { data } from './introduction.data.js'
</script>

<OAInfo :info="data.info" :external-docs="data.externalDocs" />

<OAServers :servers="data.servers" />
