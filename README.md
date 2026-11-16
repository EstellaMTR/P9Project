# Eurowind Learning Platform

## Set up Gemini for lesson feedback

1. Sign in to [Google AI Studio](https://aistudio.google.com/api-keys) with your Google account.
2. On the **API Keys** page, use your existing key or select **Create API key**, choose a Google Cloud project, and copy the new key. See [Google’s API key guide](https://ai.google.dev/gemini-api/docs/api-key) if your project is missing.
3. From the repository root, save your key in the backend’s local .NET User Secrets store. Replace the placeholder with your own key.

   ```powershell
   dotnet user-secrets set "Gemini:ApiKey" "<your Gemini API key>" --project backend
   ```

4. Restart the backend with the HTTPS launch profile. In Swagger, try `POST /LessonEmployee/lessonEmployee/feedback` using an existing lesson and employee ID and a sample task answer.

Keep the key in User Secrets and out of source files, Git commits, and frontend code.

## API contracts and frontend client

The backend is the source of truth. Every `dotnet build backend/Eurowind.Backend.csproj`
exports OpenAPI 3.1 to `backend/openapi/api.json`, without needing a running server or
database. In Development the live schema is also available at `/openapi/v1.json`
and Swagger UI at `/swagger`.

From `frontend`, run `npm ci`, then `npm run api:generate` to rebuild the backend
and regenerate TypeScript models and Fetch SDK functions in `src/api/generated`.
`npm run dev` and `npm run build` do this automatically before starting. After a
backend change during an active dev session, rerun `npm run api:generate`.
Commit the schema and generated client alongside API changes; do not edit them by hand.
Generation requires the .NET 10 SDK and Node.js 22+.

Import API functions through `src/api` so the shared client configuration is applied:

```ts
import { loginEmployee } from './api'

const { data: employeeId, error } = await loginEmployee({
  body: { email: 'employee@example.com', password: 'password' },
})
```

Run the backend with `dotnet run --project backend --launch-profile https`.
Vite proxies `/api` to `https://localhost:7045`. For production, route `/api` to the
backend or set `VITE_API_BASE_URL` at frontend build time (a separate origin also
requires backend CORS configuration).

For new controller actions, use `ActionResult<T>` for the success body, a unique
HTTP route name for a stable generated function name, and `ProducesResponseType`
attributes for every error response/body. Use DTOs with explicit nullable properties
where appropriate. Only types used by API operations appear in the schema.
