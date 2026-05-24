-- CreateTable
CREATE TABLE "OnboardingSession" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nom" TEXT,
    "offre" TEXT,
    "objectif" TEXT,
    "styleVisuel" TEXT,
    "couleurs" TEXT,
    "logoUrl" TEXT,
    "inspirations" TEXT,
    "pages" TEXT,
    "photosUrls" TEXT,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OnboardingSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OnboardingSession_token_key" ON "OnboardingSession"("token");
