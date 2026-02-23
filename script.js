let jobSData = [
    {
        id: 1,
        companyName: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-Time",
        salary: "$130,000 - $175,000",
        description: "Build cross-platform mobile application using React Native. Work on products used by millions of users worldwide.",
        status: "None"
    },
    {
        id: 2,
        companyName: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-Time",
        salary: "$80,000 - $120,000",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        status: "None"
    },
    {
        id: 3,
        companyName: "DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Full-Time",
        salary: "$125,000 - $165,000",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        status: "None"
    },
    {
        id: 4,
        companyName: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-Time",
        salary: "$140,000 - $190,000",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        status: "None"
    },
    {
        id: 5,
        companyName: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-Time",
        salary: "$110,000 - $150,000",
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
        status: "None"
    },
    {
        id: 6,
        companyName: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-Time",
        salary: "$130,000 - $170,000",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
        status: "None"
    },
    {
        id: 7,
        companyName: "StartupXYZ",
        position: "Full Stack Engineer",
        location: "Remote",
        type: "Full-Time",
        salary: "$120,000 - $160,000",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
        status: "None"
    },
    {
        id: 8,
        companyName: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-Time",
        salary: "$130,000 - $175,000",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
        status: "None"
    },
];
let currentTab = 'all';

const jobsContainer = document.getElementById('jobs-container');
const emptyState = document.getElementById('empty-state');
const availableCount = document.getElementById('available-count');
const countTotal = document.getElementById('count-total');
const countInterview = document.getElementById('count-interview');
const countRejected = document.getElementById('count-rejected');
const tabButtons = document.querySelectorAll('.tab-btn');


function updateDashboard() {
    countTotal.innerText = jobSData.length;
    
    const interviewCount = jobSData.filter(job => job.status === 'Interview').length;
    const rejectedCount = jobSData.filter(job => job.status === 'Rejected').length;

    countInterview.innerText = interviewCount;
    countRejected.innerText = rejectedCount;
}

function generateJobCardHTML(job) {
    let badgeText = "NOT APPLIED";
    let badgeClass = "bg-[#f1f5f9] text-[#002C5C]";
    
    if (job.status === 'Interview') {
        badgeText = "INTERVIEW";
        badgeClass = "bg-[#e6fcf5] text-[#20c997]";
    } else if (job.status === 'Rejected') {
        badgeText = "REJECTED";
        badgeClass = "bg-[#fff1f0] text-[#ff4d4f]";
    }

    return `
    <div class="bg-white p-6 rounded-md shadow-sm border border-gray-100 relative group">
        <button onclick="deleteJob(${job.id})" class="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>

        <h3 class="text-lg font-bold text-[#002C5C] mb-1">${job.companyName}</h3>
        <p class="text-gray-500 text-sm mb-4">${job.position}</p>
        
        <div class="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
            <span>${job.location}</span><span>•</span>
            <span>${job.type}</span><span>•</span>
            <span>${job.salary}</span>
        </div>

        <div class="inline-block px-3 py-1 rounded text-xs font-bold mb-4 ${badgeClass}">
            ${badgeText}
        </div>

        <p class="text-gray-600 text-sm mb-6">${job.description}</p>

        <div class="flex gap-3">
            <button onclick="changeStatus(${job.id}, 'Interview')" class="px-4 py-1.5 border border-[#20c997] text-[#20c997] text-xs font-bold rounded hover:bg-[#e6fcf5] transition-colors cursor-pointer">INTERVIEW</button>
            <button onclick="changeStatus(${job.id}, 'Rejected')" class="px-4 py-1.5 border border-[#ff4d4f] text-[#ff4d4f] text-xs font-bold rounded hover:bg-[#fff1f0] transition-colors cursor-pointer">REJECTED</button>
        </div>
    </div>
    `;
}

function renderJobs() {
    updateDashboard();

    let filteredJobs = jobSData;
    if (currentTab === 'interview') {
        filteredJobs = jobSData.filter(job => job.status === 'Interview');
    } else if (currentTab === 'rejected') {
        filteredJobs = jobSData.filter(job => job.status === 'Rejected');
    }

    availableCount.innerText = `${filteredJobs.length} jobs`;

    if (filteredJobs.length === 0) {
        jobsContainer.innerHTML = ''; 
        emptyState.classList.remove('hidden'); 
        emptyState.classList.add('flex');
        return; 
    }

    emptyState.classList.add('hidden');
    emptyState.classList.remove('flex');
    let htmlContent = '';
    filteredJobs.forEach(job => {
        htmlContent += generateJobCardHTML(job);
    });

    jobsContainer.innerHTML = htmlContent;
}

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => {
            btn.classList.remove('bg-blue-500', 'text-white', 'border-blue-500');
            btn.classList.add('bg-white', 'text-gray-600', 'border-gray-200');
        });
 
        button.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');
        button.classList.add('bg-blue-500', 'text-white', 'border-blue-500');
        currentTab = button.getAttribute('data-tab');
        renderJobs();
    });
});

function changeStatus(jobId, newStatus) {
    const jobIndex = jobSData.findIndex(job => job.id === jobId);
    
    if (jobIndex !== -1) {
        jobSData[jobIndex].status = newStatus;
        renderJobs();
    }
}
function deleteJob(jobId) {
    jobSData = jobSData.filter(job => job.id !== jobId);
    renderJobs();
}

renderJobs();