let interviewList = [];
let rejectedList = [];
let currentStatus = 'btn-all';

let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
const cardContainer = document.getElementById('all-cards-main-container');



// for delete
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('right-side')) {
        const deleteBtn = event.target.parentNode.parentNode;
        deleteBtn.remove();
        let totalCountAfterDelete = cardContainer.children.length + 1;
        totalCountAfterDelete = totalCountAfterDelete - 1;
        totalCount.innerText = totalCountAfterDelete;
        document.getElementById('total-job').innerText = totalCountAfterDelete;

        // for hidden part
        if (totalCountAfterDelete === 0) {
            const sec2 = document.getElementById('sec2');
            sec2.classList.remove('hidden');
        }
    }
})

document.getElementById('total-job').innerText = cardContainer.children.length;
function calculateCount() {
    totalCount.innerText = cardContainer.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}
calculateCount();


const allBtn = document.getElementById('btn-all');
const interviewBtn = document.getElementById('btn-interview');
const rejectedBtn = document.getElementById('btn-rejected');
const filterSec = document.getElementById('filter-sec');

function toggleBtn(id) {
    allBtn.classList.remove('bg-[#3b82f6]', 'text-white');
    interviewBtn.classList.remove('bg-[#3b82f6]', 'text-white');
    rejectedBtn.classList.remove('bg-[#3b82f6]', 'text-white');

    allBtn.classList.add('bg-white', 'text-[#64748b]');
    interviewBtn.classList.add('bg-white', 'text-[#64748b]');
    rejectedBtn.classList.add('bg-white', 'text-[#64748b]');
    const selectedBtn = document.getElementById(id);
    currentStatus = id;

    selectedBtn.classList.remove('bg-white', 'text-[#64748b]');
    selectedBtn.classList.add('bg-[#3b82f6]', 'text-white');
    if (id === 'btn-interview') {
        cardContainer.classList.add('hidden');
        filterSec.classList.remove('hidden');
        renderInterview();

    }
    else if (id === 'btn-all') {
        cardContainer.classList.remove('hidden');
        filterSec.classList.add('hidden');
        document.getElementById('total-job').innerText = cardContainer.children.length;


    }
    else if (id === 'btn-rejected') {
        cardContainer.classList.add('hidden');
        filterSec.classList.remove('hidden');

        renderRejected();

    }
}


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('card-btn1')) {
        const parentNode = event.target.parentNode.parentNode;
        const company = parentNode.querySelector('.company').innerText;
        const jobTitle = parentNode.querySelector('.job-title').innerText;
        const jobDetails = parentNode.querySelector('.job-details').innerText;
        const jobDes = parentNode.querySelector('.job-des').innerText;
        const btnStatus = parentNode.querySelector('.btn-status').innerText;


        parentNode.querySelector('.btn-status').innerText = 'INTERVIEW';

        const cardInfo = {
            company,
            jobTitle,
            jobDetails,
            jobDes,
            btnStatus: 'INTERVIEW'
        }

        const companyExist = interviewList.find(item => item.company == cardInfo.company);
        if (!companyExist) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.company != cardInfo.company);
        calculateCount();

        if (currentStatus == 'btn-rejected') {
            renderRejected();
        }

    }

    // for rejected

    else if (event.target.classList.contains('card-btn2')) {
        const parentNode = event.target.parentNode.parentNode;
        const company = parentNode.querySelector('.company').innerText;
        const jobTitle = parentNode.querySelector('.job-title').innerText;
        const jobDetails = parentNode.querySelector('.job-details').innerText;
        const jobDes = parentNode.querySelector('.job-des').innerText;
        const btnStatus = parentNode.querySelector('.btn-status').innerText;

        parentNode.querySelector('.btn-status').innerText = 'REJECTED';

        const cardInfo = {
            company,
            jobTitle,
            jobDetails,
            jobDes,
            btnStatus: 'REJECTED'
        }

        const companyExist = rejectedList.find(item => item.company == cardInfo.company);
        if (!companyExist) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.company != cardInfo.company);

        if (currentStatus == 'btn-interview') {
            renderInterview();
        }
        calculateCount();
        console.log(currentStatus)

    }
})


function renderInterview() {
    filterSec.innerHTML = '';

    // sec2 part
    const sec2 = document.getElementById('sec2');
    if (interviewList.length === 0) {
        sec2.classList.remove('hidden');
        document.getElementById('total-job').innerText = interviewList.length;
    }
    else {
        sec2.classList.add('hidden');
        document.getElementById('total-job').innerText = interviewList.length + ' of ' + cardContainer.children.length;
    }


    for (let interview of interviewList) {
        let div = document.createElement('div');
        div.className = `space-y-4 mb-4`;
        div.innerHTML = `
        <div class="bg-white border border-[#f1f2f4] rounded-lg p-6 flex justify-between">
                    <div class="left-side">
                        <h2 class="text-[#002c5c] text-lg font-semibold pb-1 company">${interview.company}</h2>
                        <p class="text-base font-normal text-[#64748b] job-title">${interview.jobTitle}</p>
                        <p class="text-[#64748b] text-sm font-normal pt-5 pb-5 job-details">${interview.jobDetails}
                        </p>

                        <button class="btn-status px-3 py-2.5 bg-[#eef4ff]  text-[#002c5c] text-sm font-normal rounded">${interview.btnStatus}</button>

                        <p class="text-[#323b49FF] text-sm font-normal pb-5 pt-2 job-des">${interview.jobDes}</p>

                        <div class="double-btn-con flex gap-2">
                            <button
                                class="card-btn1 text-sm font-semibold text-[#ef4444] border border-[ #10b981] rounded px-3 py-2">INTERVIEW</button>
                            <button
                                class="card-btn2 text-sm font-semibold text-[#10b981] border border-[ #10b981] rounded px-3 py-2">REJECTED</button>
                        </div>
                    </div>
                    <div
                        class=" border border-[#F1F2F4] rounded-full h-[38px] w-[38px] flex justify-center items-center p-3">
                        <i class="fa-regular fa-trash-can " style="color: rgb(100, 116, 139);"></i>
                    </div>
                </div>
        `

        filterSec.appendChild(div);

    }
}


// for rejected

function renderRejected() {
    filterSec.innerHTML = '';
    // sec2 part
    const sec2 = document.getElementById('sec2');
    if (rejectedList.length === 0) {
        sec2.classList.remove('hidden');
        document.getElementById('total-job').innerText = rejectedList.length;
    }
    else {
        sec2.classList.add('hidden');
        document.getElementById('total-job').innerText = rejectedList.length + ' of ' + cardContainer.children.length;
    }


    for (let rejected of rejectedList) {
        let div = document.createElement('div');
        div.className = `space-y-4 mb-4`;
        div.innerHTML = `
        <div class="bg-white border border-[#f1f2f4] rounded-lg p-6 flex justify-between">
                    <div class="left-side">
                        <h2 class="text-[#002c5c] text-lg font-semibold pb-1 company">${rejected.company}</h2>
                        <p class="text-base font-normal text-[#64748b] job-title">${rejected.jobTitle}</p>
                        <p class="text-[#64748b] text-sm font-normal pt-5 pb-5 job-details">${rejected.jobDetails}
                        </p>

                        <button class="btn-status px-3 py-2.5 bg-[#eef4ff]  text-[#002c5c] text-sm font-normal rounded">${rejected.btnStatus}</button>

                        <p class="text-[#323b49FF] text-sm font-normal pb-5 pt-2 job-des">${rejected.jobDes}</p>

                        <div class="double-btn-con flex gap-2">
                            <button
                                class="card-btn1 text-sm font-semibold text-[#ef4444] border border-[ #10b981] rounded px-3 py-2">INTERVIEW</button>
                            <button
                                class="card-btn2 text-sm font-semibold text-[#10b981] border border-[ #10b981] rounded px-3 py-2">REJECTED</button>
                        </div>
                    </div>
                    <div
                        class=" border border-[#F1F2F4] rounded-full h-[38px] w-[38px] flex justify-center items-center p-3">
                        <i class="fa-regular fa-trash-can " style="color: rgb(100, 116, 139);"></i>
                    </div>
                </div>
        `

        filterSec.appendChild(div);

    }
}

