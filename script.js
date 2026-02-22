let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

function calculateCount() {
    totalCount.innerText = document.getElementById('all-cards-main-container').children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}
calculateCount();

const allBtn = document.getElementById('btn-all');
const interviewBtn = document.getElementById('btn-interview');
const rejectedBtn = document.getElementById('btn-rejected');

function toggleBtn(id) {
    allBtn.classList.remove('bg-[#3b82f6]', 'text-white');
    interviewBtn.classList.remove('bg-[#3b82f6]', 'text-white');
    rejectedBtn.classList.remove('bg-[#3b82f6]', 'text-white');


    allBtn.classList.add('bg-white', 'text-[#64748b]');
    interviewBtn.classList.add('bg-white', 'text-[#64748b]');
    rejectedBtn.classList.add('bg-white', 'text-[#64748b]');
    const selectedBtn = document.getElementById(id);

    selectedBtn.classList.remove('bg-white', 'text-[#64748b]');
    selectedBtn.classList.add('bg-[#3b82f6]', 'text-white');
}





// mine
// document.getElementById('btn-interview').addEventListener('click', function () {

//     // event.target.classList.add('bg-[#3b82f6]')
//     document.getElementById('sec2').classList.remove('hidden');
//     document.getElementById('all-cards-main-container').classList.add('hidden');

// })