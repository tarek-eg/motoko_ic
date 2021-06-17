import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as motoko_ic_idl, canisterId as motoko_ic_id } from 'dfx-generated/motoko_ic';

const agent = new HttpAgent();
const motoko_ic = Actor.createActor(motoko_ic_idl, { agent, canisterId: motoko_ic_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await motoko_ic.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
