import { Button, Card, Flex, Heading } from "@radix-ui/themes"
import { useConnection } from "@solana/wallet-adapter-react"
import { decodeAta, getUserWsolAccount, NATIVE_MINT, unwrapSol } from "gamba-core-v2"
import { useAccount, useGamba, useSendTransaction, useWalletAddress } from "gamba-react-v2"
import React from "react"

import { useToast } from "@/hooks"
import MintDialogDevnet from "@/MintDialogDevnet"
import MintDialogLocalnet from "@/MintDialogLocalnet"
import { PublicKey } from "@solana/web3.js"
import { GambaStandardTokens } from "gamba-react-ui-v2"

export default function DebugView() {
  const sendTx = useSendTransaction()
  const user = useWalletAddress()
  const { connection } = useConnection()
  const toast = useToast()
  const wSolAccount = useAccount(getUserWsolAccount(user), decodeAta)
  const gamba = useGamba()

  const [x100ing, setx100ing] = React.useState(false)

  const x100 = async () => {
    try {
      setx100ing(true)
      await gamba.play({
        creator: "BADqAHSAXSV9yYT8kwyCmVhqX88UT4LViY9bozLr7XFr",
        creatorFee: 0.05,
        jackpotFee: 0,
        token: GambaStandardTokens.sol.mint,
        wager: 1e9 * .01,
        bet: Array.from({length: 100}).map((_, i) => i === 0 ? 100 : 0)
      })
      const result = await gamba.result()
      toast({title: result.payout > 0 ? "100X ✨" : "You Lose 💀", description: ""})
    } finally {
      setx100ing(false)
    }
  }

  const unwrap = async () => {
    await sendTx(unwrapSol(user))
    toast({ title: "Unwrapped", description: "Unwrapped WSOL" })
  }

  return (
    <Card style={{ maxWidth: "720px", margin: "0 auto" }} size="4">
      <Heading mb="4">
        ✨ Debug tools
      </Heading>
      <Flex gap="2" direction="column">
        <Button disabled={x100ing} variant="soft" onClick={x100}>
          0.01 {'->'} 1 SOL ⁉️
        </Button>
        {wSolAccount && (
          <Button variant="soft" onClick={unwrap}>
            Unwrap WSOL
          </Button>
        )}
        {window.location.origin.includes("localhost") && (
          <>
            {connection.rpcEndpoint.includes("http://127.0.0.1:8899") ? (
              <MintDialogLocalnet />
            ) : (
              <MintDialogDevnet />
            )}
          </>
        )}
      </Flex>
    </Card>
  )
}
