export async function sendComplaints(webAppQueryId, text, dataUnsafe) {
    const response = await fetch(`https://aitucomplaintsbot-production.up.railway.app/complaints`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            web_app_query_id: webAppQueryId,
            result: {
                type: "article",
                id: webAppQueryId,
                title: dataUnsafe,
                input_message_content: {message_text: text}
            }
        }),
    });
    return response.json();
}
