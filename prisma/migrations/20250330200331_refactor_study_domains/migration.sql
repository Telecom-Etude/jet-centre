/*
  Warnings:

  - The values [DeveloppementWeb,DeveloppementMobile,DeveloppementLogiciel,CyberSecurite,Cryptographie,SystemesEmbarques,InternetDesObjets,Reseaux,EtudeDeMarche,EtatDeLArt] on the enum `Domain` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Domain_new" AS ENUM ('Chatbot', 'DataScience', 'MachineLearning', 'IntelligenceArtificielle', 'WebDev', 'MobileDev', 'AppDev', 'Cybersecurity', 'Cryptography', 'Networks', 'Telecommunications', 'Internet', 'IoT', 'EmbeddedSystems', 'Image', 'ComputerVision', 'ComputerGraphics', 'd_3D', 'MarketAnalysis', 'StateOfTheArt');
ALTER TABLE "CompanyInfos" ALTER COLUMN "domains" TYPE "Domain_new"[] USING ("domains"::text::"Domain_new"[]);
ALTER TABLE "MRIs" ALTER COLUMN "mainDomain" TYPE "Domain_new" USING ("mainDomain"::text::"Domain_new");
ALTER TABLE "StudyInfos" ALTER COLUMN "domain" TYPE "Domain_new"[] USING ("domain"::text::"Domain_new"[]);
ALTER TYPE "Domain" RENAME TO "Domain_old";
ALTER TYPE "Domain_new" RENAME TO "Domain";
DROP TYPE "Domain_old";
COMMIT;
