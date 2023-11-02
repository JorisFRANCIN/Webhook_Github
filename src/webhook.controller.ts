import { Controller, Post, Body } from '@nestjs/common';

@Controller('webhook/github')
export class WebhookController {
  @Post()
  githubWebhook(@Body() payload: any) {
    const event = payload.headers['x-github-event'];

    // Check if the event is "issues" and is "opened"
    if (event === 'issues' && payload.body.action === 'opened') {
      const issue = payload.body.issue;
      const repository = payload.body.repository.full_name;
      const sender = payload.body.sender.login;
      console.log(`New issue created in ${repository} by ${sender}`);
      console.log(`Issue URL: ${issue.html_url}`);
    }

    return 'Webhook received and processed.';
  }
}
