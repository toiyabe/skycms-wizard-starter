// Publish Website - SignalR integration
const staticWebsite = true;
let publishConnection = null;

async function initializeSignalR() {
    if (publishConnection && publishConnection.state === signalR.HubConnectionState.Connected) {
        return publishConnection;
    }

    publishConnection = new signalR.HubConnectionBuilder()
        .withUrl("/hubs/publishing-progress")
        .withAutomaticReconnect()
        .configureLogging(signalR.LogLevel.Information)
        .build();

    publishConnection.on("ReceiveProgress", (data) => {
        updateProgress(data);
    });

    publishConnection.onreconnecting(() => {
        document.getElementById("statusMsg").textContent = "Connection lost. Reconnecting...";
    });

    publishConnection.onreconnected(() => {
        document.getElementById("statusMsg").textContent = "Connection restored. Publishing continues...";
    });

    publishConnection.onclose(() => {
        console.log("SignalR connection closed");
    });

    try {
        await publishConnection.start();
        console.log("SignalR Connected");
    } catch (err) {
        console.error("SignalR Connection Error: ", err);
        document.getElementById("statusMsg").textContent = "Error connecting to progress updates. Please refresh the page.";
    }

    return publishConnection;
}

function updateProgress(data) {
    const progressBar = document.getElementById("publishProgressBar");
    const statusMsg = document.getElementById("statusMsg");

    if (progressBar) {
        progressBar.style.width = data.progressPercentage + "%";
        progressBar.setAttribute("aria-valuenow", data.progressPercentage);
        progressBar.textContent = data.progressPercentage + "%";
    }

    if (statusMsg) {
        let message = data.message;
        if (data.currentPage && data.totalPages) {
            message += ` (${data.currentPage}/${data.totalPages})`;
        }
        statusMsg.textContent = message;
    }

    console.log(`Progress: ${data.progressPercentage}% - ${data.message}`);
}

async function publish() {
    try {
        // Hide previous success alert
        const successAlert = document.getElementById("successAlert");
        if (successAlert) {
            successAlert.style.display = "none";
        }

        // Show progress UI
        const progressContainer = document.getElementById("progressContainer");
        const btnPublish = document.getElementById("btnPublish");
        const progressBar = document.getElementById("publishProgressBar");
        const statusMsg = document.getElementById("statusMsg");

        if (progressContainer) progressContainer.style.display = "block";
        if (btnPublish) btnPublish.disabled = true;
        if (progressBar) {
            progressBar.style.width = "0%";
            progressBar.textContent = "0%";
        }
        if (statusMsg) statusMsg.textContent = "Initializing...";

        // Simulate publishing process (replace with actual API calls)
        if (statusMsg) statusMsg.textContent = "Starting static page generation...";
        
        // Simulate progress
        await simulateProgress();

        // Complete
        if (progressBar) {
            progressBar.style.width = "100%";
            progressBar.textContent = "✓ 100%";
        }
        if (statusMsg) statusMsg.textContent = "Publishing completed successfully!";
        if (successAlert) successAlert.style.display = "block";

    } catch (error) {
        console.error("Publishing error:", error);
        const statusMsg = document.getElementById("statusMsg");
        if (statusMsg) {
            statusMsg.textContent = "Error: " + error.message;
        }
    } finally {
        const btnPublish = document.getElementById("btnPublish");
        if (btnPublish) btnPublish.disabled = false;
    }
}

async function simulateProgress() {
    const progressBar = document.getElementById("publishProgressBar");
    const statusMsg = document.getElementById("statusMsg");
    
    for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
        if (progressBar) {
            progressBar.style.width = i + "%";
            progressBar.textContent = i + "%";
        }
        if (statusMsg) {
            statusMsg.textContent = `Publishing pages... ${i}%`;
        }
    }
}

// Cleanup on page unload
window.addEventListener('beforeunload', async () => {
    if (publishConnection) {
        await publishConnection.stop();
    }
});
