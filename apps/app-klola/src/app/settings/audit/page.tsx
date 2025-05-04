"use client"

import { Divider } from "@ui/components/base/divider"
// import Approvers from "@/modules/settings/components/approvers"
// import AuditRules from "@/modules/settings/components/audit-rules"
// import TransactionPolicy from "@/modules/settings/components/transaction-policy"

export default function Audit() {
  return (
    <div>
      {/* <AuditRules /> */}
      <Divider className="my-10" />
      {/* <Approvers /> */}
      <Divider className="my-10" />
      {/* <TransactionPolicy /> */}
    </div>
  )
}
