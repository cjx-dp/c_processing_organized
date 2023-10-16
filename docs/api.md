<script setup>
    import { withBase } from 'vitepress'
    import { data } from './api.data.js'
</script>

# API Reference

<div v-for="page in data">
    <a :href="withBase('/api/' + page)">
        <p class="idx-link">{{ page }}</p>
    </a>
</div>

<style>
.idx-link {
    position: relative;
    font-weight: 600;
    outline: none;
    margin: 16px 0;
    padding-top: 24px;
    letter-spacing: -0.02em;
    line-height: 32px;
    font-size: 24px;
}
</style>