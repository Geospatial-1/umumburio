// Generate realistic sample data
function generateDemoData() {
    const sampleMembers = [
        {
            id: "KTG/2023/0001/1234",
            name: "John Mwangi",
            phone: "+254712345678",
            photo: "assets/images/members/1.jpg",
            joined: "2023-01-15",
            status: "approved"
        },
        // Add 5-10 more members
    ];

    const sampleLoans = [
        {
            memberId: "KTG/2023/0001/1234",
            amount: 15000,
            date: "2023-06-10",
            status: "active"
        }
    ];

    const sampleEvents = [
        {
            title: "Monthly Meeting",
            date: "2023-07-15",
            photos: ["event1.jpg", "event2.jpg"],
            attendees: 24
        }
    ];

    localStorage.setItem('demoMembers', JSON.stringify(sampleMembers));
    localStorage.setItem('demoLoans', JSON.stringify(sampleLoans));
    localStorage.setItem('demoEvents', JSON.stringify(sampleEvents));
}

// Load demo mode
function initDemoMode() {
    if (!localStorage.getItem('demoMembers')) {
        generateDemoData();
    }
    renderAllData();
}
