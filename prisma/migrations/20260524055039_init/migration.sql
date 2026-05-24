-- CreateTable
CREATE TABLE "ContractSession" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nom" TEXT,
    "signatureData" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,
    "signedAt" TIMESTAMP(3) NOT NULL,
    "checkoutSessionId" TEXT,
    "stripeCustomerId" TEXT,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContractSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContractSession_token_key" ON "ContractSession"("token");

-- CreateIndex
CREATE UNIQUE INDEX "ContractSession_checkoutSessionId_key" ON "ContractSession"("checkoutSessionId");
