import {
  await deleteDoc(doc(db,'members',id));

  toast('Member removed');

  loadMembers();
}

window.editMember = function(id){

  const m = memData.find(x=>x.id===id);

  if(!m) return;

  document.getElementById('eid').value=id;
  document.getElementById('fn').value=m.player_name;
  document.getElementById('fp').value=m.player_id;
  document.getElementById('fd').value=m.discord_username||'';

  openModal('mo-member');
}

window.addIncome = async function(memberId){

  const amt=parseInt(document.getElementById('valor-amt').value);

  if(!amt || amt<=0){
    toast('Enter amount',true);
    return;
  }

  const member = memData.find(x=>x.id===memberId);

  if(!member) return;

  const current = parseInt(member.total_valor||0);

  await updateDoc(doc(db,'members',memberId),{
    total_valor: current + amt
  });

  await addDoc(collection(db,'income_entries'),{
    member_id:memberId,
    amount:amt,
    added_at:Date.now()
  });

  toast('Valor added');

  loadMembers();
}

window.toggleCheck = async function(memberId){

  const member = memData.find(x=>x.id===memberId);

  if(!member) return;

  const checked = !!member.is_checked;

  await updateDoc(doc(db,'members',memberId),{
    is_checked: !checked
  });

  loadMembers();
}

window.openModal = function(id){
  document.getElementById(id).classList.add('open');
}

window.closeModal = function(id){
  document.getElementById(id).classList.remove('open');
}

loadMembers();