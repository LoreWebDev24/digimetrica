import { reactive } from "vue";

export const reportSonarArray = reactive({
  "status": "success",
  "results": [
    {
      "idsummary": "d1923479-e084-4ade-b18c-0c2262b8fb6a",
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilità per \"cybersonar.demo\"**\n\nIl dominio \"cybersonar.demo\" attualmente presenta una situazione di sicurezza altamente critica, con un punteggio di rischio di 99 su 100, indicando una situazione estremamente pericolosa con multiple vulnerabilità severe, fuga di dati significativa e/o eccessiva esposizione dei servizi. E' richiesta un'azione immediata.\n\n**Vulnerabilità:**\n- Totale vulnerabilità rilevate: 162, con 2 vulnerabilità critiche attive, 18 vulnerabilità passive di alto livello, e una distribuzione varia di vulnerabilità di medio livello (52 totali, di cui 3 attive), e 90 vulnerabilità informative. Non sono state individuate vulnerabilità di basso livello.\n\n**Esposizione dei Servizi:**\n- E' stata identificata un\"esposizione significativa ai servizi attraverso 102 asset totali con 30 indirizzi IPv4 e 23 IPv6 unici. Le porte più esposte comprendono la porta 80 (68 istanze), 443 (42 istanze), nonchè le porte 8800, 53, 6697, 6667, e 8080 con un numero variabile di esposizioni.\n\n**Fuga di Dati:**\n- Le fughe di dati sono sostanziali, con 1 fuga di dati relativa al \"domain_stealer\" non risolta, 826 fughe di dati potenzialmente pericolose (potential_stealer) e 11 altre fughe di dati (other_stealer). Non ci sono fughe di dati VIP o generali rilevate.\n\n**Certificati e Tecnologia:**\n- Sono state riscontrate problematiche relative ai certificati con 15 certificati attivi e 18 scaduti. Questa situazione può comportare rischi aggiuntivi per la sicurezza delle comunicazioni.\n- L'implementazione tecnologica prevede misure di sicurezza quali Web Application Firewall (WAF) su 4 asset, ma nessun Content Delivery Network (CDN) è in uso, aumentando l'esposizione agli attacchi DDoS e ad altre minacce internet.\n\n**Sicurezza Email:**\n- La sicurezza email è vulnerabile allo spoofing, nonostante la politica DMARC sia impostata su \"quarantena\". Non sono state rilevate presenze in blacklist.\n\nLa combinazione delle vulnerabilità critiche, l\"ampio numero di potential_stealer, e l'eccessiva esposizione dei servizi porta ad una situazione di estrema urgenza. Sono necessarie azioni immediate per mitigare i rischi, risolvere le vulnerabilità e migliorare la sicurezza generale del dominio \"cybersonar.demo\".",
      "summary_text_en": "**Executive Summary of Vulnerability for \"cybersonar.demo\"**\n\nThe domain \"cybersonar.demo\" currently has a highly critical security situation, with a risk score of 99 out of 100, indicating an extremely dangerous situation with multiple severe vulnerabilities, significant data leakage, and/or excessive exposure of services. Immediate action is required.\n\n**Vulnerability:**\n- Total vulnerabilities detected: 162, with 2 active critical vulnerabilities, 18 high-level passive vulnerabilities, and a varied distribution of mid-level vulnerabilities (52 total, including 3 active), and 90 informational vulnerabilities. No low-level vulnerabilities were detected.\n\n**Exposure of Services:**\n- Significant exposure to services was identified across 102 total assets with 30 unique IPv4 and 23 IPv6 addresses. The most exposed ports include port 80 (68 instances), 443 (42 instances), as well as ports 8800, 53, 6697, 6667, and 8080 with varying numbers of exposures.\n\n**Data Leakage:**\n- Data leaks are substantial, with 1 data leak related to \"domain_stealer\" unresolved, 826 potentially dangerous data leaks (potential_stealer), and 11 other data leaks (other_stealer). There are no VIP or general data leaks detected.\n\n**Certificates and Technology:**\n- Certificate issues were found with 15 active and 18 expired certificates. This situation may pose additional risks to communication security.\n- Technology implementation includes security measures such as Web Application Firewall (WAF) on 4 assets, but no Content Delivery Network (CDN) is in use, increasing exposure to DDoS attacks and other Internet threats.\n\n**Email Security:**\n- Email security is vulnerable to spoofing, despite DMARC policy being set to \"quarantine.\" No blacklisting has been detected.\n\nThe combination of critical vulnerabilities, the large number of potential_stealers, and excessive exposure of services leads to an extremely urgent situation. Immediate actions are needed to mitigate risks, resolve vulnerabilities, and improve the overall security of the \"cybersonar.demo\" domain.",
      "risk_score": "99",
      "creation_date": "2024-03-07 18:08:41",
      "last_edit": "2024-03-08 14:09:44",
      "domain_name": "cybersonar.demo",
      "servizi_esposti_score": 99,
      "dataleak_score": 100,
      "rapporto_leak_email_score": 50,
      "spoofing_score": 50,
      "open_ports_score": 1,
      "blacklist_score": 70,
      "vulnerability_score_active": 54,
      "vulnerability_score_passive": 99,
      "certificate_score": 61,
      "n_port": {
        "53": {
          "n": 3
        },
        "80": {
          "n": 68
        },
        "443": {
          "n": 42
        },
        "6667": {
          "n": 9
        },
        "6697": {
          "n": 9
        },
        "8080": {
          "n": 6
        },
        "8800": {
          "n": 21
        }
      },
      "n_cert_attivi": 15,
      "n_cert_scaduti": 18,
      "n_asset": 102,
      "n_similar_domains": 13,
      "email_security": {
        "spoofable": "Spoofing possible.",
        "dmarc_policy": "quarantine",
        "blacklist_detections": 0,
        "blacklist_total_list": 60,
        "blacklist_detected_list": []
      },
      "n_dataleak": {
        "total": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 826,
          "other_stealer": 11,
          "general_leak": 0
        },
        "resolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 0,
          "other_stealer": 0,
          "general_leak": 0
        },
        "unresolved": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 826,
          "other_stealer": 11,
          "general_leak": 0
        },
        "enumeration": 2
      },
      "n_vulns": {
        "total": {
          "critical": 2,
          "high": 18,
          "medium": 52,
          "low": 0,
          "info": 90
        },
        "active": {
          "critical": 2,
          "high": 0,
          "medium": 3,
          "low": 0,
          "info": 90
        },
        "passive": {
          "critical": 0,
          "high": 18,
          "medium": 49,
          "low": 0,
          "info": 0
        }
      },
      "waf": {
        "count": 4,
        "assets": [
          "128f92aa-85c1-486f-acbf-c1b43e8b33ba",
          "ec87e3bd-3de2-477c-b52b-b93a70814ed0",
          "b909c3b2-56e6-40e5-98c1-814fa0b85bb7",
          "175e40e8-33af-4db3-9617-a3be04103d6f"
        ]
      },
      "cdn": {
        "count": 0,
        "assets": []
      },
      "unique_ipv4": 30,
      "unique_ipv6": 23
    },
    {
      "idsummary": "e2e93402-37f3-4952-b910-143fd1980258",
      "domain_name": "example1.demo",
      "risk_score": 93,
      "servizi_esposti_score": 99,
      "dataleak_score": 100,
      "rapporto_leak_email_score": 50,
      "spoofing_score": 50,
      "open_ports_score": 1,
      "blacklist_score": 70,
      "vulnerability_score_active": 54,
      "vulnerability_score_passive": 99,
      "certificate_score": 61,
      "n_port": {
        "53": {
          "n": 3
        },
        "80": {
          "n": 68
        },
        "443": {
          "n": 42
        },
        "6667": {
          "n": 9
        },
        "6697": {
          "n": 9
        },
        "8080": {
          "n": 6
        },
        "8800": {
          "n": 21
        }
      },
      "n_cert_attivi": 15,
      "n_cert_scaduti": 18,
      "n_asset": 102,
      "n_similar_domains": 13,
      "email_security": {
        "spoofable": "Spoofing not likely.",
        "dmarc_policy": "none",
        "blacklist_detections": 4,
        "blacklist_total_list": 60,
        "blacklist_detected_list": []
      },
      "n_dataleak": {
        "total": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 977,
          "other_stealer": 11,
          "general_leak": 0
        },
        "resolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 0,
          "other_stealer": 0,
          "general_leak": 0
        },
        "unresolved": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 940,
          "other_stealer": 11,
          "general_leak": 0
        },
        "enumeration": 2
      },
      "n_vulns": {
        "total": {
          "critical": 1,
          "high": 13,
          "medium": 35,
          "low": 0,
          "info": 66
        },
        "active": {
          "critical": 2,
          "high": 0,
          "medium": 3,
          "low": 0,
          "info": 90
        },
        "passive": {
          "critical": 0,
          "high": 18,
          "medium": 49,
          "low": 0,
          "info": 0
        }
      },
      "waf": {
        "count": 10,
        "assets": ["128f92aa-85c1-486f-acbf-c1b43e8b33ba", "ec87e3bd-3de2-477c-b52b-b93a70814ed0", "b909c3b2-56e6-40e5-98c1-814fa0b85bb7", "175e40e8-33af-4db3-9617-a3be04103d6f"]
      },
      "cdn": {
        "count": 5,
        "assets": []
      },
      "unique_ipv4": 30,
      "unique_ipv6": 23,
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilit\u00e0 per \"example1.demo\"**\n\nIl dominio \"example1.demo\" presenta una situazione di sicurezza variata...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"example1.demo\"**\n\nThe domain \"example1.demo\" currently has a varied security situation...",
      "creation_date": "2024-03-06 17:08:41",
      "last_edit": "2024-03-09 12:09:44",
    },
    {
      "idsummary": "b2388600-b621-4cb0-8885-a444a8369e39",
      "domain_name": "example2.demo",
      "risk_score": 78,
      "servizi_esposti_score": 99,
      "dataleak_score": 100,
      "rapporto_leak_email_score": 50,
      "spoofing_score": 50,
      "open_ports_score": 1,
      "blacklist_score": 70,
      "vulnerability_score_active": 54,
      "vulnerability_score_passive": 99,
      "certificate_score": 61,
      "n_port": {
        "53": {
          "n": 3
        },
        "80": {
          "n": 68
        },
        "443": {
          "n": 42
        },
        "6667": {
          "n": 9
        },
        "6697": {
          "n": 9
        },
        "8080": {
          "n": 6
        },
        "8800": {
          "n": 21
        }
      },
      "n_cert_attivi": 15,
      "n_cert_scaduti": 18,
      "n_asset": 102,
      "n_similar_domains": 13,
      "email_security": {
        "spoofable": "Spoofing possible.",
        "dmarc_policy": "none",
        "blacklist_detections": 4,
        "blacklist_total_list": 60,
        "blacklist_detected_list": []
      },
      "n_dataleak": {
        "total": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 977,
          "other_stealer": 11,
          "general_leak": 0
        },
        "resolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 0,
          "other_stealer": 0,
          "general_leak": 0
        },
        "unresolved": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 940,
          "other_stealer": 11,
          "general_leak": 0
        },
        "enumeration": 2
      },
      "n_vulns": {
        "total": {
          "critical": 0,
          "high": 13,
          "medium": 35,
          "low": 0,
          "info": 66
        },
        "active": {
          "critical": 2,
          "high": 0,
          "medium": 3,
          "low": 0,
          "info": 90
        },
        "passive": {
          "critical": 0,
          "high": 18,
          "medium": 49,
          "low": 0,
          "info": 0
        }
      },
      "waf": {
        "count": 10,
        "assets": ["128f92aa-85c1-486f-acbf-c1b43e8b33ba", "ec87e3bd-3de2-477c-b52b-b93a70814ed0", "b909c3b2-56e6-40e5-98c1-814fa0b85bb7", "175e40e8-33af-4db3-9617-a3be04103d6f"]
      },
      "cdn": {
        "count": 5,
        "assets": []
      },
      "unique_ipv4": 30,
      "unique_ipv6": 23,
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilit\u00e0 per \"example2.demo\"**\n\nIl dominio \"example2.demo\" presenta una situazione di sicurezza variata...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"example2.demo\"**\n\nThe domain \"example2.demo\" currently has a varied security situation...",
      "creation_date": "2024-03-07 18:08:41",
      "last_edit": "2024-03-08 14:09:44",
    },
    {
      "idsummary": "19b675f7-a4f7-451f-bdf7-2702e68a7416",
      "domain_name": "example3.demo",
      "risk_score": 74,
      "servizi_esposti_score": 99,
      "dataleak_score": 100,
      "rapporto_leak_email_score": 50,
      "spoofing_score": 50,
      "open_ports_score": 1,
      "blacklist_score": 70,
      "vulnerability_score_active": 54,
      "vulnerability_score_passive": 99,
      "certificate_score": 61,
      "n_port": {
        "53": {
          "n": 3
        },
        "80": {
          "n": 68
        },
        "443": {
          "n": 42
        },
        "6667": {
          "n": 9
        },
        "6697": {
          "n": 9
        },
        "8080": {
          "n": 6
        },
        "8800": {
          "n": 21
        }
      },
      "n_cert_attivi": 15,
      "n_cert_scaduti": 18,
      "n_asset": 102,
      "n_similar_domains": 13,
      "email_security": {
        "spoofable": "Spoofing not likely.",
        "dmarc_policy": "none",
        "blacklist_detections": 4,
        "blacklist_total_list": 60,
        "blacklist_detected_list": []
      },
      "n_dataleak": {
        "total": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 977,
          "other_stealer": 11,
          "general_leak": 0
        },
        "resolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 0,
          "other_stealer": 0,
          "general_leak": 0
        },
        "unresolved": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 940,
          "other_stealer": 11,
          "general_leak": 0
        },
        "enumeration": 2
      },
      "n_vulns": {
        "total": {
          "critical": 0,
          "high": 13,
          "medium": 35,
          "low": 0,
          "info": 66
        },
        "active": {
          "critical": 2,
          "high": 0,
          "medium": 3,
          "low": 0,
          "info": 90
        },
        "passive": {
          "critical": 0,
          "high": 18,
          "medium": 49,
          "low": 0,
          "info": 0
        }
      },
      "waf": {
        "count": 10,
        "assets": ["128f92aa-85c1-486f-acbf-c1b43e8b33ba", "ec87e3bd-3de2-477c-b52b-b93a70814ed0", "b909c3b2-56e6-40e5-98c1-814fa0b85bb7", "175e40e8-33af-4db3-9617-a3be04103d6f"]
      },
      "cdn": {
        "count": 5,
        "assets": []
      },
      "unique_ipv4": 30,
      "unique_ipv6": 23,
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilit\u00e0 per \"example3.demo\"**\n\nIl dominio \"example3.demo\" presenta una situazione di sicurezza variata...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"example3.demo\"**\n\nThe domain \"example3.demo\" currently has a varied security situation...",
      "creation_date": "2023-02-22 17:08:41",
      "last_edit": "2024-03-08 11:09:44",
    },
    {
      "idsummary": "5ed3afac-4b54-4298-9dd2-7bcdd91d5648",
      "domain_name": "example4.demo",
      "risk_score": 98,
      "servizi_esposti_score": 99,
      "dataleak_score": 100,
      "rapporto_leak_email_score": 50,
      "spoofing_score": 50,
      "open_ports_score": 1,
      "blacklist_score": 70,
      "vulnerability_score_active": 54,
      "vulnerability_score_passive": 99,
      "certificate_score": 61,
      "n_port": {
        "53": {
          "n": 3
        },
        "80": {
          "n": 68
        },
        "443": {
          "n": 42
        },
        "6667": {
          "n": 9
        },
        "6697": {
          "n": 9
        },
        "8080": {
          "n": 6
        },
        "8800": {
          "n": 21
        }
      },
      "n_cert_attivi": 15,
      "n_cert_scaduti": 18,
      "n_asset": 102,
      "n_similar_domains": 13,
      "email_security": {
        "spoofable": "Spoofing not likely.",
        "dmarc_policy": "none",
        "blacklist_detections": 4,
        "blacklist_total_list": 60,
        "blacklist_detected_list": []
      },
      "n_dataleak": {
        "total": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 977,
          "other_stealer": 11,
          "general_leak": 0
        },
        "resolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 0,
          "other_stealer": 0,
          "general_leak": 0
        },
        "unresolved": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 940,
          "other_stealer": 11,
          "general_leak": 0
        },
        "enumeration": 2
      },
      "n_vulns": {
        "total": {
          "critical": 1,
          "high": 13,
          "medium": 35,
          "low": 0,
          "info": 66
        },
        "active": {
          "critical": 2,
          "high": 0,
          "medium": 3,
          "low": 0,
          "info": 90
        },
        "passive": {
          "critical": 0,
          "high": 18,
          "medium": 49,
          "low": 0,
          "info": 0
        }
      },
      "waf": {
        "count": 10,
        "assets": ["128f92aa-85c1-486f-acbf-c1b43e8b33ba", "ec87e3bd-3de2-477c-b52b-b93a70814ed0", "b909c3b2-56e6-40e5-98c1-814fa0b85bb7", "175e40e8-33af-4db3-9617-a3be04103d6f"]
      },
      "cdn": {
        "count": 5,
        "assets": []
      },
      "unique_ipv4": 30,
      "unique_ipv6": 23,
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilit\u00e0 per \"example4.demo\"**\n\nIl dominio \"example4.demo\" presenta una situazione di sicurezza variata...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"example4.demo\"**\n\nThe domain \"example4.demo\" currently has a varied security situation...",
      "creation_date": "2024-01-07 12:08:41",
      "last_edit": "2024-02-06 19:09:44",
    },
    {
      "idsummary": "86edeafe-bc5f-4a88-a6bf-830f4823d7e9",
      "domain_name": "example5.demo",
      "risk_score": 77,
      "servizi_esposti_score": 99,
      "dataleak_score": 100,
      "rapporto_leak_email_score": 50,
      "spoofing_score": 50,
      "open_ports_score": 1,
      "blacklist_score": 70,
      "vulnerability_score_active": 54,
      "vulnerability_score_passive": 99,
      "certificate_score": 61,
      "n_port": {
        "53": {
          "n": 3
        },
        "80": {
          "n": 68
        },
        "443": {
          "n": 42
        },
        "6667": {
          "n": 9
        },
        "6697": {
          "n": 9
        },
        "8080": {
          "n": 6
        },
        "8800": {
          "n": 21
        }
      },
      "n_cert_attivi": 15,
      "n_cert_scaduti": 18,
      "n_asset": 102,
      "n_similar_domains": 13,
      "email_security": {
        "spoofable": "Spoofing possible.",
        "dmarc_policy": "none",
        "blacklist_detections": 4,
        "blacklist_total_list": 60,
        "blacklist_detected_list": []
      },
      "n_dataleak": {
        "total": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 977,
          "other_stealer": 11,
          "general_leak": 0
        },
        "resolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 0,
          "other_stealer": 0,
          "general_leak": 0
        },
        "unresolved": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 940,
          "other_stealer": 11,
          "general_leak": 0
        },
        "enumeration": 2
      },
      "n_vulns": {
        "total": {
          "critical": 0,
          "high": 13,
          "medium": 35,
          "low": 0,
          "info": 66
        },
        "active": {
          "critical": 2,
          "high": 0,
          "medium": 3,
          "low": 0,
          "info": 90
        },
        "passive": {
          "critical": 0,
          "high": 18,
          "medium": 49,
          "low": 0,
          "info": 0
        }
      },
      "waf": {
        "count": 10,
        "assets": ["128f92aa-85c1-486f-acbf-c1b43e8b33ba", "ec87e3bd-3de2-477c-b52b-b93a70814ed0", "b909c3b2-56e6-40e5-98c1-814fa0b85bb7", "175e40e8-33af-4db3-9617-a3be04103d6f"]
      },
      "cdn": {
        "count": 5,
        "assets": []
      },
      "unique_ipv4": 30,
      "unique_ipv6": 23,
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilit\u00e0 per \"example5.demo\"**\n\nIl dominio \"example5.demo\" presenta una situazione di sicurezza variata...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"example5.demo\"**\n\nThe domain \"example5.demo\" currently has a varied security situation...",
      "creation_date": "2022-03-07 03:08:41",
      "last_edit": "2023-02-22 05:09:44",
    },
    {
      "idsummary": "e0911f3c-1045-4a23-b173-e9b538908f6f",
      "domain_name": "example6.demo",
      "risk_score": 67,
      "servizi_esposti_score": 99,
      "dataleak_score": 100,
      "rapporto_leak_email_score": 50,
      "spoofing_score": 50,
      "open_ports_score": 1,
      "blacklist_score": 70,
      "vulnerability_score_active": 54,
      "vulnerability_score_passive": 99,
      "certificate_score": 61,
      "n_port": {
        "53": {
          "n": 3
        },
        "80": {
          "n": 68
        },
        "443": {
          "n": 42
        },
        "6667": {
          "n": 9
        },
        "6697": {
          "n": 9
        },
        "8080": {
          "n": 6
        },
        "8800": {
          "n": 21
        }
      },
      "n_cert_attivi": 15,
      "n_cert_scaduti": 18,
      "n_asset": 102,
      "n_similar_domains": 13,
      "email_security": {
        "spoofable": "Spoofing not likely.",
        "dmarc_policy": "none",
        "blacklist_detections": 4,
        "blacklist_total_list": 60,
        "blacklist_detected_list": []
      },
      "n_dataleak": {
        "total": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 977,
          "other_stealer": 11,
          "general_leak": 0
        },
        "resolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 0,
          "other_stealer": 0,
          "general_leak": 0
        },
        "unresolved": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 940,
          "other_stealer": 11,
          "general_leak": 0
        },
        "enumeration": 2
      },
      "n_vulns": {
        "total": {
          "critical": 3,
          "high": 13,
          "medium": 35,
          "low": 0,
          "info": 66
        },
        "active": {
          "critical": 2,
          "high": 0,
          "medium": 3,
          "low": 0,
          "info": 90
        },
        "passive": {
          "critical": 0,
          "high": 18,
          "medium": 49,
          "low": 0,
          "info": 0
        }
      },
      "waf": {
        "count": 10,
        "assets": ["128f92aa-85c1-486f-acbf-c1b43e8b33ba", "ec87e3bd-3de2-477c-b52b-b93a70814ed0", "b909c3b2-56e6-40e5-98c1-814fa0b85bb7", "175e40e8-33af-4db3-9617-a3be04103d6f"]
      },
      "cdn": {
        "count": 5,
        "assets": []
      },
      "unique_ipv4": 30,
      "unique_ipv6": 23,
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilit\u00e0 per \"example6.demo\"**\n\nIl dominio \"example6.demo\" presenta una situazione di sicurezza variata...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"example6.demo\"**\n\nThe domain \"example6.demo\" currently has a varied security situation...",
      "creation_date": "2024-01-17 16:08:42",
      "last_edit": "2024-02-22 15:09:45",
    },
    {
      "idsummary": "69069027-072e-4c37-98e1-edcbb471e840",
      "domain_name": "example7.demo",
      "risk_score": 51,
      "servizi_esposti_score": 99,
      "dataleak_score": 100,
      "rapporto_leak_email_score": 50,
      "spoofing_score": 50,
      "open_ports_score": 1,
      "blacklist_score": 70,
      "vulnerability_score_active": 54,
      "vulnerability_score_passive": 99,
      "certificate_score": 61,
      "n_port": {
        "53": {
          "n": 3
        },
        "80": {
          "n": 68
        },
        "443": {
          "n": 42
        },
        "6667": {
          "n": 9
        },
        "6697": {
          "n": 9
        },
        "8080": {
          "n": 6
        },
        "8800": {
          "n": 21
        }
      },
      "n_cert_attivi": 15,
      "n_cert_scaduti": 18,
      "n_asset": 102,
      "n_similar_domains": 13,
      "email_security": {
        "spoofable": "Spoofing not likely.",
        "dmarc_policy": "none",
        "blacklist_detections": 4,
        "blacklist_total_list": 60,
        "blacklist_detected_list": []
      },
      "n_dataleak": {
        "total": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 977,
          "other_stealer": 11,
          "general_leak": 0
        },
        "resolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 0,
          "other_stealer": 0,
          "general_leak": 0
        },
        "unresolved": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 940,
          "other_stealer": 11,
          "general_leak": 0
        },
        "enumeration": 2
      },
      "n_vulns": {
        "total": {
          "critical": 0,
          "high": 13,
          "medium": 35,
          "low": 0,
          "info": 66
        },
        "active": {
          "critical": 2,
          "high": 0,
          "medium": 3,
          "low": 0,
          "info": 90
        },
        "passive": {
          "critical": 0,
          "high": 18,
          "medium": 49,
          "low": 0,
          "info": 0
        }
      },
      "waf": {
        "count": 10,
        "assets": ["128f92aa-85c1-486f-acbf-c1b43e8b33ba", "ec87e3bd-3de2-477c-b52b-b93a70814ed0", "b909c3b2-56e6-40e5-98c1-814fa0b85bb7", "175e40e8-33af-4db3-9617-a3be04103d6f"]
      },
      "cdn": {
        "count": 5,
        "assets": []
      },
      "unique_ipv4": 30,
      "unique_ipv6": 23,
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilit\u00e0 per \"example7.demo\"**\n\nIl dominio \"example7.demo\" presenta una situazione di sicurezza variata...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"example7.demo\"**\n\nThe domain \"example7.demo\" currently has a varied security situation...",
      "creation_date": "2024-03-07 18:08:41",
      "last_edit": "2024-03-08 14:09:44",
    },
    {
      "idsummary": "e3ee718c-5f9a-4a8d-8b20-23c2ffac9afc",
      "domain_name": "example8.demo",
      "risk_score": 97,
      "servizi_esposti_score": 99,
      "dataleak_score": 100,
      "rapporto_leak_email_score": 50,
      "spoofing_score": 50,
      "open_ports_score": 1,
      "blacklist_score": 70,
      "vulnerability_score_active": 54,
      "vulnerability_score_passive": 99,
      "certificate_score": 61,
      "n_port": {
        "53": {
          "n": 3
        },
        "80": {
          "n": 68
        },
        "443": {
          "n": 42
        },
        "6667": {
          "n": 9
        },
        "6697": {
          "n": 9
        },
        "8080": {
          "n": 6
        },
        "8800": {
          "n": 21
        }
      },
      "n_cert_attivi": 15,
      "n_cert_scaduti": 18,
      "n_asset": 102,
      "n_similar_domains": 13,
      "email_security": {
        "spoofable": "Spoofing not likely.",
        "dmarc_policy": "none",
        "blacklist_detections": 4,
        "blacklist_total_list": 60,
        "blacklist_detected_list": []
      },
      "n_dataleak": {
        "total": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 977,
          "other_stealer": 11,
          "general_leak": 0
        },
        "resolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 0,
          "other_stealer": 0,
          "general_leak": 0
        },
        "unresolved": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 940,
          "other_stealer": 11,
          "general_leak": 0
        },
        "enumeration": 2
      },
      "n_vulns": {
        "total": {
          "critical": 0,
          "high": 13,
          "medium": 35,
          "low": 0,
          "info": 66
        },
        "active": {
          "critical": 2,
          "high": 0,
          "medium": 3,
          "low": 0,
          "info": 90
        },
        "passive": {
          "critical": 0,
          "high": 18,
          "medium": 49,
          "low": 0,
          "info": 0
        }
      },
      "waf": {
        "count": 10,
        "assets": ["128f92aa-85c1-486f-acbf-c1b43e8b33ba", "ec87e3bd-3de2-477c-b52b-b93a70814ed0", "b909c3b2-56e6-40e5-98c1-814fa0b85bb7", "175e40e8-33af-4db3-9617-a3be04103d6f"]
      },
      "cdn": {
        "count": 5,
        "assets": []
      },
      "unique_ipv4": 30,
      "unique_ipv6": 23,
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilit\u00e0 per \"example8.demo\"**\n\nIl dominio \"example8.demo\" presenta una situazione di sicurezza variata...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"example8.demo\"**\n\nThe domain \"example8.demo\" currently has a varied security situation...",
      "creation_date": "2024-03-07 18:08:41",
      "last_edit": "2024-03-08 14:09:44",
    },
    {
      "idsummary": "25911d6e-2d87-442e-8a9f-960c493a94ff",
      "domain_name": "example9.demo",
      "risk_score": 71,
      "servizi_esposti_score": 99,
      "dataleak_score": 100,
      "rapporto_leak_email_score": 50,
      "spoofing_score": 50,
      "open_ports_score": 1,
      "blacklist_score": 70,
      "vulnerability_score_active": 54,
      "vulnerability_score_passive": 99,
      "certificate_score": 61,
      "n_port": {
        "53": {
          "n": 3
        },
        "80": {
          "n": 68
        },
        "443": {
          "n": 42
        },
        "6667": {
          "n": 9
        },
        "6697": {
          "n": 9
        },
        "8080": {
          "n": 6
        },
        "8800": {
          "n": 21
        }
      },
      "n_cert_attivi": 15,
      "n_cert_scaduti": 18,
      "n_asset": 102,
      "n_similar_domains": 13,
      "email_security": {
        "spoofable": "Spoofing not likely.",
        "dmarc_policy": "none",
        "blacklist_detections": 4,
        "blacklist_total_list": 60,
        "blacklist_detected_list": []
      },
      "n_dataleak": {
        "total": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 977,
          "other_stealer": 11,
          "general_leak": 0
        },
        "resolved": {
          "vip": 0,
          "domain_stealer": 0,
          "potential_stealer": 0,
          "other_stealer": 0,
          "general_leak": 0
        },
        "unresolved": {
          "vip": 0,
          "domain_stealer": 1,
          "potential_stealer": 940,
          "other_stealer": 11,
          "general_leak": 0
        },
        "enumeration": 2
      },
      "n_vulns": {
        "total": {
          "critical": 2,
          "high": 13,
          "medium": 35,
          "low": 0,
          "info": 66
        },
        "active": {
          "critical": 2,
          "high": 0,
          "medium": 3,
          "low": 0,
          "info": 90
        },
        "passive": {
          "critical": 0,
          "high": 18,
          "medium": 49,
          "low": 0,
          "info": 0
        }
      },
      "waf": {
        "count": 10,
        "assets": ["128f92aa-85c1-486f-acbf-c1b43e8b33ba", "ec87e3bd-3de2-477c-b52b-b93a70814ed0", "b909c3b2-56e6-40e5-98c1-814fa0b85bb7", "175e40e8-33af-4db3-9617-a3be04103d6f"]
      },
      "cdn": {
        "count": 5,
        "assets": []
      },
      "unique_ipv4": 30,
      "unique_ipv6": 23,
      "summary_text": "**Riepilogo Esecutivo della Vulnerabilit\u00e0 per \"example9.demo\"**\n\nIl dominio \"example9.demo\" presenta una situazione di sicurezza variata...",
      "summary_text_en": "**Executive Summary of Vulnerability for \"example9.demo\"**\n\nThe domain \"example9.demo\" currently has a varied security situation...",
      "creation_date": "2024-03-07 18:08:41",
      "last_edit": "2024-03-08 14:09:44",
    }    
  ]
});

export const state = reactive({ inputValue: '' })