import React, { useState } from 'react';

function AdminPanel() {
    const [active, setActive] = useState('Manage posts');

    const changeActive = (val) => {
        setActive(val);
    };

    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: '#F8F5F2' }}>
            {/* Sidebar */}
            <div style={{ width: '250px', backgroundColor: '#C4A484', padding: '10px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <h1 style={{ textAlign: 'center', color: '#FFFFFF' }}>Trace 467 Admin</h1>
                <button 
                    onClick={() => changeActive('Manage posts')}
                    style={buttonStyle(active === 'Manage posts')}>
                    Manage Posts
                </button>
                <button 
                    onClick={() => changeActive('Manage Users')}
                    style={buttonStyle(active === 'Manage Users')}>
                    Manage Users
                </button>
                <button 
                    onClick={() => changeActive('Kick Someone')}
                    style={buttonStyle(active === 'Kick Someone')}>
                    Kick Someone
                </button>
                <button 
                    onClick={() => changeActive('Reported Users')}
                    style={buttonStyle(active === 'Reported Users')}>
                    Reported Users
                </button>
                <button 
                    onClick={() => changeActive('Reported Posts')}
                    style={buttonStyle(active === 'Reported Posts')}>
                    Reported Posts
                </button>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: '20px', backgroundColor: '#FFFFFF', overflowY: 'auto' }}>
                <h2>{active}</h2>
                <div style={{ marginTop: '20px' }}>
                    {renderContent(active)}
                </div>
            </div>
        </div>
    );
}

const buttonStyle = (isActive) => ({
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: isActive ? '#E6D5B6' : '#FFFFFF',
    color: isActive ? '#000' : '#333',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
});

const renderContent = (section) => {
    switch (section) {
        case 'Manage posts':
            return <ManagePosts />;
        case 'Manage Users':
            return <ManageUsers />;
        case 'Kick Someone':
            return <KickSomeone />;
        case 'Reported Users':
            return <ReportedUsers />;
        case 'Reported Posts':
            return <ReportedPosts />;
        default:
            return <p>Select a section from the sidebar to begin.</p>;
    }
};

// Dummy data and components for each section
const ManagePosts = () => {
    const dummyPosts = [
        { id: 1, user: 'JohnDoe', content: 'Caught a 10 lb bass!', date: '2024-09-15' },
        { id: 2, user: 'FishingKing', content: 'First deer of the season!', date: '2024-09-18' },
        { id: 3, user: 'Outdoorsman', content: 'Best hunting trip ever!', date: '2024-09-17' },
        { id: 4, user: 'HuntMaster', content: 'Found the perfect spot for hunting!', date: '2024-09-16' },
        { id: 5, user: 'JaneFisher', content: 'Biggest fish caught yet!', date: '2024-09-20' },
        { id: 6, user: 'WildlifeFan', content: 'Spotted rare species!', date: '2024-09-19' },
        { id: 7, user: 'HunterGirl', content: 'Outdoor adventure of a lifetime.', date: '2024-09-21' },
        { id: 8, user: 'CamperJoe', content: 'Perfect camping weekend.', date: '2024-09-22' },
        { id: 9, user: 'DeerHunter', content: 'Buck down!', date: '2024-09-10' },
        { id: 10, user: 'AnglerPro', content: 'Fishing tips for beginners.', date: '2024-09-11' },
        { id: 11, user: 'RiverWalker', content: 'Peaceful river fishing.', date: '2024-09-13' },
        { id: 12, user: 'TrackNTrail', content: 'Nature trails discovered.', date: '2024-09-14' },
        { id: 13, user: 'ExplorerMan', content: 'Into the wilderness!', date: '2024-09-14' },
        { id: 14, user: 'SeaSailor', content: 'Caught on the high seas!', date: '2024-09-19' },
        { id: 15, user: 'FishingQueen', content: 'Best boat ride ever!', date: '2024-09-12' }
    ];

    return (
        <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>User</th>
                        <th style={tableHeaderStyle}>Post Content</th>
                        <th style={tableHeaderStyle}>Date</th>
                        <th style={tableHeaderStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyPosts.map(post => (
                        <tr key={post.id}>
                            <td style={tableCellStyle}>{post.user}</td>
                            <td style={tableCellStyle}>{post.content}</td>
                            <td style={tableCellStyle}>{post.date}</td>
                            <td style={tableCellStyle}>
                                <button style={actionButtonStyle}>Delete</button>
                                <button style={actionButtonStyle}>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const ManageUsers = () => {
    const dummyUsers = [
        { id: 1, username: 'JohnDoe', email: 'johndoe@example.com' },
        { id: 2, username: 'FishingKing', email: 'fishingking@example.com' },
        { id: 3, username: 'Outdoorsman', email: 'outdoorsman@example.com' },
        { id: 4, username: 'HuntMaster', email: 'huntmaster@example.com' },
        { id: 5, username: 'JaneFisher', email: 'janefisher@example.com' },
        { id: 6, username: 'WildlifeFan', email: 'wildlifefan@example.com' },
        { id: 7, username: 'HunterGirl', email: 'huntergirl@example.com' },
        { id: 8, username: 'CamperJoe', email: 'camperjoe@example.com' },
        { id: 9, username: 'DeerHunter', email: 'deerhunter@example.com' },
        { id: 10, username: 'AnglerPro', email: 'anglerpro@example.com' },
        { id: 11, username: 'RiverWalker', email: 'riverwalker@example.com' },
        { id: 12, username: 'TrackNTrail', email: 'trackntrail@example.com' },
        { id: 13, username: 'ExplorerMan', email: 'explorerman@example.com' },
        { id: 14, username: 'SeaSailor', email: 'seasailor@example.com' },
        { id: 15, username: 'FishingQueen', email: 'fishingqueen@example.com' }
    ];

    return (
        <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>Username</th>
                        <th style={tableHeaderStyle}>Email</th>
                        <th style={tableHeaderStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyUsers.map(user => (
                        <tr key={user.id}>
                            <td style={tableCellStyle}>{user.username}</td>
                            <td style={tableCellStyle}>{user.email}</td>
                            <td style={tableCellStyle}>
                                <button style={actionButtonStyle}>View</button>
                                <button style={actionButtonStyle}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const KickSomeone = () => {
    const dummyKickList = [
        { id: 1, username: 'Troll123', reason: 'Spamming inappropriate content' },
        { id: 2, username: 'FishHater', reason: 'Harassing other users' },
        { id: 3, username: 'BadVibesOnly', reason: 'Posting offensive language' },
        { id: 4, username: 'AngryAngler', reason: 'Bullying new users' },
        { id: 5, username: 'NoCatchNoFun', reason: 'Spreading misinformation' },
        { id: 6, username: 'WildThing', reason: 'Multiple user reports' },
        { id: 7, username: 'GhostHunter', reason: 'Threatening behavior' },
        { id: 8, username: 'UnicornSlayer', reason: 'Vulgar language' },
        { id: 9, username: 'FishyBiz', reason: 'Toxic comments' },
        { id: 10, username: 'DeerLover', reason: 'Spamming memes' }
    ];

    return (
        <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>Username</th>
                        <th style={tableHeaderStyle}>Reason</th>
                        <th style={tableHeaderStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyKickList.map(user => (
                        <tr key={user.id}>
                            <td style={tableCellStyle}>{user.username}</td>
                            <td style={tableCellStyle}>{user.reason}</td>
                            <td style={tableCellStyle}>
                                <button style={actionButtonStyle}>Kick</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const ReportedUsers = () => {
    const dummyReports = [
        { id: 1, username: 'TrollMaster', reports: 5 },
        { id: 2, username: 'FishyLad', reports: 3 },
        { id: 3, username: 'NoChill', reports: 7 },
        { id: 4, username: 'AngryJoe', reports: 2 },
        { id: 5, username: 'DeerSlayer', reports: 8 },
        { id: 6, username: 'HuntingFiend', reports: 9 },
        { id: 7, username: 'WildHunter', reports: 3 },
        { id: 8, username: 'FishingTroll', reports: 4 },
        { id: 9, username: 'OffRoadKing', reports: 1 },
        { id: 10, username: 'BeastMaster', reports: 6 }
    ];

    return (
        <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>Username</th>
                        <th style={tableHeaderStyle}>Reports</th>
                        <th style={tableHeaderStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyReports.map(user => (
                        <tr key={user.id}>
                            <td style={tableCellStyle}>{user.username}</td>
                            <td style={tableCellStyle}>{user.reports}</td>
                            <td style={tableCellStyle}>
                                <button style={actionButtonStyle}>View</button>
                                <button style={actionButtonStyle}>Ban</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const ReportedPosts = () => {
    const dummyReportedPosts = [
        { id: 1, user: 'AngryJohn', content: 'Offensive post about fishing', reports: 4 },
        { id: 2, user: 'FishTroll', content: 'Spamming low-quality memes', reports: 6 },
        { id: 3, user: 'HuntFiend', content: 'Misleading hunting advice', reports: 3 },
        { id: 4, user: 'WildRider', content: 'Insulting new members', reports: 5 },
        { id: 5, user: 'NatureKing', content: 'Misinformation about wildlife', reports: 2 },
        { id: 6, user: 'BaitMaster', content: 'Inappropriate language', reports: 7 },
        { id: 7, user: 'SeaHunter', content: 'Harassing other users', reports: 4 },
        { id: 8, user: 'TrailTroll', content: 'Fake outdoor tips', reports: 1 },
        { id: 9, user: 'ForestLad', content: 'Promoting illegal activities', reports: 8 },
        { id: 10, user: 'CamperPro', content: 'Trolling on the forums', reports: 5 }
    ];

    return (
        <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>User</th>
                        <th style={tableHeaderStyle}>Post Content</th>
                        <th style={tableHeaderStyle}>Reports</th>
                        <th style={tableHeaderStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyReportedPosts.map(post => (
                        <tr key={post.id}>
                            <td style={tableCellStyle}>{post.user}</td>
                            <td style={tableCellStyle}>{post.content}</td>
                            <td style={tableCellStyle}>{post.reports}</td>
                            <td style={tableCellStyle}>
                                <button style={actionButtonStyle}>Delete</button>
                                <button style={actionButtonStyle}>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Table and Button Styles
const tableHeaderStyle = {
    border: '1px solid #DDD',
    padding: '10px',
    textAlign: 'left',
    backgroundColor: '#F2E3D5',
};

const tableCellStyle = {
    border: '1px solid #DDD',
    padding: '10px',
    textAlign: 'left',
};

const actionButtonStyle = {
    padding: '5px 10px',
    margin: '0 5px',
    backgroundColor: '#C4A484',
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default AdminPanel;
