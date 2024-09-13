// URL to your JSON file
const jsonFilePath = 'static/work.json';

// Function to load JSON data
async function loadworklist() {
    try {
        // Fetch the JSON data from the specified file
        const response = await fetch(jsonFilePath);
        
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Log to the console to indicate that the data has been fetched successfully
        console.log("Done");
        
        // Parse the JSON data from the response
        const worklist = await response.json();
        
        // Process and render the worklist using the data
        renderworklist(worklist);
    } catch (error) {
        // Log any errors that occur during the fetch or JSON parsing process
        console.error('Failed to load JSON:', error);
    }
}

// Function to render the worklist
function renderworklist(worklist) {
    // Get the HTML element where the worklist will be displayed
    const worklistContainer = document.getElementById("worklistContainer");

    // Generate the HTML content based on the JSON data
    worklistContainer.innerHTML = worklist
        .map((entry) => {
            return `
                <div class="work-container" style="margin-top: 10px">
                    <img src="${entry.image}" alt="${entry.alt}" height="${entry.height || '400'}" class="pic" />
                    <div class="work-content">
                        <h2 style="font-weight: bold">
                            ${entry.title}
                        </h2>
                        <strong>${entry.role}</strong>
                        <p>
                            ${entry.description}
                        </p>
                        <a
                            href="${entry.link}"
                            target="_blank"
                            rel="noopener noreferrer"
                            style="color: #2d2d2d"
                        >Learn more</a>
                    </div>
                </div>
            `;
        })
        .join(""); // Join all HTML strings into a single string
}

// Load JSON data and render the worklist when the page loads
window.onload = loadworklist;
