/**
 * File to initialise the prisma client for typescript. The goal of this script is to prevent
 * multiple {@link PrismaClient}. For more information, please refer to
 * {@link https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices|the documentation}.
 *
 * @file index.ts
 */

import { Domain } from '@/settings/vars';
import { PrismaClient } from '@prisma/client';

function prismaClientSingleton() {
    return new PrismaClient().$extends({
        result: {
            companyInfos: {
                size: {
                    needs: { size: true },
                    compute(companyInfo) {
                        switch (companyInfo.size) {
                            case 'MicroEntreprise':
                                return 'Micro-entreprise';
                            case 'PetiteEntreprise':
                                return 'Petite entreprise';
                            case 'MoyenneEntreprise':
                                return 'Moyenne entreprise';
                            case 'GrandeEntreprise':
                                return 'Grande entreprise';
                        }
                    },
                },
                domains: {
                    needs: { domains: true },
                    compute(companyInfo) {
                        return companyInfo.domains.map((d): Domain => {
                            switch (d) {
                                case 'DataScience':
                                    return 'Data Science';
                                case 'MachineLearning':
                                    return 'Machine Learning';
                                case 'IntelligenceArtificielle':
                                    return 'Intelligence Artificielle';
                                case 'DeveloppementWeb':
                                    return 'Développement Web';
                                case 'DeveloppementMobile':
                                    return 'Développement Mobile';
                                case 'DeveloppementLogiciel':
                                    return 'Développement logiciel';
                                case 'CyberSecurite':
                                    return 'Cybersécurité';
                                case 'Cryptographie':
                                    return 'Cryptographie';
                                case 'SystemesEmbarques':
                                    return 'Systèmes embarqués';
                                case 'InternetDesObjets':
                                    return 'Internet des objets';
                                case 'Reseaux':
                                    return 'Réseaux';
                                case 'Telecommunications':
                                    return 'Télécommunications';
                                case 'Internet':
                                    return 'Internet';
                                case 'Image':
                                    return 'Image';
                                case 'ComputerGraphics':
                                    return 'Computer Graphics';
                                case 'd_3D':
                                    return '3D';
                                case 'EtudeDeMarche':
                                    return 'Étude de marché';
                                case 'EtatDeLArt':
                                    return "État de l'art";
                            }
                        });
                    },
                },
            },
        },
    });
}

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
