<script setup>

import { ref, onMounted } from "vue"

const history = ref([])

const loadHistory = async () => {

  const data = await $fetch("http://localhost:5000/api/history")

  history.value = data

}

onMounted(loadHistory)

</script>

<template>

<div class="min-h-screen bg-gray-100 p-10">

<div class="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8">

<h2 class="text-2xl font-bold mb-6 text-blue-600">
Lucky Draw History
</h2>

<div class="overflow-x-auto">

<table class="w-full border-collapse">

<thead>

<tr class="bg-gray-200 text-left">

<th class="p-3">Staff</th>
<th class="p-3">Event</th>
<th class="p-3">Date</th>
<th class="p-3">Venue</th>
<th class="p-3">Seats</th>

</tr>

</thead>

<tbody>

<tr
v-for="item in history"
:key="item.id"
class="border-b hover:bg-gray-50"
>

<td class="p-3 font-medium">
{{ item.staff_name }}
</td>

<td class="p-3">
{{ item.event_code }}
</td>

<td class="p-3">
{{ item.event_date }}
</td>

<td class="p-3">
{{ item.venue_type }}
</td>

<td class="p-3">

<span class="bg-blue-100 text-blue-700 px-2 py-1 rounded mr-1">
{{ item.seat1 }}
</span>

<span class="bg-blue-100 text-blue-700 px-2 py-1 rounded mr-1">
{{ item.seat2 }}
</span>

<span class="bg-blue-100 text-blue-700 px-2 py-1 rounded">
{{ item.seat3 }}
</span>

</td>

</tr>

</tbody>

</table>

</div>

</div>

</div>

</template>