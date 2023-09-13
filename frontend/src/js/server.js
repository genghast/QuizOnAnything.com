export async function getQuizObj(topic_obj) {
    const data = topic_obj;
    try {
        const response = await fetch("http://127.0.0.1:3000/process", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const result = await response.json();
        console.log(result);
        try {
            const quiz_obj =
                result["choices"][0]["message"]["function_call"]["arguments"];
            return JSON.parse(quiz_obj);
        } catch {
            const quiz_obj = result["choices"][0]["message"]["content"];
            return JSON.parse(quiz_obj);
        }

        // processResponse(result); // Process the received data
    } catch (error) {
        console.error("Error:", error);
    }
}

// egTopicObj = {
//     topic: "topic name",
// };
