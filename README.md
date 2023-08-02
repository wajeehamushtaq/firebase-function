# firebase-function

This repo contains the following:
- percentileCalculator function - pulls all documents from Firestore and calculates 10th, 50th, and 90th percentile
- fetchFirestoreDocuments function - pulls high number of documents from Firestore in a reasonable parallel manner

## Results:

<img width="447" alt="Screenshot 2023-08-02 at 2 44 30 PM" src="https://github.com/wajeehamushtaq/firebase-function/assets/55188521/7adfc08a-6258-438d-aa10-256a69510793">

## Part 3: Steps to deploy the functions to cloud
These are the points, that we need to focus on while considering deploying the function to production on Firebase.
- Robust error handling must be implemented in order to gracefully handle unforeseen situations. Be sure to handle any exceptions, network issues, and edge cases that may arise while the function runs. Use the proper error messages and codes to make debugging and troubleshooting easier.
- The function should have correct authentication and permissions to use Firebase services. To secure access and stop unauthorized access to sensitive data or operations, use suitable authentication measures.
- Reduce execution time and increase efficiency by optimizing the function's code.
- Implement thorough logging and monitoring to keep tabs on the function's usage and performance. Take advantage of Firebase's logging and monitoring features to learn more about how functions behave, spot problems, and improve performance.
- To prevent misuse or unintentional overuse of the service, including rate limitation and throttling techniques. 
- To avoid security flaws like SQL injection or cross-site scripting, make sure that the data is properly sanitized and validated. 
- Clearly and completely document the usage and API of the function. This facilitates troubleshooting and helps other developers understand how to utilize the function correctly
