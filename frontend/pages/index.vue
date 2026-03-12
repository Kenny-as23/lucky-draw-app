<script setup>

import { ref } from "vue"

const staffName = ref("")
const staffId = ref("")
const eventCode = ref("")
const eventDate = ref("")
const venue = ref("Studio Room")

const seats = ref([])
const error = ref("")

const drawSeats = async () => {

  error.value = ""
  seats.value = []

  // VALIDASI FORM (TAMBAHAN BARU)
  if(!staffName.value || !staffId.value || !eventCode.value || !eventDate.value){
    error.value = "Please fill all fields before drawing seats."
    return
  }

  const check = await $fetch("http://localhost:5000/api/check",{
    method:"POST",
    body:{
      eventCode:eventCode.value,
      date:eventDate.value
    }
  })

  if(check.exists){
    error.value = "Lucky draw already exists"
    return
  }

  const result = await $fetch("http://localhost:5000/api/draw",{
    method:"POST",
    body:{
      staff_name: staffName.value,
      staff_id: staffId.value,
      event_code: eventCode.value,
      event_date: eventDate.value,
      venue_type: venue.value
    }
  })

  seats.value = result.seats
}

</script>

<template>

<div class="min-h-screen bg-gray-100 flex items-center justify-center">

<div class="bg-white shadow-xl rounded-xl p-8 w-[450px]">

<h2 class="text-3xl font-bold text-center text-blue-600 mb-6">
Lucky Draw Ticket Assignment
</h2>

<div class="space-y-4">

<input
v-model="staffName"
placeholder="Staff Name"
class="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
/>

<input
v-model="staffId"
placeholder="Staff ID"
class="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
/>

<input
v-model="eventCode"
placeholder="Event Code"
class="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
/>

<input
type="date"
v-model="eventDate"
class="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
/>

<select
v-model="venue"
class="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
>

<option>Studio Room</option>
<option>Concert Hall</option>
<option>Open Arena</option>

</select>

<button
@click="drawSeats"
:disabled="!staffName || !staffId || !eventCode || !eventDate"
class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition disabled:bg-gray-400"
>

Draw Lucky Seats

</button>

</div>

<div v-if="seats.length" class="mt-6">

<h3 class="font-semibold text-lg mb-2">
Seats
</h3>

<ul class="list-disc ml-5">

<li v-for="seat in seats" :key="seat">
{{ seat }}
</li>

</ul>

</div>

<p v-if="error" class="text-red-500 mt-4">
{{ error }}
</p>

</div>

</div>

</template>