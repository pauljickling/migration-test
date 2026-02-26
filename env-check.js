exports.handler = async () => {
  // Define the vars you expect to be set.
  // Add/remove entries to match your actual project's env vars.
  const expectedVars = [
    "MY_TEST_VAR",
    "ANOTHER_VAR",
  ];

  const results = {};
  for (const key of expectedVars) {
    const value = process.env[key];
    results[key] = {
      present: value !== undefined,
      // Show value for non-sensitive vars during testing.
      // Remove or mask this for anything actually secret.
      value: value ?? null,
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(results, null, 2),
  };
};
