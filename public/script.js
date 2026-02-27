// public/script.js
async function load() {
  const res = await fetch("/counter");
  const data = await res.json();
  document.getElementById("value").textContent = data.value;
}

async function increment() {
  await fetch("/counter/increment", { method: "POST" });
  load();
}

async function decrement() {
  await fetch("/counter/decrement", { method: "POST" });
  load();
}

load();