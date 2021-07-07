import { formatDistance } from "date-fns";

import Ion from "../ion/core";
import VERSION from "../version";

export const getUserBot = async () => {
  const status = Ion.botStatus;

  return {
    profile: Ion.user,
    status,
    upTime: formatDistance(Ion.startTime, new Date(), {
      addSuffix: true,
    }),
    version: VERSION,
  };
};
