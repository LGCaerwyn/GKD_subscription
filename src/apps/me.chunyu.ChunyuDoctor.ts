import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.chunyu.ChunyuDoctor',
  name: '春雨医生',
  groups: [
    {
      key: 10,
      name: '应用评分弹窗',
      activityIds: [
        'me.chunyu.ChunyuDoctor.Activities.WelcomeActivity',
        'me.chunyu.ChunyuDoctor.Activities.MainActivity',
      ],
      rules: [
        {
          matches:
            '[text="给应用评分"] +(2) RelativeLayout > [text="下次再说"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12661907',
            'https://i.gkd.li/i/12661924',
          ],
        },
      ],
    },
  ],
});
