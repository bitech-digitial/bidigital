import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  renderToBuffer,
} from "@react-pdf/renderer";
import { CONTRACT_CLAUSES, CONTRACT_META } from "@/lib/contract-content";

const styles = StyleSheet.create({
  page: { fontFamily: "Helvetica", fontSize: 10, padding: 44, color: "#1D2939" },
  header: { marginBottom: 20, paddingBottom: 14, borderBottomWidth: 1, borderBottomColor: "#E1EAF5" },
  logo: { fontSize: 20, fontFamily: "Helvetica-Bold", color: "#007AFF", marginBottom: 3 },
  headerSub: { fontSize: 8.5, color: "#64748B" },
  title: { fontSize: 15, fontFamily: "Helvetica-Bold", color: "#1D2939", marginBottom: 4, textAlign: "center" },
  subtitle: { fontSize: 9, color: "#64748B", textAlign: "center", marginBottom: 22 },
  sectionTitle: { fontSize: 10.5, fontFamily: "Helvetica-Bold", color: "#007AFF", marginBottom: 5, marginTop: 14 },
  sectionText: { fontSize: 9.5, lineHeight: 1.65, color: "#374151" },
  signatureBlock: {
    marginTop: 28,
    padding: 16,
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E1EAF5",
    borderRadius: 6,
  },
  signatureTitle: { fontSize: 11, fontFamily: "Helvetica-Bold", marginBottom: 10, color: "#1D2939" },
  signatureMeta: { fontSize: 9, color: "#64748B", marginBottom: 4 },
  signatureImage: { width: 220, height: 80, marginTop: 10, borderWidth: 1, borderColor: "#E1EAF5" },
  footer: {
    position: "absolute",
    bottom: 22,
    left: 44,
    right: 44,
    textAlign: "center",
    fontSize: 7.5,
    color: "#94A3B8",
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
    paddingTop: 7,
  },
});

interface ContractPDFData {
  email: string;
  nom: string | null;
  signatureData: string;
  ip: string;
  signedAt: Date;
}

function ContractDocument({ email, nom, signatureData, ip, signedAt }: ContractPDFData) {
  const dateStr = signedAt.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.logo}>{CONTRACT_META.prestataire}</Text>
          <Text style={styles.headerSub}>
            {CONTRACT_META.email} · {CONTRACT_META.adresse} · SIRET {CONTRACT_META.siret}
          </Text>
        </View>

        <Text style={styles.title}>Contrat de Prestation de Services</Text>
        <Text style={styles.subtitle}>Abonnement mensuel — Site web professionnel · 100 € TTC / mois</Text>

        {CONTRACT_CLAUSES.map((clause) => (
          <View key={clause.id}>
            <Text style={styles.sectionTitle}>{clause.title}</Text>
            <Text style={styles.sectionText}>{clause.content}</Text>
          </View>
        ))}

        <View style={styles.signatureBlock}>
          <Text style={styles.signatureTitle}>Signature électronique du Client</Text>
          <Text style={styles.signatureMeta}>Nom : {nom ?? "Non renseigné"}</Text>
          <Text style={styles.signatureMeta}>Email : {email}</Text>
          <Text style={styles.signatureMeta}>Date et heure : {dateStr}</Text>
          <Text style={styles.signatureMeta}>Adresse IP : {ip}</Text>
          <Image style={styles.signatureImage} src={signatureData} />
        </View>

        <Text style={styles.footer}>
          {CONTRACT_META.prestataire} · {CONTRACT_META.adresse} · {CONTRACT_META.email} —
          Document généré automatiquement le {new Date().toLocaleDateString("fr-FR")}
        </Text>
      </Page>
    </Document>
  );
}

export async function generateContractPDF(data: ContractPDFData): Promise<Buffer> {
  const buffer = await renderToBuffer(<ContractDocument {...data} />);
  return Buffer.from(buffer);
}
