import { onCLS, onFID, onLCP, onFCP, onINP, onTTFB, Metric } from "web-vitals";

/**
 * Submitting metrics to track the lifecycle of an application
 * @param metric
 */
const sendAnalytics = (metric: Metric): void => {
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/analytics", JSON.stringify(metric));
    } else {
      fetch("/analytics", {
        body: JSON.stringify(metric),
        method: "POST",
        keepalive: true,
      });
    }
  } catch(e: unknown) {
    console.warn("Server connection lost");
  }
};

onCLS(sendAnalytics);
onFID(sendAnalytics);
onLCP(sendAnalytics);
onFCP(sendAnalytics);
onINP(sendAnalytics);
onTTFB(sendAnalytics);
