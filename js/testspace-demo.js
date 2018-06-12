/* globals hopscotch: false */
/* globals $: true */

// Define the tour!
var tour = {
  id: 'testspace-demo',
  steps: [
    
     {
      title: 'Manage Test Results',
      content: 'Tool agnostic Results Management designed for Automation/CI. See our <a href=\"https://blog.testspace.com/\" target=\"_blank\">blog</a> for details.',
      target: 'project-142',
      placement: 'top',
      arrowOffset: 'center',
      xOffset: 300,
      yOffset: -75,
      onShow: function() {
        $('.hopscotch-bubble-arrow-container').css('visibility', 'hidden');
      }
    },
    {
      title: 'View Project Readiness',
      content: 'Unified project-based quality metrics – generated from test results, code coverage, static analysis, logs, and source code changes.',
      target: 'project-142',
      placement: 'top',
      arrowOffset: 'center'
    },
    {
      title: 'Elevated Important Metrics',
      content: 'Include important metrics in the build status check. Add your own <a href=\"https://blog.testspace.com/turn-log-files-into-actionable-metrics/\" target=\"_blank\">custom charts</a> and quality metrics.',
      target: 'project-142',
      placement: 'top',
      arrowOffset: 'center',
      xOffset: 585,
      multipage: true,
      onNext: function() {
        window.location = '/projects/s2technologies:testspace/spaces/master/metrics';
      },
    },
    {
      title: 'Standard Charts and Metrics',
      target: document.querySelector(".metrics-header"),
      content: 'Built-in tracking of source code changes, tests growth, regressions, and more.',
      placement: 'top',
      arrowOffset: 'center',
      yOffset: 34,
      xOffset: 300,
      multipage: true,
      onNext: function() {
        window.location = '/projects/s2technologies:testspace/insights';
      },
      onPrev: function() {
        window.location = '/';
      }
    },
    
    {
      title: 'Optimize using Insights',
      content: 'Insights - performance indicators that continuously assess your testing process. See article <a href=\"https://blog.testspace.com/testspace-insights/\" target=\"_blank\">Testspace Insights</a> for details.',
      target: document.querySelector(".insights-header"),
      placement: 'top',
      arrowOffset: 'center',
      xOffset: 300,
      yOffset: 60,
      onShow: function() {
        $('.hopscotch-bubble-arrow-container').css('visibility', 'hidden');
      },
      onPrev: function() {
        window.location = '/projects/s2technologies:testspace/spaces/master/metrics';
      }
    },
    {
      title: 'Results Strength',
      content: 'Provides a macro view of the consistency of results being generated by your test automation.',
      target: document.querySelector(".insights-header"),
      placement: 'top',
      arrowOffset: 'center',
      yOffset: 44,
    },
    {
      title: 'Test Effectiveness',
      content: 'Used for assessing the effectiveness of automated tests at capturing side-effects from source code changes.',
      target: document.querySelector(".insights-header"),
      placement: 'top',
      arrowOffset: 'center',
      xOffset: 350,
      yOffset: 44
    },
    {
      title: 'Workflow Efficiency',
      content: 'Used to measure the efficiency of resolving test case failures and closing pull requests.',
      target: document.querySelector(".insights-header"),
      placement: 'top',
      arrowOffset: 'center',
      xOffset: 750,
      yOffset: 44,
      multipage: true,
      onNext: function() {
        window.location = '/projects/58493/spaces/add-test-reporting-failures';
      },
    },
    {
      title: 'Triage Test Failures',
      content: 'Testspace provides views to both track and improve the efficiency of addressing test failures. Check out our blog article on <a href=\"https://blog.testspace.com/filtering-and-tracking-test-failures/\" target=\"_blank\">Filtering and Tracking</a> for more details.',
      target: 'schema-orphans',
      placement: 'top',
      xOffset: 260,
      yOffset: 80,
      multipage: true,
      onShow: function() {
        $('.hopscotch-bubble-arrow-container').css('visibility', 'hidden');
      },
      onPrev: function() {
        window.location = '/projects/s2technologies:testspace/insights';
      },
      onNext: function() {
        window.location = '/spaces/114741/schema/_failures';
      },
    },
    {
      title: 'Single-click Failure Filtering!',
      content: 'Complete failure context: call stack, timing information, and more.',
      target: document.querySelector('.schema-orphans'),
      placement: 'top',
      yOffset: 120,
      xOffset: 350,
      onShow: function() {
        $('.hopscotch-bubble-arrow-container').css('visibility', 'hidden');
      },
      onPrev: function() {
        window.location = '/projects/58493/spaces/add-test-reporting-failures';
      },
    },
 
  ],
  
  onClose: function () {
    hopscotch.endTour();
    window.location = 'https://s2.testspace.com';
  },
  
  onEnd: function () {
    hopscotch.endTour();
    window.location = 'https://s2.testspace.com';
  },
  
  onError: function () {
    console.log("onError .."); 
    hopscotch.endTour();
  },
  
  skipIfNoElement: false,
  showPrevButton: true,
  scrollTopMargin: 100
};

var state = hopscotch.getState();
console.log(state);
hopscotch.startTour(tour);
