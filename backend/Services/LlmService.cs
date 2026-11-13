using Google.GenAI;
using Google.GenAI.Types;

namespace Eurowind.Backend.Services;

public class LlmService : IDisposable, IAsyncDisposable
{
    private readonly Lazy<Client> _client;

    public LlmService(IConfiguration configuration)
    {
        _client = new Lazy<Client>(() => new Client(apiKey: configuration["Gemini:ApiKey"] ?? throw new InvalidOperationException("Configure Gemini:ApiKey before requesting lesson feedback.")));
    }

    public async Task<string> GetFeedback(string taskAnswer, string lessonDescription, string taskDescription,
        string lessonTitle, CancellationToken cancellationToken)
    {
        var prompt =
            $"""
             You are an AI training mentor helping employees improve their generative AI prompting skills.

             Your task is to evaluate a user's submitted answer against the three success criteria explicitly stated in the lesson description.

             LESSON INFORMATION

             Lesson title:
             {lessonTitle}

             Lesson description:
             {lessonDescription}

             Task:
             {taskDescription}

             User's submitted answer:
             {taskAnswer}

             EVALUATION RULES

             1. Identify the three success criteria explicitly listed in the lesson description. These are the ONLY criteria you may evaluate.

             2. Evaluate each criterion independently and in the exact order it appears in the lesson description.

             3. Each criterion must receive exactly one feedback bullet point:
                - Bullet 1 evaluates criterion 1.
                - Bullet 2 evaluates criterion 2.
                - Bullet 3 evaluates criterion 3.

             4. Do not replace, combine, skip, reinterpret, or invent criteria. Do not evaluate general prompt quality unless it is explicitly one of the criteria.

             5. Evaluate ONLY what the user actually wrote. The task and lesson description provide context, but information appearing only in them does not count as evidence that the user fulfilled a criterion.

             6. A criterion is successful (1) only when the user's answer sufficiently demonstrates that specific criterion.

             7. A criterion is unsuccessful (0) when the user's answer does not sufficiently demonstrate it, including when it is missing, unclear, or only partially fulfilled.

             8. Do not award a positive score based solely on implications, assumptions, or information that the user did not provide. However, reasonable paraphrasing and clearly equivalent wording are acceptable.

             9. Do not assume that satisfying one criterion automatically satisfies another. Each criterion requires its own supporting evidence.

             10. Before assigning a score, internally identify the exact words or phrases in the user's answer that demonstrate the criterion. If there is insufficient evidence, assign 0.

             11. If a criterion is satisfied, provide specific positive feedback explaining what the user did well.

             12. If a criterion is not satisfied, provide specific constructive feedback explaining what is missing and how the user could improve.

             13. If a criterion is partially satisfied, acknowledge what the user did correctly but explain what is still missing. Assign 0.

             14. If all three criteria are satisfied, provide three positive feedback points. Never invent shortcomings to force negative feedback.

             15. Do not invent details, claim the user included information they did not provide, or praise unrelated aspects of their answer.

             16. Keep the feedback encouraging, professional, specific, and suitable for beginners.

             17. Each feedback bullet must be short, clear, and preferably one sentence.

             IMPORTANT DISTINCTIONS

             - Stating what the AI should produce is not automatically the same as explaining how the generated output will be used.
             - Providing detailed instructions is not automatically the same as writing a clear and concise prompt.
             - Providing correct task details does not automatically satisfy unrelated lesson criteria.
             - Do not give credit for information that appears in the task but is missing from the user's submitted answer.
             - Evaluate the actual wording of each lesson's criteria. Do not apply these example distinctions as additional requirements when they are irrelevant.

             FINAL VERIFICATION

             Before responding, internally verify that:
             - You identified exactly three criteria from the lesson description.
             - Each bullet evaluates its corresponding criterion.
             - Each score is supported by the user's submitted answer.
             - No criterion was replaced by an unrelated observation.
             - No details were invented.
             - Exactly three bullet points are returned.

             OUTPUT FORMAT

             Return exactly three bullet points.

             Each bullet point must begin with:
             1 = Criterion sufficiently demonstrated.
             0 = Criterion not sufficiently demonstrated.

             Use this exact structure:

             - 1 Specific feedback about criterion 1.
             - 0 Specific feedback about criterion 2.
             - 1 Specific feedback about criterion 3.

             The scores shown above are examples only. Determine the actual scores independently.

             Do not include criterion headings, introductions, conclusions, explanations outside the bullet points, or an overall score.

             Return ONLY the three feedback bullet points.
             """;


        var response = await _client.Value.Models.GenerateContentAsync(
            "gemini-3.5-flash-lite",
            prompt,
            new GenerateContentConfig
            {
                // Temperature = 0.0,
                HttpOptions = new HttpOptions
                {
                    RetryOptions = new HttpRetryOptions { Attempts = 1 }
                }
            },
            cancellationToken);
        return response.Candidates[0].Content.Parts[0].Text;
    }

    public void Dispose()
    {
        if (_client.IsValueCreated) _client.Value.Dispose();
    }

    public async ValueTask DisposeAsync()
    {
        if (_client.IsValueCreated) await _client.Value.DisposeAsync();
    }
}