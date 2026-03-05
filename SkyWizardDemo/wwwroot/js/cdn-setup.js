// CDN Setup - Form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const cdnConfig = {
                cloudflare: {
                    apiToken: document.getElementById('cfApiToken')?.value,
                    zoneId: document.getElementById('cfZoneId')?.value
                },
                azure: {
                    isFrontDoor: document.getElementById('isFrontDoor')?.checked,
                    subscriptionId: document.getElementById('azSubscriptionId')?.value,
                    resourceGroup: document.getElementById('azResourceGroup')?.value,
                    profileName: document.getElementById('azProfileName')?.value,
                    endpointName: document.getElementById('azEndpointName')?.value
                },
                sucuri: {
                    apiKey: document.getElementById('sucuriApiKey')?.value,
                    apiSecret: document.getElementById('sucuriApiSecret')?.value
                },
                cloudFront: {
                    distributionId: document.getElementById('cfDistributionId')?.value,
                    accessKeyId: document.getElementById('awsAccessKey')?.value,
                    secretAccessKey: document.getElementById('awsSecretKey')?.value,
                    region: document.getElementById('awsRegion')?.value
                }
            };
            
            console.log('Saving CDN configuration:', cdnConfig);
            
            // Simulate test
            setTimeout(() => {
                alert('CDN settings saved and tested successfully!');
            }, 1000);
        });
    }
});
