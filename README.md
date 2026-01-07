Workflows
1. Trigger the workflow - The workflow begins whenever a user create or submits a new subscription. We pass the created subscription ID to our workflow.

2. Retrieving Subscription Details
-The process extracts the subsctiption ID from the context.
-It then searches for the corresponding subscription in the database.

3. Validation Checks
-If the subscription does not exists, an error is logged, and the process terminates.
-If the subscription exists, its status is checked:
   .If inactive, the status is logged, and the process exist.
   .If active, the renewal date is verified.

4. Renewal Date Evaluation
-If the renewal date has passed, it logs this information and exits.
-if the renewal date is in the future, the reminder loop begins.

5. Reminder Scheduling
-For each predefined reminder:
   .The reminder date is calculated.
   .If the reminder date is in the future, the system waits until that time.
   .Once the reminder date arrives (or if it has already passed), the reminder email is sent.
6. Completion
-The process repeats for all reminders in the list
-After processing all reminders, the workflow concludes.